import { useState, useEffect, useContext } from "react";
import Spinner from '../../components/Spinner'
import { Outlet } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../context/context";

export default function Private() {
  const [ok, setOk] = useState(false);
  const {auth} = useContext(AppContext);

  useEffect(() => {
    const authCheck = async () => {

      const res = await axios.get("/api/v1/auth/user-auth");
    
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };

    if (auth?.token) 
    authCheck();

  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}

