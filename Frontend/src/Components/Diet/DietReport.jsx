// DietReport.jsx (updated)
import React from 'react';
import './DietReport.css';

const DietReport = () => {
  const logs = JSON.parse(localStorage.getItem('foodLogs')) || [];
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  const weeklyLogs = logs.filter((log) => {
    const logDate = new Date(log.date);
    return logDate >= oneWeekAgo;
  });

  const mealCount = weeklyLogs.reduce((acc, log) => {
    acc[log.time] = (acc[log.time] || 0) + 1;
    return acc;
  }, {});

  const handleShare = () => {
    const reportText = `My Weekly Diet Report:\n${Object.entries(mealCount)
      .map(([meal, count]) => `${meal}: Logged ${count} times`)
      .join('\n')}\n\nLogged Meals:\n${weeklyLogs
      .map((log) => `${log.time}: ${log.description} (${log.date})`)
      .join('\n')}`;

    if (navigator.share) {
      navigator.share({
        title: 'My Weekly Diet Report',
        text: reportText,
      });
    } else {
      alert('Sharing is not supported on this device. Here’s your report:\n\n' + reportText);
    }
  };

  return (
    <div className="diet-report-page">
      <section className="report-header">
        <h1>Weekly Diet Report</h1>
        <p className="report-intro">Here’s a summary of your food intake over the past week.</p>
        <button
          className="view-diet-btn share-report-btn"
          onClick={handleShare}
          aria-label="Share Weekly Diet Report"
        >
          Share Report
        </button>
      </section>
      <section className="meal-count-section">
        <h2 className="section-title">Meal Summary</h2>
        <div className="diet-grid">
          {Object.entries(mealCount).map(([meal, count], index) => (
            <div key={index} className="diet-card">
              <div className="diet-content">
                <h3>{meal}</h3>
                <p>Logged {count} times this week.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="logged-meals-section">
        <h2 className="section-title">Logged Meals</h2>
        <div className="diet-grid">
          {weeklyLogs.length > 0 ? (
            weeklyLogs.map((log, index) => (
              <div key={index} className="diet-card">
                <div className="diet-content">
                  <h3>{log.time}</h3>
                  <p>{log.description}</p>
                  <p className="log-date">
                    <small>{log.date}</small>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-logs">No meals logged in the past week.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default DietReport;