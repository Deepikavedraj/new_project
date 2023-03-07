
import './App.css';
import Changepassword from './components/Changepassword';
import Forgetpassword from './components/Forgetpassword';
import Login from './components/Login';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
   <section className="main_section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4"></div> 
     <BrowserRouter>
  <Routes>
  

      <Route path="/login" element={<Login topheading="Login"  para="Welcome to Color Prediction Game" mobile="*Mobile Number or E-mail" 
           password="*Password" />}>

      </Route>
      <Route path="/signin" element={<Signin tophead="SignIn"  parasign="Welcome to Color Prediction Game" mobilesign="*Mobile Number" 
           emailsign="E-mail" pass="*Password" conpass="*Confirm Password" sponsor="Sponsor Id" />}>

      </Route>
      <Route path="/forgetpassword" element={<Forgetpassword forgethead="Forgot Password" paraforget="Please enter your registered Mobile Number or Email ID" 
           mobile_forget="*Mobile Number Or Email Id"/>}>
       </Route>

      <Route path="/changepassword" element={ <Changepassword changepasshead="Change Password" changepasspara="Please enter your new password" 
           pass_changepass="Password" conpass_changepass="Confrim Password" />}>

      </Route>



     

      
      </Routes>
      </BrowserRouter>
      <div className="col-md-4 col-lg-4"></div>
        </div>
      </div>
      
    </section>
      {/*  <section className="main_section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4"></div>
           
           <Login topheading="Login"  para="Welcome to Color Prediction Game" mobile="*Mobile Number or E-mail" 
           password="*Password" />

           <Signin tophead="SignIn"  parasign="Welcome to Color Prediction Game" mobilesign="*Mobile Number" 
           emailsign="E-mail" pass="*Password" conpass="*Confirm Password" sponsor="Sponsor Id" />

           <Forgetpassword forgethead="Forgot Password" paraforget="Please enter your registered Mobile Number or Email ID" 
           mobile_forget="*Mobile Number Or Email Id"/>

           <Changepassword changepasshead="Change Password" changepasspara="Please enter your new password" 
           pass_changepass="Password" conpass_changepass="Confrim Password" />

          <div className="col-md-4 col-lg-4"></div>
        </div>
      </div>
    </section> 
    */}
    </>
  );
}

export default App;
