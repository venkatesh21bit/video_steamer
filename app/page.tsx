"use client";

import Image from "next/image";
import Video from "next-video";
import styles from "./page.module.css";
import video from "/videos/video.mp4";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [hasPaid, setHasPaid] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if the user has paid (this is a placeholder, implement your own logic)
    //const paymentStatus = localStorage.getItem("hasPaid");
    //if (paymentStatus === "true") {
      setHasPaid(true);
    //} else {
     //router.push("/payment");
    //}
      
  }, [router]);

  if (!hasPaid) {
    return null; // Render nothing if the user hasn't paid
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.heading}>Solo Leveling Episode 12 Preview</h1>
        <div className={styles.topImage}>
          <Image
            src="/jinwoo.jpg"
            alt="Solo Leveling"
            layout="responsive"
            width={1920}
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
          
          <Video className={styles.video} src={video} />
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