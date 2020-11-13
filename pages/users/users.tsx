import Layout from './../../components/layout/layout';
import React, { useEffect, useState } from 'react';
import { SPersonService } from './../../service/service.person';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateUser from './UpdateUser';
import Toastify from '../../components/others/toastify/toastify';
import RegisterModal from '../../components/others/modals/RegisterModal';


export interface UsersProps { }

const Users: React.FunctionComponent<UsersProps> = () => {

    const [Users, setUsers] = useState([{
        _id: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        height: "",
        weight: "",
        color_of_body: "",
        color_of_hair: "",
    }]);
    // End of UsersState
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
    }, []);
    // End of getAll data
    const [ExactId, setExactId] = useState("");
    const UserDeleteHandler = (ID: any) => {
        handleShow();
        setExactId(ID);
    }
    const DeleteUser = async (id: string) => {
        await _PersonUsers.delete(id);
        getUser();
        handleClose();
        notify();
    }
    // End of DeleteUser
    const [ showModal, setshowModal ] = useState(false)
    const [ExactEditId, setExactEditId] = useState("");
    const UserEditHandler = (ExactId: any) => {
        console.log(ExactId);
        setExactEditId(ExactId);
        setshowModal(true);
    }


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // End Modal Controler of DeleteUser
   
    const notify = () => {toast.success(
        "Changes made successfully", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })};
    // End of ToastContainer
    return (
        <>
            <Layout>
                <div className="container-fluid">
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
                                                    onClick={() => { UserEditHandler(item._id) }}
                                                    className={"btn btn-warning"}
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() => { UserDeleteHandler(item._id) }}
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
         
            <Modal
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title className={"text-danger"}>Attention !</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you wish to delete this item?
                    <br />
                    You can not return it back.
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="danger"
                        onClick={handleClose}
                    >
                        Cancel
                        </Button>
                    <Button
                        variant="success"
                        onClick={() => { DeleteUser(ExactId) }}
                    >
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <UpdateUser id={ExactEditId} show={showModal}/>
            <RegisterModal showModal={showModal} id={ExactEditId} />
            
            <Toastify />
        </>
    );
}

export default Users;