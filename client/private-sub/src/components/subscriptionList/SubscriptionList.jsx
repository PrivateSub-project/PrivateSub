import React from 'react';
import { GetData } from '../../utils';
import Table, {
    AvatarCell,
    SelectColumnFilter,
    StatusPill,
} from '../Table/Table';
import moment from 'moment';
export default function subscriptionList() {
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
    const data = React.useMemo(() => GetData(), []);
    const dataFrometter = data.map((data) => {
        return {
            ...data,
            status: 'EXPIRE : ' + moment(data.status).fromNow(),
            price: data.price + ' $',
        };
    });
    console.log(dataFrometter);

    return (
        <div className="min-h-full  text-white">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                <div className="">
                    <h1 className="text-4xl">Subscription List</h1>
                </div>
                <div className="mt-4">
                    <Table columns={columns} data={dataFrometter} />
                </div>
            </main>
        </div>
    );
}
