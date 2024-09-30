// defining API endpoint constants of a project.


//Url of backend server
export const API_BASE_URL = "http://localhost:5001";

//App version/ version of Api being used
export const API_VERSION = "/api/v1";

//combining base Url, api version and endpoint for
// user related operations, login , collection of users, individual post and multiple posts
export const USER_API = API_BASE_URL + API_VERSION + "/user";
export const LOGIN_API = API_BASE_URL + API_VERSION + "/login";
export const USERS_API = API_BASE_URL + API_VERSION + "/users";
export const POST_API = API_BASE_URL + API_VERSION + "/post";
export const POSTS_API = API_BASE_URL + API_VERSION + "/posts";

/* why ?
to avoid hardcoding API URLs throughout the code,
 making it easier to update the URLs 
 (for example, changing from localhost to a production URL) by simply updating these constants.
*/