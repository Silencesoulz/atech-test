import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';

const TopBar = ({topClass}) => {
    return (
        <div  id="topHeader" className={`top-header ${topClass? topClass: ''}`}>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="header-contact">
                            <ul>
                                <li><i className="fa fa-phone" aria-hidden="true"></i>{('')}</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="6" className="text-right">                                                                         
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TopBar;