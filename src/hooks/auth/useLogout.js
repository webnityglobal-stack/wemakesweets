import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { authStorage } from "../../utils/authStorage";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    // Remove authentication data
    authStorage.clearAuth();

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