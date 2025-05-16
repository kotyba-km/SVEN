import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./profile.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
export default function ProfileHero() {
  return (
    <div className={`w-100 ${styles.bgSmoke}`}>
      <Container className={``}>
        <Row>
          <Col
            lg={4}
            className="d-flex justify-content-center align-items-center bg-danger"
          >
            <Card className="w-100 d-flex justify-content-center align-items-center p-3">
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
                  className="d-flex justify-content-center align-items-center"
                >
                  <h6>0</h6>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col
            lg={8}
            className="d-flex justify-content-center align-items-center bg-info"
          ></Col>
        </Row>
      </Container>
    </div>
  );
}
