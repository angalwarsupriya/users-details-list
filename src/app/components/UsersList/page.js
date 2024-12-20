"use client"

import './page.css'


export default function UsersList(props){
   const {eachUser, handleCheckboxChange} = props
   

   if (!eachUser || !eachUser.profile) {
      return null; // Return null if the user or profile is undefined
  }
   const avatarUrl = eachUser.avatar.startsWith('https://cloudflare-ipfs.com/ipfs/')
        ? eachUser.avatar.replace('https://cloudflare-ipfs.com/ipfs/', 'https://gateway.pinata.cloud/ipfs/')
        : eachUser.avatar;


   const handleCheckbox = (user, event) => {
      handleCheckboxChange(user, event.target.checked, avatarUrl);
  };
  

   if (eachUser === null){
      return null
   }
   return(
      <li className='d-flex align-items-center'>
         <input type='radio' className='checkbox' name='radio'  onChange={(event) => handleCheckbox(eachUser, event)}/>
         <div className='img-con'>
            <img className='user-img' src={avatarUrl}/>
         </div>
         <div className='user-con d-flex flex-column justify-content-center'>
            <p className='name-p'>{eachUser.profile.username}</p>
            <p className='job'>{eachUser.jobTitle}</p>
         </div>
      </li>
   )
}

