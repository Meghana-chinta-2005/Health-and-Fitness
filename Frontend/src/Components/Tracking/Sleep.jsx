import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
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
      const response = await api.get('/sleep');
      setSleepLog(response.data);
    } catch (error) {
      console.error('Error fetching sleep history:', error);
    }
  };

  const calculateSleepQuality = (bedTime, wakeTime) => {
    // ... (logic stays the same)
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
      const response = await api.post('/sleep', newEntry);

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