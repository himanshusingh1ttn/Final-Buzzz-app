const express = require("express");
const { register , login, friends, logout, updatePassword,updateProfile, deleteMyProfile, myProfile, getUserProfile, getAllUsers, getMyPosts, getUserPost,friendstoadmin} = require("../controllers/user");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();


router.route("/register").post(register);
router.route("/login").post(login);


router.route("/logout").get(logout);

router.route("/my/posts").get(isAuthenticated,getMyPosts),

router.route("/follow/:id").get(isAuthenticated,friends);
//for adding friend to admin
router.route("/follow/").get(isAuthenticated,friendstoadmin);

router.route("/update/password").put(isAuthenticated,updatePassword);
router.route("/update/profile").put(isAuthenticated,updateProfile);
router.route("/delete/me").delete(isAuthenticated,deleteMyProfile);

router.route("/me").get(isAuthenticated,myProfile);
router.route("/userposts/:id").get(isAuthenticated,getUserPost),
router.route("/user/:id").get(isAuthenticated,getUserProfile);
router.route("/users").get(isAuthenticated,getAllUsers);

module.exports= router;