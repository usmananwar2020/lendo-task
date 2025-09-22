import Avatar from '../assets/Avatar.png'
import Notification from '../assets/notification.png'
const TopNavigationBar = () => {
    return (
        <div className='flex justify-between items-center lg:mx-12 h-full border-b border-b-gray-300 lg:px-8 px-4'>
            <div className='flex lg:gap-8 gap-2'>
                <p>Overview</p>
                <p>Invest</p>
                <p className="font-bold relative pb-1">
                    Auto-Invest
                    <span className="absolute left-0 -bottom-6 w-[20px] h-[2px] bg-[#2D91FE] rounded-b-full"></span>
                </p>
                <p>My Portfolio</p>
            </div>
            <div className='flex gap-5 items-center'>
                <p className='text-sm text-gray-500 lg:block hidden'>En</p>
                <div className='lg:flex relative hidden'>
                    <img src={Notification} alt="Notification" className='w-5 h-6' />
                    <p className='bg-[#2D91FE] text-[7px] text-white absolute bottom-0 -right-1 rounded-full w-3 h-3 flex justify-center items-center'>2</p>
                </div>
                <img src={Avatar} alt="Avatar" />
            </div>
        </div>
    )
}

export default TopNavigationBar