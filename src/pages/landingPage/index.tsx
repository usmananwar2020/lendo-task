import React, { useState } from 'react'
import Arrow from '../../assets/downArrow.png'
import Bargraph from '../../assets/bargraph.png'
import Donutchart from '../../assets/donutchart.png'
import Help from '../../assets/help.png'
import CustomButton from '../../shared/customButton';

const LandingPage = () => {
    const [enabled, setEnabled] = useState(false);
    return (
        <div className='sm:mx-12 mx-6'>
            {/* Header Section */}
            <div className='flex justify-between items-center sm:px-4 py-4'>
                <p className='text-2xl font-bold'>Auto Investment</p>
                <div className='flex gap-4 items-center'>
                    <p className='text-gray-500 text-sm'>{
                        enabled ? "Active" : "Inactive"
                    }</p>

                    <div
                        onClick={() => setEnabled(!enabled)}
                        className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${enabled ? "bg-[#80CB17]" : "bg-gray-300"
                            }`}
                    >
                        <div
                            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${enabled ? "translate-x-3" : "translate-x-0"
                                }`}
                        />
                    </div>
                </div>
            </div>
            {/* Status card */}
            <div className='flex sm:flex-row flex-col justify-between items-center p-6 border border-gray-300 rounded-lg'>
                <div className='flex flex-col gap-3 bg-[#2D91FE] text-white p-4 rounded-lg font-bold w-48'>
                    <p> Contervation</p>
                    <p className='text-3xl mt-2'>10-14%</p>
                    <p className='font-normal'>Interest Rate</p>
                </div>
                <div className='w-full sm:px-8 sm:mt-0 mt-6'>
                    <div className='flex justify-between gap-8 mb-4'>
                        <div className='text-left'><p className='text-[#80CB17] font-bold'>Active</p> <p className='text-gray-500 text-sm'>Status</p></div>
                        <div className='text-left'><p className='font-bold'>1500SAR</p> <p className='text-gray-500 text-sm '>Max. Invertment</p></div>
                        <div className='text-left sm:w-52'><p className='font-bold'>26</p> <p className='text-gray-500 text-sm'>Lons Founded</p></div>

                    </div>
                    <div className='flex sm:flex-row flex-col justify-between gap-4 mb-4 mt-10'>
                        <p className='text-gray-500 text-sm text-left'>* Strategy started at 20th March 2021</p>
                        <div className='flex gap-3'>
                            <CustomButton label="Stop" variant="danger" />
                            <CustomButton label="Change Settings" variant="light" />
                        </div>
                    </div>
                </div>

            </div>
            {/* Chart Section */}
            <div className='flex sm:flex-row flex-col justify-center items-center gap-5 mt-12'>
                <div className='flex flex-col flex-1 sm:h-80 w-full gap-6 p-6 border border-gray-300 rounded-lg' >
                    <div className='flex items-center gap-2'>
                        <p className='font-bold text-lg text-left '>Invested</p>
                        <div><img src={Help} alt="Arrow" /></div>
                    </div>
                    <div><img src={Bargraph} alt="Bargraph" /></div>
                    <div className='flex gap-6 justify-center items-center'>
                        <div className='flex justify-center items-center gap-2 '>
                            <p className='w-2 h-2 rounded-full mt-1 bg-[#2D91FE]'></p>
                            <p>Spent</p>
                        </div>
                        <div className='flex justify-center items-center gap-2 '>
                            <p className='w-2 h-2 rounded-full mt-1 bg-[#4BDFFF]'></p>
                            <p>Expected</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col flex-1 sm:h-80 w-full gap-6 p-6 border border-gray-300 rounded-lg' >
                    <p className='font-bold text-lg text-left w-48'>Excepted Risk Score Distribution</p>
                    <div className='flex gap-12 justify-center items-center'>
                        <div><img src={Donutchart} alt="Bargraph" /></div>
                        <div className='flex flex-col gap-6 justify-center items-center'>
                            <div>
                                <div className='flex justify-start items-center gap-2 '>
                                    <p className='w-4 h-4 rounded-full bg-[#2D91FE]'></p>
                                    <p>A - 45.7%</p>
                                </div>
                                <div className='flex justify-start items-center gap-2 '>
                                    <p className='w-4 h-4 rounded-full bg-[#4BDFFF]'></p>
                                    <p>B - 51.5%</p>
                                </div>
                                <div className='flex justify-start items-center gap-2 '>
                                    <p className='w-4 h-4 rounded-full bg-[#FFC359]'></p>
                                    <p>C - 23.2%</p>
                                </div>
                                <div className='flex justify-start items-center gap-2 '>
                                    <p className='w-4 h-4 rounded-full bg-[#FF6769]'></p>
                                    <p>D - 51.5%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* FAQ Section */}
            <div className='mt-12 text-left'>
                <p className='text-2xl font-bold'>You Might Want to Know</p>
                <div className='flex justify-between items-center border-b border-b-gray-300 h-20 mt-2'>
                    <p>Why should I trust this tool?</p>
                    <div><img src={Arrow} alt="Arrow" /></div>
                </div>
                <div className='flex justify-between items-center border-b border-b-gray-300 h-20 mt-2'>
                    <p>What risks are related to investments?</p>
                    <div><img src={Arrow} alt="Arrow" /></div>
                </div>
                <div className='flex justify-between items-center h-20 mt-2'>
                    <p>What is the Auto-Investment?</p>
                    <div><img src={Arrow} alt="Arrow" /></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage