import SignupForm from "../../components/form/SignupForm";
import {ToastContainer} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {reset} from "../../modules/EmployeeModules";

function Signup() {

    const { success } = useSelector(state => state.employeeReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if(success === true) {
            navigate(`/employee/login`);
            dispatch(reset());
        }
    }, [success]);

    return (
        <>
            <ToastContainer hideProgressBar={true} position="top-center"/>
            <div className="background-div">
                <div className="signup-div">
                    <SignupForm/>
                </div>
            </div>
        </>
    );
}

export default Signup;