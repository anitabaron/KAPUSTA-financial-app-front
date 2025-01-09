import '../css/BtnToReports.css'
import { useBtnToReports } from "../hooks/useBtnToReports";
import graph from '../images/report.png'


export default function BtnToReports() {

  const { handleOnClick } = useBtnToReports()
  
    return (
              <button className="btn-to-reports" type="button" onClick={handleOnClick}>
                <p className='btn-to-reports-p1'>Reports</p>
                <img className="btn-to-reports-graph" src={graph}  alt="graph icon"/>
              </button>
    );
  }