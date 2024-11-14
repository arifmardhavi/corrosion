import { Link } from "react-router-dom"
import Layouts from "../components/Layouts"
import DataTable from "react-data-table-component"


const Users = () => {
    const ActionTable = (dataUsers) => {
        return (
            <div className="flex flex-col">
                <Link to={`/edit/${dataUsers.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-center my-1 rounded">
                    Edit
                </Link>
                <Link to={`/delete/${dataUsers.id}`} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 text-center my-1 rounded">
                    Delete
                </Link>
            </div>
        );
    };
    const statusUSers = (dataUsers) => {
        let IsStatus = ""
        let IsColor = ""
        if (dataUsers.status === 1) {
            IsStatus = "Admin"
            IsColor = "badge-error"
        }else if (dataUsers.status === 2) {
            IsStatus = "Operator"
            IsColor = "badge-success"
        }else if (dataUsers.status === 3) {
            IsStatus = "Inspector"
            IsColor = "badge-info"
        }
        return (
            <div className={`badge ${IsColor} badge-md text-white`} >
                {IsStatus}
            </div>
        )
    }
    const columns = [
        {
            name: 'No',
            selector: row => row.id,
            sortable: true,
            width: "4rem"
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Age',
            selector: row => row.age,
            sortable: true,
            width: "5rem"
        },
        {
            name: 'Status',
            selector: statusUSers,
            sortable: true,
            width: "10rem"
        },
        {
            name: 'Action',
            selector: ActionTable,
            sortable: true,
            width: "10rem"
        },
    ]

    

    const dataUsers = [
        { id: 1, name: 'John Doe', age: 25, status: 1 },
        { id: 2, name: 'Jane Doe', age: 30, status: 2 },
        { id: 3, name: 'Michael Smith', age: 28, status: 3 },
        { id: 4, name: 'Emily Johnson', age: 22, status: 2 },
        { id: 5, name: 'Chris Evans', age: 32, status: 2 },
        { id: 6, name: 'Olivia Brown', age: 27, status: 3 },
        { id: 7, name: 'Sophia Wilson', age: 24, status: 3 },
        { id: 8, name: 'Daniel Martinez', age: 29, status: 2 },
        { id: 9, name: 'Mia Anderson', age: 26, status: 2 },
        { id: 10, name: 'Alexander Taylor', age: 31, status: 3 },
        { id: 11, name: 'Amelia Moore', age: 23, status: 2 },
        { id: 12, name: 'Elijah Thomas', age: 27, status: 3 },
        { id: 13, name: 'Isabella Jackson', age: 30, status: 3 },
        { id: 14, name: 'William White', age: 34, status: 2 },
        { id: 15, name: 'Ava Harris', age: 21, status: 3 },
        { id: 16, name: 'James Lewis', age: 29, status: 3 },
        { id: 17, name: 'Charlotte Clark', age: 25, status: 2 },
        { id: 18, name: 'Benjamin Walker', age: 33, status: 3 },
        { id: 19, name: 'Mason Hall', age: 26, status: 3 },
        { id: 20, name: 'Lucas Young', age: 28, status: 2 }
    ]
    
    return (
        <Layouts>
            <div className="flex flex-col w-full p-5">
                <div className="breadcrumbs text-sm text-slate-500 py-3">
                    <ul>
                        <li>
                            <Link to={'/'}>Dashboard</Link>
                        </li>
                        <li>Users</li>
                    </ul>
                </div>
                <div className="card min-h-screen shadow-md border p-2 sm:p-4">
                    <div className="card-body">
                        <div className="flex flex-row justify-between items-center" >
                            <h2 className="card-title">Users</h2>
                            <button className="btn btn-md btn-info text-white text-md" onClick={()=>document.getElementById('add_users').showModal()}>Tambah User</button>

                            {/* MODAL ADD USERS */}
                            <dialog id="add_users" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click the button below to close</p>
                                    <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn">Close</button>
                                    </form>
                                    </div>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>
                        <div className="flex flex-col" >
                            <DataTable 
                                columns={columns} 
                                data={dataUsers}
                                pagination
                                highlightOnHover
                                fixedHeader 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}

export default Users