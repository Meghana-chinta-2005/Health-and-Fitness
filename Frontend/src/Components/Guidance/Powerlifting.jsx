import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Powerlifting.css';

const Powerlifting = () => {
  const navigate = useNavigate();

  const powerliftingTutorials = [
    {
      id: 1,
      title: 'Perfect Bench Press Tutorial',
      thumbnail: 'https://img.youtube.com/vi/vcBig73ojpE/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/vcBig73ojpE',
      description: 'Master the bench press technique',
      duration: '10:15'
    },
    {
      id: 2,
      title: 'Proper Squat Form Guide',
      thumbnail: 'https://img.youtube.com/vi/bEv6CCg2BC8/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/bEv6CCg2BC8',
      description: 'Learn the perfect squat form',
      duration: '12:45'
    },
    {
      id: 3,
      title: 'Deadlift Masterclass',
      thumbnail: 'https://img.youtube.com/vi/r4MzxtBKyNE/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/r4MzxtBKyNE',
      description: 'Perfect your deadlift technique',
      duration: '15:30'
    },
    {
      id: 4,
      title: 'Advanced Bench Press Tips',
      thumbnail: 'https://dannorthfitness.com/wp-content/uploads/2020/12/bencharch.jpg',
      videoUrl: 'https://www.youtube.com/embed/GIx1rX7Qtmk',
      description: 'Advanced techniques for bench press',
      duration: '8:20'
    },
    {
      id: 5,
      title: 'Competition Squat Guide',
      thumbnail: 'https://i.ytimg.com/vi/pSbpl3i3TRI/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/QR7HuskyQ4Q',
      description: 'Competition-ready squat form',
      duration: '11:15'
    },
    {
      id: 6,
      title: 'Sumo Deadlift Tutorial',
      thumbnail: 'https://img.youtube.com/vi/XsrD5y8EIKU/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/XsrD5y8EIKU',
      description: 'Master the sumo deadlift variation',
      duration: '13:45'
    }
  ];

  const [selectedVideo, setSelectedVideo] = React.useState(null);

  return (
    <div className="powerlifting-tutorials-page">
      <h2>Powerlifting Fundamentals</h2>
      
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
        <>
          <div className="tutorials-grid">
            {powerliftingTutorials.map((tutorial) => (
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
          <div className="button-container">
            <button className="back-to-categories" onClick={() => navigate('/guidance/video-tutorials')}>
              Back to categories
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Powerlifting;