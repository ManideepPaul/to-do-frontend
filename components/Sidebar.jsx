import { useState } from "react";

export default function Sidebar(props) {
  const handleDefault = (e) => {
    e.preventDefault();
  };

  const { user, logout, addTitle, deleteTitle, editTitle } = props;
  const [title, setTitle] = useState("");
  const [bubbleId, setBubbleId] = useState("");
  const [editVal, setEditVal] = useState("");

  return (
    <>
      {/* MobMenu  */}
      <button className="p-3 hover:bg-primary focus:bg-primary-focus transition duration-250 ease-in-out rounded-md shadow-lg   focus:outline-none absolute top-0 left-0 sm:hidden">
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      {/* SideMenu */}
      <div
        id="sidebar"
        className=" pb-4 bg-base-300 md:h-screen md:block shadow-xl px-3 w-30 md:w-80 lg:w-80 overflow-x-hidden transition-transform duration-300 ease-in-out"
        x-show="sidenav"
      >
        {/* Logout button */}
        <button
          className="btn btn-sm btn-outline btn-error mt-3"
          onClick={logout}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="20px"
            viewBox="0 0 24 24"
            width="20px"
            fill="currentColor"
          >
            <g>
              <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
            <g>
              <g>
                <path d="M5,5h6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h6c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H5V5z" />
                <path d="M20.65,11.65l-2.79-2.79C17.54,8.54,17,8.76,17,9.21V11h-7c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h7v1.79 c0,0.45,0.54,0.67,0.85,0.35l2.79-2.79C20.84,12.16,20.84,11.84,20.65,11.65z" />
              </g>
            </g>
          </svg>
        </button>

        <div className="space-y-6 md:space-y-5 mt-10">
          {/* Logo */}
          <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
            Dashwind<span className="">.</span>
          </h1>

          {/* Profile Image and Name */}
          <div id="profile" className="space-y-3">
            {/* <img
              src="https://pbs.twimg.com/profile_images/1467997254929854470/mDYbXoVl_400x400.jpg"
              alt="Avatar user"
              className="w-10 md:w-16 rounded-full mx-auto"
            /> */}

            {/* FaceSVG */}
            <svg
              className="mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
              fill="currentColor"
            >
              <path d="M17.8 28.9q-1.15 0-1.95-.8t-.8-1.95q0-1.2.8-1.975.8-.775 1.95-.775 1.2 0 1.975.8.775.8.775 1.95 0 1.2-.8 1.975-.8.775-1.95.775Zm12.45 0q-1.2 0-1.975-.8-.775-.8-.775-1.95 0-1.2.8-1.975.8-.775 1.95-.775t1.95.8q.8.8.8 1.95 0 1.2-.8 1.975-.8.775-1.95.775ZM24 40.75q7 0 11.875-4.875T40.75 24q0-1.3-.2-2.5t-.5-2.25q-1 .3-2.125.375-1.125.075-2.375.075-4.8 0-9.05-1.95-4.25-1.95-7.3-5.6-1.65 3.95-4.775 6.925Q11.3 22.05 7.3 23.7v.35q0 7 4.85 11.85T24 40.75Zm0 3.95q-4.25 0-8.025-1.625-3.775-1.625-6.6-4.425-2.825-2.8-4.45-6.575Q3.3 28.3 3.3 24q0-4.3 1.625-8.075Q6.55 12.15 9.375 9.35q2.825-2.8 6.6-4.45 3.775-1.65 8.075-1.65 4.3 0 8.05 1.65 3.75 1.65 6.55 4.45 2.8 2.8 4.45 6.575Q44.75 19.7 44.75 24q0 4.3-1.625 8.075-1.625 3.775-4.45 6.575-2.825 2.8-6.6 4.425Q28.3 44.7 24 44.7Z" />
            </svg>

            {/* UserName */}
            <div>
              <h2 className="font-medium text-sm md:text-base text-center text-accent-focus">
                {user.name}
              </h2>
            </div>
          </div>

          {/* Add Title */}
          <div className="flex border-2 rounded-md focus-within:ring-2 mr-4 md:mx-2">
            <input
              type="text"
              className="w-10/12 rounded-tl-md rounded-bl-md px-2 py-3 text-sm bg-secondary-content focus:outline-none"
              placeholder="Add Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button
              className=" mx-auto rounded-tr-md rounded-br-md px-2 py-3 md:block"
              onClick={() => addTitle(title, setTitle)}
            >
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
          </div>

          {user.title.map((ele) => {
            {
              /* Title */
            }
            return (
              <div key={ele._id} className="md:mr-0 mr-4 flex flex-col ">
                <a
                  className=" flex flex-row justify-between items-center active:bg-primary-focus focus:bg-primary-focus text-md font-medium py-2 px-2 hover:bg-primary rounded-md transition duration-250 ease-in-out"
                  onClick={handleDefault}
                >
                  <span className="">{ele.titleName}</span>

                  {/* DropDown */}
                  <div className="dropdown dropdown-hover dropdown-left">
                    <svg
                      tabIndex={0}
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="currentColor"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z" />
                    </svg>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-auto"
                    >
                      {/* Buttons */}
                      <div className="btn-group">
                        <button
                          className="btn btn-sm btn-square btn-secondary"
                          id="edit"
                          onClick={() =>
                            bubbleId === ele._id
                              ? setBubbleId("")
                              : setBubbleId(ele._id)
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
                        <button
                          className="btn btn-sm btn-square btn-error"
                          id="delete"
                          onClick={() => deleteTitle(ele._id)}
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
                    </ul>
                  </div>
                </a>

                {/* ChatBubble */}
                {bubbleId === ele._id ? (
                  <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-secondary flex">
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input max-w-xs text-accent w-11/12 mr-2"
                        onChange={(e) => setEditVal(e.target.value)}
                      />
                      <button
                        className="btn btn-circle btn-xs"
                        onClick={() => {
                          if (editVal) {
                            setBubbleId("");
                            editTitle(ele._id, editVal, setEditVal);
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
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
