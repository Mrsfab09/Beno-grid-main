import Image from "next/image";
import styles from "../../page.module.css";
import { ReactNode } from "react";

interface ItemProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imagePosition?: "top" | "bottom";
}

export function Item({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imagePosition = "bottom",
}: ItemProps) {
  return (
    <div className={styles.item}>
      {imagePosition === "top" && (
        <Image
          src={imageSrc}
          width={imageWidth}
          height={imageHeight}
          alt={imageAlt}
        />
      )}
      {title && <div className="lgText">{title}</div>}
      {subtitle && <p className="xlgText">{subtitle}</p>}
      {imagePosition === "bottom" && (
        <Image
          src={imageSrc}
          width={imageWidth}
          height={imageHeight}
          alt={imageAlt}
        />
      )}
    </div>
  );
}
