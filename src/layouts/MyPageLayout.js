import {Outlet} from "react-router-dom";
import Header from "../components/common/Header";
import MyPageNavBar from "../components/common/MyPageNavBar";

function MyPageLayout () {

    return (
        <>
        <Header/>
        <div className="mypage-layout-div">
            
            <MyPageNavBar/>
            <main className="mypage-main">
                <Outlet/>
            </main>

        </div>
        </>
    );
}

export default MyPageLayout;