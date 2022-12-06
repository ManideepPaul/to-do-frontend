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
  const addTitle = async (title, setTitle) => {
    if (title) {
      try {
        const resp = await axios.put(
          `http://localhost:4000/addTitle/${user._id}`,
          { title }
        );

        setTitle("");
        console.log(resp);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Delete Title
  const deleteTitle = async (titleId) => {
    try {
      const resp = await axios.delete(
        `http://localhost:4000/deleteTitle/${user._id}/${titleId}`
      );
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  // Edit Title
  const editTitle = async (titleId, editVal, setEditVal) => {
    try {
      const resp = await axios.put(
        `http://localhost:4000/editTitle/${user._id}/${titleId}`,
        { titleName: editVal }
      );
      setEditVal("");
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  let SidebarProps = {
    user,
    logout,
    addTitle,
    deleteTitle,
    editTitle,
  };

  useEffect(() => {
    getUser();
  }, [user]);

  if (user) {
    return (
      <div className="h-full w-screen flex flex-col  md:flex-row">
        <Sidebar {...SidebarProps} />
        <Tasks />
      </div>
    );
  }
}
