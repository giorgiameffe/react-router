// Navbar component
import Navbar from "../components/Navbar";
// Outlet
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {

    return (
        <>
            <header>
                <h1>React Blog Pages</h1>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}