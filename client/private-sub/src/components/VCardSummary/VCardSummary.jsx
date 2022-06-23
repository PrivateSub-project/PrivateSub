import React, { useContext } from 'react';
import { contextCommon2 } from '../../utils';
import { Card, Col, Row } from 'react-bootstrap';
import './VCardSummary.css';
export default function VCardSummary() {
    const { dataSteps } = useContext(contextCommon2);
    const { amount, cvc, expiry, name, number, title, typeOfCard } = dataSteps;

    const firstEString = expiry.toString().substr(0, 2).trim();
    const SecondEString = expiry.toString().substr(2).trim();
    const EString = firstEString.concat('/', SecondEString);
    const hashNumber =
        new Array(number.length - 4).join('x') + number.slice(-4);
    return (
        <Card body border={'secondary'} className="line__green">
            <Row>
                <Col>
                    <p className="mb-2">
                        <span className="font-bold">Amount : </span>
                        <code>${amount}</code>
                    </p>
                    <p className="mb-2">
                        <span className="font-bold">Name : </span>
                        <code>{name}</code>
                    </p>
                    <p>
                        <span className="font-bold">CVC : </span>
                        <code>{cvc}</code>
                    </p>
                </Col>
                <Col>
                    <p className="mb-2">
                        <span className="font-bold">Expiry : </span>
                        <code>{EString}</code>
                    </p>
                    <p className="mb-2">
                        <span className="font-bold">Number : </span>
                        <code>{hashNumber}</code>
                    </p>
                    <p className="mb-2">
                        <span className="font-bold">Title : </span>
                        <code>{title}</code>
                    </p>
                    <p>
                        <span className="font-bold">Card type : </span>
                        <code>{typeOfCard}</code>
                    </p>
                </Col>
            </Row>
        </Card>
    );
}
