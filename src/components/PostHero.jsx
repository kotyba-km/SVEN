import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./postHero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faBoxOpen,
  faTachometerAltFast,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons/faCalendarDays";
import { useState } from "react";
export default function PostHero() {
  const [isInterested, setIsInterested] = useState(true);
  const toggleLike = () => {
    setIsInterested(!isInterested);
  };
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
      <div className="w-100 d-flex">
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
          <button
            onClick={toggleLike}
            className={`align-self-center me-2 ${styles.interestedBtn} ${
              isInterested ? "" : styles.intBtnClicked
            }`}
          >
            <FontAwesomeIcon
              className="pe-2"
              icon={isInterested ? faBoxOpen : faBox}
            />
            مهتم
          </button>
        </div>
        <div className={`float-end ${styles.postOwner}`}>word</div>
      </div>
    </div>
  );
}
