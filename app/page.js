// app/page.js
import Header from '../components/Header';
import styles from '../styles/globals.css'; // Import CSS module for styles

const Home = () => {
  return (
    <div >
      <Header />
      <div class="container">
  <h1 className={styles.title}>Welcome to My Portfolio</h1>
  <p>Here, you will find a collection of my projects and ideas.
I believe in the power of creativity to transform visions into reality.
Lets connect and explore how we can collaborate!</p>
</div>
       
      
    </div>
  );
};

export default Home;
