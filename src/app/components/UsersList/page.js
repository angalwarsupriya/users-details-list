"use client"

import './page.css'


export default function UsersList(props){
   const {eachUser, handleCheckboxChange} = props
   

   
   if (eachUser.avatar.startsWith('https://cloudflare-ipfs.com/ipfs/')){
      eachUser.avatar = eachUser.avatar.replace('https://cloudflare-ipfs.com/ipfs/', 'https://gateway.pinata.cloud/ipfs/');
   }

   const handleCheckbox = (user, event) => {
      handleCheckboxChange(user, event.target.checked);
  };
  


   return(
      <li className='d-flex align-items-center'>
         <input type='radio' className='checkbox' name='radio'  onChange={(event) => handleCheckbox(eachUser, event)}/>
         <div className='img-con'>
            <img className='user-img' src={eachUser.avatar}/>
         </div>
         <div className='user-con d-flex flex-column justify-content-center'>
            <p className='name-p'>{eachUser.profile.username}</p>
            <p className='job'>{eachUser.jobTitle}</p>
         </div>
      </li>
   )
}

