import React, { Fragment } from "react";
import Slider from "react-slick";
import { Slider4 } from "../../../../services/script";
import { Media, Container, Col, Row } from "reactstrap";

const Data = [
  {
    img: "/assets/images/tools/category/1.jpg",
    title: "Cutting Tools",
    features: [
      { title: "Turning Tools", link: "#" },
      { title: "Milling Tools", link: "#" },
      { title: "Tool system", link: "#" },
      { title: "Hole machining Tools", link: "#" },
      { title: "‎", link: "#"}
    ],
    link: "#",
  },
  {
    img: "/assets/images/tools/category/4.jpg",
    title: "Cemented carbide",
    features: [
      { title: "Rods", link: "#" },
      { title: "Mining Tips", link: "#" },
      { title: "Shield Alloy", link: "#" },
      { title: "Burr Blanks", link: "#" },
      { title: "Precision Parts & Wear Parts", link: "#" },    
    ],
    link: "#",
  },
  {
    img: "/assets/images/tools/category/5.jpg",
    title: "Tungsten powder",
    features: [
      { title: "Cast tungsten carbide", link: "#" },
      { title: "Chromium carbide", link: "#" },
      { title: "Titanium carbonitride", link: "#" },
      { title: "Cobalt powder", link: "#" },
      { title: "‎", link: "#"},
    ],
    link: "#",
  },
  {
    img: "/assets/images/tools/category/5.jpg",
    title: "Tungsten powder#2",
    features: [
      { title: "Compound carbide", link: "#" },
      { title: "rtp mixture", link: "#" },
      { title: "Tungsten carbide", link: "#" },
      { title: "Tungsten powder", link: "#" },
      { title: "‎", link: "#"},
    ],
    link: "#",
  },
];

const MasterCategory = ({ img, title, features, link }) => {
  return (
    <div>
      <div className="category-wrapper pt-0">
        <div>
          <div>
            <Media
              src={img}
              className="img-fluid blur-up lazyload bg-img"
              alt=""
            />
          </div>
          <h4>{title}</h4>
          <ul className="category-link">
            {features.map((data, i) => {
              return (
                <li key={i}>
                  <a href={data.link}>{data.title}</a>
                </li>
              );
            })}
          </ul>
          <a href={link} className="btn btn-classic btn-outline">
            view more
          </a>
        </div>
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <Fragment>
      <section className="pt-0 category-tools ratio3_2">
        <Container>
          <Row>
            <Col>
              <Slider {...Slider4} className="slide-4 category-m no-arrow">
                {Data.map((data, i) => {
                  return (
                    <MasterCategory
                      key={i}
                      img={data.img}
                      link={data.link}
                      title={data.title}
                      features={data.features}
                    />
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Category;
