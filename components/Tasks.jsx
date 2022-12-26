import { useState } from "react";

const Tasks = (props) => {
  const {
    title,
    addTask,
    deleteTask,
    editTask,
    allTasks,
    searchValue,
    setSearchValue,
    getTasks,
    setSearched,
  } = props;

  const [task, setTask] = useState("");
  const [showInput, setShowInput] = useState("");
  const [editTaskVal, setEditTaskVal] = useState("");

  return (
    <div className="w-full sm:w-3/4 my-10 p-8 rounded-xl mx-auto">
      {/* Heading and SeaarchBar */}
      <div className="flex flex-row justify-between items-center">
        {/* Heading */}
        <div>
          <h1 className="text-3xl font-medium">
            {title ? title.titleName : "Select the title for tasks"}
          </h1>
        </div>

        {/* SeaarchBar */}
        <form className="flex border-2 rounded-md focus-within:ring-2 mr-4 md:mx-2">
          <input
            type="text"
            className="w-10/12 rounded-tl-md rounded-bl-md px-2 py-3 text-sm bg-secondary-content focus:outline-none"
            placeholder="Search"
            onChange={(e) => {
              setSearchValue(e.target.value);
              setSearched(true);
            }}
            value={searchValue}
          />
          <button
            className=" mx-auto rounded-tr-md rounded-br-md px-2 py-3 md:block"
            onClick={(e) => {
              e.preventDefault();
              if (searchValue) {
                getTasks();
                setSearchValue("");
              }
            }}
          >
            <svg
              className="w-4 h-4 fill-current"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </form>
      </div>

      {/* SubHeading */}
      <p className="hidden md:block text-slate-500">
        Hello, here are your latest tasks
      </p>

      {/* Add Task Modal */}
      <div className="mt-5">
        {/* Modal Button */}
        <label htmlFor="my-modal-3" className="btn">
          Add Task
        </label>

        {/* Modal Body */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>

            {/* Add Task */}
            <form className="mx-auto w-80 mt-8 flex border-2 rounded-md focus-within:ring-2 ">
              <input
                type="text"
                className="w-10/12 rounded-tl-md rounded-bl-md px-2 py-3 text-sm bg-secondary-content focus:outline-none"
                placeholder="Add Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <label
                htmlFor="my-modal-3"
                className=" mx-auto rounded-tr-md rounded-br-md px-2 pt-3 md:block"
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addTask(task, setTask);
                  }}
                  type="submit"
                >
                  {/* + svg */}
                  <svg
                    className="w-6 h-5 fill-current"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    />
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                    />
                  </svg>
                </button>
              </label>
            </form>
          </div>
        </div>
      </div>

      {allTasks.length > 0
        ? allTasks.map((item, key) => {
            return (
              <div className="my-5" key={key}>
                <div className="flex justify-between flex-wrap items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-primary-focus transition ease-linear duration-150">
                  {/* Checkbox and Task */}
                  <div className="inline-flex items-center space-x-2">
                    {/* Checkbox */}
                    <div className="form-control">
                      <label className="cursor-pointer label">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-accent"
                        />
                      </label>
                    </div>

                    {/* Task */}
                    <div>{item.task}</div>
                  </div>

                  {/* Edit input and buttons */}
                  <div className="flex flex-wrap justify-center">
                    {/* ChatBubble */}
                    {showInput === key ? (
                      <div className="chat chat-end items-center mr-5">
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input max-w-xs text-accent w-11/12 mr-2"
                          onChange={(e) => setEditTaskVal(e.target.value)}
                        />
                        <button
                          className="btn btn-circle btn-primary btn-xs"
                          onClick={() => {
                            if (editTaskVal) {
                              setShowInput("");
                              editTask(item.index, editTaskVal, setEditTaskVal);
                            }
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="currentColor"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      ""
                    )}

                    {/* Buttons */}
                    <div className="btn-group">
                      {/* edit button */}
                      <button
                        className="btn btn-square btn-secondary"
                        onClick={() =>
                          setShowInput((value) => (value === key ? "" : key))
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="20px"
                          fill="currentColor"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
                        </svg>
                      </button>
                      {/* delete button */}
                      <button
                        className="btn btn-square btn-error"
                        onClick={() => deleteTask(item.index)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-4 h-4 hover:cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : ""}

      <p className="text-xs text-slate-500 text-center">
        Last updated 12 minutes ago
      </p>
    </div>
  );
};

export default Tasks;
