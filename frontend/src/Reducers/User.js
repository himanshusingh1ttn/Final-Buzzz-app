import { createReducer } from "@reduxjs/toolkit";
const initialState={isAuthenticated:false}


export const userReducer= createReducer(initialState,{
    LoginRequest: (state) => {
        state.loading=true;
    },
    LoginSucess: (state,action) => {
        state.loading=false;
        state.user=action.payload;
        state.isAuthenticated=true;
    },
    LoginFailure: (state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isAuthenticated=false;
    },


    RegisterRequest: (state) => {
        state.loading=true;
    },
    RegisterSuccess: (state,action) => {
        state.loading=false;
        state.user=action.payload;
        state.isAuthenticated=true;
    },
    RegisterFailure: (state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isAuthenticated=false;
    },

    LoadUserRequest: (state) => {
        state.loading=true;
    },
    LoadUserSuccess: (state,action) => {
        state.loading=false;
        state.user=action.payload;
        state.isAuthenticated=true;
    },
    LoadUserFailure: (state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isAuthenticated=false;
    },
    
    LogoutUserRequest: (state) => {
      state.loading=true;
    },
    LogoutUserSuccess: (state,action) => {
        state.loading=false;
        state.user=null;
        state.isAuthenticated=false;
    },
    LogoutUserFailure: (state,action)=>{
        state.loading=false;
        state.error=action.payload;
        state.isAuthenticated=true;
    },
    clearErrors: (state) => {
        state.error = null;
      },
});



export const postOfFollowingReducer = createReducer({}, {
    postOfFollowingRequest: (state) => {
      state.loading = true;
    },
    postOfFollowingSuccess: (state, action) => {
      state.loading = false;
      //state.posts = action.payload;
      state.posts = action.payload.posts;
      state.currentPage = action.payload.currentPage;
      state.hasNextPage = action.payload.hasNextPage;
    },
    postOfFollowingFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  });

  export const allUsersReducer = createReducer({}, {
    allUsersRequest: (state) => {
      state.loading = true;
    },
    allUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    allUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  });

  export const usersProfileReducer = createReducer({}, {
    userProfileRequest: (state) => {
      state.loading = true;
    },
    userProfileSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    userProfileFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  });
