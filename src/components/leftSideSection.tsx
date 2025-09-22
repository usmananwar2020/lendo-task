import React from 'react'
import Card from '../assets/wallet.png'
import Arrow from '../assets/rightArrow.png'
import Warning from '../assets/warning.png'
import Person from '../assets/person.png'
import CustomButton from '../shared/customButton'
const LeftSideSection = () => {
    return (
        <div className='flex flex-col gap-3 justify-center h-full'>
            <div key="card1" className='flex flex-col gap-4 justify-center items-center mx-6 p-4'>
                <div className='flex justify-center items-center gap-5 '>
                    <div>
                        <img src={Card} alt="card" />
                    </div>
                    <div>
                        <div className='font-semibold text-xl'>62,540 SAR</div>
                        <div className='text-sm'>Account Balance</div>
                    </div>
                    <div><img src={Arrow} alt="Arrow" /></div>
                </div>

                <div className='flex gap-3'>
                    <CustomButton label="Deposit" variant="primary" />
                    <CustomButton label="Widthdraw" variant="light" />
                </div>
                <div className='flex justify-center items-start gap-3 text-center text-sm text-gray-500'>
                    <div className='w-12 mt-2'>
                        <img src={Warning} alt="Warning" />
                    </div>
                    <p>
                        To withdraw more than <span className='font-semibold'>10,000 SAR</span> you need to <span className='font-semibold'>verify</span> your banking account.
                    </p>
                </div>
            </div>

            <hr className="border-t border-gray-200 mx-10" />

            <div key="card2" className='flex flex-col justify-center items-center mx-6 p-4 gap-2'>
                <div className='w-32 h-32 '>
                    <img src={Person} alt="Person" />
                </div>
                <p className='font-bold'>Why Should You Trust It?</p>

                <p className='text-center text-sm text-gray-500'>
                    Because of this and that. Anyway investing is very good.
                </p>
            </div>
        </div>
    )
}

export default LeftSideSection