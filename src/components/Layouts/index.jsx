import Navbar from "../../../../react/src/components/Navbar"
import Sidebar from "../Sidebar"


const Layouts = (props) => {
    const { children } = props
    return (
        <div className="flex flex-row w-full" >
            <Sidebar />
            <div className="flex flex-col w-full" >
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Layouts