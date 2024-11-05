import { router } from "@inertiajs/react";
import { toast } from "react-toastify";
import NProgress from 'nprogress';
import { idLoading } from "@/app";

// // import { idRegister } from "./Register";


// export const loadingLogin = "loadingLogin";

// export const notiflogin = () => {
//     toast.clearWaitingQueue();
//     toast.dismiss();
    
//     router.on('start', () => {
//         toast.clearWaitingQueue();
//         NProgress.start();
//         toast.loading("Memuat...", {
//             toastId: loadingLogin,
//         }); // Menampilkan toast loading
//         toast.clearWaitingQueue();
//     });
//     router.on('finish', () => {
//         NProgress.done();
//         toast.dismiss();
//         // toast.dismiss(loadingLogin);
//         // toast.dismiss(loadingRegister);
//         // toast.dismiss(idLogout);
//         // toast.clearWaitingQueue();
//         // toast.dismiss(idRegister);
//         // toast.success("Selamat datang!"); // Menampilkan toast success
//     });
// };
export const idlogout = "idlogout";


export const logoutLoading = "logoutLoading";

export const notiflogout = () => {
    toast.dismiss()
    
    router.on('start', () => {
        NProgress.start();
        //   toast.loading("Tunggu...", {toastId: logoutLoading}); // Menampilkan toast loading
        //   toast.clearWaitingQueue();
    });
    router.on('finish', () => {
        NProgress.done();
        toast.dismiss();
        toast.dismiss(idLoading);
        toast.success("Logout Berhasil", {toastId: idlogout}); // Menampilkan toast success
    });
};
export const dismiss = () => {
    toast.dismiss(idlogout);
    toast.dismiss()
    // toast.dismiss(idLoading);
    toast.clearWaitingQueue();
}

// export const loadingRegister = "loadingRegister";

// export const notifregister = () => {

//     router.on('start', () => {
//         NProgress.start();
//         toast.loading("Memuat...", {
//             toastId: loadingRegister,
//         }); // Menampilkan toast loading
//     });
//     router.on('finish', () => {
//         NProgress.done();
//         toast.dismiss();
//         // toast.dismiss(loadingRegister);
//         // toast.dismiss(loadingRegister);
//         // toast.dismiss(loadingLogin);
//         // toast.dismiss(idLogin);
//         // toast.dismiss(idLogout);
//         // toast.success("Selamat datang!"); // Menampilkan toast success
//     });
// };

