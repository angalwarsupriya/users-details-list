
import './page.css'


export default function ErrorPage(){
    
    return(
        <div className='error-page-bg-con d-flex flex-column align-items-center justify-content-center'>
            <img src='/images/rb_9285.png' className='error-img' alt='error-img'/>
            <p className='error-msg'>Somthing went Wrong, Please Try again</p>
            <button className='btn btn-primary' >Try Again</button>
        </div>
    )
}