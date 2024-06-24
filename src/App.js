import './style.css';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/products/Main";
import Projects from "./pages/project/Projects";
import Schedules from "./pages/schedule/Schedules";
import Signup from "./pages/employee/Signup";
import Login from "./pages/employee/Login";
import Chat from "./pages/messenger/Chat";
import File from "./pages/messenger/File";
import Orgchart from "./pages/messenger/Orgchart";
import ProtectedRoute from "./components/router/ProtectedRoute";
import MessengerLayout from "./layouts/MessengerLayout";
import MyPageLayout from "./layouts/MyPageLayout";
import Profile from "./pages/employee/Profile";
import Error from "./pages/error/Error";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
            <Route index element={<Main/>}/>
        </Route>
          <Route path="/project" element={<ProtectedRoute loginCheck={true}><Layout/></ProtectedRoute>}>
            <Route index element={ <Navigate to="/project/projects" replace/> }/>
            <Route path="projects" element={ <Projects/> }/>
          </Route>
          <Route path="/schedule" element={<ProtectedRoute loginCheck={true}><Layout/></ProtectedRoute>}>
            <Route index element={ <Navigate to="/schedule/schedules" replace/> }/>
            <Route path="schedules" element={ <Schedules/>}/>
          </Route>
          <Route path="/messenger" element={<ProtectedRoute loginCheck={true}><MessengerLayout/></ProtectedRoute>}>
            <Route index element={ <Navigate to="/messenger/chat" replace/> }/>
            <Route path="chat" element={ <Chat/> }/>
            <Route path="orgchart" element={ <Orgchart/>}/>
            <Route path="file" element={ <File/>}/>
          </Route>
          <Route path="/employee">
              <Route path="signup" element={<ProtectedRoute loginCheck={false}><Signup/></ProtectedRoute>}/>
              <Route path="login" element={<ProtectedRoute loginCheck={false}><Login/></ProtectedRoute>}/>
              <Route path="mypage" element={<ProtectedRoute loginCheck={true}><MyPageLayout/></ProtectedRoute>}>
                  <Route index element={ <Navigate to="/employee/mypage/profile" replace/> }/>
                  <Route path="profile" element={ <Profile/> }/>
              </Route>
          </Route>
          <Route path="*" element={ <Error/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
