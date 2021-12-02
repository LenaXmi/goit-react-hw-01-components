import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionTable}>
      <thead>
        <tr>
          <th className={s.tableTitle}>Type</th>
          <th className={s.tableTitle}>Amount</th>
          <th className={s.tableTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className={s.tableValue}>{item.type}</td>
            <td>{item.currency}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
