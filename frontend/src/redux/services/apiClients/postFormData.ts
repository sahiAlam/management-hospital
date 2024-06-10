import { ToastError } from "@/app/components/shared/Toasts";
import axios from "axios";

export const postFormData = async ({ endpoint, userData }: any) => {
  try {
    const response = await axios.post(endpoint, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error: any) {
    ToastError(error?.response?.data?.message);
    console.error(
      "Error registering user:",
      error.response?.data || error.message
    );
  }
};
