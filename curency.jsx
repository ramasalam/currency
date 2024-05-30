import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CurrencyTable = () => {
  const [rates, setRates] = useState([]);
  const apiKey = '3242247f35e24703ac579e3589b0aa74'; 

  useEffect(() => {
    axios.get('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=3242247f35e24703ac579e3589b0aa74 ')
      .then(response => {
        const { data } = response;
        const currencies = ['CAD', 'EUR', 'IDR', 'JPY', 'CHF', 'GBP'];
        const ratesData = currencies.map(currency => {
          const exchangeRate = parseFloat(data.rates[currency]);
          return {
            currency,
            weBuy: (exchangeRate * 1.05).toFixed(4),
            exchangeRate: exchangeRate.toFixed(4),
            weSell: (exchangeRate * 0.95).toFixed(4),
          };
        });
        setRates(ratesData);
      })
      .catch(error => {
        console.error('Error fetching  data:', error);
      });
  }, [apiKey]);

  return (
    <div style={{ backgroundColor: 'orange', color: 'white', padding: '20px', textAlign: 'center' }}>
      <table style={{ margin: '0 auto', borderCollapse: 'collapse', width: '60%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid white', padding: '8px' }}>Currency</th>
            <th style={{ border: '1px solid white', padding: '8px' }}>We Buy</th>
            <th style={{ border: '1px solid white', padding: '8px' }}>Exchange Rate</th>
            <th style={{ border: '1px solid white', padding: '8px' }}>We Sell</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((rate, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid white', padding: '8px' }}>{rate.currency}</td>
              <td style={{ border: '1px solid white', padding: '8px' }}>{rate.weBuy}</td>
              <td style={{ border: '1px solid white', padding: '8px' }}>{rate.exchangeRate}</td>
              <td style={{ border: '1px solid white', padding: '8px' }}>{rate.weSell}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Rates are based on 1 USD</p>
      <p>This application uses API from <a href="https://currencyfreaks.com" style={{ color: 'white' }}>https://currencyfreaks.com</a></p>
    </div>
  );
};

export default CurrencyTable;