import "../css/TransactionSummary.css";
import { useTransactionSummary } from "../hooks/useTransactionSummary";
import { v4 as uuidv4 } from "uuid";

const summaryTableRow = (key, samaryData) => {
  return (
    <div key={uuidv4()} className="summary-table-row">
      <p key={uuidv4()}>{key}</p>
      <p key={uuidv4()}>{samaryData[key]} PLN</p>
    </div>
  );
};

export default function TransactionSummary({ activeSheet }) {
  const { data, keys } = useTransactionSummary();

  const samaryData = data(activeSheet);
  const samaryKeys = keys(samaryData);
  
  return (
    <div className="transaction-summary-box">
      <div className="summary-table-head">
        <p className="summary-table-head-p">SUMMARY</p>
      </div>
      {samaryKeys.map((key) => {
        return summaryTableRow(key, samaryData);
      })}
    </div>
  );
}
