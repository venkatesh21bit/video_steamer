import Image from "next/image";
import Video from "next-video";
import styles from "./page.module.css";
import sample from "/videos/sample.mp4";

export default function Home() {
  return (
   
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Solo Leveling Episode 12</h1>
        <div className={styles.topImage}>
          <Image
            src="/jinwoo.jpg"
            alt="Solo Leveling"
            layout="responsive"
            width={1020}
            height={1080}
            priority
          />
        </div>

        <div className={styles.videoContainer}>
          <Image
            className={styles.sideImage}
            src="/beru.jpg"
            alt="Beru"
            width={300}
            height={500}
            priority
          />
          <Video className={styles.video} src={sample} />
          <Image
            className={styles.sideImage}
            src="/level.jpg"
            alt="Level"
            width={300}
            height={500}
            priority
          />
        </div>
      </main>
    </div>
  );
}