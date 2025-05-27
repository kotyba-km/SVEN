import styles from "./notificationsHero.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function NotificationsHero() {
  return (
    <div className={`w-100 ${styles.bgSmoke}`}>
      <h1 className={`w-50 m-auto text-center ${styles.titleHero}`}>
        الإشعارات
      </h1>
    </div>
  );
}
