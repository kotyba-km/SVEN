import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./postHero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
import { Table } from "react-bootstrap";
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
      <div className={`my-3 ${styles.overviewContainr}`}>
        <div className={`${styles.postTitle}`}>
          <div className="w-50">
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
          <div className="w-50 me-3 d-flex justify-content-end">
            <button
              onClick={toggleLike}
              className={`rounded-pill ${styles.interestedBtn} ${
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
        </div>
        <div
          className={`d-flex flex-column align-items-end p-4 ${styles.overviewDetails}`}
        >
          <h2>
            <b>
              تفاصيل <span>السيارة</span>
            </b>
          </h2>
          <Table
            borderless
            style={{ direction: "rtl" }}
            className={`fs-4 ${styles.overviewTable}`}
          >
            <tbody>
              <tr>
                <td>لون السيارة الخارجي</td>
                <td className="border-start border-black">بنفسجي غامق</td>
                <td>قوة الأحصنة</td>
                <td>600-700HP</td>
              </tr>
              <tr>
                <td>لون السيارة الداخلي</td>
                <td className="border-start border-black">سكري</td>
                <td>نوع الوقود</td>
                <td>بانزين</td>
              </tr>
              <tr>
                <td>عدد الأبواب</td>
                <td className="border-start border-black">4</td>
                <td>عدد المقاعد</td>
                <td>5-7</td>
              </tr>
              <tr>
                <td>سعة البطارية</td>
                <td className="border-start border-black">+kWh 100</td>
                <td>نوع ناقل الحركة</td>
                <td>أوتوماتيك</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className={`ms-3 float-end`}>
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
