import {useState} from "react";
import {useDispatch} from "react-redux";
// import {callLoginAPI} from "../../apis/EmployeeAPICalls";
// import React from 'react'
// import { Input } from "@mui/base/Input";
// import { Button } from "@mui/base/Button";

const ChatForm = ({message,setMessage,sendMessage}) => {

// function ChatForm(){
    const dispatch = useDispatch();
    const [form, setForm] = useState({});

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    }

    return (
        <>
        <div className="input-area">
          {/* <div className="plus-button">+</div> */}
          <form onSubmit={sendMessage} className="input-container">
            <input
              placeholder="메시지를 입력하세요."
              value={message}
              // onChange={(event) => setMessage(event.target.value)}
              onChange={onChangeHandler}
              multiline={false}
              rows={1}
            />

            <button
              disabled={message === ""}
              type="submit"
              className="send-button"
            >
              전송
            </button>
          </form>
        </div>
        </>
    );
}

export default ChatForm;