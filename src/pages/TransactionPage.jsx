import "../css/TransactionPage.css";

import { Link, Outlet } from "react-router-dom";
import kapusta from "../images/kapusta-svg.svg";
import Balance from "../components/Balance";

export default function TransactionPage() {
  return (
    <div className="transaction-page-container">
      <Balance />
      <Outlet />
      <div className="transaction-page-bacgroud-box"></div>
      <div className="transaction-page-bottom-svg-box">
        <img
          className="transaction-page-bottom-svg"
          src={kapusta}
          alt="Kapusta"
        />
        <img
          className="transaction-page-bottom-svg"
          src={kapusta}
          alt="Kapusta"
        />
        <img
          className="transaction-page-bottom-svg"
          src={kapusta}
          alt="Kapusta"
        />
        <img
          className="transaction-page-bottom-svg"
          src={kapusta}
          alt="Kapusta"
        />
        <img
          className="transaction-page-bottom-svg"
          src={kapusta}
          alt="Kapusta"
        />
        <img
          className="transaction-page-bottom-svg"
          src={kapusta}
          alt="Kapusta"
        />
        <img
          className="transaction-page-bottom-svg"
          src={kapusta}
          alt="Kapusta"
        />
        <img
          className="transaction-page-bottom-svg"
          src={kapusta}
          alt="Kapusta"
        />
        <img
          className="transaction-page-bottom-svg"
          src={kapusta}
          alt="Kapusta"
        />
        <img
          className="transaction-page-bottom-svg"
          src={kapusta}
          alt="Kapusta"
        />
        <img
          className="transaction-page-bottom-svg"
          src={kapusta}
          alt="Kapusta"
        />
        <img
          className="transaction-page-bottom-svg"
          src={kapusta}
          alt="Kapusta"
        />
        <img
          className="transaction-page-bottom-svg"
          src={kapusta}
          alt="Kapusta"
        />
        <img
          className="transaction-page-bottom-svg"
          src={kapusta}
          alt="Kapusta"
        />
      </div>
    </div>
  );
}
