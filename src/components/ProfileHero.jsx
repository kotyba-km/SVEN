import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./profile.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
export default function ProfileHero() {
  return (
    <div className={`w-100 ${styles.bgSmoke}`}>
      <Container className={``}>
        <Row>
          <Col
            lg={4}
            className="d-flex justify-content-center align-items-center"
          >
            <Card
              className={`w-100 d-flex justify-content-center align-items-center p-3 ${styles.bgSmoke}`}
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
              <Col className={`text-center py-1 ${styles.tabImportant}`}>
                مهمة
              </Col>
              <Col
                className={`text-center py-1 ${styles.tabPosts} ${styles.active}`}
              >
                منشوراتي
              </Col>
            </Row>
            <Row className="w-100 h-100">
              <Col
                xl={12}
                className={`h-100 text-center mt-5 ${styles.tabPostsContent}`}
              >
                Tab 1 <br /> Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Laboriosam quis doloribus sit, consequuntur placeat illo
                quidem! Eveniet vel numquam asperiores nulla quis expedita sint
                explicabo ducimus! Repellat suscipit veniam accusamus!
              </Col>
              <Col
                xl={12}
                className={`h-100 text-center mt-5 ${styles.tabImportantContent}`}
              >
                Tab 1 <br /> Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Facere quisquam, tempora voluptatum neque at officia sunt
                corrupti esse earum fugit temporibus tenetur, doloremque ratione
                aliquid asperiores. Explicabo, necessitatibus ex.
                Necessitatibus? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Unde nemo voluptas eum non laborum eveniet
                omnis, eligendi recusandae, fuga enim veritatis aliquam
                doloremque, quas beatae in blanditiis vitae accusamus dolores.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
