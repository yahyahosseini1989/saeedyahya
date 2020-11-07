import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import Layout from "../../components/layout/layout";
import { SPersonService } from "../../service/service.person";


export interface CreateUserProps {

}

const CreateUser: React.FunctionComponent<CreateUserProps> = () => {
    const [newUser, setnewUser] = useState([{
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        height: "",
        weight: "",
        color_of_body: "",
        color_of_hair: "",
    }]);

    const initialValueOfForm = {
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        height: "",
        weight: "",
        color_of_body: "",
        color_of_hair: "",
    }
    const validationForm = Yup.object({
        first_name: Yup.string().required('Required'),
        last_name: Yup.string().required('Required'),
        email: Yup.string().required('Required'),
    })
    const SubmitForm = (e: any) => {
        setnewUser(e);
    }


    // const _PersonUsers = new SPersonService();
    // const createUser = async () => {
    //     let res = await _PersonUsers.create(SubmitForm());
    // }

    // useEffect(() => {
        
    // },[])


    return (
        <Layout>
            <div className="container w-50">
                <div className="row">
                    <div className="mt-4 mb-4 card col-12 p-3">
                        <h2 className="title text-center">
                            Create An Account!
                        </h2>
                        <Formik
                            initialValues={initialValueOfForm}
                            onSubmit={(e) => SubmitForm(e)}
                            validationSchema={validationForm}
                        >
                            {({ handleSubmit, handleChange, handleBlur, errors, touched }) => (
                                <>
                                    <input
                                        className={"form-control mt-2"}
                                        type="text"
                                        name={"first_name"}
                                        placeholder={"First Name"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id=""
                                    />
                                    <small className="form-text text-danger">
                                        {errors.first_name && touched.first_name && errors.first_name}
                                    </small>
                                    <input
                                        className={"form-control mt-2"}
                                        type="text"
                                        name={"last_name"}
                                        placeholder={"LastName"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id=""
                                    />
                                    <small className="form-text text-danger">
                                        {errors.last_name && touched.last_name && errors.last_name}
                                    </small>
                                    <input
                                        className={"form-control mt-2"}
                                        type="text"
                                        name={"phone_number"}
                                        placeholder={"Phone Number"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id=""
                                    />
                                    <small className="form-text text-danger">
                                        {errors.phone_number && touched.phone_number && errors.phone_number}
                                    </small>
                                    <input
                                        className={"form-control mt-2"}
                                        type="email"
                                        name={"email"}
                                        placeholder={"Email"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id=""
                                    />
                                    <small className="form-text text-danger">
                                        {errors.email && touched.email && errors.email}
                                    </small>
                                    <input
                                        className={"form-control mt-2"}
                                        type="text"
                                        name={"height"}
                                        placeholder={"height"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id=""
                                    />
                                    <input
                                        className={"form-control mt-2"}
                                        type="text"
                                        name={"weight"}
                                        placeholder={"weight"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id=""
                                    />
                                    <input
                                        className={"form-control mt-2"}
                                        type="text"
                                        name={"color_of_body"}
                                        placeholder={"Color of Body"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id=""
                                    />
                                    <input
                                        className={"form-control mt-2"}
                                        type="text"
                                        name={"color_of_hair"}
                                        placeholder={"Color of Hair"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id=""
                                    />
                                    <input
                                        className={"form-control mt-2"}
                                        type="text"
                                        name={"height"}
                                        placeholder={"height"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id=""
                                    />
                                    <br />
                                    <button
                                        className={"btn btn-success"}
                                        onClick={() => handleSubmit()}
                                        type={"submit"}
                                    >
                                        Register
                                    </button>
                                </>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default CreateUser;