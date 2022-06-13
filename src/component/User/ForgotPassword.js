// import React, { Fragment, useState, useEffect } from "react";
// import "./ForgotPassword.css";
// //import Loader from "../layout/Loader/Loader";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import { useDispatch, useSelector } from "react-redux";
// import {forgotPassword } from "../../actions/userAction";
// //import { useAlert } from "react-alert";
// import MetaData from "../layout/MetaData";

// const ForgotPassword = () => {
//   const dispatch = useDispatch();
//   //const alert = useAlert();

//   const { message} = useSelector(
//     (state) => state.forgotPassword
//   );

//   const [email, setEmail] = useState("");

//   const forgotPasswordSubmit = (e) => {
//     e.preventDefault();

//     const myForm = new FormData();

//     myForm.set("email", email);
//     dispatch(forgotPassword(myForm));
//   };

//   useEffect(() => {
//     /* if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }
//  */
//     if (message) {
// //      alert.success(message);
//     }
//   }, [dispatch,message]);

//   return (
//         <Fragment>
//           <MetaData title="Forgot Password" />
//           <div className="forgotPasswordContainer">
//             <div className="forgotPasswordBox">
//               <h2 className="forgotPasswordHeading">Forgot Password</h2>

//               <form
//                 className="forgotPasswordForm"
//                 onSubmit={forgotPasswordSubmit}
//               >
//                 <div className="forgotPasswordEmail">
//                   <MailOutlineIcon />
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     required
//                     name="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>

//                 <input
//                   type="submit"
//                   value="Send"
//                   className="forgotPasswordBtn"
//                 />
//               </form>
//             </div>
//           </div>
//         </Fragment>
//   );
// };

// export default ForgotPassword;





import React, { Fragment, useState, useEffect } from "react";
import "./ForgotPassword.css";
import Loader from "../layout/Loader/Loader";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../../actions/userAction";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import toast, { Toaster } from 'react-hot-toast';
import swal from 'sweetalert';
//import {useAlert} from 'react-alert';
import Alert from "../layout/Alert";



//import { SwipeableDrawer } from "@material-ui/core";


const ForgotPassword = () => {
  const dispatch = useDispatch();
  //const alert = useAlert();
  
  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");
  const notify = () => toast("Here is my toast!");
  const sucessNotify = () => toast.success("Sucess!");
  const errorNotify = () => toast.error("Error");
  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  
  };



  
  useEffect(() => {
    if (error) {
     // alert("error");
      dispatch(clearErrors());
    }

    if (message) {
      //alert("congratulations");
     
    }
  }, [dispatch,error,message]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Forgot Password" />
          <div className="forgotPasswordContainer">
            <div className="forgotPasswordBox">
              <h2 className="forgotPasswordHeading">Forgot Password</h2>

              <form
                className="forgotPasswordForm"
                onSubmit={forgotPasswordSubmit}
              >
                <div className="forgotPasswordEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e && e.target.value)}
                    
                  />
                </div>

                <input
                  type="submit"
                  value="Send"
                  className="forgotPasswordBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ForgotPassword;











