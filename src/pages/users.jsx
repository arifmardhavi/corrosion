import { Link } from "react-router-dom"
import Layouts from "../components/Layouts"
import DataTable from "react-data-table-component"
import { useEffect, useState } from "react"
import { addUsers, getAllUsers } from "../services/users.services"


const Users = () => {
    const [users, setUsers] = useState([])
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
    const roleUSers = (dataUsers) => {
        let IsRole = ""
        let IsColor = ""
        if (dataUsers.role === 1) {
            IsRole = "Admin"
            IsColor = "badge-error"
        }else if (dataUsers.role === 2) {
            IsRole = "Operator"
            IsColor = "badge-success"
        }else if (dataUsers.role === 3) {
            IsRole = "Inspector"
            IsColor = "badge-info"
        }
        return (
            <div className={`badge ${IsColor} badge-md text-white`} >
                {IsRole}
            </div>
        )
    }
    const columns = [
        {
            name: 'No',
            selector: (row, index) => index + 1,
            sortable: true,
            width: "4rem"
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Role',
            selector: roleUSers,
            width: "10rem"
        },
        {
            name: 'Action',
            selector: ActionTable,
            width: "10rem"
        },
    ]

    useEffect(() => {
        getAllUsers((data) => {
            setUsers(data)
        })
    }, [])

    const handleAddUSers = (event) => {
        event.preventDefault()
        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            role: event.target.role.value
        }
        addUsers(data, () => {
            getAllUsers((data) => {
                setUsers(data)
                document.getElementById('add_users').close()
                alert('Pengguna berhasil ditambahkan')
                
            })
        })
    }
    
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
                            <h2 className="card-title">Pengguna</h2>
                            <button className="btn btn-sm md:btn-md btn-info text-white text-sm md:text-md" onClick={()=>document.getElementById('add_users').showModal()}>Tambah Pengguna</button>
                           
                            {/* MODAL ADD USERS */}
                            <dialog id="add_users" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                    <h3 className="font-bold text-lg">Tambah Pengguna</h3>
                                    <form method="post" onSubmit={(e) => handleAddUSers(e)}>
                                        <div className="form-control my-2">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control my-2">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control my-2">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control my-2">
                                            <label className="label">
                                                <span className="label-text">Role</span>
                                            </label>
                                            <select name="role" className="select select-bordered">
                                                <option value="1">Admin</option>
                                                <option value="2">Operator</option>
                                                <option value="3" selected>Inspector</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-row justify-end pt-2">
                                            <button type="submit" className="btn btn-info text-white w-full">Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>
                        <div className="flex flex-col" >
                            <DataTable 
                                columns={columns} 
                                data={users}
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