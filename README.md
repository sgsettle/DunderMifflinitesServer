# DunderMifflinitesServer

ENDPOINTS

USER CONTROLLER
http://localhost:3000/user/signup -- 'POST' -- sign up a user
http://localhost:3000/user/login -- 'POST' -- login a user
http://localhost:3000/user/:id -- 'PUT' -- to update user role and hard code in admin
http://localhost:3000/user -- 'GET' -- get all users, for use in admin to delete a user
http://localhost:3000/user/:id -- 'DELETE' -- for admin to delete a by user id

FEED CONTROLLER
http://localhost:3000/feed -- 'POST' -- create a feed post
http://localhost:3000/feed/:id-- 'PUT' -- edit a feed  post by id
http://localhost:3000/feed -- 'GET' -- get all users feed posts (and comments)
http://localhost:3000/feed/:id -- 'DELETE' -- Delete feed post by id

COMMENTS CONTROLLER
http://localhost:3000/comments -- 'POST' -- create and post a comment
http://localhost:3000/comments -- 'GET' -- get all comments by user
http://localhost:3000/comments/:id -- 'PUT' -- update comments by user id
http://localhost:3000/comments/:id -- 'DELETE' -- delete a comment by user id

PROFILE CONTROLLER
http://localhost:3000/profile/ -- 'POST' -- create and post a user profile
http://localhost:3000/profile -- 'GET' -- get all profiles
http://localhost:3000/profile/:id -- 'GET' -- get profiles by user id
http://localhost:3000/profile/:id -- 'UPDATE' -- update a user profile by user id
http://localhost:3000/profile/:id -- 'DELETE -- delete a user profile by user id

