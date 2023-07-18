"use client";

import axios from "axios";
import { useEffect } from "react";

const Dashboard = ({}) => {
  useEffect(() => {
    axios.post("http://192.168.232.56:8000/api/login", {
        email: "ali@gmail.com",
        password: "password",
      })
      .then((res: any) => {
        console.log("login response: ", res.data);
      })
      .catch((err: any) => console.log("login err: ", err));
  }, []);

  return "CONTENT";
};

export default Dashboard;
