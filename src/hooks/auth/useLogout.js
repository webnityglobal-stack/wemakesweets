import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { authStorage } from "../../utils/authStorage";
import { clearFastrrSession } from "@/services/shiprocketCheckout";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    // Remove authentication data
    authStorage.clearAuth();

    // Clear any FastRR / Shiprocket checkout cookies, local storage, and buyer sessions
    try {
      clearFastrrSession();
      if (typeof window !== "undefined") {
        localStorage.removeItem("wms_last_checkout_user_id");
      }
    } catch (e) {
      console.warn("Could not clear FastRR checkout session on logout:", e);
    }

    // Notify other components
    window.dispatchEvent(new Event("authChanged"));
    window.dispatchEvent(new Event("authUpdated"));

    toast.success("Logged out successfully.");

    // Redirect to login
    navigate("/login");
  };

  return {
    logout,
  };
};

export default useLogout;