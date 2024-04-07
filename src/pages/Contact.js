import React from 'react'
import contactUs from '../images/contact.jpeg'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

export default function Contact() {
  return (
    <div style={{minHeight:"70vh"}} className='flex flex-row w-11/12 items-center mx-auto gap-9'>

        <div>
            <img src={contactUs} alt="" />
        </div>

        <div className='mb-10 flex flex-col'>
          <div className="bg-richblack-800 p-4 rounded-md text-white text-3xl text-center mb-12"> CONTACT US </div>

        <div className=''>
          <p className="text-justify text-xl mb-5">
            Any query and Info about product,
             feel free to call anytime we are 24X7
            available.
          </p>
          <p className="mt-3 flex flex-row items-center text-xl">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3 flex flex-row items-center text-xl">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3 flex flex-row items-center text-xl">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>

          </div>

        </div>
        
    </div>
  )
}
