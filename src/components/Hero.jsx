import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./hero.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Hero() {
  return (
    <div
      className={`w-100 d-flex flex-column justify-content-start align-items-center pt-5 ${styles.hero}`}
    >
      <Row className={` ${styles.postWrap}`}>
        <Col
          lg={2}
          className={`bg-white rounded-3 d-flex flex-column m-2 ${styles.post}`}
        >
          <img src="./images/car1.jpg" alt="" />
          <h4 className="ps-2 text-danger">
            SP <span>49,800,000</span>
          </h4>
          <h6 className="ps-3">Hyundai &#x2022; Sante Fe</h6>
          <h6 className="ps-3 text-black-50">
            2004 &#x2022; <span>104,024</span> Km
          </h6>
        </Col>
        <Col
          lg={2}
          className={`bg-white rounded-3 d-flex flex-column m-2 ${styles.post}`}
        >
          <img src="./images/car2.jpg" alt="" />
          <h4 className="ps-2 text-danger">
            SP <span>28,750,000</span>
          </h4>
          <h6 className="ps-3">Hyundai &#x2022; Accent </h6>
          <h6 className="ps-3 text-black-50">
            2004 &#x2022; <span>50,544</span> Km
          </h6>
        </Col>
        <Col
          lg={2}
          className={`bg-white rounded-3 d-flex flex-column m-2 ${styles.post}`}
        >
          <img src="./images/car3.jpg" alt="" />
          <h4 className="ps-2 text-danger">
            SP <span>55,250,000</span>
          </h4>
          <h6 className="ps-3">KIA &#x2022; Amanti</h6>
          <h6 className="ps-3 text-black-50">
            2008 &#x2022; <span>23,101</span> Km
          </h6>
        </Col>
        <Col
          lg={2}
          className={`bg-white rounded-3 d-flex flex-column m-2 ${styles.post}`}
        >
          <img src="./images/car4.jpg" alt="" />
          <h4 className="ps-2 text-danger">
            SP <span>33,150,000</span>
          </h4>
          <h6 className="ps-3">KIA &#x2022; Rio</h6>
          <h6 className="ps-3 text-black-50">
            2011 &#x2022; <span>237,922</span> Km
          </h6>
        </Col>
        <Col
          lg={2}
          className={`bg-white rounded-3 d-flex flex-column m-2 ${styles.post}`}
        >
          <img src="./images/car5.jpg" alt="" />
          <h4 className="ps-2 text-danger">
            SP <span>86,000,000</span>
          </h4>
          <h6 className="ps-3">Mercedes &#x2022; Benz C class</h6>
          <h6 className="ps-3 text-black-50">
            2007 &#x2022; <span>65,852</span> Km
          </h6>
        </Col>
        <Col
          lg={2}
          className={`bg-white rounded-3 d-flex flex-column m-2 ${styles.post}`}
        >
          <img src="./images/car6.jpg" alt="" />
          <h4 className="ps-2 text-danger">
            SP <span>30,000,000</span>
          </h4>
          <h6 className="ps-3">Perodua &#x2022; Kelisa</h6>
          <h6 className="ps-3 text-black-50">
            2001 &#x2022; <span>320,125</span> Km
          </h6>
        </Col>
      </Row>
      {/* <Row className="w-100 d-flex justify-content-center">
        
        
       
      </Row> */}
    </div>
  );
}
