"use client"

import './page.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState} from 'react';
import Loading from '../Loading/page';
import UsersList from '../UsersList/page';
import ErrorPage from '../ErrorPage/page';

import { IoMdClose } from "react-icons/io";
import { MdOutlineMarkunread } from "react-icons/md";

import { IoSearchOutline } from "react-icons/io5";
import EmptyView from '../EmptyView/page';

// -- exporting UI from file -- //

export default  function Main(){

    // -- SETTING STATES FOR MANAGING DIFFERENT VIEWS -- // 

    const [usersDetailsList, setUsersDetailsList] = useState([])
    const [pageStatus, setPageStatus] = useState('Loading')
    
    const [searchTitle, changeSearchTitle] = useState('')
    const [selectedUser, setSelectedUser] = useState(null);
    const [avatarUrl, setAvatar]=useState('')
    const hideStatus = selectedUser !== null ? '' : 'none'

    
     
   // -- USEEFFECT FOR FETCHING DATA AND SET PAGE STATUS BASED ON RESULT OF FETCH -- //
    
   const handleCheckboxChange = (user, isChecked,avatarUrl) => {
    console.log('dddddddddd')
    if (isChecked) {
        setSelectedUser(user);
        setAvatar(avatarUrl)
    } else {
        setSelectedUser(null);
    }
};  
   const fetchUser = async ()=>{
    console.log('sssssss')
    try{
      const response = await fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      const data = await response.json()
      const usersWithIds = data.map((user, index) => ({ ...user, id: index + 1 }));
      setPageStatus('Success')  
      setUsersDetailsList(usersWithIds)       
     }catch{
        setPageStatus('Error')
     }

    }

    useEffect(()=>{
      
        fetchUser()
    },[]);
       
    
    // -- DISPLAY UI BASED ON STATE --//

    const changesearch = (event)=>{
        changeSearchTitle(event.target.value)
    }


    
    
    const userDetailsListDisplay = ()=>{


        const filteredList = usersDetailsList.filter((eachItem)=>{
           return eachItem.jobTitle.toUpperCase().includes(searchTitle.toUpperCase())
        })
   

        return(           
            <div className='container users-details-list-bg-con'>
                <div className='search-con'>
                <h4>Users Details</h4>
                <p className='p'>Wellcome to our Web portal! where you can find the all informaion about users</p>
                <div className='row-box'>
                 <div className='d-flex'>
                    <input type='search' value={searchTitle} onChange={changesearch}/>
                    <div className='search-icon-box d-flex align-items-center justify-content-center'>
                        <IoSearchOutline className='icon'/>
                    </div>
                 </div>
                 <button className='add-use-btn'>
                    Add user
                 </button>
                 </div>
            </div>
            {filteredList.length > 0 ?
            <ul className='row pt-4'>
                {filteredList.map((eachUser)=>(
                  <UsersList eachUser={eachUser} handleCheckboxChange={handleCheckboxChange} key={eachUser.id}/>
                ))}
            </ul>
            :
               <EmptyView/>
            
    }
            </div>
        )
    }

    function displayBasedOnPageStatus(){
        switch (pageStatus){
            case 'Loading' :
                return <Loading />
            case 'Success':                   
                return  userDetailsListDisplay()
            case 'Error':
                return <ErrorPage fetchUser={fetchUser}/>
            default:
                null
        }
    }

   
   // -- RETURNING ENTIRE UI LOGIC (return Method) -- //
    return(
        <main className='main-bg-con'>         
            <div className='display-users-list-bg-con'>
                <div className='list-of-users-con'>
                  {displayBasedOnPageStatus()}
                </div>
            </div>



           <div className='displays-user-details-bg-con ' style={{display:hideStatus}}>
               
                <div className='profile-hea-con d-flex justify-content-between align-items-center' style={{color:'white'}}>
                  <h5 style={{fontSize:'25px', margin:'0px'}} >Profile</h5>
                  <button style={{color:'white', border:'none', backgroundColor:'transparent'}} onClick={()=>handleCheckboxChange({}, null, '')}>
                    <IoMdClose className='wrong-Icon'/>
                  </button>         
                     
                 </div>
                 <hr style={{width:'100%', color:"#fff", marginTop:"0px"}}/>  

               <div className='profile-details-con'>
              
                    { selectedUser !== null ?
                    
                    <div className=''>
                        <div className='profile-img-con'>
                        <img src={avatarUrl} className='profile-img' alt={selectedUser.profile.username}/>
                        </div>
                        <div className='d-flex align-item-ceneter justify-content-between mt-5' style={{width:'100%'}}>
                            <div>
                              <h6 className='username-p'>I am <span>"{selectedUser.profile.username}"</span></h6>
                              <p className='job-p'>{selectedUser.jobTitle}</p>
                            </div>
                            <button className='msg-btn'>Message</button>
                        </div>
                        
                        <h6 className='bio-h'>Bio</h6>
                        <p className='bio-p'>{selectedUser.Bio}</p>
                        <h6 className='bio-h'>First-name</h6>
                        <p className='names-p'>{selectedUser.profile.firstName}</p>
                        <h6 className='bio-h'>Last-name</h6>
                        <p className='names-p'>{selectedUser.profile.lastName}</p>

                        <h6 className='bio-h'>Contact Information</h6>

                        <div className=' d-flex align-items-center' style={{height:'20px'}}>  
                            <MdOutlineMarkunread className='icon'/>                          
                            <p className='names-p' style={{marginTop:'15px', marginLeft:'10px'}}>{selectedUser.profile.email}</p>
                            
                        </div>


                    </div>
                    :
                    null}
                   
               </div>
           </div>

        </main>
    )
}


