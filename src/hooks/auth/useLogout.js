import { useNavigate } from "react-router-dom";
import { authStorage } from "../../utils/authStorage";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    // Remove authentication data
    authStorage.clearAuth();

    // Notify other components
    window.dispatchEvent(new Event("authChanged"));

    // Redirect to login
    navigate("/login");
  };

  return {
    logout,
  };
};

export default useLogout;