import Layout from './../../components/layout/layout';
import { useEffect, useState } from 'react';
import { SPersonService } from './../../service/service.person';
import { Link } from 'react-bootstrap/lib/Navbar';


export interface UsersProps { }

const Users: React.FunctionComponent<UsersProps> = () => {

    const [Users, setUsers] = useState([{
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        height: "",
        weight: "",
        color_of_body: "",
        color_of_hair: "",
    }]);

    const _PersonUsers = new SPersonService();
    const getUser = async () => {
        try {
            let res = await _PersonUsers.getAll();
            console.log(res);
            setUsers(res.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getUser()
    },[])
    
    return (
        <>
            <Layout>
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-sm bg-light w-100 p-3 d-flex align-items-start justify-content-around ">
                            <h1>Users Detail</h1>
                            <a 
                                href="createUser"
                                className="btn btn-outline-primary"
                            >
                                Add User
                            </a>
                        </nav>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Phone Number</th>
                                    <th>email</th>
                                    <th>height</th>
                                    <th>weight</th>
                                    <th>Color of_Body</th>
                                    <th>Color of_Hair</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Users.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.first_name}</td>
                                            <td>{item.last_name}</td>
                                            <td>{item.phone_number}</td>
                                            <td>{item.email}</td>
                                            <td>{item.height}</td>
                                            <td>{item.weight}</td>
                                            <td>{item.color_of_body}</td>
                                            <td>{item.color_of_hair}</td>
                                            <td>
                                                <button
                                                    className={"btn btn-warning"}
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className={"btn btn-danger"}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Users;