import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./postHero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faB,
  faBox,
  faBoxOpen,
  faPhone,
  faTachometerAltFast,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons/faCalendarDays";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
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
      <div className={`w-100 d-flex mb-4 ${styles.postDetails}`}>
        {" "}
        {/*title */}
        <div className={`me-4 ${styles.postTitle}`}>
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
        <div className={`float-end ${styles.postOwner}`}>
          <Card className="d-flex flex-row align-items-center border-0 bg-transparent">
            <Card.Img
              style={{ width: "100px" }}
              className="rounded-circle mb-3"
              src="./images/profilePicture.png"
            />
            <Card.Title className="d-block ms-3">
              Emad Darmoush
              <span className="d-block text-black-50 fs-6 mx-2">المالك</span>
            </Card.Title>
          </Card>
          <ListGroup>
            <ListGroup.Item className="border-0 bg-transparent border-top">
              <FontAwesomeIcon
                className="ps-2 pe-4 text-primary"
                icon={faPhone}
              />
              0968278954
            </ListGroup.Item>
            <ListGroup.Item className="border-0 bg-transparent border-top border-bottom">
              <FontAwesomeIcon
                className="ps-2 pe-4 text-success"
                icon={faWhatsapp}
              />
              0983596904
            </ListGroup.Item>
          </ListGroup>
          <div className="w-100 d-flex justify-content-center">
            <button className="mx-3 mt-4 rounded-pill px-3 border-1">
              <FontAwesomeIcon className="px-2 text-primary" icon={faPhone} />
              اتصل
            </button>
            <button className="mx-3 mt-4 rounded-pill px-3 border-1">
              <FontAwesomeIcon
                className="px-2 text-success"
                icon={faWhatsapp}
              />
              مراسلة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
