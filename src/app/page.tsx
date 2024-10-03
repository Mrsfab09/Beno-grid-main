// import { Container } from "./components/Container/Container";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className="lgText">
          Create and schedule content <em>quicker.</em>
        </div>
        <Image
          src="/assets/images/illustration-create-post.webp"
          width={500}
          height={500}
          alt="Create post"
        ></Image>
      </div>
      <div className={styles.item}>
        <p className="xlgText">
          Social Media <span className={styles.emphasis}>10x</span>
          <em>Faster</em>with AI
        </p>
        <Image
          src="/assets/images/illustration-five-stars.webp"
          width={500}
          height={200}
          alt=""
        ></Image>
        <p className="smText">Over 4,000 5-star reviews</p>
      </div>
      <div className={styles.item}>
        <p className="lgText">Shedule to social media.</p>
        <Image
          src="/assets/images/illustration-schedule-posts.webp"
          width={500}
          height={500}
          alt=""
        ></Image>
        <p className="smText">
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </div>
      <div className={styles.item}>
        <p className="lgText">Write your content using AI</p>
        <Image
          src="/assets/images/illustration-ai-content.webp"
          width={500}
          height={200}
          alt=""
        ></Image>
      </div>
      <div className={styles.item}>
        <Image
          src="/assets/images/illustration-multiple-platforms.webp"
          width={500}
          height={200}
          alt=""
        ></Image>
        <p className="medText">Manage multiple accounts and platforms.</p>
      </div>
      <div className={styles.item}>
        <p className="medText">Maintain a consistent posting schedule.</p>
        <Image
          src="/assets/images/illustration-consistent-schedule.webp"
          width={500}
          height={200}
          alt=""
        ></Image>
      </div>
      <div className={styles.item}>
        <p className="smText">
          <span className="xlgText">56%</span>
          faster audience growth
        </p>
        <Image
          src="/assets/images/illustration-audience-growth.webp"
          width={500}
          height={200}
          alt=""
        ></Image>
      </div>
      <div className={styles.item}>
        <Image
          src="/assets/images/illustration-grow-followers.webp"
          width={500}
          height={200}
          alt=""
        ></Image>
        <p className="lgText">Grow followers with non-stop content.</p>
      </div>
    </div>
  );
}
