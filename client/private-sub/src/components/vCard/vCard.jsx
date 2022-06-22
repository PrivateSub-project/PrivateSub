import React, { useState } from 'react';
import { Card, FormCheck, Nav } from 'react-bootstrap';
import { GenCC, Schemes } from 'creditcard-generator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBank } from '@fortawesome/free-solid-svg-icons';

import { CardArrays } from '../../utils';
import './vCard.css';
import ActivityCard from '../activityCard/ActivityCard';

export default function vCard() {
    const vCardNum = GenCC(Schemes['VISA'], 1);
    const [navCard, setNavCard] = useState(1);
    const [isActive, setIsActive] = useState(false);
    const handleTabNav = (e) => {
        try {
            const intData = parseInt(e.target.id);
            setNavCard(intData);
        } catch (err) {
            console.log(err);
        }
    };
    const handleChangeActive = (e) => {
        setIsActive(e.target.checked);
    };
    console.log(vCardNum);
    console.log(isActive);

    return (
        <section className="h-full gradient-form  md:h-screen">
            <div className="container py-12 px-1 h-full">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="flex justify-start items-center flex-wrap h-full g-6 text-gray-800">
                            <div className="w-screen lg:w-10/12">
                                <div className="lg:flex lg:flex-wrap g-0">
                                    <div className="block flex-1 bg-white shadow-lg rounded-3xl">
                                        <div className="px-4">
                                            <div className="py-5 lg:p-1 lg:mx-6">
                                                <Card>
                                                    <Card.Header>
                                                        <Nav
                                                            variant="tabs"
                                                            defaultActiveKey="#card one"
                                                        >
                                                            {CardArrays.map(
                                                                (item) => (
                                                                    <Nav.Item
                                                                        key={
                                                                            item.id
                                                                        }
                                                                    >
                                                                        <Nav.Link
                                                                            className="vCardNav"
                                                                            id={
                                                                                item.id
                                                                            }
                                                                            onClick={
                                                                                handleTabNav
                                                                            }
                                                                            href={`#${item.selection}`}
                                                                        >
                                                                            {
                                                                                item.selection
                                                                            }
                                                                        </Nav.Link>
                                                                    </Nav.Item>
                                                                )
                                                            )}
                                                        </Nav>
                                                    </Card.Header>

                                                    {CardArrays.map((item) => {
                                                        if (item.id === navCard)
                                                            return (
                                                                <Card.Body
                                                                    key={
                                                                        item.id
                                                                    }
                                                                    style={{
                                                                        backgroundColor:
                                                                            item.color,
                                                                        color: 'white',
                                                                    }}
                                                                    className="w-3/5 m-auto my-4 border-separate border-1 border-black rounded-xl"
                                                                >
                                                                    <Card.Title className="mb-4">
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </Card.Title>
                                                                    <Card.Subtitle className="mb-2">
                                                                        {
                                                                            item.issue
                                                                        }
                                                                    </Card.Subtitle>
                                                                    <Card.Text className="mb-2">
                                                                        <FontAwesomeIcon
                                                                            className="mr-2"
                                                                            icon={
                                                                                faBank
                                                                            }
                                                                            size="1x"
                                                                        />
                                                                        {
                                                                            item.number
                                                                        }
                                                                    </Card.Text>
                                                                    <Card.Footer>
                                                                        <div className="float-right clear-left text-2xl">
                                                                            <FormCheck
                                                                                name="isActive"
                                                                                onChange={
                                                                                    handleChangeActive
                                                                                }
                                                                                checked={
                                                                                    isActive
                                                                                }
                                                                                id={
                                                                                    item.id
                                                                                }
                                                                                type="switch"
                                                                            />
                                                                        </div>
                                                                    </Card.Footer>
                                                                </Card.Body>
                                                            );
                                                    })}
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <ActivityCard />
                    </div>
                </div>
            </div>
        </section>
    );
}
