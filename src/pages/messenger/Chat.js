import ChatForm from "../../components/form/ChatForm";

function Chat() {

    return (
        <>
            <div className="chat-header-div">
                <div className="messenger-profile">
                    <img className="thumb-profile" src="/images/profile/fwpf3.png" />
                    <span className="name">나미녀</span>
                    <span className="work-status">출근</span>       
                </div>
                <div></div>
                <div><button>대화하기</button></div>
            </div> 
            <div className="chat-main-div">
                <div className="wrap">
                    <div className="system-message-wrap">
                        <div className="date">
                            2024년 6월 3일
                        </div>
                    </div>
                    <div className="chat my-chat">
                        <img className="thumb-profile" src="/images/profile/fwpf1.png" />
                        <span className="name">오덕후</span>
                        <div className="textbox">굿모닝~ 좋은 아침~</div>
                    </div>
                    <div className="chat your-chat">
                        <img className="thumb-profile" src="/images/profile/fwpf3.png" />
                        <span className="name">나미녀</span>
                        <div className="textbox">어제 잘 들어갔어요?</div>
                    </div>
                </div>
                <div className="side-wrap">
                    <p>대화 상대</p>
                    <div className="messenger-profile">
                        <img className="thumb-profile" src="/images/profile/fwpf3.png" />
                        <span className="name">나미녀</span>                   
                    </div>
                </div>
                <ChatForm/>
                <div className="side-wrap-bottom">
                    <div className="messenger-button">
                        <div>
                            <img className="button" src="/images/common/btn_exit_b.png" />
                            <span className="name">나가기</span>
                        </div>
                        <img className="button" src="/images/common/btn_alarm_b.png" />
                    </div>
                </div>               
            </div>
        </>  
    )
}

export default Chat;