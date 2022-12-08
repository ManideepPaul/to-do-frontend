import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Tasks from "../components/Tasks";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");

  // This will help me to update the tasks without looping the useEffect hook
  const [renderTask, setRenderTask] = useState(false)

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

  // Get tasks
  const getTasks = (title_id) => {
    const title = user.title.find((item) => item._id === title_id);
    setTitle(title);
  };

  // Add Task
  const addTask = async (titleId, task) => {
    const resp = await axios.put(
      `http://localhost:4000/addTask/${user._id}/${titleId}`,
      { task }
    );
    console.log(resp);

    // After updating the renderTask it will trigger the useEffect to update user and task
    setRenderTask(() => renderTask === true ? false : true)
  };

  const SidebarProps = {
    user,
    logout,
    addTitle,
    deleteTitle,
    editTitle,
    getTasks,
  };

  const TasksProps = {
    title,
    addTask,
  };

  useEffect(() => {
    getUser();

    // if we call addTask function this will repopulate the component
    if(title) getTasks(title._id)
  }, [user, renderTask]);

  if (user) {
    return (
      <div className="h-full w-screen flex flex-col  md:flex-row">
        <Sidebar {...SidebarProps} />
        <Tasks {...TasksProps} />
      </div>
    );
  }
}
