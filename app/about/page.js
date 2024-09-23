// app/about/page.js
import Header from '../../components/Header';
import styles from '../../styles/globals.css'; // Import CSS module for styles

const About = () => {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <div className={styles.text}>
          <p>Hi, I am Mina Adel, a junior developer.</p>
          <p>Front-end React.js developer.</p>
        </div>
        <div>
          <p>Check out my CV:</p>
          <a href="cv.pdf" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

