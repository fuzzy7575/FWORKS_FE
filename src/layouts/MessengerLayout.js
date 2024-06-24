import Header from "../components/common/Header";
import MessengerNavBar from "../components/common/MessengerNavBar";
import Footer from "../components/common/Footer";
import {Outlet} from "react-router-dom";

function MessengerLayout() {


    return (
        <>
            <Header/>
            <div className="main-layout-div">
            <MessengerNavBar/>
            <main className="messenger-main">
                <Outlet/>
            </main>
            </div>
            <Footer/>
        </>
    );
}
export default MessengerLayout;