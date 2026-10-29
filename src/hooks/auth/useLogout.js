import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { authStorage } from "../../utils/authStorage";
import { clearFastrrCheckoutSession } from "../../services/shiprocketCheckout";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    // Remove authentication data and FastRR checkout session
    authStorage.clearAuth();
    clearFastrrCheckoutSession();

    // Notify other components
    window.dispatchEvent(new Event("authChanged"));

    toast.success("Logged out successfully.");

    // Redirect to login
    navigate("/login");
  };

  return {
    logout,
  };
};

export default useLogout;