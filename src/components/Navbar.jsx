import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className='sticky top-0 flex items-center justify-between md:px-14 py-5 text-emerald-950 bg-white border-b-2 border-emerald-900'>
      <div>
        <span className='text-2xl font-extrabold'>BeliAja</span>
      </div>
      <div className='flex gap-5 items-center'>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact Us</Link>
      </div>
    </header>
  );
}
