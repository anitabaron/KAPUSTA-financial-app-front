import "../css/TransactionNavBtn.css";
import { useReportNavBtn } from "../hooks/useReportNavBtn";
import { useLocation } from "react-router";

export default function ReportNavBtn() {
  const  toggleSheet  = useReportNavBtn();
  const location = useLocation().pathname.slice(21);
  const text = location.toUpperCase(); 

  return (
    <div className="transaction-nav-btn-container">
      <button
        type="submit"
        onClick={() => {
          toggleSheet();
        }}
        className="button-vector"
      >
        <svg className="svg">
          <use href="/icons/sprite.svg#icon-vector-left"></use>
        </svg>
      </button>
      <h1>
      {text}
      </h1>
      <button
        type="submit"
        onClick={() => {
          toggleSheet();
        }}
        className="button-vector"
      >
        <svg className="svg">
          <use href="/icons/sprite.svg#icon-vector-right"></use>
        </svg>
      </button>
    </div>
  );
}