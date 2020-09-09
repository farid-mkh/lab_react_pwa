import React, { useEffect } from 'react';
import './assets/css/App.css';
//component
import Home from './layout/home'
import Mobile from './layout/mobile'
import Desktop from './layout/desktop'
import Error from './layout/error'
//route
import {Route,Switch} from 'react-router-dom';
//firebase
import firebase from './firebase/firebase'
//StateFunc
import StateFunc from './components/StateFunc'

function App() {
  const {
    user,
    setUser
  } = StateFunc()
  useEffect(()=>{
      //get tokken for notification
      const msg = firebase.messaging();
      msg.requestPermission().then(()=>{
        return msg.getToken();
      }).then((data)=>{
        // console.warn('tokken',data);
      })
      // // read from firebase
      const firebasedata = firebase.database().ref("shafadoc");
      firebasedata.on('value',data=>{
          setUser({
            name:data.val().name,
            tele:data.val().tele
          })
      })
      // console.log(user);
  },[setUser,user])
  return (
    <Switch>
      {/* if you don't put exact, other routes won't work */}
      <Route path="/" exact render={()=><Home/>}/>
      <Route path="/mobile/" render={()=><Mobile user={user}/>}/>
      <Route path="/desktop" render={()=><Desktop user={user}/>}/>
      <Route component={Error}/>
    </Switch>
    
  );
}

export default App;
