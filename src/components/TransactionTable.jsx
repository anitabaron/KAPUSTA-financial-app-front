/** @format */

import "../css/TransactionTable.css";
import { useEffect } from "react";
import { useTransactionTable } from "../hooks/useTransactionTable";
import { v4 as uuidv4 } from "uuid";
import delate from "../images/delete-svg.png";
import { ConfModal } from "./Modal";

const transactionTableRow = (row, deleteTransaction) => {
  return (
    <div key={uuidv4()} className="transaction-table-row">
      <p>{row.date.slice(0, 10)}</p>
      <p>{row.description}</p>
      <p>{row.category}</p>
      <p>{row.amount}</p>
      <button
        onClick={() => {
          deleteTransaction(row._id);
        }}
        className="transaction-table-delate-btn">
        <img src={delate} alt="Delate icon" />
      </button>
    </div>
  );
};
export default function TransactionTable({ activeSheet }) {
  const {
    transactionTableData,
    useEffectGetTransaction,
    deleteTransaction,
    deleteConf,
    deleteModalClose,
    modalIsOpen,
  } = useTransactionTable(activeSheet);
  
  useEffectGetTransaction()
  const transactionData = transactionTableData();

  // useEffect(() => {
  //   console.log("Data for transaction:", transactionData);
  // }, [transactionData]);

  return (
    <div className="">
      <div className="transaction-table-head-box">
        <p className="transaction-table-head">DATE</p>
        <p className="transaction-table-head">DESCRIPTION</p>
        <p className="transaction-table-head">CATEGORY</p>
        <p className="transaction-table-head">SUM</p>
        <p className="transaction-table-head">DELETE</p>
      </div>
      <div className="transaction-table-box">
        {transactionData.map((item) => {
          return transactionTableRow(item, deleteTransaction);
        })}
      </div>
      <ConfModal
        modalIsOpen={modalIsOpen}
        deleteModalClose={deleteModalClose}
        deleteConf={deleteConf}
      />
    </div>
  );
}
