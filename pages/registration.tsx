import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useState } from 'react';
import Layout from "../components/layout/layout";
import style from './../assets/styles/registration.module.scss';

interface registrationProps {

}
enum pageMode {
    SIGNIN = "SIGNIN",
    SIGNUP = "SIGNUP",
}

const Registration: React.FunctionComponent<registrationProps> = () => {
    const initialValueOfForm = {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        email: "",
    }
    const SubmitForm = async (e: any) => {
        alert()
    }
    const validationForm = Yup.object({
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
        email: Yup.string().required('Required'),
    })

    const [UserStatus, setUserStatus] = useState(pageMode.SIGNIN);

    const registerHandler = () => {
        setUserStatus(pageMode.SIGNIN)
    }
    const LoginHandler = () => {
        setUserStatus(pageMode.SIGNUP)
    }
    const SignIn = () => {
        return (
            <>
                <div className={`container w-50 ${style.mammad}`}>
                    <div className="row">
                        <div className="mt-4 mb-4 card col-12 p-3">
                            <h2 className="title text-center">
                                Login To Your Account!
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
                                            name={"username"}
                                            placeholder={"Username"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id=""
                                        />
                                        <small className="form-text text-danger">
                                            {errors.username && touched.username && errors.username}
                                        </small>
                                        <input
                                            className={"form-control mt-2"}
                                            type="text"
                                            name={"password"}
                                            placeholder={"Password"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id=""
                                        />
                                        <small className="form-text text-danger">
                                            {errors.password && touched.password && errors.password}
                                        </small>
                                        <br />
                                        <button
                                            className={"btn btn-success"}
                                            onClick={() => handleSubmit}
                                            type={"submit"}
                                        >
                                            Login
                                        </button>
                                        <hr />
                                        <p>
                                            Not a member?
                                            <a onClick={() => { registerHandler() }} > Register </a>
                                        </p>
                                    </>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const SignUp = () => {
        return (
            <>
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
                                            name={"firstname"}
                                            placeholder={"First Name"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id=""
                                        />
                                        <small className="form-text text-danger">
                                            {errors.firstname && touched.firstname && errors.firstname}
                                        </small>
                                        <input
                                            className={"form-control mt-2"}
                                            type="text"
                                            name={"lastname"}
                                            placeholder={"LastName"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id=""
                                        />
                                        <small className="form-text text-danger">
                                            {errors.lastname && touched.lastname && errors.lastname}
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
                                            name={"password"}
                                            placeholder={"Password"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id=""
                                        />
                                        <small className="form-text text-danger">
                                            {errors.password && touched.password && errors.password}
                                        </small>
                                        <br />
                                        <button
                                            className={"btn btn-success"}
                                            onClick={() => handleSubmit}
                                            type={"submit"}
                                        >
                                            Register
                                        </button>
                                        <hr />
                                        <p>
                                            Already have an account? 
                                            <a onClick={() => { LoginHandler() }}> Login </a>
                                        </p>
                                    </>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <Layout>
                {UserStatus === pageMode.SIGNIN ? SignUp() : SignIn()}
            </Layout>
        </>
    );
};
export default Registration;