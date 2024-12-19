import './page.css'

export default function EmptyView(){
    return(
        <div className='empty-view-bg-con d-flex flex-column align-items-center justify-content-center'>

            <img src='/images/rb_2150544961.png' className='error-img' alt='error-img'/>
            <p className='error-msg'>There is No any User</p>
            <button className='btn btn-primary'>Try Again</button>
        </div>
    )
}