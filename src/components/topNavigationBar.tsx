import Avatar from '../assets/Avatar.png'
import Notification from '../assets/notification.png'
const TopNavigationBar = () => {
    return (
        <div className='flex justify-between items-center mx-12 h-full border-b border-b-gray-300 px-8'>
            <div className='flex gap-8'>
                <p>Over View</p>
                <p>Invest</p>
                <p className='font-bold'>Auto Invest</p>
                <p>My Portfolio</p>
            </div>
            <div className='flex gap-5 items-center'>
                <p className='text-sm text-gray-500'>En</p>
                <div className='flex relative'>
                    <img src={Notification} alt="Notification" className='w-6 h-6'/>
                    <p className='bg-[#2D91FE] text-[7px] text-white absolute bottom-3 right-0 rounded-full w-3 h-3 flex justify-center items-center'>2</p>
                </div>
                <img src={Avatar} alt="Avatar" />
            </div>
        </div>
    )
}

export default TopNavigationBar