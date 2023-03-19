
import './App.css';
import Changepassword from './components/Changepassword';
import Forgetpassword from './components/Forgetpassword';
import Login from './components/Login';
import Index from './components/Index';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Account from './components/Account';
import Profile from './components/Profile';
import Recharge from './components/Recharge';
import Enquiry from './components/Enquiry';
import Fundtransfer from './components/Fundtransfer';
import Rechargehistory from './components/Rechargehistory';
import Withdraw from './components/Withdraw';
import Withdrawhistory from './components/Withdrawhistory';
import Referearn from './components/Referearn';


function App() {
  return (
    <>
   <section className="main_section">
      <div className="container-fluid">
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

      <Route path="/index" element={<><Index headerhead="Colors" /><Footer /></>}>
      </Route>

      <Route path="/account" element={<><Account headerhead="Colors" /><Footer /></>}>
      </Route>

      <Route path="/recharge" element={<><Recharge headerhead="Recharge" /><Footer /></>}>
      </Route>

      <Route path="/rechargehistory" element={<><Rechargehistory headerhead="Recharge History" /><Footer /></>}>
      </Route>

      <Route path="/enquiry" element={<><Enquiry headerhead="Enquiry" /><Footer /></>}>
      </Route>

      <Route path="/fundtransfer" element={<><Fundtransfer headerhead="Fund Transfer" /><Footer /></>}>
      </Route>

      <Route path="/profile" element={<><Profile headerhead="Profile" /><Footer /></>}>
      </Route>

      <Route path="/withdraw" element={<><Withdraw headerhead="Withdraw" /><Footer /></>}>
      </Route>

      <Route path="/withdrawhistory" element={<><Withdrawhistory headerhead="Withdraw History" /><Footer /></>}>
      </Route>

      <Route path="/referearn" element={<><Referearn headerhead="Refer & Earn" /><Footer /></>}>
      </Route>

      </Routes>
      </BrowserRouter>
      
      {/* <Header headerhead="Colors"/> */}
      <div className="col-md-4 col-lg-4"></div>
        </div>
      </div>
      
    </section>
      
    </>
  );
}

export default App;
