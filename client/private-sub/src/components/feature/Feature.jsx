import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';

export default function Feature() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12} lg={6}>
                    <div>
                        <img
                            src="https://i.ibb.co/PYVF5tW/Group-1.png"
                            alt="photo"
                        />
                    </div>
                </Col>
                <Col sm={12} lg={6}>
                    <div className="flex flex-col justify-around text-4xl text-white font-semibold m-auto mt-5">
                        <div className="capitalize">
                            <h1 className="gradient__text">
                                the most secure and trusted website application
                            </h1>
                            <span className="block text-lg text-orange-600 font-thin">
                                explore Virtual credit card
                            </span>
                        </div>
                        <div className="my-20 w-5/6 lg:w-3/6 self-center">
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <Card bg="dark" className="text-xl">
                                        <Card.Img
                                            className="w-80 m-auto"
                                            variant="top"
                                            src="https://i.ibb.co/Q6db9Gk/Group-2720.png"
                                        />
                                        <Card.Header className="text-center">
                                            <Card.Title>
                                                Security Authentication
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Praesent non varius nibh. Cras
                                                quis sapien sem. Curabitur eget
                                                enim eget dui convallis lacinia.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card bg="dark" className="text-xl">
                                        <Card.Img
                                            className="w-80  m-auto"
                                            variant="top"
                                            src="https://i.ibb.co/PwQmGQL/blue.png"
                                        />
                                        <Card.Header className="text-center ">
                                            <Card.Title>
                                                Website Resources
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Praesent non varius nibh. Cras
                                                quis sapien sem. Curabitur eget
                                                enim eget dui convallis lacinia.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card bg="dark" className="text-xl">
                                        <Card.Img
                                            className="w-80  m-auto"
                                            variant="top"
                                            src="https://i.ibb.co/kHfYDRm/blue.png"
                                        />
                                        <Card.Header className="text-center">
                                            <Card.Title>
                                                Generated Virtual Card
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Praesent non varius nibh. Cras
                                                quis sapien sem. Curabitur eget
                                                enim eget dui convallis lacinia.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
