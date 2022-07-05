import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { RegisterForm } from '../../components';

import './Register.css';
export default function Register() {
    return (
        <div className="bg__register">
            <Container fluid>
                <Row>
                    <Col lg={6}>
                        <div className="flex items-center w-5/6 m-auto h-full">
                            <Image
                                fluid
                                src="https://lh3.googleusercontent.com/S2FtV8YqLBOONkUSvWRGOWhP95tYrsiOlc943tynKh5L9NYAee_5KFgRPCdFUwMDbOpSR-BmCgT0KHftdYqjfbV336J2653fzObv51N0PgszoEytv24ssHDM4xP-7PBELGq3fMlxBA=w2400"
                                alt="credit card"
                            />
                        </div>
                    </Col>

                    <Col lg={6}>
                        <RegisterForm />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
