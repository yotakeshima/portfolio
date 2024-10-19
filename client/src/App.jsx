import { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';

function App() {
  const [activeTab, setActiveTab] = useState(-1);
  const profileRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  // const projectsRef = useRef(null);
  // const contactRef = useRef(null);

  const sections = [aboutRef, experienceRef];

  const handleTabChange = (index) => {
    setActiveTab(index);
    sections[index]?.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let tabInView = false;
        entries.forEach((entry) => {
          const index = sections.findIndex(
            (ref) => ref.current === entry.target
          );
          if (entry.isIntersecting && index !== -1) {
            setActiveTab(index);
            tabInView = true;
          }
          if (entry.isIntersecting && entry.target === profileRef.current) {
            setActiveTab(-1);
            tabInView = false;
          }
        });

        if (!tabInView) {
          setActiveTab(-1);
        }
      },
      { threshold: 0.8 }
    );

    sections.forEach(
      (section) => section.current && observer.observe(section.current)
    );
    if (profileRef.current) observer.observe(profileRef.current);

    return () => {
      sections.forEach(
        (section) => section.current && observer.unobserve(section.current)
      );
      if (profileRef.current) observer.unobserve(profileRef.current);
    };
  }, []);

  return (
    <div>
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
      <div ref={profileRef}>
        <Profile />
      </div>
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
    </div>
  );
}

export default App;
