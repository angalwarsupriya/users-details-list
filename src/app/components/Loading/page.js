import './page.css'

export default function Loading(){
    return(
        <div className='loading-bg-con d-flex align-items-center justify-content-center'>
            <div className="spinner-border text-light" style={{width: '3rem', height: "3rem" ,role:"status"}}>
              <span className="visually-hidden">Loading...</span>
 
            </div>
        </div>
    )
}