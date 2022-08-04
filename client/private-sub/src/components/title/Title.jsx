import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Title() {
    const user = localStorage.getItem('token');
    return (
        <Container fluid>
            <Row className="mt-20">
                <Col xs={12} md={6}>
                    <div className="w-full flex flex-col justify-start md:mx-6">
                        <div className="mt-1">
                            <h1 className="gradient__text text-3xl lg:text-4xl xl:text-5xl font-bold overflow-visible">
                                Modern Virtual Credit Card Generation Platform
                                Allover Canadian Provinces
                            </h1>
                            <p className="text-white text-justify text-lg my-3">
                            PrivateSub enables you to take control over who charges
                            you and the amount they charge. With PrivateSub you can
                            create virtual payment cards for one-time purchases or
                            subscriptions directly from your browser. You can pause
                            and unpause and close cards anytime you want. PrivateSub
                            gives you peace of mind by securing your purchases online
                            by masking your real credit card data from unwanted traffic.
                            </p>
                        </div>
                        {!user && (
                            <div className="flex justify-center md:justify-end items-center text-2xl my-6 font-bold text-white">
                                <Link to="signin">
                                    <button className="px-4 py-2 mr-6 bg-orange-600">
                                        Sign In
                                    </button>
                                </Link>
                                <Link to="register">
                                    <button className="px-4 py-2 bg-orange-600">
                                        Register
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="h-96 flex flex-col justify-center  m-auto">
                        <img
                            src="https://i.ibb.co/RyP1NB5/Card-1-1.png"
                            className="sm:w-4/6 m-auto"
                            alt="card"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
