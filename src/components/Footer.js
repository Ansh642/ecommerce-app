import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='flex flex-col bg-richblack-800 items-center mt-16 p-2 font-semibold'>

        <p className='text-white mx-auto text-3xl '>All Rights Reserved ©️ E-Commerce</p>

        <div className='text-white flex flex-row mx-auto mt-3 gap-3 items-center text-lg '>

        <Link to='/about' className=' flex flex-row'>
            About
        </Link>

        |

        <Link to='/contact' className='flex flex-row '>
            Contact
        </Link>
        |

        <Link to='/policy'>
            Privacy Policy
        </Link>

        </div>
    </div>
  )
}
