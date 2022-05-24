import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export default function Title() {
    return (
        <Container fluid>
            <Row className="mt-20">
                <Col xs={12} md={6}>
                    <div className="w-full h-96 flex flex-col justify-start md:mx-6">
                        <div className="mt-1">
                            <h1 className="gradient__text text-3xl lg:text-5xl font-bold overflow-visible">
                                Modern Virtual Credit Card Generation Platform
                                Allover Canadian Provinces
                            </h1>
                            <p className="text-white text-justify text-lg my-3">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Praesent non varius nibh. Cras
                                quis sapien sem. Curabitur eget enim eget dui
                                convallis lacinia. Aenean euismod odio eros, sit
                                amet auctor massa faucibus sit amet. Sed
                                vulputate metus at lacinia condimentum.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="h-96 flex flex-col justify-center  m-auto">
                        <img
                            src="https://i.ibb.co/RyP1NB5/Card-1-1.png"
                            className="img-fluid w-7/12 m-auto"
                            alt="card"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
