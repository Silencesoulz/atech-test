import React,{Fragment} from 'react';
import { Row, Col ,Container} from "reactstrap";

const AboutSection = () => {
    return (
        <Fragment>
            <section>
                <Container>
                    <Row>
                        <Col lg="8" className="m-auto">
                            <div className="title3">
                                <h2 className="title-inner3">A Tech Tools</h2>
                                <div className="line"></div>
                            </div>
                            <div className="about-text">
                                <p>
                                A Tech Tools เป็นบริษัทจัดจำหน่ายอย่างเป็นทางการสำหรับอุปกรณ์ขึ้นรูปโลหะและเครื่องมือตัดเฉือนต่างๆอาทิ เช่นเม็ดมีดกลึง ดอกกัดคาร์ไบด์ ดอกเอ็นมิล ดอกสว่าน ดอกต๊าป และหัวจับต่างๆ
                                เพื่อตอบสนองความต้องการของกลุ่มลูกค้าในอุตสาหกรรมต่างๆในประเทศไทย เช่น กลุ่มอุตสาหกรรมอิเล็กทรอนิกส์, กลุ่มอุตสาหกรรมรถยนต์ และอื่นๆ
                                โดยมีอุปกรณ์ระดับชั้นนำเช่น GESAC Cutting Tools เกรดพรีเมี่ยมจากประเทศจีนและ Bilz เกรดพรีเมี่ยมจากประเทศเยอรมันนี นอกจากนี้ทางบริษัทได้เตรียมพร้อมทีมงานที่มีประสบการณ์เฉพาะทาง ที่สามารถให้คำแนะนำด้านเทคนิคและการเลือกใช้
                                อุปกรณ์ได้อย่างเหมาะสมกับงานแต่ละประเภท เพื่อความคุ้มค่าในการลดต้นทุนและเพิ่มประสิทธิภาพในการผลิตอุปกรณ์
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
}

export default AboutSection;