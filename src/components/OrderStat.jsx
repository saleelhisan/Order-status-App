import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './OrderStat.scss';

library.add(faDollarSign, faArrowUp, faArrowDown);

const OrderStat = ({ stat }) => {
  const value =
    typeof stat.value === 'object'
      ? `${stat.value.amount} ${stat.value.currency}`
      : stat.value;

  const percentage =
    typeof stat.percentage === 'object'
      ? `${stat.percentage.value}% ${stat.percentage.movement}`
      : '';

  return (
    <div className="order-stat">
      <div className="label">{stat.label}</div>
      <div className="value">
        <span>
          <FontAwesomeIcon icon={['fas', 'dollar-sign']} />
          {value}
        </span>
      </div>
      <div className={`percentage ${stat.percentage.movement}`}>
        <span>
          {stat.percentage.movement === 'increment' && (
            <FontAwesomeIcon icon={['fas', 'arrow-up']} />
          )}
          {stat.percentage.movement === 'decrement' && (
            <FontAwesomeIcon icon={['fas', 'arrow-down']} />
          )}
          {percentage}
        </span>
      </div>
    </div>
  );
};

export default OrderStat;
