
import {BrowserRouter as Router,Route,Routes,Redirect} from 'react-router-dom'
import './App.css';
import Header from './Component/Header/Header';
import { loadUser } from './Actions/User';
import Home  from './Component/Home/Home.jsx';
import Login from './Component/Login/Login';
import {useEffect} from 'react'
import { useDispatch,useSelector  } from 'react-redux';
import Account from './Component/Account/Account';
import NewPost from './Component/NewPost/NewPost.jsx'
import Register from './Component/Register/Register';
import UpdateProfile from './Component/UpdateProfile/UpdateProfile';
import UpdatePassword from './Component/UpdatePassword/UpdatePassword';
import UserProfile from './Component/UserProfile/UserProfile';
import Search from './Component/Search/Search';
import NotFound from './Component/NotFound/NotFound';

function App() {
  const {isAuthenticated} = useSelector((state)=> state.user)
  // const [logeedIn,setLoggedIn]=useState(false);
  
  const dispatch=useDispatch();
  useEffect(() => {
   dispatch(loadUser())
 },[dispatch])
 
  return (
    <Router>
      {isAuthenticated && <Header/>}
      <Routes>
         <Route path="/" element={isAuthenticated ?<Home/> : <Login/>}/>
         {/* <Route path="/Home" element={isAuthenticated ?<Home/> : <Login/>}/> */}
         {/* <Redirect from='/login' to="/Home" /> */}
         <Route path="/account" element={isAuthenticated ?<Account/>: <Login/>}/>
         <Route path="/newpost" element={isAuthenticated ?<NewPost/>: <Login/>}/>
         <Route path="/register" element={isAuthenticated ? <Home/> : <Register/>}/>
         
         <Route path="/update/profile" element={isAuthenticated? <UpdateProfile/> : <Login/>}></Route>

         <Route path="/update/password" element={isAuthenticated? <UpdatePassword/> : <Login/>}></Route>

         <Route path="/user/:id" element={isAuthenticated? <UserProfile/> : <Login/>}></Route>


         <Route path="search" element={<Search/>}></Route>
         <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;



