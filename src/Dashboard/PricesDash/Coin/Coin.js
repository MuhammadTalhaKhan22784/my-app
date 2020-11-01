import React from 'react';
import './Coin.css';

const Coin = ({ coins }) => {
  return (
      <>
          <div className="container price-table-container">
              <table class="table price-table">
                  <thead>
                      <tr>
                          <th className="th-name" scope="col">S.NO</th>
                          <th className="th-name" scope="col">Name</th>
                          <th className="th-name" scope="col">Price</th>
                          <th className="th-name" scope="col">Change</th>
                          <th className="th-name" scope="col">Market Cap</th>
                          <th className="th-name" scope="col">Trade</th>
                          <th className="th-name" scope="col">Watch</th>
                          
                      </tr>
                  </thead>
                  <tbody>

                      {(coins.length > 0) && coins.map((coins, index) => {
                          return (
                              <tr className="s-no" key={coins.id}>
                                  <td >
                                    {index + 1}
                                  </td>
                                  <td className="coin-icon coin-btn"><img src={coins.image}></img>
                                      <h5>{coins.name}</h5>
                                  </td>
                                  <td >
                                      ${coins.current_price}
                                  </td>
                                  {
                                      coins.price_change_percentage_24h < 0 ? (
                                          <td className='coin-percent red'>{coins.price_change_percentage_24h.toFixed(2)}%</td>
                                      ) : (
                                              <td className='coin-percent green'>+{coins.price_change_percentage_24h.toFixed(2)}% </td>
                                          )
                                  }
                                  <td>${coins.market_cap.toLocaleString()}</td>
                                  <td></td>
                                   <td><button className="buy-btn">Watch</button></td>
                              </tr>
                          )
                      })}
                  </tbody>
              </table>
          </div>
      </>
  )
}

export default Coin;
// const Coin = ({
//   name,
//   price,
//   symbol,
//   marketcap,
//   volume,
//   image,
//   priceChange
// }) => {
//   return (
//     <>
      
//     <div className='coin-container'>
//       <div className='coin-row'>
//         <div className='coin'>   
//           <img src={image} alt='crypto' />
//           <h1>{name}</h1>
//           <p className='coin-symbol'>{symbol}</p>
//         </div>
//         <div className='coin-data'>
//           <p className='coin-price'>${price}</p>
//           <p className='coin-volume'>${volume.toLocaleString()}</p>

//           {priceChange < 0 ? (
//             <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
//           ) : (
//             <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
//           )}

//           <p className='coin-marketcap'>
//             Mkt Cap: ${marketcap.toLocaleString()}
//           </p>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Coin;

