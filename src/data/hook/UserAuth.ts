import { useContext } from "react";
import authContext from "../context/AuthContext";

const useAppData = () => useContext(authContext)

export default useAppData