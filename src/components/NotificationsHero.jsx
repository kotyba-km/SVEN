import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./notificationsHero.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faCalendarDay,
  faEnvelope,
  faEnvelopeOpen,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
export default function NotificationsHero() {
  const [filterState, setFilterState] = useState(1);
  const optionFilter = (index) => {
    setFilterState((prev) => (prev === index ? null : index));
  };
  return (
    <div className={`w-100 ${styles.bgSmoke}`}>
      <h1 className={` m-auto text-center ${styles.titleHero}`}>
        الإشعارات
        <span
          className={`text-center fs-3 mx-3 rounded-5 px-4 py-0 ${styles.newNotif}`}
        >
          3
        </span>
      </h1>
      <Row
        className={`d-flex justify-content-end ${styles.notificationsContainer}`}
      >
        <Col
          lg={6}
          md={8}
          sm={10}
          xs={12}
          className="d-flex justify-content-center"
        >
          <ul className={`${styles.notifications}`}>
            <li className={`${styles.notification}`}>
              <span className={`${styles.notifIcon}`}>
                <i>
                  <FontAwesomeIcon className="fs-3" icon={faUserCircle} />
                </i>
              </span>
              <div style={{ direction: "rtl" }}>
                <span className={`fw-bold`}>Ahmad,</span>
                <span>مهتم بمنشورك</span>
              </div>
              <span className={`${styles.notificationDate}`}> قبل ساعتين</span>
            </li>
            <li className={`${styles.notification}`}>
              <span className={`${styles.notifIcon}`}>
                <i>
                  <FontAwesomeIcon className="fs-3" icon={faUserCircle} />
                </i>
              </span>
              <div style={{ direction: "rtl" }}>
                <span>وصل منشورك إلى</span>
                <span> 32 </span>
                <span>من الأشخاص</span>
              </div>
              <span className={`${styles.notificationDate}`}>قبل يومين</span>
            </li>
            <li className={`${styles.notification}`}>
              <span className={`${styles.notifIcon}`}>
                <i>
                  <FontAwesomeIcon className="fs-3" icon={faUserCircle} />
                </i>
              </span>
              <div style={{ direction: "rtl" }}>
                <span>وصل منشورك إلى</span>
                <span> 87 </span>
                <span>من الأشخاص</span>
              </div>
              <span
                style={{ direction: "rtl" }}
                className={`${styles.notificationDate}`}
              >
                23،مايو
              </span>
            </li>
            <li className={`${styles.notification}`}>
              <span className={`${styles.notifIcon}`}>
                <i>
                  <FontAwesomeIcon className="fs-3" icon={faUserCircle} />
                </i>
              </span>
              <div style={{ direction: "rtl" }}>
                <span>تغير سعر أحد المنشورات المهتم فيها </span>
                <span
                  style={{ direction: "rtl" }}
                  className={`${styles.notificationDate}`}
                >
                  20،مايو
                </span>
              </div>
            </li>
          </ul>
        </Col>
        <Col
          style={{ height: "325.19px" }}
          md={3}
          sm={2}
          xs={12}
          className={`d-flex justify-content-center align-items-center ${styles.notifFilterCol}`}
        >
          <div
            style={{ width: "85.5px", height: "243.89px" }}
            className={`d-flex flex-column justify-content-center align-items-center h-75 bg-white rounded-pill border border-black-50 ${styles.notifFilterContainer}`}
          >
            <div
              onClick={() => optionFilter(1, true)}
              className={`d-flex justify-content-center align-items-center rounded-circle m-1 border border-black-50 ${
                styles.notifFilter
              } ${filterState === 1 ? styles.filterClicked : ""}`}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div
              onClick={() => optionFilter(2)}
              className={`d-flex justify-content-center align-items-center rounded-circle m-1 border border-black-50 ${
                styles.notifFilter
              } ${filterState === 2 ? styles.filterClicked : ""}`}
            >
              <FontAwesomeIcon icon={faEnvelopeOpen} />
            </div>
            <div
              onClick={() => optionFilter(3)}
              className={`d-flex justify-content-center align-items-center rounded-circle m-1 border border-black-50 ${
                styles.notifFilter
              } 
              ${filterState === 3 ? styles.filterClicked : ""}`}
            >
              <FontAwesomeIcon icon={faCalendarDay} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
