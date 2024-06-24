import {NavLink} from "react-router-dom";
import {isAdmin} from "../../utils/TokenUtils";

function Navbar() {
    return (
        <div className="navbar-div">
            <ul className="nav-list-ul">
                <li>
                    <NavLink to="/">홈</NavLink>
                </li>
                <li>
                    <NavLink to="/project">프로젝트</NavLink>
                </li>
                <li>
                    <NavLink to="/schedule">일정</NavLink>
                </li>
                <li>
                    <NavLink to="/messenger">메신저</NavLink>
                </li>
                { isAdmin() &&
                    <li>
                        <NavLink to="/employee/login">사원관리</NavLink>
                    </li>
                }
            </ul>
        </div>
    );
}

export default Navbar;