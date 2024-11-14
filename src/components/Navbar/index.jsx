import { BsSearch } from "react-icons/bs"
import { IoMdNotificationsOutline } from "react-icons/io"
const Navbar = () => {
    return (
        <nav className="flex flex-row h-14 px-5 py-3 shadow-sm w-full">
            <form action="" className="w-full flex flex-row items-center">
            <BsSearch className="text-gray-300 mx-3" />
                <input type="text" placeholder="Global Search" className="w-full border-0 outline-0" />
            </form>
            <div className="flex flex-row items-center text-xl font-semibold text-blue-900 cursor-pointer hover:text-blue-700 group">
                <IoMdNotificationsOutline />
                <span className="absolute bg-white top-28 right-1 text-sm font-normal z-50 text-blue-950 shadow-md w-0 p-0 rounded-md overflow-hidden duration-300 group-hover:w-fit group-hover:p-2 group-hover:top-16" >
                    Notification
                </span>
            </div>
        </nav>
    )
}

export default Navbar