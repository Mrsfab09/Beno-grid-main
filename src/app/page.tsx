import { Item } from "./components/Item/Item";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Item
        title="Create and schedule content quicker."
        imageSrc="/assets/images/illustration-create-post.webp"
        imageAlt="Create post"
        imageWidth={230}
        imageHeight={110}
        subtitle=""
      />
      <Item
        imageAlt=""
        title=""
        subtitle={
          <p className="xlgText">
            Social Media <span className={styles.emphasis}>10x </span>
            <em>Faster</em> with AI
          </p>
        }
        imageSrc="/assets/images/illustration-five-stars.webp"
        imageWidth={250}
        imageHeight={40}
      />
      <Item
        title="Schedule to social media."
        imageSrc="/assets/images/illustration-schedule-posts.webp"
        imageWidth={350}
        imageHeight={410}
        imageAlt=""
        subtitle="Optimize post timings to publish content at the perfect time for your audience."
      />
      <Item
        title="Write your content using AI"
        imageSrc="/assets/images/illustration-ai-content.webp"
        imageWidth={400}
        imageHeight={300}
        imageAlt=""
      />
      <Item
        title=""
        imageSrc="/assets/images/illustration-multiple-platforms.webp"
        imageWidth={800}
        imageHeight={80}
        subtitle={
          <p className="medText">Manage multiple accounts and platforms.</p>
        }
        imageAlt=""
      />
      <Item
        title=""
        imageSrc="/assets/images/illustration-consistent-schedule.webp"
        imageWidth={400}
        imageHeight={200}
        subtitle={
          <p className="medText">Maintain a consistent posting schedule.</p>
        }
        imageAlt=""
      />
      <Item
        title=""
        subtitle={
          <>
            <span className="xlgText">56%</span>
            faster audience growth
          </>
        }
        imageSrc="/assets/images/illustration-audience-growth.webp"
        imageWidth={400}
        imageHeight={110}
        imageAlt=""
      />
      <Item
        imageAlt=""
        imageSrc="/assets/images/illustration-grow-followers.webp"
        imageWidth={400}
        imageHeight={250}
        title="Grow followers with non-stop content."
      />
    </div>
  );
}
