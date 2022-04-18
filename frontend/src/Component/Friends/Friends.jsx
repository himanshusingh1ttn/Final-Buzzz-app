import { Avatar, Button, Dialog, Typography } from "@mui/material";
import User from "../User/User";
import { useDispatch, useSelector } from "react-redux";


import './Friends.css';
function Friends(){
    const dispatch = useDispatch();
    const { user, loading: userLoading } = useSelector((state) => state.user);
    return(
        <>
            <div className="friends">
                    <h2>Friends</h2>
                    {
                        user && user.friends.length>0 ?
                        user.friends.map((friend) => (<User
                            key={friend._id}
                            userId={friend._id}
                            name={friend.name} avatar={friend.avatar.url} />)):<Typography style={{margin:"2vmax"}}>No Friends</Typography>
                    }
                </div>
        </>
    )
}

export default Friends;