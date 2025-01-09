import '../css/HomePage.css'
import { Outlet, useNavigate } from "react-router-dom"
import kapusta from '../images/kapusta-svg.svg'
import {useHome} from '../hooks/useHome'
import { useEffect } from 'react'


export default function HomePage() {
   const {isLogin} = useHome()
   const navigate = useNavigate()
  useEffect(() => {
    if(isLogin){
      navigate("/transaction/expenses", {replace: true})
    }
  }, [isLogin]);

  
  return (
    <div className="home-page-container">
      <div className='home-page-logo-box'>
        <div className='home-page-top-svg-box'>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
          <img className="home-page-top-svg" src={kapusta}  alt="Kapusta"/>
        </div>
      </div>
      <div className='home-page-logo'>
        <h1 className='home-page-logo-h'>Kapu$ta</h1>
        <p className='home-page-logo-p'>SMART FINANCE</p>
      </div>
      <div className='home-page-bottom-svg-box'>
        <div>
          <img className="home-page-bottom-svg" src={kapusta}  alt="Kapusta"/>
          <div className='home-page-svg-spot'> </div>
        </div>
        <div>
          <img className="home-page-bottom-svg" src={kapusta}  alt="Kapusta"/>
          <div className='home-page-svg-spot'> </div>
        </div>        

      </div>
      <Outlet/>
    </div>
  );
}
