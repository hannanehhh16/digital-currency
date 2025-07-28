import React from 'react'
import aboutImg from "../assets/images/about.png"
export default function AboutUsPage() {
    return (
        <div className='m-4'>
            <div className="p-3 bg-info rounded-3">
                <h3>About Us</h3>
            </div>
            <div className="d-md-flex d-flex-column alight-item-center justify-content-center">
                <div className="d-flex alight-item-center justify-content-center m-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium accusantium ipsam rerum nulla, eum sit unde incidunt architecto dicta veniam, explicabo consequuntur modi est enim labore id corporis ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium accusantium ipsam rerum nulla, eum sit unde incidunt architecto dicta veniam, explicabo consequuntur modi est enim labore id corporis ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium accusantium ipsam rerum nulla, eum sit unde incidunt architecto dicta veniam, explicabo consequuntur modi est enim labore id corporis ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium accusantium ipsam rerum nulla, eum sit unde incidunt architecto dicta veniam, explicabo consequuntur modi est enim labore id corporis ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium accusantium ipsam rerum nulla, eum sit unde incidunt architecto dicta veniam, explicabo consequuntur modi est enim labore id corporis ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium accusantium ipsam rerum nulla, eum sit unde incidunt architecto dicta veniam, explicabo consequuntur modi est enim labore id corporis ducimus!</p>
                </div>
                <div className="d-flex alight-item-center justify-content-center">
                    <img className="about-img" src={aboutImg} alt="about" />
                </div>
            </div>
        </div>
    )
}
