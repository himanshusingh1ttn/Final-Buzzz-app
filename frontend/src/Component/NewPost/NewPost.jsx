import { Button, Typography } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewPost } from '../../Actions/Post'
import { loadUser } from '../../Actions/User'
import './NewPost.css'
function NewPost() {
    const { user, loading: userLoading } = useSelector((state) => state.user);

    const[image,setImage]=useState(null)
    const[caption,setCaption]=useState("")
    const {loading,error,message}=useSelector((state)=>state.like);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
    
        const Reader = new FileReader();
        Reader.readAsDataURL(file);
    
        Reader.onload = () => {
          if (Reader.readyState === 2) {
            setImage(Reader.result);
          }
        };
      };

    const dispatch=useDispatch();

    const submitHandler=async(e)=>{
        e.preventDefault();
        await dispatch(createNewPost(caption,image));
        
        dispatch(loadUser());
        window.location.reload(true);
    }

    useEffect(() => {
        if(error){
            dispatch({type:"clearErrors"});
        }
        if(message){
            dispatch({type:"clearMessage"});
        }
    }, [dispatch,error,message])

  return (
    <div className='newPost'>
      <div className='postContainer'>
      <img src={user.avatar.url}></img>
        <form className="newPostForm" onSubmit={submitHandler}>
        
          
        
        <input type="text" placeholder='Start a Post....' value={caption} onChange={(e)=>setCaption(e.target.value)}/>
        {image? <img src={image} alt="" style={{position:'absolute', top:'25%',left:'60%',width:'40px',height:'40px'}}/>
         : null}
        <input type="file" accept="image/*" onChange={handleImageChange} />

        <br/><br/><br/>
        <button disabled={loading} type='submit'  hidden className='postBtn'>Post</button>
        </form>
      </div>

    </div>
  )
}

export default NewPost;