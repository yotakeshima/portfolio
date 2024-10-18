import { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import AboutMe from './components/AboutMe';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const profileRef = useRef(null);
  const aboutRef = useRef(null);
  const sections = [aboutRef, profileRef];

  const handleTabChange = (index) => {
    setActiveTab(index);
    sections[index].current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex(
              (ref) => ref.current === entry.target
            );
            if (index !== -1) {
              setActiveTab(index);
            }
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach((section) => observer.observe(section.current));
    return () => {
      sections.forEach((section) => observer.unobserve(section.current));
    };
  }, [sections]);

  return (
    <div>
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
      <div ref={profileRef} style={{ paddingTop: '100px' }}>
        <Profile />
      </div>
      <div ref={aboutRef} style={{ paddingTop: '100px' }}>
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
