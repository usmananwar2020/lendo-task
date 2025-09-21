import React, { useState } from 'react'

const LandingPage = () => {
    const [enabled, setEnabled] = useState(false);
    return (
        <div className='mx-12'>
            <div className='flex justify-between items-center p-4'>
                <p className='text-2xl font-bold'>Auto Investment</p>
                <div
                    onClick={() => setEnabled(!enabled)}
                    className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${enabled ? "bg-[#80CB17]" : "bg-gray-300"
                        }`}
                >
                    <div
                        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${enabled ? "translate-x-6" : "translate-x-0"
                            }`}
                    />
                </div>
            </div>
            <div className='flex justify-between items-center p-6 border border-gray-300 rounded-lg'>
                <div className='flex flex-col gap-3 bg-[#2D91FE] text-white p-4 rounded-lg font-bold w-40'>
                    <p> Contervation</p>
                    <p className='text-3xl mt-2'>10-14%</p>
                    <p className='font-normal'>Interest Rate</p>
                </div>
                <div className='w-full px-8'>
                    <div className='flex justify-around gap-8 mb-4'>
                        <div><p className='text-[#80CB17] font-semibold'>Active</p> <p className='text-gray-500 text-sm'>Status</p></div>
                        <div><p className='font-semibold'>1500SAR</p> <p className='text-gray-500 text-sm '>Max. Invertment</p></div>
                        <div><p className='font-semibold'>26</p> <p className='text-gray-500 text-sm'>Lons Founded</p></div>
                        
                    </div>
                    <div className='flex justify-around gap-8 mb-4 mt-10'>
                        <p className='text-gray-500 text-sm'>* Strategy started at 20th March 2021</p>
                        <div>buttons</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LandingPage