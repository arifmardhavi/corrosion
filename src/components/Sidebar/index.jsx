import { LuLayoutDashboard, LuMail, LuMoreHorizontal, LuUser } from 'react-icons/lu'
import { BsChatLeft, BsSuitcaseLg, BsViewList } from 'react-icons/bs'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    const icons = [
        {
            name: 'Dashboard',
            icon: <LuLayoutDashboard />,
            link: '/'
        },
        {
            name: 'Users',
            icon: <LuUser />,
            link: '/users'
        },
        {
            name: 'Barang',
            icon: <BsSuitcaseLg />,
            link: '/barang'

        },
    ]

    const [open, setOpen] = useState(true)

    return (
        <aside className={`shadow-md min-h-screen duration-500 ${open ? "w-64" : "w-16"} text-blue-900 flex items-center flex-col`}>
            {/* header */}
            <div className={`flex flex-row ${!open ? "justify-center" : "justify-between pl-9"} items-center py-3 px-3  w-full`}>
                <Link to={'/'}><h1 className={`text-xl font-semibold ${!open && "hidden"}`}>Admin</h1></Link>
                <GiHamburgerMenu className='cursor-pointer' size={24} onClick={() => setOpen(!open)} />
            </div>
            <div className="divider divide-secondary"></div>
            {/* body */}
            <ul className='w-full'>
                {icons.map((icon, index) => 
                <Link to={icon.link} key={index}>
                    <li key={index} className={`flex flex-row ${!open ? "justify-center" : "pl-9"} items-center py-3 px-3  hover:bg-slate-50 cursor-pointer hover:text-blue-500 group `}>
                        {icon.icon}
                        <span className={` ${!open ? "w-0 translate-x-24" : "ml-4"} duration-500 overflow-hidden`}>{icon.name}</span>
                        <span className={`${open && "hidden"} text-blue-950 bg-white absolute left-32 shadow-md rounded-md w-0 p-0 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16 duration-300 z-50 `}>
                            {icon.name}
                        </span>
                    </li>
                </Link>
                )}
                
            </ul>

        </aside>
    )
}

export default Sidebar