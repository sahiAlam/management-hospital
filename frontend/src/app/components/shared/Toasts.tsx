import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastSuccess = (message: string) => {
  toast.success(message);
};

export const ToastError = (error: string) => {
  toast.error(error);
};
