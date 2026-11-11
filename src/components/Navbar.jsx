import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className='flex items-center justify-between px-10 py-5 text-white bg-slate-950'>
      <div>
        <span>enigma</span>
      </div>
      <div className='flex gap-5 items-center'>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact Us</Link>
      </div>
    </header>
  );
}
