"use client"

import React, { useState } from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'

const PaymentPage = ({ username }) => {
    // const { data: session } = useSession()

    const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])



    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }


    const pay = async (amount) => {
        // Get the order Id 
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        var rzp1 = new Razorpay(options);
        rzp1.open();
    }


    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className="cover w-full relative">
                <img className="w-full h-[350px] object-cover shadow-blue-700 shadow-sm" src="https://starwalk.space/gallery/images/what-is-space/1140x641.jpg" alt="profile-bg-pic" />
                <div className="absolute -bottom-18 left-1/2 -translate-x-1/2 w-[150px] h-[150px] border-2 border-white rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://img.magnific.com/free-photo/little-cat-sitting-grass_1150-17019.jpg?semt=ais_hybrid&w=740&q=80" alt="profile-pic" />
                </div>
            </div>
            <div className="info flex justify-center items-center my-24 mb-32 flex-col gap-2">
                <div className='font-bold text-lg'>
                    @{username}
                </div>
                <div className='text-slate-400'>
                    creating Animated art for VTT's
                </div>
                <div className='text-slate-400'>
                    9,719 members . 82 posts . $15,450/release
                </div>
                <div className="payment flex gap-3 w-[80%] mt-11">
                    <div className="supporters w-1/2 bg-slate-900 rouned-lg text-white p-10">
                        <h2 className='text-2xl font-bold my-5'>Supporters</h2>
                        <ul className="mx-5 text-lg">
                            <li className="my-4 flex gap-2 items-center">
                                <img width={33} height={33} src="avatar.gif" alt="user avatar" />
                                <span>
                                    Shubham donated <span>₹30</span>with a message "I support you bro love you"
                                </span>
                            </li>
                            <li className="my-4 flex gap-2 items-center">
                                <img width={33} height={33} src="avatar.gif" alt="user avatar" />
                                <span>
                                    Shubham donated <span>₹30</span>with a message "I support you bro love you"
                                </span>
                            </li>
                            <li className="my-4 flex gap-2 items-center">
                                <img width={33} height={33} src="avatar.gif" alt="user avatar" />
                                <span>
                                    Shubham donated <span>₹30</span>with a message "I support you bro love you"
                                </span>
                            </li>
                            <li className="my-4 flex gap-2 items-center">
                                <img width={33} height={33} src="avatar.gif" alt="user avatar" />
                                <span>
                                    Shubham donated <span>₹30</span>with a message "I support you bro love you"
                                </span>
                            </li>
                            <li className="my-4 flex gap-2 items-center">
                                <img width={33} height={33} src="avatar.gif" alt="user avatar" />
                                <span>
                                    Shubham donated <span>₹30</span>with a message "I support you bro love you"
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
                        <div className="flex gap-2 flex-col">
                            <div>
                                <input type="text" className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Name' />
                            </div>
                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Message' />
                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800 ' placeholder='Enter Amount' />
                            <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-3 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Pay</button>
                        </div>
                        <div className="flex gap-2 mt-5">
                            <button className='bg-slate-800 p-3 rounded-lg'>Pay₹10</button>
                            <button className='bg-slate-800 p-3 rounded-lg'>Pay₹20</button>
                            <button className='bg-slate-800 p-3 rounded-lg'>Pay₹50</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage