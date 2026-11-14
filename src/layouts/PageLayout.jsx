import Navbar from "../components/Navbar";

export default function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className='bg-white flex flex-col items-center'>{children}</main>
    </>
  );
}
