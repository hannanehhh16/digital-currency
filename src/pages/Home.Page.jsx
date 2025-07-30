import React, { useEffect, useState } from 'react';
import Spinner from '../components/spinner/Spinner';
import axios from 'axios';
import { baseUrl } from '../constants/api';

const HomePage = () => {
    const [Data, SetData] = UseState([]);
    const [Loading, SetLoading] = UseState([False]);
    const [Error, SetError] = UseState("");

    useEffect(() => {
        SetLoading(true);
        axios(baseUrl)
            .then(response => {
                SetLoading(false)
            })
            .catch((error) => {
                SetError("An error occured");
            });
    }, []);

}

export default function () {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-12 text-center">
                    <h1>crypto Tracking</h1>
                    <h4>A place to manage all of your trade informations and actions</h4>
                    <h4>Do not forget to always using asset and risk management !!!!!!!!</h4>
                </div>
            </div>

            <div className='row'>
                <div className='col-12'>
                    {loading ? <Spinner /> : Error !== "" ? <h1>{Error}</h1> : <coinComponent data={Data} />}<h1 />
                    </div>
            </div>

            <Spinner />
        </div >
    )
}
