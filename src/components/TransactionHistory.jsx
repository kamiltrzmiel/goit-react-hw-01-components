import propTypes from 'prop-types';

export const TransactionHistory = ({el}) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {el.map(({id, type, amount, currency}) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )  
}

TransactionHistory.propTypes = {
  el: propTypes.array.isRequired,
};



  