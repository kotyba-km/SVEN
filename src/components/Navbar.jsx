import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHouse,
  faIdCard,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
/>;
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
export default function Navbar() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <nav className={`navbar ${styles.bgSmoke}`}>
      {/* //! start Navbar section */}
      <div className={`w-100 ${styles.navbar}`}>
        <Row className="h-100 d-flex justify-content-center">
          {/* //! start SVEN logo column */}
          <Col
            xs={{ order: 3, span: "0" }}
            sm={{ order: 2, span: "6" }}
            md={{ order: 2, span: "5" }}
            lg={{ order: 1, span: "3" }}
            className={`d-flex justify-content-center align-items-center p-2 ${styles.logoWrap}`}
          >
            <img
              className={`${styles.logo}`}
              src="./images/svenLogoText.png"
              alt=""
            />
          </Col>
          {/* //! end SVEN logo column */}
          {/* //! start Search column */}
          <Col
            xs={{ order: 1, span: "11" }}
            sm={{ order: 1, span: "11" }}
            md={{ order: 1, span: "10" }}
            lg={6}
            className=" d-flex justify-content-center align-items-center"
          >
            <Row
              style={{ height: "80%" }}
              className={`w-100 overflow-hidden bg-dark rounded-5 position-relative d-flex justify-content-center align-items-center ${styles.searchImagesWrap}`}
            >
              <Col className="p-0 h-100">
                <img
                  className={`w-100 h-100 ${styles.searchImages}`}
                  src="./images/aomawein.jpg"
                  alt=""
                />
              </Col>
              <Col className="p-0 h-100">
                <img
                  className={`w-100 h-100 ${styles.searchImages}`}
                  src="./images/tadmor.jpg"
                  alt=""
                />
              </Col>
              <Col className="p-0 h-100">
                <img
                  className={`w-100 h-100 ${styles.searchImages}`}
                  src="./images/hamaa.jpg"
                  alt=""
                />
              </Col>
              <Col className="p-0 h-100">
                <img
                  className={`w-100 h-100 ${styles.searchImages}`}
                  src="./images/haleb.jpg"
                  alt=""
                />
              </Col>
              <div
                className={`w-75 bg-white position-absolute rounded-5 d-flex justify-content-start align-items-center opacity-75 overflow-hidden ${styles.searchWrap}`}
                style={{
                  border: isFocused ? "2px solid #55C7E6 " : "2px solid black ",
                }}
              >
                <i
                  style={{
                    borderRight: "2.5px black solid",
                    padding: "0px 15px 2px 0",
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </i>
                <input
                  className={`h-100 w-100 border-0 ms-2 fs-4 ${styles.searchInput}`}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  type="text"
                />
              </div>
            </Row>
          </Col>
          {/* //! end Search column */}
          {/* //! start Slogan column */}
          <Col
            xs={{ order: 2, span: "12" }}
            sm={{ order: 3, span: "6" }}
            md={{ order: 3, span: "5" }}
            lg={{ order: 3, span: "3" }}
            className=" d-flex flex-column justify-content-center align-items-center"
          >
            <div className={`${styles.sloganAr}`}>معاً نحو المستقبل</div>
            <div className={`${styles.sloganEn}`}>
              Together towards the future
            </div>
          </Col>
          {/* //! end Slogan column */}
        </Row>
      </div>
      {/* //! end Navbar section */}
      {/* //! start Panles section */}
      <div
        className={`w-100 d-flex justify-content-center align-items-center ${styles.panels}`}
      >
        <Row className="w-100 h-100 d-flex justify-content-center">
          <Col
            style={{ borderLeft: "2px solid black" }}
            xs={12}
            sm={3}
            md={2}
            className={`d-flex flex-column justify-content-center align-items-center ${styles.panel}`}
          >
            <a className={`${styles.panelLink}`} href="#">
              <FontAwesomeIcon icon={faBell} />
              الإشعارات
            </a>
          </Col>
          <Col
            style={{
              borderRight: "2px solid black",
              borderLeft: "2px solid black",
            }}
            xs={12}
            sm={3}
            md={2}
            className={`d-flex flex-column justify-content-center align-items-center ${styles.panel}`}
          >
            <a className={`${styles.panelLink}`} href="#">
              <FontAwesomeIcon icon={faHouse} />
              الصفحة الرئيسية
            </a>
          </Col>
          <Col
            style={{ borderRight: "2px solid black" }}
            xs={12}
            sm={3}
            md={2}
            className={` d-flex flex-column justify-content-center align-items-center ${styles.panel}`}
          >
            <a className={`${styles.panelLink}`} href="#">
              <FontAwesomeIcon icon={faIdCard} />
              منشوراتي
            </a>
          </Col>
        </Row>
      </div>
      {/* //! end Panels section */}
    </nav>
  );
}
