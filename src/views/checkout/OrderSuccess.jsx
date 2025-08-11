import React from 'react'
import { Boxer } from "../../components/Boxer"
import { Button } from "@/components/ui/button"

export const OrderSuccess = () => {
    return (
        <Boxer className="flex flex-col items-center">
            <div className="p-2 bg-white max-w-160  h-fit w-full text-center ">
                <section className="mt-5 p-2 bg-white max-w-160  h-fit w-full text-center ">
                    <div>Thanks for your order!</div>
                    <div>The order confirmation has been sent to example@gmail.com</div>
                </section>
                <section className="mt-5 px-10 bg-white max-w-160  h-fit w-full text-left ">
                    <div>Transaction Date</div>
                    <div>Friday, July 11,2025(GMT+7)</div>
                    <div>Payment Method</div>
                    <div>Prompt pay</div>
                    <div>Shipping Method</div>
                    <div>Express delivery (1-3 business days)</div>
                </section>
                <section className="mt-5 px-10 py-2 bg-white max-w-160  h-fit w-full text-center ">
                    <div className='flex justify-start'>TRACK ORDER</div>
                    <div>
                        <div className='flex justify-between'>
                            <div>
                                <div>Your Order</div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <div>Healthy Chicken Breast Larb</div>
                                <div>X1</div>
                            </div>
                            <div>
                                <div>THB 300</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-10 py-2 bg-white max-w-160  h-fit w-full text-center ">
                    <div>
                        <div className='flex justify-between'>
                            <div>Subtotal</div>
                            <div>THB 300</div>
                        </div>
                        <div className='flex justify-between'>
                            <div>Shipment cost</div>
                            <div>THB 40</div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='font-bold'>Grand Total</div>
                            <div>THB 280</div>
                        </div>
                    </div>
                </section>
                <div className="mt-3 mb-5 flex flex-col justify-center">
                <Button variant="green">Click me</Button>
                </div>
            </div>
        </Boxer>
    )
}