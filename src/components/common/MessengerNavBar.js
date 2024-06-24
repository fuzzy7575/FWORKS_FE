import { NavLink } from "react-router-dom";

function MessengerNavBar() {
    return (
        <div className="messenger-navbar-div">

            <div className="messenger-profile">
                <img className="thumb-profile" src="/images/profile/fwpf1.png" />
                <span className="name">오덕후</span>
                <span className="work-status">출근</span>
                <button>퇴근하기</button>
            </div>
            <div className="messenger-tab">
                <ul className="nav-list-ul">
                    <li className="active">
                        <NavLink to="/messenger/chat">
                            <img className="header-btn img" src="/images/common/btn_messenger.png" />
                            대화
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/messenger/orgchart">
                            <img className="header-btn img" src="/images/common/btn_employee.png" />
                            조직도
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/messenger/file">
                            <img className="header-btn img" src="/images/common/btn_file.png" />
                            파일
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="messenger-chat-list">
                <ul className="nav-list-ul">
                    <p>대화 목록</p>
                    <li>
                        <table>
                            <tbody>
                            <tr>
                                <td rowSpan="2" width="55">
                                    <img className="thumb-profile" src="/images/profile/fwpf3.png"/>
                                </td>
                                <td width="220">
                                    <div className="messenger-chat-profile">
                                        <a className="" href="/">
                                            <span className="name">나미녀</span>
                                        </a>
                                        <span className="work-status">출근</span>
                                    </div>
                                </td>
                                <td width="75"><p className="date">06월 03일</p></td>
                            </tr>
                            <tr><td colSpan="2"><p className="chat">어제 잘 들어 갔어요?</p></td></tr>
                            </tbody>
                        </table>
                    </li>
                    <li>
                        <table>
                                <tbody>
                                <tr>
                                    <td rowSpan="2" width="55">
                                        <img className="thumb-profile" src="/images/profile/fwpf2.png"/>
                                    </td>
                                    <td width="220">
                                        <div className="messenger-chat-profile">
                                            <a className="" href="/">
                                                <span className="name">강거꿀</span>
                                            </a>
                                            <span className="work-status">출근</span>
                                        </div>
                                    </td>
                                    <td width="75"><p className="date">06월 03일</p></td>
                                </tr>
                                <tr><td colSpan="2"><p className="chat">월간회의록 작성 끝났나요?</p></td></tr>
                                </tbody>
                        </table>
                    </li>
                    <li>
                        <table>
                                <tbody>
                                <tr>
                                    <td rowSpan="2" width="55">
                                        <img className="thumb-profile" src="/images/profile/fwpf7.png"/>
                                    </td>
                                    <td width="220">
                                        <div className="messenger-chat-profile">
                                            <a className="" href="/">
                                                <span className="name">이여유</span>
                                            </a>
                                            <span className="work-status">출근</span>
                                        </div>
                                    </td>
                                    <td width="75"><p className="date">06월 03일</p></td>
                                </tr>
                                <tr><td colSpan="2"><p className="chat">점심 뭐 먹을거야?</p></td></tr>
                                </tbody>
                        </table>
                    </li>
                    <li>
                        <table>
                            <tbody>
                            <tr>
                                <td rowSpan="2" width="55">
                                    <img className="thumb-profile" src="/images/profile/fwpf5.png"/>
                                </td>
                                <td width="220">
                                    <div className="messenger-chat-profile">
                                        <a className="" href="/">
                                            <span className="name">한유식, 강거꿀, 한길...</span>
                                        </a>
                                        <span className="number">5</span>
                                    </div>
                                </td>
                                <td width="75"><p className="date">05월 30일</p></td>
                            </tr>
                            <tr><td colSpan="2"><p className="chat">오늘까지 도식화 해야 하는데...</p></td></tr>
                            </tbody>
                        </table>
                    </li>
                    <li>
                        <table>
                                <tbody>
                                <tr>
                                    <td rowSpan="2" width="55">
                                        <img className="thumb-profile" src="/images/profile/fwpf4.png"/>
                                    </td>
                                    <td width="220">
                                        <div className="messenger-chat-profile">
                                            <a className="" href="/">
                                                <span className="name">왕초보</span>
                                            </a>
                                            <span className="work-status vacation">휴가</span>
                                        </div>
                                    </td>
                                    <td width="75"><p className="date">05월 30일</p></td>
                                </tr>
                                <tr><td colSpan="2"><p className="chat">아악~ 행님~ 어제 재미 있었어요~</p></td></tr>
                                </tbody>
                        </table>
                    </li>
                    <li>
                        <table>
                                <tbody>
                                <tr>
                                    <td rowSpan="2" width="55">
                                        <img className="thumb-profile" src="/images/profile/fwpf6.png"/>
                                    </td>
                                    <td width="220">
                                        <div className="messenger-chat-profile">
                                            <a className="" href="/">
                                                <span className="name">한길만</span>
                                            </a>
                                            <span className="work-status">출근</span>
                                        </div>
                                    </td>
                                    <td width="75"><p className="date">05월 29일</p></td>
                                </tr>
                                <tr><td colSpan="2"><p className="chat">프로젝트에 문서 올렸어요~</p></td></tr>
                                </tbody>
                        </table>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MessengerNavBar;