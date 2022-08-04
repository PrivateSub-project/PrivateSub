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
                                            Virtual Cards can be utilized to make purchases
                                            in the same way as a physical card excluding
                                            stress that comes with giving out your
                                            card information online and being susceptible
                                            to data breaches. With industry leading security
                                            Authentication you can be sure that your data is
                                            safe and secure.
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
                                                Our website is meticulously crafted in
                                                a way that is easy to navigate and is 
                                                informative to both new and existing 
                                                users about the world of Private 
                                                payments.
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
                                            Protect your card details and your funds
                                            by creating virtual payment cards, instead
                                            of using a regular debit/credit card 
                                            for each place you shop online.
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
