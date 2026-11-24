import { Navigate, useLocation } from "react-router-dom";

/**
 * Separate signup is no longer required — mobile OTP login automatically
 * creates an account for new/guest customers and links their past orders.
 */
const Signup = () => {
  const location = useLocation();
  return <Navigate to="/login" replace state={location.state} />;
};

export default Signup;
