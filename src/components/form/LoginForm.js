import {useState} from "react";
import {useDispatch} from "react-redux";
import {callLoginAPI} from "../../apis/EmployeeAPICalls";

function LoginForm(){
    const dispatch = useDispatch();
    const [form, setForm] = useState({});

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    }

    const onClickLoginHandler = () => {
        dispatch(callLoginAPI({ loginRequest : form }));
    }

    return (
        <>
            <h2>로그인</h2>
            <input
                type="text"
                name="empId"
                placeholder="아이디"
                onChange={onChangeHandler}
            />
            <input
                type="password"
                name="empPw"
                placeholder="비밀번호"
                onChange={onChangeHandler}
            />
            <button
                onClick={ onClickLoginHandler }
            >
                로그인
            </button>
            <p>아이디 찾기 / 비밀번호 찾기</p>
        </>
    );
}

export default LoginForm;