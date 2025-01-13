import '../css/TransactionPage.css';

import { Outlet } from 'react-router-dom';
import kapusta from '../images/kapusta-svg.svg';

export default function TransactionPage() {
  return (
    <div className="transaction-page-container">
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
