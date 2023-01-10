import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Tasks from "../components/Tasks";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [currTitleId, setCurrTitleId] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  const [searched, setSearched] = useState(false);
  const [searchValue, setSearchValue] = useState("".toLowerCase());

  // This will help to rerender the tasks again
  const [modified, setModified] = useState(false);

  // Get User
  const getUser = async () => {
    try {
      const user = await axios.get("https://to-do-backend-production.up.railway.app/findUser", {
        withCredentials: true,
      });

      const userData = user.data.user;
      setUser(userData);
    } catch (error) {
      router.push("/page/login");
      console.log(error, "here");
    }
  };

  // Logout User
  const logout = async () => {
    try {
      const resp = await axios.get("https://to-do-backend-production.up.railway.app/logout", {
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
          `https://to-do-backend-production.up.railway.app/addTitle/${user._id}`,
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
        `https://to-do-backend-production.up.railway.app/deleteTitle/${user._id}/${titleId}`
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
        `https://to-do-backend-production.up.railway.app/editTitle/${user._id}/${titleId}`,
        { titleName: editVal }
      );
      setEditVal("");
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  // Get tasks
  const getTasks = (titleId) => {
    setAllTasks([]);
    // console.log("running");
    const title = user.title.find((item) => item._id === (titleId ? titleId : currTitleId));
    setTitle(title);

    // If searched is true then only task which contains the alphabet that will be shown in the tasks
    if(searched) {
      title.tasks.map((item, index) => {
        item = item.toLowerCase();
        if(item.includes(searchValue.toLowerCase())) {
          setAllTasks((oldArray) => [...oldArray, { task: item, index }]);
        }
      })
    //  console.log(searchValue)
      setSearched(false)
    } else { 
      setCurrTitleId(titleId);
      title.tasks.map((item, index) => {
        setAllTasks((oldArray) => [...oldArray, { task: item, index }]);
      });
    }

    console.log(allTasks);
  };

  // Add Task
  const addTask = async (task, setTask) => {
    try {
      const resp = await axios.put(
        `https://to-do-backend-production.up.railway.app/addTask/${user._id}/${currTitleId}`,
        { task }
      );
      console.log(resp);
      setTask("");
      setModified(true);
    } catch (error) {
      alert("Select title to add task")
      console.log(error)
    }
  };

  // Delete Task
  const deleteTask = async (key) => {
    try {
      const resp = await axios.delete(
        `https://to-do-backend-production.up.railway.app/deleteTask/${user._id}/${currTitleId}/${key}`
      );
      console.log(resp);
      setModified(true);
    } catch (error) {
      console.log(error);
    }
  };

  // Edit task
  const editTask = async (key, editTaskVal, setEdittaskVal) => {
    try {
      const resp = await axios.put(
        `https://to-do-backend-production.up.railway.app/editTask/${user._id}/${currTitleId}/${key}`,
        { task: editTaskVal }
      );
      setEdittaskVal("");
      console.log(resp);
      setModified(true);
    } catch (error) {
      console.log(error);
    }
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
    deleteTask,
    editTask,
    allTasks,
    searchValue,
    setSearchValue,
    getTasks,
    setSearched
  };

  useEffect(() => {
    getUser();

    // if we call addTask function this will repopulate the component
    if (modified) {
      getTasks(title._id);
      setModified(false);
    }
  }, [user]);

  if (user) {
    return (
      <div className="h-full flex flex-col  md:flex-row">
        <Sidebar {...SidebarProps} />
        <Tasks {...TasksProps} />
      </div>
    );
  }
}
