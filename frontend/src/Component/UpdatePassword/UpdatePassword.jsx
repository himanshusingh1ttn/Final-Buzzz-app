import './Updatepassword.css'
import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../Actions/User";
function Updatepassword() {
    const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const dispatch = useDispatch();

  const { error, loading, message } = useSelector((state) => state.like);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updatePassword(oldPassword, newPassword));
  };

  useEffect(() => {
    if (error) {
        alert(error)
      dispatch({ type: "clearErrors" });
    }

    if (message) {
        alert(message)
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error,message]);

  return (
      <div className="updatePassword">
        <form className="updatePasswordForm" onSubmit={submitHandler}>
          <h2>Reset Password</h2><br/>
          <input
          type="password"
          placeholder="Old Password"
          required
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
      /><br/><br/>

        <input
        type="password"
        placeholder="New Password"
        required
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        /><br/><br/>

       <button disabled={loading} type="submit">
        Change Password
      </button>      
        </form>
      </div>
    
  )
}

export default Updatepassword

{/* <div className="updatePassword">
    <form className="updatePasswordForm" onSubmit={submitHandler}>
      <Typography variant="h3" style={{ padding: "2vmax" }}>
        Social Aap
      </Typography>

      <input
        type="password"
        placeholder="Old Password"
        required
        value={oldPassword}
        className="updatePasswordInputs"
        onChange={(e) => setOldPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="New Password"
        required
        className="updatePasswordInputs"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <Button disabled={loading} type="submit">
        Change Password
      </Button>
    </form>
  </div> */}