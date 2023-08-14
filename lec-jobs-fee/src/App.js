import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { Component } from 'react';


class App extends Component {
  constructor(){
    super();
    this.state= {
      userLoggedIn : false,
      user : {},

    }
    this.loginUser = this.loginUser.bind(this);
  }


  loginUser(user){
    window.sessionStorage.setItem("loggedInUser", JSON.stringify(user));
    window.sessionStorage.setItem("isLoggedIn", "true");
  }

  render(){
    let user = this.state.user;
    let userLoggedIn = this.state.userLoggedIn;
    if (!Object.keys(user).length || !userLoggedIn) {
      user = window.sessionStorage.getItem("loggedInUser");
      userLoggedIn = window.sessionStorage.getItem("isLoggedIn") === "true";
      if (userLoggedIn) {
        user = JSON.parse(user);
      }
    }

    if (userLoggedIn) {
      return <Home user={user} />;
} else {
return <Login loginUser={this.loginUser} />;
}
}
}
// function App() {
//   return (
//    <Login/>
//     // <Home/>
//   );
// }

export default App;
