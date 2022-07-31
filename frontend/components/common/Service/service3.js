import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  svgFreeShipping,
  svgservice,
  svgoffer,
  svgpayment,
} from "../../../services/script";
import MasterServiceContent from "./MasterServiceConternt";

const Data = [
  {
    link: svgFreeShipping,
    title: "ฟรีค่าจัดส่ง",
    service: "สำหรับกรุงเทพและเขตปริมณฑล",
  },
  {
    link: svgservice,
    title: "บริการหลังการขาย",
    service: "บริการให้คำปรึกษาสำหรับลูกค้า",
  },
  {
    link: svgoffer,
    title: "ราคาโปรโมชั่น",
    service: "ราคาสินค้าสามารถสอบถามทาง Line",
  },
  {
    link: svgpayment,
    title: "ชำระเงินออนไลน์",
    service: "สามารถชำระผ่าน Mobile banking",
  },
];

const Service = ({ layoutClass, hrLine }) => {
  return (
    <Fragment>
      <section className={layoutClass}>
        <Container className="absolute-bg">
          <div className="service p-0 ">
            <Row>
              {Data.map((data, i) => {
                return (
                  <Col
                    key={i}
                    lg="3"
                    sm="6"
                    className={` ${
                      hrLine ? "service-block1" : "service-block"
                    }`}
                  >
                    <MasterServiceContent
                      link={data.link}
                      title={data.title}
                      service={data.service}
                      hrLine={hrLine}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default Service;
