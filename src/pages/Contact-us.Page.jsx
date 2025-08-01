import React from 'react'
import contactImg from "../assets/images/contact.png"
import "../App.css"

export default function ContactUsPage() {
    return (
        <div className='contactus'>
        <div className='container m-4'>
            <div className="row">
                <div className='col-12 p-3 bg-info rounded-3'>
                    <h3>Contact Us</h3>
                </div>
            </div>
            <div className="row alight-item-center">
                <div className="col-md-7">
                    <div className="mt-3">
                        <h3 className='text-primary my-4'>How to contact us</h3>
                        <h5 className='m-2'>+98 912 555 5555</h5>
                        <h5 className='m-2'>+98 912 555 5555</h5>
                        <h5 className='m-2'>test@nnhvhhc.com</h5>
                    </div>
                    <div>
                        <label className="mt-4 mb-1">Youre Name</label>
                        <input type="text" className='form-control' placeholder='please write your name' />
                    </div>
                    <div>
                        <label className="mt-4 mb-1">Youre Message</label>
                        <input type="text" className='form-control' placeholder='please write your message' />
                    </div>
                    <div>
                        <button className='btn btn-outline-primary ms-3 mt-4'>Send</button>
                    </div>
                </div>
                <div className="col-md-5 text-center">
                    <img className="about-img" src={contactImg} alt="about" />
                </div>
            </div>
        </div>
        </div>
    )
}
