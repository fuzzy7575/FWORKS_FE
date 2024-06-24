import {useNavigate, NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import {isLogin, isAdmin} from "../../utils/TokenUtils";
import {useDispatch, useSelector} from "react-redux";
import {callLogoutAPI} from "../../apis/EmployeeAPICalls";

function Header() {

    const navigate = useNavigate();
    // const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    /* 로고 클릭 시 메인 페이지로 이동 */
    const onClickHandler = () => navigate("/");
    // const onEnterKeyHandler = e => {
    //     if(e.key === 'Enter') navigate(`/product/search?value=${search}`);
    // }

    function BeforeLogin() {
        return (
            <div>
                <button
                    className="header-btn"
                    onClick={ () => navigate(`/employee/login`) }
                >
                    로그인
                </button>
                |
                <button
                    className="header-btn"
                    onClick={ () => navigate(`/employee/signup`) }
                >
                    회원가입
                </button>
            </div>
        );
    }

    function AfterLogin() {

        const { success } = useSelector(state => state.employeeReducer);

        useEffect(() => {
            if(success === true) {
                window.location.replace('/');
            }
        }, [success]);

        return (
            <div>
                <button
                    className="header-btn"
                    onClick={ () => navigate('/employee/myalarm') }
                >
                        <img className="header-btn img" src="/images/common/btn_alarm.png" />
                </button>                
                <button
                    className="header-btn"
                    onClick={ () => navigate('/employee/mypage') }
                >
                    마이페이지
                </button>
                |
                <button
                    className="header-btn"
                    onClick={ () => dispatch(callLogoutAPI()) }
                >
                    로그아웃
                </button>
            </div>
        );
    }

    return (
        <div className="header-div">
            <button
                className="logo-btn"
                onClick={ onClickHandler }
            >
                <img className="header-logo" src="/images/common/fworks_logo2_w.png" />
            </button>
            <ul className="nav-list-ul">
                <li>
                    <NavLink to="/">
                        <img className="header-btn img" src="/images/common/btn_home.png" />
                        홈
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/project">
                        <img className="header-btn img" src="/images/common/btn_project.png" />
                        프로젝트
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/schedule">
                        <img className="header-btn img" src="/images/common/btn_schedule.png" />
                        일정
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/messenger">
                        <img className="header-btn img" src="/images/common/btn_messenger.png" />
                        메신저
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/employee/login">
                        <img className="header-btn img" src="/images/common/btn_employee.png" />
                        사원관리
                    </NavLink>
                </li>
                {/* { isAdmin() &&
                    <li>
                        <NavLink to="/">
                        <img className="header-btn img" src="/images/common/btn_employee.png" />
                        사원관리
                    </NavLink>
                    </li>
                } */}
            </ul>
            {/* <input
                className="input-style"
                type="text"
                placeholder="검색"
                onChange={ e => setSearch(e.target.value) }
                onKeyUp={ onEnterKeyHandler }
                value={ search }
            /> */}
            { isLogin() ? <AfterLogin/> : <BeforeLogin/> }
        </div>
    );
}

export default Header;