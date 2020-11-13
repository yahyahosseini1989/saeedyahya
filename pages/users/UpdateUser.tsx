import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { SPersonService } from '../../service/service.person';


export interface UpdateUserProps {
    id: string;
    show: boolean;
}
 
const UpdateUser: React.FunctionComponent<UpdateUserProps> = (props:UpdateUserProps) => {
    const [ExactUserData, setExactUserData] = useState([{
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
    const validationForm = Yup.object({
        first_name: Yup.string().required('Required'),
        last_name: Yup.string().required('Required'),
        email: Yup.string().required('Required'),
    })
    const SubmitForm = async (EditedUserData: any) => {
        console.log(EditedUserData);
        EditUser(EditedUserData);
    }
    const UserEditHandler = (UserData: any) => {
        console.log(UserData)
        setExactUserData(UserData);
        EditModalShow();
    }

    const [byID, setbyID] = useState("");
    const _PersonUsers = new SPersonService();
    const getById = async ( ) => {
        let res = await _PersonUsers.byId(props.id);
        setbyID(res.data);
        console.log(res.data)
    }

    useEffect(() => {
        getById()
    }, []);


    const EditUser = async (data: any) => {
        
        // await _PersonUsers.update(data);
        // getUser();
    }
    // End of EditUser



    const [EditModal, setEditModal] = useState(false);
    const EditModalClose = () => setEditModal(false);
    const EditModalShow = () => setEditModal(true);
    // End of Modal Controler EditUser
    return ( 
        <>
            <Modal
                show={props.show}
                onHide={EditModalClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        <div className="container">
                            <div className="row">
                                <div className="mt-12 mb-12 card col-12 p-3">
                                    <h6 className="title text-center">
                                        Edit your information, please.
                                    </h6>
                                    {ExactUserData.map(item => {
                                        return (
                                            <div>
                                                <Formik
                                                    initialValues={ExactUserData}
                                                    onSubmit={(e) => SubmitForm(e)}
                                                    validationSchema={validationForm}
                                                >
                                                    {({ handleSubmit, handleChange, handleBlur }) => (
                                                        <>
                                                            <input
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={item.first_name}
                                                                className={"form-control mt-2"}
                                                                type="text"
                                                                name={item.first_name}
                                                                placeholder={item.first_name}
                                                            />
                                                            <input
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={item.last_name}
                                                                className={"form-control mt-2"}
                                                                type="text"
                                                                name={item.last_name}
                                                                placeholder={item.last_name}
                                                            />
                                                            <input
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={item.phone_number}
                                                                className={"form-control mt-2"}
                                                                type="text"
                                                                name={item.phone_number}
                                                                placeholder={item.phone_number}
                                                            />
                                                            <input
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={item.email}
                                                                className={"form-control mt-2"}
                                                                type="text"
                                                                name={item.email}
                                                                placeholder={item.email}
                                                            />
                                                            <input
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={item.height}
                                                                className={"form-control mt-2"}
                                                                type="text"
                                                                name={item.height}
                                                                placeholder={item.height}
                                                            />
                                                            <input
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={item.weight}
                                                                className={"form-control mt-2"}
                                                                type="text"
                                                                name={item.weight}
                                                                placeholder={item.weight}
                                                            />
                                                            <input
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={item.color_of_body}
                                                                className={"form-control mt-2"}
                                                                type="text"
                                                                name={item.color_of_body}
                                                                placeholder={item.color_of_body}
                                                            />
                                                            <input
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={item.color_of_hair}
                                                                className={"form-control mt-2"}
                                                                type="text"
                                                                name={item.color_of_hair}
                                                                placeholder={item.color_of_hair}
                                                            />
                                                            <hr />
                                                            <Button
                                                                variant="danger"
                                                                onClick={EditModalClose}
                                                            >
                                                                Cancel
                                                            </Button>
                                                            <button
                                                                className={"btn btn-success"}
                                                                onClick={() => handleSubmit()}
                                                                type={"submit"}
                                                            >
                                                                Edit
                                                            </button>
                                                        </>
                                                    )}
                                                </Formik>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    }
                </Modal.Body>
            </Modal>
        </>
     );
}
 
export default UpdateUser;