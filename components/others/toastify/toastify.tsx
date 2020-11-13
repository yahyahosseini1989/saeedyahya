import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export interface ToastifyProps {
    // notifyStatus: boolean;
}

const Toastify: React.FunctionComponent<ToastifyProps> = () => {
    // const [NotifyStatus, setNotifyStatus] = useState({});

    // const NotifyStatus = () => {
    //     toast.success(
    //         "Changes made successfully", {
    //         position: "bottom-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //     })
    // };

    // const status = () => {
    //     // { NotifyStatus === notify() : false ? true };
    // }
    // End of ToastContainer

    return (
        <>
            <ToastContainer />
        </>
    );
}

export default Toastify;