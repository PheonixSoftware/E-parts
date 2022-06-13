import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
//import Loader from "../layout/Loader/Loader";
import { Link, useHistory } from "react-router-dom";
import "./Profile.css";

const Profile = ({ history1 }) => {
  const { user,isAuthenticated } = useSelector((state) => state.user);

  const history = useHistory();
  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);
  return (
   
        <Fragment>
          <MetaData title={`${user && user.name}'s Profile`} />
          <div className="profileContainer" >
            <div>
              <h1>My Profile</h1>
              <img src={user && user.avatar.url} alt={user && user.name} />
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h2>Full Name</h2>
                <p >{user && user.name}</p>
              </div>
              <div>
                <h2>Email</h2>
                <p>{user && user.email}</p>
              </div>
              <div>
                <h2>Joined On</h2>
                <p>{String(user && user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
  );
};

export default Profile;
