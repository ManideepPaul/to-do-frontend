export default function Sidebar(props) {
  const handleDefault = props.funData;
  return (
    <>
      {/* MobMenu  */}
      <button class="p-3 hover:bg-primary focus:bg-primary-focus transition duration-250 ease-in-out rounded-md shadow-lg   focus:outline-none absolute top-0 left-0 sm:hidden">
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      
      <div
        id="sidebar"
        class=" pb-4 bg-base-300 md:h-screen md:block shadow-xl px-3 w-30 md:w-80 lg:w-80 overflow-x-hidden transition-transform duration-300 ease-in-out"
        x-show="sidenav"
      >
        <div class="space-y-6 md:space-y-10 mt-10">
          {/* Logo */}
          <h1 class="hidden md:block font-bold text-sm md:text-xl text-center">
            Dashwind<span class="">.</span>
          </h1>

          {/* Profile Image and Name */}
          <div id="profile" class="space-y-3">
            {/* <img
              src="https://pbs.twimg.com/profile_images/1467997254929854470/mDYbXoVl_400x400.jpg"
              alt="Avatar user"
              class="w-10 md:w-16 rounded-full mx-auto"
            /> */}

            {/* FaceSVG */}
            <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="currentColor">
              <path d="M17.8 28.9q-1.15 0-1.95-.8t-.8-1.95q0-1.2.8-1.975.8-.775 1.95-.775 1.2 0 1.975.8.775.8.775 1.95 0 1.2-.8 1.975-.8.775-1.95.775Zm12.45 0q-1.2 0-1.975-.8-.775-.8-.775-1.95 0-1.2.8-1.975.8-.775 1.95-.775t1.95.8q.8.8.8 1.95 0 1.2-.8 1.975-.8.775-1.95.775ZM24 40.75q7 0 11.875-4.875T40.75 24q0-1.3-.2-2.5t-.5-2.25q-1 .3-2.125.375-1.125.075-2.375.075-4.8 0-9.05-1.95-4.25-1.95-7.3-5.6-1.65 3.95-4.775 6.925Q11.3 22.05 7.3 23.7v.35q0 7 4.85 11.85T24 40.75Zm0 3.95q-4.25 0-8.025-1.625-3.775-1.625-6.6-4.425-2.825-2.8-4.45-6.575Q3.3 28.3 3.3 24q0-4.3 1.625-8.075Q6.55 12.15 9.375 9.35q2.825-2.8 6.6-4.45 3.775-1.65 8.075-1.65 4.3 0 8.05 1.65 3.75 1.65 6.55 4.45 2.8 2.8 4.45 6.575Q44.75 19.7 44.75 24q0 4.3-1.625 8.075-1.625 3.775-4.45 6.575-2.825 2.8-6.6 4.425Q28.3 44.7 24 44.7Z" />
            </svg>
            <div>
              <h2 class="font-medium text-sm md:text-base text-center text-accent-focus">
                Eduard Pantazi
              </h2>
            </div>
          </div>

          {/* SeaarchBar */}
          <div class="flex border-2 rounded-md focus-within:ring-2 mr-4 md:mx-2">
            <input
              type="text"
              class="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm focus:outline-none"
              placeholder="Search"
            />
            <button class="rounded-tr-md rounded-br-md px-2 py-3 md:block">
              <svg
                class="w-4 h-4 fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div id="menu" class="md:mr-0 mr-4 flex flex-col space-y-2">
            <a
              href=""
              class="active:bg-primary-focus focus:bg-primary-focus text-md font-medium py-2 px-2 hover:bg-primary rounded-md transition duration-250 ease-in-out"
              onClick={handleDefault}
            >
              {/* <svg
                  class="w-6 h-6 fill-current inline-block pb-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg> */}
              <span class="ml-4 pt-4">Dashboard</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
