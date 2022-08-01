import { Form, Formik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import getCardNumAPI from '../../API/getCardNumAPI';
import { contextCommon2 } from '../../utils';
import { TextField } from '../textField/TextField';
export default function VCardForm() {
    const [cvc, setCvc] = useState('');
    const [cvcNum, setCvcNum] = useState('');
    const [expiryNum, setExpiryNum] = useState('');
    const [card, setCard] = useState(null);
    const { setDataSteps, dataSteps, dataCardNum, setDataCardNum } =
        useContext(contextCommon2);

    const handleCvcFocus = () => {
        setCvc('cvc');

        setTimeout(() => {
            setCvc('');
        }, 3000);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;

        setDataSteps((values) => ({
            ...values,
            [name]: value,
            cvc: cvcNum,
            expiry: expiryNum,
        }));
        if (name == 'number') {
            const [dataValue] = card.filter(
                (cardNum) => cardNum.number == value
            );
            if (dataValue) {
                setCvcNum(dataValue.cvc);
                setExpiryNum(dataValue.expiry);
            }
            handleCvcFocus();
        }
        if (name == 'typeOfCard') {
            setDataCardNum({ [name]: value });
        }
    };

    useEffect(() => {
        if (dataCardNum)
            getCardNumAPI(dataCardNum)
                .then((value) => {
                    setCard(value);
                })
                .catch((err) => console.log(err));
    }, [dataCardNum]);

    return (
        <Formik
            initialValues={{
                number: dataSteps?.number || '',
                name: dataSteps?.name || '',
                typeOfCard: dataSteps?.typeOfCard || '',
            }}
            validationSchema={''}
            onSubmit={(values) => {
                setDataSteps({ ...values });
            }}
        >
            {({ values }) => (
                <div className="flex">
                    <Cards
                        cvc={cvcNum}
                        expiry={expiryNum}
                        name={values.name}
                        number={values.number}
                        focused={cvc}
                        preview
                        issuer={values.typeOfCard}
                        acceptedCards={['VISA', 'MasterCard']}
                    />

                    <Form onChange={handleChange}>
                        <TextField name="typeOfCard" isSelection={true}>
                            <option value="" aria-disabled disabled>
                                Select a card issuer
                            </option>
                            <option value="MasterCard">MasterCard</option>
                            <option value="VISA">Visa</option>
                        </TextField>

                        <TextField isSelection={true} name="number">
                            {card ? (
                                <>
                                    <option value="" aria-disabled disabled>
                                        Select a number
                                    </option>

                                    {card?.map((cardNum, index) => (
                                        <option
                                            key={index}
                                            value={`${cardNum?.number}`}
                                        >
                                            {cardNum?.number}
                                        </option>
                                    ))}
                                </>
                            ) : (
                                <option selected aria-disabled disabled>
                                    No Data
                                </option>
                            )}
                        </TextField>
                        <TextField placeholder="name" name="name" />
                    </Form>
                </div>
            )}
        </Formik>
    );
}
