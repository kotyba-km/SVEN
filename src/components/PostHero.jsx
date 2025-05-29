import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./postHero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import {
  faBox,
  faBoxOpen,
  faCalendarAlt,
  faCalendarDay,
  faEnvelopeOpen,
  faTachometer,
  faTachometerAlt,
  faTachometerAltFast,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons/faCalendarDays";
import { faTachometerAltAverage } from "@fortawesome/free-solid-svg-icons/faTachometerAltAverage";
export default function PostHero() {
  return (
    <div className={`w-100 ${styles.postContainer}`}>
      <div className={`${styles.imgContainer}`}>
        <div className={`${styles.bigImg}`}>
          <img src="./images/car1.jpg" alt="" />
        </div>

        <div className={`${styles.smallImg1}`}>
          <img
            style={{ transform: "scaleX(-1)" }}
            src="./images/car1.jpg"
            alt=""
          />
        </div>
        <div className={`${styles.smallImg2}`}>
          <img src="./images/car1.jpg" alt="" />
        </div>
      </div>
      <div className="w-100">
        {" "}
        {/*title */}
        <div className={`${styles.postTitle}`}>
          <div>
            <h3 className="text-danger">
              SP <span>49,800,000</span>
            </h3>
            <h5 className="">Hyundai &#x2022; Sante Fe</h5>
            <h5 className="text-black-50">
              <FontAwesomeIcon className="pe-1" icon={faCalendarDays} />
              2004
              <FontAwesomeIcon className="px-2" icon={faTachometerAltFast} />
              <span>104,024</span> <b>Km</b>
            </h5>
          </div>
          <button className="h-50 align-self-center me-2">
            <FontAwesomeIcon className="pe-2" icon={faBoxOpen} />
            مهتم
          </button>
        </div>
      </div>
    </div>
  );
}
