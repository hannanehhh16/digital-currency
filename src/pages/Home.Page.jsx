import React, { useEffect, useState } from 'react';
import Spinner from '../components/spinner/Spinner';
import axios from 'axios';
import { baseUrl } from '../constants/api';
import CoinsComponent from '../components/coins/Coin.component';


const HomePage = () => {
    const [data, SetData] = useState([]);
    const [loading, SetLoading] = useState(false);
    const [error, SetError] = useState("");

    useEffect(() => {
        SetLoading(true);
        axios(baseUrl)
            .then((response) => {
                SetLoading(false);
                SetData(response.data);
            })
            .catch((error) => {
                SetError("An error occured");
            });
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className='my-5'>Crypto Tracking</h1>
                    <h4>A place to manage all of your trade informations and actions</h4>
                    <h4>Do not forget to always using asset and risk management!!!!!</h4>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    {loading ? <Spinner /> : error !== "" ? <h1>{error}</h1> : <CoinsComponent data={data} />}
                </div>
            </div>
        </div>
    );
};

export default HomePage;