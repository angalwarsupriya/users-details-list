import './page.css'
import Main from "./components/Main/page"
import Header from "./components/Header/page"


export default  function Home(){
 
  // -- returning ui --//

  return(
    <div className="bg-con">
     <Header/>
     <Main/>
    </div>
  )
}