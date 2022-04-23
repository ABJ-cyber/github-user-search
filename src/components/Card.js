import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contexts/UserContext'



const Card = () => {
    const { name } = useContext(UserContext)
    const [user, setUser] = useState({})
  
  useEffect(()=>{
      axios.get(name).then(
          (res) =>{
              console.log(res);
              setUser(res.data)
          }
      )
  }, [name])

  function checkName (data){
    if(data){
        return data
    }
    else{
        return user.login
    }
  }

  function checkBio (data){
    if(data){
        return data
    }
    else{
        return 'This profile has no bio'
    }
  }

  function checkData (data){
    if(data){
        return data
    }
    else{
        return 'Not Available'
    }
  }
  
  return (
    <div className='card'>
        <div className='profile'>
            <div className='profile-pic'>
                <img src={user.avatar_url} alt=""></img>
            </div>
            <div className='profile-info'>
                <h1>{checkName(user.name)}</h1>
                <p className='link'>@{user.login}</p>
                <p>Joined {user.created_at}</p>
            </div>
        </div>
       
        <div className='bio'>
            <p>{checkBio(user.bio)}</p>
        </div>

        <div className='repos'>
            <div className='repo-child'>
                <p>Repos</p>
                <h1>{user.public_repos}</h1>
            </div>
            <div className='repo-child'>
                <p>Followers</p>
                <h1>{user.followers}</h1>
            </div>
            <div className='repo-child'>
                <p>Following</p>
                <h1>{user.following}</h1>
            </div>
        </div>

        <div className='footer'>
            <div className='footer-child'>
                <img src='location.svg' alt=""></img>
                <p>{checkData(user.location)}</p>
            </div>
            <div className='footer-child'>
                <img src='twitter.svg' alt=''></img>
                <p>{checkData(user.twitter_username)}</p>
            </div>
            <div className='footer-child'>
                <img src='link.svg' alt=''></img>
                <p>{checkData(user.email)}</p>
            </div>
            <div className='footer-child'>
                <img src='github.svg' alt=''></img>
                <p>{checkData(user.blog)}</p>
            </div>
        </div>
    </div>
  )
}

export default Card