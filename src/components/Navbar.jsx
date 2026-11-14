import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <header className='z-50 sticky top-0 flex items-center justify-between md:px-14 py-5 text-emerald-950 bg-white border-b-2 border-emerald-900'>
      <div>
        <span className='text-2xl font-extrabold'>BeliAja</span>
      </div>
      <div className='flex gap-5 items-center'>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-4 py-1 rounded-full bg-emerald-900 text-white"
              : "px-4 py-1 rounded-full bg-inherit text-emerald-950"
          }
          to={"/"}>
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-4 py-1 rounded-full bg-emerald-900 text-white"
              : "px-4 py-1 rounded-full bg-inherit text-emerald-950"
          }
          to={"/about"}>
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-4 py-1 rounded-full bg-emerald-900 text-white"
              : "px-4 py-1 rounded-full bg-inherit text-emerald-950"
          }
          to={"/contact"}>
          Contact Us
        </NavLink>
      </div>
    </header>
  );
}
