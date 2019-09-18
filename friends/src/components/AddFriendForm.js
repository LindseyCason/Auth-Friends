import React, { useEffect, useState } from "react";
import { axiosWithAuth }  from "../utils/axiosWithAuth"
// import { FriendsList } from "../components/FriendsList"

//I need to get Friends List to re-render after axios call.

export const AddFriendForm = ( )=> {
const [newFriend, setNewFriend] = useState({
    id: Date.now(),
    name: '',
    age: '',
    email: '',
  });

const handleChanges = e => {
    setNewFriend({...newFriend, [e.target.name]: e.target.value});
  };

  const addFriend = () =>{
        
    axiosWithAuth()
    .post("/friends", newFriend)
    .then(res =>{
        console.log("inside the axios call in AddFriendForm", res.data )
    })
    .catch(error => console.log("error in AddFriendForm", error))


}


const handleClick = e =>{ //NEED A POST REQUEST IN HERE.
    // e.preventDefault();
 addFriend();

}


return(

  <div>

      <form>

        Name: <input type="text"  value ={newFriend.name} name="name" onChange={handleChanges} />
        Age: <input type="text" value={newFriend.age} name="age" onChange={handleChanges}/>
        Email: <input type="text" value ={newFriend.email} name="email" onChange={handleChanges}/>

        <button onClick={handleClick}>ADD A FRIEND</button>

      </form>
    </div>  
)

}