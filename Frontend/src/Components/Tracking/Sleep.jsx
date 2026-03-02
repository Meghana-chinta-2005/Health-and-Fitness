import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaMoon, FaBed, FaClock, FaChevronLeft, FaTrash } from 'react-icons/fa';
import './Sleep.css';

const Sleep = () => {
  const navigate = useNavigate();
  const [sleepData, setSleepData] = useState({
    bedTime: '',
    wakeTime: '',
  });
  const [sleepLog, setSleepLog] = useState([]);
  const [sleepQuality, setSleepQuality] = useState({
    score: 0,
    suggestions: [],
    duration: 0
  });

  useEffect(() => {
    fetchSleepHistory();
  }, []);

  const fetchSleepHistory = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/tracking/sleep', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSleepLog(response.data);
    } catch (error) {
      console.error('Error fetching sleep history:', error);
    }
  };

  const calculateSleepQuality = (bedTime, wakeTime) => {
    if (!bedTime || !wakeTime) return { score: 0, suggestions: [], duration: 0 };

    const start = new Date(`2000/01/01 ${bedTime}`);
    let end = new Date(`2000/01/01 ${wakeTime}`);
    if (end < start) end.setDate(end.getDate() + 1);

    let duration = (end - start) / (1000 * 60 * 60);
    let score = 0;
    const suggestions = [];

    if (duration >= 7 && duration <= 9) {
      score = 10;
      suggestions.push("Optimal sleep duration achieved!");
    } else if (duration >= 6 && duration < 7) {
      score = 7;
      suggestions.push("Try to get 7-9 hours of sleep for better rest.");
    } else if (duration > 9) {
      score = 6;
      suggestions.push("You might be oversleeping. Aim for 7-9 hours.");
    } else {
      score = 4;
      suggestions.push("Try to get at least 7 hours of sleep.");
    }

    const bedHour = parseInt(bedTime.split(':')[0]);
    if (bedHour < 22 && bedHour > 2) {
      score -= 1;
      suggestions.push("Consider sleeping between 10 PM and 11 PM.");
    }

    return {
      score: Math.max(1, Math.min(10, score)),
      suggestions,
      duration: duration.toFixed(1)
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const quality = calculateSleepQuality(
      sleepData.bedTime,
      sleepData.wakeTime
    );

    const newEntry = {
      bedTime: sleepData.bedTime,
      wakeTime: sleepData.wakeTime,
      date: new Date().toLocaleDateString(),
      quality: quality.score,
      hours: parseFloat(quality.duration)
    };

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:5000/api/tracking/sleep', newEntry, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setSleepQuality(quality);
      setSleepLog(prev => [response.data, ...prev]);
      setSleepData({ bedTime: '', wakeTime: '' }); // Reset form
    } catch (error) {
      console.error('Error saving sleep:', error);
      alert('Failed to save sleep data. Please try again.');
    }
  };

  const handleResetHistory = () => {
    alert('Clear History is currently disabled. Sleep data is saved in MongoDB for your health analysis.');
  };

  const getQualityColor = (score) => {
    if (score >= 8) return '#4ade80';
    if (score >= 6) return '#fbbf24';
    return '#ef4444';
  };

  return (
    <div className="sleep-page">
      <div className="sleep-container">
        <div className="sleep-header">
          <h1><FaMoon /> Sleep Tracker</h1>
          <p>Monitor your sleep duration</p>
        </div>

        <form onSubmit={handleSubmit} className="sleep-form">
          <div className="form-grid">
            <div className="input-group">
              <label><FaBed /> Bedtime</label>
              <input
                type="time"
                required
                value={sleepData.bedTime}
                onChange={(e) => setSleepData({ ...sleepData, bedTime: e.target.value })}
              />
            </div>

            <div className="input-group">
              <label><FaClock /> Wake Time</label>
              <input
                type="time"
                required
                value={sleepData.wakeTime}
                onChange={(e) => setSleepData({ ...sleepData, wakeTime: e.target.value })}
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">Record Sleep</button>
        </form>

        {sleepQuality.score > 0 && (
          <div className="sleep-quality-results">
            <h2>Sleep Analysis</h2>
            <div className="quality-score" style={{
              backgroundColor: `${getQualityColor(sleepQuality.score)}22`,
              borderColor: getQualityColor(sleepQuality.score)
            }}>
              <div className="score-details">
                <span className="score-label">Sleep Rating</span>
                <span className="score-value">{sleepQuality.score}/10</span>
              </div>
              <div className="duration-details">
                <span className="duration-label">Duration</span>
                <span className="duration-value">{sleepQuality.duration}h</span>
              </div>
            </div>

            {sleepQuality.suggestions.length > 0 && (
              <div className="suggestions">
                <h3>Recommendations</h3>
                <ul>
                  {sleepQuality.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="sleep-log">
          <div className="sleep-log-header">
            <h2>Sleep History</h2>
            {sleepLog.length > 0 && (
              <button className="reset-btn" onClick={handleResetHistory}>
                <FaTrash /> Clear History
              </button>
            )}
          </div>
          <div className="log-entries">
            {sleepLog.map((entry) => (
              <div key={entry.id} className="log-entry">
                <div className="entry-header">
                  <span className="entry-date">{entry.date}</span>
                  <span className="entry-duration">{entry.duration}h</span>
                </div>
                <div className="entry-details">
                  <span>Bed: {entry.bedTime}</span>
                  <span>Wake: {entry.wakeTime}</span>
                  <span className="quality-badge"
                    style={{ backgroundColor: getQualityColor(entry.quality) }}>
                    Rating: {entry.quality}/10
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="back-button" onClick={() => navigate('/tracking')}>
          <FaChevronLeft /> Back to Tracking
        </button>
      </div>
    </div>
  );
};

export default Sleep;