import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { ContextSteps } from '../../utils';
import Index from '../sliderCard/Index';
export default function ActivityCard() {
    return (
        <>
            <h1 className="text-white text-4xl mb-4 mt-10 md:mt-0">
                Activity Card
            </h1>
            <Card body>
                <Row>
                    <Col>
                        <Row>
                            <Col
                                xs={4}
                                className="flex justify-center items-center"
                            >
                                <span
                                    className="rounded-full w-9/12 h-10 inline-block"
                                    style={{ background: 'green' }}
                                ></span>
                            </Col>
                            <Col xs="auto" className="p-0">
                                <p>Daily Spend</p>
                                <p>$ 0.00</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col
                                xs={4}
                                className="flex justify-center items-center"
                            >
                                <span
                                    className="rounded-full w-9/12 h-10 inline-block"
                                    style={{ background: 'green' }}
                                ></span>
                            </Col>
                            <Col xs="auto" className="p-0">
                                <p>Monthly Spend</p>
                                <p>$ 0.00</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col
                                xs={4}
                                className="flex justify-center items-center"
                            >
                                <span
                                    className="rounded-full w-9/12 h-10 inline-block"
                                    style={{ background: 'blue' }}
                                ></span>
                            </Col>
                            <Col xs="auto" className="p-0">
                                <p>Credit Available</p>
                                <p>$ 0.00</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
            <br />
            <Card className="h-96 block">
                <Card.Body className="h-100">
                    <ContextSteps>
                        <Index />
                    </ContextSteps>
                </Card.Body>
            </Card>
        </>
    );
}
