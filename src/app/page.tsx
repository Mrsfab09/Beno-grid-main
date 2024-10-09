import { Item } from "./components/Item/Item";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Item
        title={
          <p className="lgText">
            Create and schedule content <em>quicker.</em>
          </p>
        }
        imageWidth={230}
        imageHeight={110}
        imageSrc="/assets/images/illustration-create-post.webp"
        imageAlt="Create post"
      />
      <Item
        title={
          <p className="xlgText">
            Social Media <span className={styles.emphasis}>10x </span>
            <em>Faster</em> with AI
          </p>
        }
        subtitle={<p className="smText">Over 4,000 5-star reviews</p>}
        imageSrc="/assets/images/illustration-five-stars.webp"
        imageWidth={250}
        imageHeight={40}
        imageAlt="illustration-five-stars"
      />
      <Item
        title="Schedule to social media."
        subtitle={
          <p className="smText">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        }
        imageSrc="/assets/images/illustration-schedule-posts.webp"
        imageWidth={350}
        imageHeight={410}
        imageAlt="illustration-schedule-posts"
      />
      <Item
        title="Write your content using AI"
        imageSrc="/assets/images/illustration-ai-content.webp"
        imageWidth={400}
        imageHeight={300}
        imageAlt="illustration-ai-content"
      />
      <Item
        title=""
        imageSrc="/assets/images/illustration-multiple-platforms.webp"
        imageWidth={800}
        imageHeight={80}
        subtitle={
          <p className="medText">Manage multiple accounts and platforms.</p>
        }
        imagePosition="top"
        imageAlt="illustration-multiple-platforms"
      />
      <Item
        title=""
        subtitle={
          <p className="medText">Maintain a consistent posting schedule.</p>
        }
        imageSrc="/assets/images/illustration-consistent-schedule.webp"
        imageWidth={400}
        imageHeight={200}
        imageAlt="illustration-consistent-schedule"
      />
      <Item
        title=""
        subtitle={
          <>
            <span className="xlgText">{">"}56%</span>
            <p className="smText">faster audience growth</p>
          </>
        }
        imageSrc="/assets/images/illustration-audience-growth.webp"
        imageWidth={400}
        imageHeight={110}
        imageAlt="illustration-audience-growth"
      />
      <Item
        title="Grow followers with non-stop content."
        imageSrc="/assets/images/illustration-grow-followers.webp"
        imageWidth={400}
        imageHeight={250}
        imageAlt="illustration-grow-followers"
      />
    </div>
  );
}
