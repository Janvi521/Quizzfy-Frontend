
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home"
import Register from "./register/Register";
import Dashboard from "./dashboard/Dashboard"
import SignIn from "./signIn/SignIn";
import Quizzes from "./quizzes/Quizzes";
import Events from "./events/Events"
import Students from "./students/Students"
import Profile from "./Setting/Profile";
import CreateQuiz1 from "./createQuiz/CreateQuiz1"
import CreateQuiz2 from "./createQuiz/CreateQuiz2";
import QuizLibrary from "./quizzes/QuizLibrary"
import StudentInfo from "./studentInterface/studentInfo"
import Questions from "./studentInterface/Question"
import HomeNavbar from "./navbar/HomeNavbar";
import QuizScreen from "./studentInterface/QuizScreen";
function RouteConfig(){

    return <>
     <Routes>
      
           <Route path='/' element={<Home/>}/>
           <Route path='signUp' element={<Register/>}/>
           <Route path='/Dashboard' element={<Dashboard/>}/>
           <Route path="/signIn" element={<SignIn/>} />
           <Route path="/quizzes" element={<Quizzes/>} />
           <Route path="/events" element={<Events/>}/>
           <Route path="/students" element={<Students/>}/>
           <Route path="profile" element={<Profile/>}  />
           <Route path ="/createQuiz1" element={<CreateQuiz1/>} />
           <Route path="/createQuiz2" element={<CreateQuiz2/>} /> 
           <Route path="/quizLibrary" element={<QuizLibrary/>} />  
           <Route path="/studentInfo" element={<StudentInfo/>} />
           <Route path="/questions" element={<Questions/>}/>
           <Route path="/homeNavbar" element={< HomeNavbar/>}/>
           <Route path="/QuizScreen" element={<QuizScreen/>}/> 
           
     </Routes>
    </>
}

export default RouteConfig;
