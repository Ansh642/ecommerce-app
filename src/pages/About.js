import React from 'react'
import Aboutus from '../images/about.jpeg'

export default function About() {
  return (
    <div style={{minHeight:"70vh"}} className='flex flex-row gap-7 items-center w-11/12'>

      <div>
        <img src={Aboutus} alt="" className='mt-6 ml-5 w-[100%]'/>
      </div>

      <div className='w-[50%] text-xl font-medium mt-16'>
      Welcome to our vibrant online marketplace, where shopping meets convenience and style. At our Ecommerce Website, we pride ourselves on curating an extensive collection of high-quality products that cater to your diverse needs and desires. Whether you're seeking the latest fashion trends, cutting-edge electronics, or unique home decor, our user-friendly platform offers a seamless and enjoyable shopping experience. Committed to customer satisfaction, we prioritize reliability, security, and efficiency in every transaction. Explore our virtual aisles, discover exclusive deals, and embrace a world of possibilities right at your fingertips. Join us in redefining the art of online shopping as we strive to make every purchase a delightful journey for our valued customers.
      </div>


    </div>

  )
}
