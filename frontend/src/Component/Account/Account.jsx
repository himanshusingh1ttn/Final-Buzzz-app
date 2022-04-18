// import { Avatar, Button, Dialog, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMyProfile, getMyPosts, logoutUser } from "../../Actions/User";
import Loader from "../Loader/Loader";
import Post from "../Post/Post";
// import User from "../User/User";
import "./Account.css";
import Friends from './../Friends/Friends';

function Account() {
    const dispatch = useDispatch();
    const { user, loading: userLoading } = useSelector((state) => state.user);

    // const [friendsToggle,setFriendsToggle]=useState(false);

    const { loading, error, posts } = useSelector((state) => state.myPosts)
    const {
        error: likeError,
        message,
        loading: deleteLoading
    } = useSelector((state) => state.like);

    const logOutHandler=async ()=>{
       await dispatch(logoutUser())
    }

    const deleteProfileHandler=async()=>{
        await dispatch(deleteMyProfile());
        dispatch(logoutUser());
    }

    useEffect(() => {
        dispatch(getMyPosts());
    }, [dispatch])

    useEffect(() => {
        if (likeError) {
            // alert.error(message);
            dispatch({ type: "clearErrors" });
        }
        if (message) {
            dispatch({ type: "clearMessage" });
        }
    }, [message, likeError, dispatch, error])



    return (
        <>
            <div className="account">
            {/* UserProfile */}
            <div className="account-left">
                <div className='account-backgroundImage'>
                    
                </div>
                <div className='account-proImage'>
                    <img src={user.avatar.url} alt="" className='account-img'></img>
                </div>
                <div className='account-userDetail'>
                    <h3><b>{user.name}</b></h3>
                </div>

                <div className='account-profileDetail'>
                    <div>
                        {user.friends.length===0 ? "0" : user.friends.length-1}
                        <p style={{color:'grey'}}>Friends</p>
                    </div>
                    <div>
                        {user.posts.length}
                        <p style={{color:'grey'}}>Posts</p>
                    </div>
                </div>

                <div className="account-edit">
                    <Link to={"/update/profile"} id='ediPro'>Edit Profile</Link>
                    <Link to={"/update/password"} id='chanPass'>Change Password</Link>
                </div><br/>
                <button onClick={logOutHandler} className='logout'>Logout</button>
                <button id="dmprofile">Delete My Profile</button>
            </div>

            {/* MyFeed */}
            {
                loading === true || userLoading === true ? <Loader/>: <div className="account-middle">
                        <main className="myfeed">
                            {
                                posts && posts.length > 0 ? posts.map((post)=>(
                                    <Post 
                                        key={posts._id}
                                        caption={post.caption}
                                        postId={post._id}
                                        postImage={post.image.url}
                                        likes={post.likes}
                                        comments={post.comments}
                                        ownerImage={post.owner.avatar}
                                        ownerName={post.owner.name}
                                        ownerId={post.owner._id}
                                        isAccount={true}
                                        isDelete={true}
                                    />

                                )):<h2 style={{marginTop:'20px'}}>Your First Post</h2>
                            }

                        </main>
                </div>
            }

            <Friends/>



            </div>
        </>
    )
}

export default Account

// loading === true || userLoading === true ? <Loader /> : (<div className='account'>
//             <div className="accountmiddle">
//                 <main className="myfeed">
//                 {
//                     posts && posts.length > 0 ? posts.map((post) => (
//                         <Post
//                             key={posts._id}
//                             caption={post.caption}
//                             postId={post._id}
//                             postImage={post.image.url}
//                             likes={post.likes}
//                             comments={post.comments}
//                             ownerImage={post.owner.avatar}
//                             ownerName={post.owner.name}
//                             ownerId={post.owner._id}
//                             isAccount={true}
//                             isDelete={true}
//                         />
//                     )) : <Typography variant="h6">Make Your First Post</Typography>
//                 }
//                 </main>
                
//             </div>
//             <div className="accountright">
//                 <Avatar src={user.avatar.url} sx={{ height: "8vmax", width: "8vmax" }} />

//                 <Typography variant="h5">{user.name}</Typography>
//                 <div className="frnPost" style={{width:'100%'}}>
//                     <div className='frndList'>
//                         <button onClick={() => setFriendsToggle(!friendsToggle)}><Typography>Friends</Typography></button>
//                         <Typography>{user.friends.length}</Typography>
//                     </div>
//                     <div className='postList'>
//                         <Typography>Post</Typography>
//                         <Typography>{user.posts.length}</Typography>
//                     </div>
//                 </div>
//                 <Button variant="contained" onClick={logOutHandler}>Logout</Button>
//                 <Link to={"/update/profile"} id='ediPro'>Edit Profile</Link>
//                 <Link to={"/update/password"} id='chanPass'>Change Password</Link><br/>
//                 <Button variant="text" id="dmprofile">Delete My Profile</Button>

//                 <Dialog open={friendsToggle} onClose={() => setFriendsToggle(!friendsToggle)}>
//                 <div className="DialogBox">
//                     <Typography variant="h4">Friends</Typography>
//                     {
//                         user && user.friends.length>0 ?
//                         user.friends.map((friend) => (<User
//                             key={friend._id}
//                             userId={friend._id}
//                             name={friend.name} avatar={friend.avatar.url} />)):<Typography style={{margin:"2vmax"}}>No Friends</Typography>
//                     }
//                 </div>
//             </Dialog>
//             </div>
//         </div>