import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function layout() {
  return (
    <>
        <Navbar name="Anything" />
        <main className="min-h-screen text-center">
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default layout