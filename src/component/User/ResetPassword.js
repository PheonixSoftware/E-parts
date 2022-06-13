import React, { Fragment, useState, useEffect } from "react";
import "./ResetPassword.css";
//import Loader from "../layout/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {clearErrors,resetPassword } from "../../actions/userAction";
//import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import { useHistory, useParams } from "react-router-dom";
import swal from 'sweetalert';


const ResetPassword = ({ history1, match }) => {
  const dispatch = useDispatch();
  //const alert = useAlert();

  const history =useHistory();
  const params =useParams();
  

  const {success,error} = useSelector(
    (state) => state.forgotPassword
  );

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(resetPassword(params.token, myForm));
  };

  useEffect(() => {
    if (error) {
      swal("This email is invalid");
      dispatch(clearErrors());
    } 

    if (success) {
      swal("Mail Has been sent succesfully");
    
      // alert.success("Password Updated Successfully");

      history.push("/login");
    }
  }, [dispatch,history, success,error]);

  return (
   
        <Fragment>
          <MetaData title="Change Password" />
          <div className="resetPasswordContainer">
            <div className="resetPasswordBox">
              <h2 className="resetPasswordHeading">Update Password</h2>

              <form
                className="resetPasswordForm"
                onSubmit={resetPasswordSubmit}
              >
                <div>
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <LockIcon />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value="Update Password"
                  className="resetPasswordBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
     
  );
};

export default ResetPassword;
