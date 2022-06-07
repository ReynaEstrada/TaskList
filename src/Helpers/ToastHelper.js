import { toast } from 'react-toastify';
const toasConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
};
const toastHelper = {
    sucessToast:function(message){
        toast.success(message, toasConfig);
    },
    errorToast:function(message){
        toast.error(message, toasConfig);
    },
    infoToast:function(message){
        toast.info(message, toasConfig);
    }

}

export default toastHelper;