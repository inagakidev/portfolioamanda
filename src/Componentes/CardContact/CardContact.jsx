import styles from "./CardContact.module.css";

export default function CardContact ({
  icon,
  label = "Email",
  value = "hello@dev.com",
  link
}) {
  return (
    <div className={styles.contactCard}>
      <div className={styles.icon}>{icon}</div>

      <div className={styles.info}>
        <span className={styles.label}>{label}</span>
         <a href={link}><span className={styles.value}>{value}</span></a>
      </div>
    </div>
  );
}