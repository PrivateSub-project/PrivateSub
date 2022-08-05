import React, { useEffect, useState } from 'react';
// import { GetData } from '../../utils';
import Table, {
    AvatarCell,
    SelectColumnFilter,
    StatusPill,
} from '../Table/Table';
import moment from 'moment';
import GetSubscription from '../../API/getSubscription';
import jwtDecode from 'jwt-decode';
import { ContextCommon4 } from '../../utils';
export default function subscriptionList() {
    const [dataAPI, setData] = useState();
    const { issue, setIssue } = React.useContext(ContextCommon4);
    const [dataAPIFormater, setDataFormater] = useState();
    const columns = React.useMemo(
        () => [
            {
                Header: 'Brand',
                accessor: 'brand',
                Cell: AvatarCell,
                imgAccessor: 'imgUrl',
            },
            {
                Header: 'Price',
                accessor: 'price',
            },
            {
                Header: 'Credit Card',
                accessor: 'creditCard',
                Filter: SelectColumnFilter,
                filter: 'includes',
            },
            {
                Header: 'Status',
                accessor: 'status',
                Cell: StatusPill,
            },
        ],
        []
    );

    useEffect(() => {
        console.log('issue', issue);
        const nameData = jwtDecode(localStorage.getItem('token'));
        const name = nameData?.username?.split('@')[0];
        if (nameData)
            GetSubscription(name)
                .then((value) => {
                    setData(value.data.reverse());
                    setIssue(false);
                })
                .catch((err) => console.log(err));
    }, [GetSubscription, issue]);

    useEffect(() => {
        if (dataAPI) {
            const dataFrometter = dataAPI.map((data) => {
                return {
                    ...data,
                    status: 'EXPIRE : ' + moment(data.status).fromNow(),
                    price: data.price + ' $',
                    creditCard:
                        new Array(data.creditCard.length - 3).join('*') +
                        data.creditCard.slice(data.creditCard.length - 4),
                    rawDate: data.status,
                };
            });
            setDataFormater(dataFrometter);
            console.log(dataFrometter);
        }
    }, [dataAPI]);

    if (dataAPIFormater)
        return (
            <div className="min-h-full  text-white">
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                    <div className="">
                        <h1 className="text-4xl">Subscription List</h1>
                    </div>
                    <div className="mt-4">
                        <Table columns={columns} data={dataAPIFormater} />
                    </div>
                </main>
            </div>
        );
    else
        <div className="min-h-full  text-white">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                <div className="">
                    <h1 className="text-4xl">Subscription List</h1>
                </div>
                <div className="mt-4">Loading...</div>
            </main>
        </div>;
}
