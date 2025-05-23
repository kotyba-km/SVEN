import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { faGear, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons/faQuestionCircle";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons/faExclamationCircle";
export default function ProfileHero() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className={`w-100 d-flex justify-content-center ${styles.bgSmoke}`}>
      <Container className={`w-100 pt-4 mx-0`}>
        <Row>
          <Col
            lg={4}
            className="d-flex justify-content-center align-items-center"
          >
            <Card
              className={`w-100 d-flex justify-content-center align-items-center p-3 bg-white mb-5 ${styles.bgSmoke}`}
            >
              <Card.Img
                className="w-75 rounded-circle mb-4"
                variant="top"
                src="./images/blank-profile-picture-973460_1280.png"
              />
              <Card.Title>Kotyba KM</Card.Title>
              <Row className="mt-5 w-75">
                <Col
                  lg={6}
                  className="d-flex justify-content-center align-items-center"
                >
                  <h6>مهتم</h6>
                </Col>
                <Col
                  lg={6}
                  className="d-flex justify-content-center align-items-center"
                >
                  <h6>المنشورات</h6>
                </Col>
              </Row>
              <Row className="w-75 ">
                <Col
                  lg={6}
                  className="d-flex justify-content-center align-items-center"
                >
                  <h6>0</h6>
                </Col>
                <Col
                  lg={6}
                  className="d-flex justify-content-center align-items-center liht"
                >
                  <h6>0</h6>
                </Col>
              </Row>
              <ListGroup className="w-100 text-end mt-4">
                <ListGroup.Item className={`${styles.cardListItem}`}>
                  إعدادات
                  <i className="ms-3">
                    <FontAwesomeIcon icon={faGear} />
                  </i>
                </ListGroup.Item>
                <ListGroup.Item className={`${styles.cardListItem}`}>
                  المساعدة والدعم
                  <i className="ms-3">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </i>
                </ListGroup.Item>
                <ListGroup.Item className={`${styles.cardListItem}`}>
                  حول
                  <i className="ms-3">
                    <FontAwesomeIcon icon={faExclamationCircle} />
                  </i>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col
            lg={8}
            className={`d-flex flex-column align-items-center pe-0 ${styles.bgSmoke} `}
          >
            <Row
              style={{ gap: "1.5px", backgroundColor: "#0000007a" }}
              className={`w-100`}
            >
              <Col
                onClick={() => toggleTab(2)}
                className={`text-center py-1 ${styles.tabImportant} ${
                  toggleState === 2 ? styles.active : ""
                }`}
              >
                مهمة
              </Col>
              <Col
                onClick={() => toggleTab(1)}
                className={`text-center py-1 ${styles.tabPosts} ${
                  toggleState === 1 ? styles.active : ""
                }`}
              >
                منشوراتي
              </Col>
            </Row>
            <Row className="w-100 h-100">
              <Col
                xl={12}
                className={`text-center mt-5 ${styles.tabPostsContent} ${
                  toggleState === 1 ? styles.contentActive : ""
                }`}
              >
                <Row className="w-100 h-100 gap-2 bg-warning">
                  <Col className={`h-50 ${styles.myPosts} `}></Col>
                  <Col className={`h-50 ${styles.myPosts} `}></Col>
                  <Col className={`h-50 ${styles.myPosts} `}></Col>
                </Row>
              </Col>
              <Col
                xl={12}
                className={`text-center mt-5 ${styles.tabImportantContent} ${
                  toggleState === 2 ? styles.contentActive : ""
                }`}
              >
                <Row className="w-100 h-100 gap-2 bg-danger">
                  <Col className={`h-50 ${styles.myPosts} `}></Col>
                  <Col className={`h-50 ${styles.myPosts} `}></Col>
                  <Col className={`h-50 ${styles.myPosts} `}></Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
