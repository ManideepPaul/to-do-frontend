import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Tasks from "../components/Tasks";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState("");

  // Get User
  const getUser = async () => {
    try {
      const user = await axios.get("http://localhost:4000/findUser", {
        withCredentials: true,
      });

      const userData = user.data.user;
      setUser(userData);
    } catch (error) {
      router.push("/page/login");
      console.log(error);
    }
  };

  // Logout User
  const logout = async () => {
    try {
      const resp = await axios.get("http://localhost:4000/logout", {
        withCredentials: true,
      });

      if (resp.data.success) {
        router.push("/page/login");
      }
      console.log(resp.data.success);
    } catch (error) {
      console.log(error);
    }
  };

  // Add Title
  const addTitle = async (title, id, setTitle) => {
    try {
      const resp = await axios.put(`http://localhost:4000/addTitle/${id}`, {title});

      setTitle('')
      console.log(resp)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDefault = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getUser();
  }, [user]);

  if (user) {
    return (
      <div className="h-full w-screen flex flex-col  md:flex-row">
        <Sidebar handleDefault={handleDefault} user={user} logout={logout} addTitle={addTitle} />
        <Tasks />
      </div>
    );
  }
}
