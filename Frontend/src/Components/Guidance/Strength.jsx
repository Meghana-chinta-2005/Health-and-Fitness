import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Strength.css';

const Strength = () => {
  const navigate = useNavigate();

  const strengthTutorials = {
    chest: [
      {
        id: 'c1',
        title: 'Bench Press Tutorial',
        thumbnail: 'https://img.youtube.com/vi/vcBig73ojpE/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/vcBig73ojpE',
        description: 'Master the bench press technique',
        duration: '10:15'
      },
      {
        id: 'c2',
        title: 'Push-Ups Guide',
        thumbnail: 'https://img.youtube.com/vi/IODxDxX7oi4/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/IODxDxX7oi4',
        description: 'Perfect push-up form',
        duration: '8:45'
      },
      {
        id: 'c3',
        title: 'Dumbbell Flyes',
        thumbnail: 'https://img.youtube.com/vi/eozdVDA78K0/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/eozdVDA78K0',
        description: 'Dumbbell flyes for chest development',
        duration: '7:20'
      },
      {
        id: 'c4',
        title: 'Incline Bench Press',
        thumbnail: 'https://img.youtube.com/vi/SrqOu55lrYU/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/SrqOu55lrYU',
        description: 'Upper chest development guide',
        duration: '8:30'
      },
      {
        id: 'c5',
        title: 'Decline Push-Ups',
        thumbnail: 'https://img.youtube.com/vi/SKPab2YC8BE/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/SKPab2YC8BE',
        description: 'Lower chest focus variation',
        duration: '6:45'
      },
      {
        id: 'c6',
        title: 'Cable Crossovers',
        thumbnail: 'https://img.youtube.com/vi/taI4XduLpTk/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/taI4XduLpTk',
        description: 'Cable fly movement pattern',
        duration: '9:20'
      }
    ],
    back: [
      {
        id: 'b1',
        title: 'Deadlift Form Guide',
        thumbnail: 'https://img.youtube.com/vi/r4MzxtBKyNE/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/r4MzxtBKyNE',
        description: 'Perfect deadlift technique',
        duration: '15:30'
      },
      {
        id: 'b2',
        title: 'Pull-Ups Tutorial',
        thumbnail: 'https://img.youtube.com/vi/eGo4IYlbE5g/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/eGo4IYlbE5g',
        description: 'Master the pull-up',
        duration: '12:45'
      },
      {
        id: 'b3',
        title: 'Barbell Rows',
        thumbnail: 'https://img.youtube.com/vi/G8l_8chR5BE/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/G8l_8chR5BE',
        description: 'Proper barbell row technique',
        duration: '9:30'
      },
      {
        id: 'b4',
        title: 'Lat Pulldowns',
        thumbnail: 'https://img.youtube.com/vi/CAwf7n6Luuc/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/CAwf7n6Luuc',
        description: 'Perfect lat pulldown technique',
        duration: '7:45'
      },
      {
        id: 'b5',
        title: 'T-Bar Rows',
        thumbnail: 'https://img.youtube.com/vi/j3Igk5nyZE4/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/j3Igk5nyZE4',
        description: 'T-bar row variations',
        duration: '8:30'
      },
      {
        id: 'b6',
        title: 'Single-Arm Dumbbell Rows',
        thumbnail: 'https://img.youtube.com/vi/pYcpY20QaE8/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/pYcpY20QaE8',
        description: 'Unilateral back training',
        duration: '6:15'
      }
    ],
    legs: [
      {
        id: 'l1',
        title: 'Squat Form Guide',
        thumbnail: 'https://img.youtube.com/vi/bEv6CCg2BC8/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/bEv6CCg2BC8',
        description: 'Master the squat technique',
        duration: '14:20'
      },
      {
        id: 'l2',
        title: 'Romanian Deadlift',
        thumbnail: 'https://img.youtube.com/vi/GZAKFRNtxLY/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/GZAKFRNtxLY',
        description: 'RDL for hamstring development',
        duration: '8:15'
      },
      {
        id: 'l3',
        title: 'Leg Press Tutorial',
        thumbnail: 'https://img.youtube.com/vi/IZxyjW7MPJQ/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/IZxyjW7MPJQ',
        description: 'Proper leg press form',
        duration: '7:45'
      },
      {
        id: 'l4',
        title: 'Bulgarian Split Squats',
        thumbnail: 'https://img.youtube.com/vi/2C-uNgKwPLE/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/2C-uNgKwPLE',
        description: 'Unilateral leg development',
        duration: '9:45'
      },
      {
        id: 'l5',
        title: 'Walking Lunges',
        thumbnail: 'https://img.youtube.com/vi/L8fvypPrzzs/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/L8fvypPrzzs',
        description: 'Dynamic leg exercise guide',
        duration: '7:30'
      },
      {
        id: 'l6',
        title: 'Calf Raises',
        thumbnail: 'https://img.youtube.com/vi/gwLzBJYoWlI/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/gwLzBJYoWlI',
        description: 'Complete calf development',
        duration: '6:20'
      }
    ],
    shoulders: [
      {
        id: 's1',
        title: 'Overhead Press',
        thumbnail: 'https://img.youtube.com/vi/QAQ64hK4Xxs/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/QAQ64hK4Xxs',
        description: 'Master the overhead press',
        duration: '11:30'
      },
      {
        id: 's2',
        title: 'Lateral Raises',
        thumbnail: 'https://img.youtube.com/vi/3VcKaXpzqRo/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/3VcKaXpzqRo',
        description: 'Perfect lateral raise form',
        duration: '6:45'
      },
      {
        id: 's3',
        title: 'Face Pulls',
        thumbnail: 'https://img.youtube.com/vi/rep-qVOkqgk/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/rep-qVOkqgk',
        description: 'Rear delt development',
        duration: '8:20'
      },
      {
        id: 's4',
        title: 'Arnold Press',
        thumbnail: 'https://img.youtube.com/vi/6Z15_WdXmVw/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/6Z15_WdXmVw',
        description: 'Advanced shoulder press variation',
        duration: '8:45'
      },
      {
        id: 's5',
        title: 'Front Raises',
        thumbnail: 'https://img.youtube.com/vi/sxqWxnw6-mU/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/sxqWxnw6-mU',
        description: 'Front delt isolation guide',
        duration: '5:30'
      },
      {
        id: 's6',
        title: 'Upright Rows',
        thumbnail: 'https://img.youtube.com/vi/VL0tqVkXMhE/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/VL0tqVkXMhE',
        description: 'Complete upright row tutorial',
        duration: '7:15'
      }
    ],
    arms: [
      {
        id: 'a1',
        title: 'Bicep Curl Guide',
        thumbnail: 'https://img.youtube.com/vi/ykJmrZ5v0Oo/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/ykJmrZ5v0Oo',
        description: 'Perfect bicep curl form',
        duration: '9:15'
      },
      {
        id: 'a2',
        title: 'Tricep Extensions',
        thumbnail: 'https://img.youtube.com/vi/nRiJVZDpdL0/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/nRiJVZDpdL0',
        description: 'Master tricep extensions',
        duration: '7:30'
      },
      {
        id: 'a3',
        title: 'Hammer Curls',
        thumbnail: 'https://img.youtube.com/vi/zC3nLlEvin4/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/zC3nLlEvin4',
        description: 'Proper hammer curl technique',
        duration: '6:45'
      },
      {
        id: 'a4',
        title: 'Preacher Curls',
        thumbnail: 'https://img.youtube.com/vi/fIWP-FRFNU0/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/fIWP-FRFNU0',
        description: 'Isolated bicep training',
        duration: '8:00'
      },
      {
        id: 'a5',
        title: 'Diamond Push-Ups',
        thumbnail: 'https://img.youtube.com/vi/J0DnG1_S92I/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/J0DnG1_S92I',
        description: 'Bodyweight tricep focus',
        duration: '6:30'
      },
      {
        id: 'a6',
        title: 'Concentration Curls',
        thumbnail: 'https://img.youtube.com/vi/Jvj2wV0vOYU/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/Jvj2wV0vOYU',
        description: 'Peak contraction bicep work',
        duration: '7:45'
      }
    ]
  };

  const [selectedVideo, setSelectedVideo] = React.useState(null);

  return (
    <div className="strength-tutorials-page">
      <h2>Strength Training Tutorials</h2>
      
      {selectedVideo ? (
        <div className="video-player-container">
          <div className="video-player">
            <iframe
              src={selectedVideo.videoUrl}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <button 
            className="close-video-btn"
            onClick={() => setSelectedVideo(null)}
          >
            Close Video
          </button>
        </div>
      ) : (
        <div className="strength-categories">
          {Object.entries(strengthTutorials).map(([category, tutorials]) => (
            <div key={category} className="category-section">
              <h3 className="category-title">{category.toUpperCase()} EXERCISES</h3>
              <div className="scrollable-row">
                {tutorials.map((tutorial) => (
                  <div 
                    key={tutorial.id} 
                    className="tutorial-card"
                    onClick={() => setSelectedVideo(tutorial)}
                  >
                    <div className="thumbnail-container">
                      <img 
                        src={tutorial.thumbnail} 
                        alt={tutorial.title}
                        loading="lazy"
                      />
                      <span className="duration">{tutorial.duration}</span>
                    </div>
                    <div className="tutorial-info">
                      <h3>{tutorial.title}</h3>
                      <p>{tutorial.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button className="back-to-categories" onClick={() => navigate('/guidance/video-tutorials')}>
          Back to categories
        </button>
        </div>
      )}
      
      
    </div>
  );
};

export default Strength;