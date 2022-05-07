import { useContext } from "react"
import { AuthContext } from "../Shared/AuthProvider/AuthProvider";


const useAuth = () => {
    return useContext(AuthContext);
}
export default useAuth;