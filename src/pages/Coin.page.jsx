import React from 'react'
import { useParams } from 'react-router-dom';
import {detailsUrl} from "../constants/api";
import { useState , useEffect } from 'react';
import axios from 'axios';
import Spinner from "../components/spinner/Spinner";
import CoinDetailsComponent from "../components/coins/CoinDetails.component"
import "../App.css";

export default function CoinPage() {
    const ParamObject = useParams();
    const Url = detailsUrl(ParamObject.id);

    const [coin, SetCoin] = useState({});
    const [loading, SetLoading] = useState(false);
    const [error, SetError] = useState("");

    useEffect(() => {
        SetLoading(true);
        axios(Url)
            .then((response) => {
                SetLoading(false);
                SetCoin(response.data); // Use response.data for axios
            })
            .catch((error) => {
                SetLoading(false);
                SetError("An error occured");
            });
    }, [Url]);

    return (
        <div className='coin'>
            <div className="container">
                <div className="col-12">
                    {loading ? <Spinner /> : error !== "" ? <h1>{error}</h1> : <CoinDetailsComponent coin={coin}/>}
                </div>
            </div>
        </div>
    );
}
