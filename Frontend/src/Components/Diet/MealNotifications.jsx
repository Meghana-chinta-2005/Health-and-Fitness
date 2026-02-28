// MealNotifications.jsx
import React, { useState } from 'react';
import './MealNotifications.css';

const MealNotifications = () => {
  const [notification, setNotification] = useState({ time: '', meal: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotification((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }

    const [hours, minutes] = notification.time.split(':');
    const now = new Date();
    const notificationTime = new Date();
    notificationTime.setHours(hours, minutes, 0, 0);

    const timeDiff = notificationTime.getTime() - now.getTime();

    if (timeDiff > 0) {
      // Schedule the browser notification
      setTimeout(() => {
        new Notification(`Time for ${notification.meal}!`, {
          body: `Don't forget to eat your ${notification.meal.toLowerCase()}.`,
        });
        // Remove the notification from localStorage after it fires
        const existingNotifications = JSON.parse(localStorage.getItem('mealNotifications')) || [];
        const updatedNotifications = existingNotifications.filter(
          (notif) => notif.time !== notification.time || notif.meal !== notification.meal
        );
        localStorage.setItem('mealNotifications', JSON.stringify(updatedNotifications));
      }, timeDiff);

      // Store the notification in localStorage
      const newNotification = {
        meal: notification.meal,
        time: notification.time,
        timestamp: notificationTime.getTime(), // Store the timestamp for calculating remaining time
      };
      const existingNotifications = JSON.parse(localStorage.getItem('mealNotifications')) || [];
      existingNotifications.push(newNotification);
      localStorage.setItem('mealNotifications', JSON.stringify(existingNotifications));

      alert(`Reminder set for ${notification.meal} at ${notification.time}!`);
    } else {
      alert('Please select a future time.');
    }
  };

  return (
    <div>
      <h1>Meal Notifications</h1>
      <p className="diet-intro">Set reminders for your meals.</p>
      <form onSubmit={handleSubmit} className="meal-notifications-form">
        <div className="form-group">
          <label>
            Meal:
            <select name="meal" value={notification.meal} onChange={handleChange}>
              <option value="">Select Meal</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Reminder Time:
            <input
              type="time"
              name="time"
              value={notification.time}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit" className="view-diet-btn">
          Set Reminder
        </button>
      </form>
    </div>
  );
};

export default MealNotifications;