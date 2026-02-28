import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Beginner.css';

const Beginner = () => {
  const navigate = useNavigate();

  const beginnerTutorials = [
    {
      id: 1,
      title: 'Perfect Push-Up Tutorial',
      thumbnail: 'https://img.youtube.com/vi/IODxDxX7oi4/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/IODxDxX7oi4',
      description: 'Learn proper push-up form for beginners',
      duration: '8:45'
    },
    {
      id: 2,
      title: 'Pull-Up for Beginners',
      thumbnail: 'https://img.youtube.com/vi/rmdn5X_KLkY/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/rmdn5X_KLkY',
      description: 'Progressive steps to master pull-ups',
      duration: '12:30'
    },
    {
      id: 3,
      title: 'Bodyweight Squat Guide',
      thumbnail: 'https://media.istockphoto.com/id/1149242776/photo/mature-strong-man-lifting-weights-at-cross-training.jpg?s=612x612&w=0&k=20&c=pqhlsg9QHdSccbjzL0aVTbELRibJj6levS9N7jKDHy0=',
      videoUrl: 'https://www.youtube.com/embed/YaXPRqUwItQ',
      description: 'Master the basic squat movement',
      duration: '10:15'
    },
    {
      id: 4,
      title: 'Dips for Beginners',
      thumbnail: 'https://www.littleblokefitness.com.au/cdn/shop/articles/be49a55724c2b7751ff6a78a950dad5f_26513c59-f1d9-40c2-9ed2-3fd1ee83f3ba_1600x.jpg?v=1738283316',
      videoUrl: 'https://www.youtube.com/embed/2z8JmcrW-As',
      description: 'Learn proper dip technique',
      duration: '7:20'
    },
    {
      id: 5,
      title: 'Plank Tutorial',
      thumbnail: 'https://img.youtube.com/vi/ASdvN_XEl_c/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/ASdvN_XEl_c',
      description: 'Perfect your plank form',
      duration: '6:45'
    },
    {
      id: 6,
      title: 'Beginner Burpee Guide',
      thumbnail: 'https://img.youtube.com/vi/dZgVxmf6jkA/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/dZgVxmf6jkA',
      description: 'Learn the basic burpee movement',
      duration: '9:00'
    }
  ];

  const [selectedVideo, setSelectedVideo] = React.useState(null);

  return (
    <div className="beginner-tutorials-page">
      <h2>Beginner Bodyweight Exercises</h2>
      
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
        <div className="tutorials-grid">
          {beginnerTutorials.map((tutorial) => (
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
      )}
      
      
    </div>
  );
};

export default Beginner;