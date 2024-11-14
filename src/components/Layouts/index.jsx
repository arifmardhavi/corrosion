import Navbar from "../../../../react/src/components/Navbar"
import Sidebar from "../Sidebar"


const Layouts = (props) => {
    const { children } = props
    return (
        <div className="flex flex-row max-w-full" >
            <Sidebar />
            <div className="flex flex-col w-screen max-w-screen" >
                <Navbar />
                {children}
            </div>
        </div>
    )
}


export default Layouts