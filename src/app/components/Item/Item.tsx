import Image from "next/image";
import styles from "../../page.module.css";
import { ReactNode } from "react";

interface ItemProps {
  title: string;
  subtitle?: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

export function Item({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
}: ItemProps) {
  return (
    <div className={styles.item}>
      {title && <div className="lgText">{title}</div>}
      {subtitle && <p className="xlgText">{subtitle}</p>}
      <Image
        src={imageSrc}
        width={imageWidth}
        height={imageHeight}
        alt={imageAlt}
      />
    </div>
  );
}
