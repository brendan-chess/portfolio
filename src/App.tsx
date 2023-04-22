import styles from "./styles/App.module.css";
import profile from "./images/profile.jpg";
import gitHub from "./images/github.png";
import instagram from "./images/instagram.png";
import linkedIn from "./images/linkedin.png";
import email from "./images/email.png";
import minesweeperLanding from "./images/minesweeper_landing.png";
import minesweeperEasy from "./images/minesweeper_easy.png";
import minesweeperMedium from "./images/minesweeper_medium.png";
import rtHome from "./images/rt_home.png";
import rtMenu from "./images/rt_menu.png";
import rtCart from "./images/rt_cart.png";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.profilePicture} src={profile} />
        <div className={styles.title}>Hi, I'm Brendan</div>
      </div>

      <div className={styles.subTitle}>I'm a Full-Stack Web Developer</div>

      <div className={styles.contact}>
        <a href="https://github.com/brendan-chess" target="_blank">
          <img src={gitHub} />
        </a>
        <a href="https://www.instagram.com/brendan_chess/" target="_blank">
          <img src={instagram} />
        </a>
        <a href="https://www.linkedin.com/in/brendan-chess/" target="_blank">
          <img src={linkedIn} />
        </a>
        <a href="mailto:brendanchess25@gmail.com">
          <img src={email} />
        </a>
      </div>

      <div className={styles.divider} />

      <div className={styles.qualifications}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>My Tech Stack</div>
          <div className={styles.divider} />
          <div>React, TypeScript</div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>My Education</div>
          <div className={styles.divider} />
          <div>
            2023: Arizona State University - Bachelor of Science in Computer
            Science
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>My Work Experience</div>
          <div className={styles.divider} />
          <div>2021: Software Engineer Intern at RealTime Sports</div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>My Projects:</div>

        <div className={styles.divider} />

        <div className={styles.project}>
          <div className={styles.projectDetails}>
            <a
              href="https://brendan-chess.github.io/react-ts-store/"
              target="_blank"
            >
              Roast & Toast Coffee Shop
            </a>
            <div>Tech Stack: React, TypeScript</div>
            <div>
              About: I wanted to design a website for a ficticious high quality
              coffee shop. I created this app to learn how to program a cart
              system and to demonstrate how I would go about styling a website
              to express the business's identity.
            </div>
            <a
              href="https://github.com/brendan-chess/react-ts-store"
              target="_blank"
            >
              View on GitHub
            </a>
          </div>
          <div className={styles.projectImages}>
            <div>
              <img src={rtHome} />
            </div>
            <div>
              <img src={rtMenu} />
            </div>
            <div>
              <img src={rtCart} />
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.project}>
          <div className={styles.projectDetails}>
            <a href="https://minesweepergame.io/" target="_blank">
              minesweepergame.io
            </a>

            <div>Tech Stack: React, JavaScript</div>

            <div>
              About: I challenged myself to program Minesweeper since it is one
              of my favorite games. I wanted my version to look nice and be
              playable on the internet with no ads.
            </div>

            <a
              href="https://github.com/brendan-chess/minesweeper"
              target="_blank"
            >
              View on GitHub
            </a>
          </div>
          <div className={styles.projectImages}>
            <div>
              <img src={minesweeperLanding} />
            </div>
            <div>
              <img src={minesweeperEasy} />
            </div>
            <div>
              <img src={minesweeperMedium} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
