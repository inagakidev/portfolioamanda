import styles from './CardProject.module.css'

export default function CardProject({
  title = "AI Dashboard",
  description = "Real-time analytics dashboard with AI-powered insights, built for scalability and performance.",
  tags = ["React", "TypeScript", "Python", "PostgreSQL"],
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader} />

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