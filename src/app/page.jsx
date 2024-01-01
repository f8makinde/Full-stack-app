import styles from "./home.module.css"
import Image from "next/image"
const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thoughts Agency</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aliquam distinctio eos dolore.</p>
      <div className={styles.buttons}>
           <button  className={styles.button}>Learn More</button> 
           <button  className={styles.button}>Contact</button> 
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="brand-img" className={styles.brandImg} fill/>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" fill className={styles.heroImg} />
    </div>
  </div>;
};

export default Home;