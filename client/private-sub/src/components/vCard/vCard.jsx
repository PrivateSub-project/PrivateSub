import React, { useContext, useEffect, useState } from 'react';
import { Card, FormCheck, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBank } from '@fortawesome/free-solid-svg-icons';

// import { CardArrays } from '../../utils';
import './vCard.css';
import ActivityCard from '../activityCard/ActivityCard';
import getCardNumAPI from '../../API/GetAllCCUser';
import jwtDecode from 'jwt-decode';
import { contextCommon2 } from '../../utils';
import ToggleActiveAPI from '../../API/ToggleActiveAPI';

export default function vCard() {
    const { dataSteps, Final } = useContext(contextCommon2);
    const [navCard, setNavCard] = useState(1);
    const [dataAPI, setDataAPI] = useState([]);
    const [isActive, setIsActive] = useState();
    const handleTabNav = (e) => {
        try {
            const intData = parseInt(e.target.id);
            setNavCard(intData);
        } catch (err) {
            console.log(err);
        }
    };
    const handleChangeActive = (e, numID) => {
        setIsActive(e.target.checked);
        ToggleActiveAPI({ number: numID })
            .then((value) => {
                // navigate('/');
                console.log(value.active);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        console.log(Final);
        console.log(dataSteps);
        const nameData = jwtDecode(localStorage.getItem('token'));
        const name = nameData?.username?.split('@')[0];
        if (nameData)
            getCardNumAPI(name)
                .then((value) => {
                    // navigate('/');
                    console.log(value);
                    setDataAPI(value);
                })
                .catch((err) => console.log(err));
    }, [Final, isActive]);
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
                                                            {dataAPI?.data &&
                                                                dataAPI.data.map(
                                                                    (
                                                                        item,
                                                                        index
                                                                    ) => (
                                                                        <Nav.Item
                                                                            key={
                                                                                item._id
                                                                            }
                                                                        >
                                                                            <Nav.Link
                                                                                className="vCardNav"
                                                                                id={
                                                                                    index
                                                                                }
                                                                                onClick={
                                                                                    handleTabNav
                                                                                }
                                                                                href={`#card${
                                                                                    index +
                                                                                    1
                                                                                }`}
                                                                            >
                                                                                card{' '}
                                                                                {index +
                                                                                    1}
                                                                            </Nav.Link>
                                                                        </Nav.Item>
                                                                    )
                                                                )}
                                                        </Nav>
                                                    </Card.Header>

                                                    {dataAPI?.data &&
                                                        dataAPI.data.map(
                                                            (item, index) => {
                                                                if (
                                                                    index ===
                                                                    navCard
                                                                )
                                                                    return (
                                                                        <Card.Body
                                                                            key={
                                                                                item._id
                                                                            }
                                                                            style={{
                                                                                backgroundColor: `${
                                                                                    navCard ==
                                                                                    1
                                                                                        ? 'green'
                                                                                        : 'red'
                                                                                }`,
                                                                                color: 'white',
                                                                            }}
                                                                            className="w-3/5 m-auto my-4 border-separate border-1 border-black rounded-xl"
                                                                        >
                                                                            <Card.Title className="mb-4">
                                                                                {
                                                                                    item.title
                                                                                }
                                                                            </Card.Title>
                                                                            <Card.Subtitle className="mb-2">
                                                                                {
                                                                                    item.typeOfCard
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
                                                                                        onChange={(
                                                                                            e
                                                                                        ) => {
                                                                                            handleChangeActive(
                                                                                                e,
                                                                                                item.number
                                                                                            );
                                                                                        }}
                                                                                        checked={
                                                                                            isActive
                                                                                        }
                                                                                        id={
                                                                                            item._id
                                                                                        }
                                                                                        type="switch"
                                                                                    />
                                                                                </div>
                                                                            </Card.Footer>
                                                                        </Card.Body>
                                                                    );
                                                            }
                                                        )}
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <ActivityCard dataAPI={dataAPI} />
                    </div>
                </div>
            </div>
        </section>
    );
}
