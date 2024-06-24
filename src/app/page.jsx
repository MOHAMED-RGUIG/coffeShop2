import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/images/hero.png";
import Products from "./(dynamic)/products/page";
import Blog from "./(dynamic)/blog/page";
import Contact from "./(static)/contact/page";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function Home() {
  return (
    <div className="container">
      <div className={`row ${styles.container}`}>
        <div className={`col-md-6 ${styles.col}`}>
          <h1 className={styles.title}>Your best LAVAZZA coffee shop</h1>
          <p className={styles.description}>
            The company operates a number of retail coffee shops (Il Caffè di Roma and Espression). The shops offer traditional coffee drinks as well as whole bean and ground coffee for home use.
          </p>
          <button className={`btn btn-primary ${styles.button}`}>Shop Now</button>
        </div>
        <div className={`col-md-6 ${styles.col}`}>
          <Image className={styles.img} src={Hero} alt="LAVAZZA" width={800} height={600} />
        </div>
      </div>
      <Products limit={3} />
      <Blog limit={3} />
      <Contact />
    </div>
  );
}
