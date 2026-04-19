import styles from "./CardContact.module.css";

export default function CardContact ({
  icon,
  link
}) {
  return (
    <div className={styles.contactCard}>
      <a href={link}>
        <div className={styles.icon}>{icon}</div>
      </a>
    </div>
  );
}