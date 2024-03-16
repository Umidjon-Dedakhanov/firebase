import './App.css';
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

function App() {

  const [user, setUser] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');


const firebaseConfig = {
  apiKey: "AIzaSyDITJlPTmxLFTFyww2uMOWeFs3PYj7jl1E",
  authDomain: "adddata-58cbd.firebaseapp.com",
  projectId: "adddata-58cbd",
  storageBucket: "adddata-58cbd.appspot.com",
  messagingSenderId: "522622737190",
  appId: "1:522622737190:web:9589d9b5c4ead5018dffe7"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase();

function addData(e){
  e.preventDefault();

  if(user && phone && email != ""){
    set(ref(db, "users/" + user), {
      user: user,
      phone: phone,
      email: email
  })
  .then(() => {
      alert("Success!")
  })
  .catch((error) => {
      alert("Failed!");
      console.log(error);
  })  
  }else{ 
    alert("Yebsan!")
  }


  setUser('');
  setPhone('');
  setEmail('');
}


  return (
    <div className="app">
     <form action="#">
       <input value={user.trim()} onChange={(e)=> setUser(e.target.value)} type="text" placeholder="Username..." id="user" />
       <input value={phone.trim()} onChange={(e)=> setPhone(e.target.value)} type="tel" placeholder="Phone" id="phone" />
       <input value={email.trim()} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="email" id="email" required/>
       <button onClick={addData} id="send">Send</button>
     </form>
    </div>
  );
}

export default App;
