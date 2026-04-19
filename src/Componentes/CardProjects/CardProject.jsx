import styles from './CardProject.module.css'
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function CardProject({
  title,
  description,
  tags,
  github,
  demo,
  image
}) {
  return (
    <div className={styles.card}>
      
      <div 
        className={styles.cardHeader}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.links}>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          )}

          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>

      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <p>{description}</p>

        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}