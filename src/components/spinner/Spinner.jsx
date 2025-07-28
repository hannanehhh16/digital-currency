import React from 'react'
import SpinnerImg from "../../assets/images/spinner.gif"

export default function Spinner() {
    return (
        <div className='d-flex alight-item-center justify-content-center'>
            <img src={SpinnerImg} alt="" />
        </div>
    )
}
