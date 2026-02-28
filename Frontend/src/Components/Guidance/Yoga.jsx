import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Beginner.css';

const Yoga = () => {
  const navigate = useNavigate();

  const yogaTutorials = [
    {
      id: 1,
      title: 'Sun Salutation (Surya Namaskar)',
      thumbnail: 'https://img.youtube.com/vi/8AakYeM23sI/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/8AakYeM23sI',
      description: 'Learn the complete Sun Salutation sequence',
      duration: '15:30'
    },
    {
      id: 2,
      title: 'Downward Dog (Adho Mukha Svanasana)',
      thumbnail: 'https://img.youtube.com/vi/EC7RGJ975iM/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/EC7RGJ975iM',
      description: 'Perfect your downward facing dog pose',
      duration: '8:45'
    },
    {
      id: 3,
      title: 'Warrior Poses (Virabhadrasana)',
      thumbnail: 'https://img.youtube.com/vi/k4qaVoAbeHM/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/k4qaVoAbeHM',
      description: 'Master the warrior pose sequence',
      duration: '12:20'
    },
    {
      id: 4,
      title: 'Child\'s Pose (Balasana)',
      thumbnail: 'https://img.youtube.com/vi/2MJGg-dUKh0/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/2MJGg-dUKh0',
      description: 'Learn the restorative child\'s pose',
      duration: '6:15'
    },
    {
      id: 5,
      title: 'Tree Pose (Vrksasana)',
      thumbnail: 'https://img.youtube.com/vi/wdln9qWYloU/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/wdln9qWYloU',
      description: 'Improve your balance with tree pose',
      duration: '7:30'
    },
    {
      id: 6,
      title: 'Cobra Pose (Bhujangasana)',
      thumbnail: 'https://img.youtube.com/vi/fOdrW7nf9gw/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/fOdrW7nf9gw',
      description: 'Master the back-bending cobra pose',
      duration: '9:15'
    }
  ];

  const [selectedVideo, setSelectedVideo] = React.useState(null);

  return (
    <div className="beginner-tutorials-page">
      <h2>Basic Yoga Asanas</h2>
      
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
          {yogaTutorials.map((tutorial) => (
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

export default Yoga;