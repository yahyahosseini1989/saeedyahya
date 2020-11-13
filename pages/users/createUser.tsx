import { Formik } from "formik";
import * as Yup from 'yup';
import Layout from "../../components/layout/layout";
import { SPersonService } from "../../service/service.person";
import { History } from "history";

export interface CreateUserProps {
    history: History;
}

const CreateUser: React.FunctionComponent<CreateUserProps> = (props) => {

    const _PersonUsers = new SPersonService();
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

    const SubmitForm = async (value: any) => {
        await _PersonUsers.create(value);
        props.history.push("/users/users")
    }




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
                                    <div className="form-group">
                                        <label htmlFor="first_name">First Name</label>
                                        <input
                                            className={"form-control"}
                                            type="text"
                                            name={"first_name"}
                                            placeholder={"First Name"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="first_name"
                                        />
                                        <small className="form-text text-danger">
                                            {errors.first_name && touched.first_name && errors.first_name}
                                        </small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="last_name">Last Name</label>
                                        <input
                                            className={"form-control"}
                                            type="text"
                                            name={"last_name"}
                                            placeholder={"Last Name"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="last_name"
                                        />
                                        <small className="form-text text-danger">
                                            {errors.last_name && touched.last_name && errors.last_name}
                                        </small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone_number">Phone Number</label>
                                        <input
                                            className={"form-control"}
                                            type="text"
                                            name={"phone_number"}
                                            placeholder={"Phone Number ( example: 09101411368 )"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="phone_number"
                                        />
                                        <small className="form-text text-danger">
                                            {errors.phone_number && touched.phone_number && errors.phone_number}
                                        </small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            className={"form-control"}
                                            type="email"
                                            name={"email"}
                                            placeholder={"Email ( example@gmail.com )"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="email"
                                        />
                                        <small className="form-text text-danger">
                                            {errors.email && touched.email && errors.email}
                                        </small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="height">Height</label>
                                        <input
                                            className={"form-control"}
                                            type="text"
                                            name={"height"}
                                            placeholder={"Height ( cm )"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="height"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="weight">Weight</label>
                                        <input
                                            className={"form-control"}
                                            type="text"
                                            name={"weight"}
                                            placeholder={"Weight ( kg )"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="weight"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="color_of_body">Color of Body</label>
                                        <input
                                            className={"form-control"}
                                            type="text"
                                            name={"color_of_body"}
                                            placeholder={"Color of Body"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="color_of_body"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="color_of_hair">Color of Hair</label>
                                        <input
                                            className={"form-control"}
                                            type="text"
                                            name={"color_of_hair"}
                                            placeholder={"Color of Hair"}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="color_of_hair"
                                        />
                                    </div>
                                    <hr />
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