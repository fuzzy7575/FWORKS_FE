import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import {Outlet} from "react-router-dom";

function Layout() {


    return (
        <>
            <Header/>
            <div className="main-layout-div">
            <Navbar/>
            <main className="main">
                <Outlet/>
            </main>
            </div>
            <Footer/>
        </>
    );
}
export default Layout;