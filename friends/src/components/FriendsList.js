import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from "../utils/axiosWithAuth"

const FriendsList = () => {
    const [friends, setFriends] = useState({
        friends: []
    })

    useEffect(()=>{
        axiosWithAuth()
        .get("/friends")
        .then(res =>{
            console.log(res)
            setFriends({
                friends: res.data //this could be wrong, check console log
            })
        })
        .catch(error => console.log("error in friendslist", error))

    },[]) //closes useEffect, //might need to check dependency array

    return(
        <div>
            <h1>My Friends</h1>
            {friends.friends.map(friend =>{
                return(
                    <>
                    <div>{friend.name}</div>
                    <div>{friend.age}</div>
                    <div>{friend.email}</div>
                    </>
                )
            })}
        </div>
    )



}//closes FriendsList component

export default FriendsList;