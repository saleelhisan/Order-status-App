import React from 'react';
import OrderStat from './OrderStat';
import './WidgetOrderStats.scss';

const WidgetOrderStats = ({ data }) => {
  return (
    <div className="widget-order-stats">
      {data.map(stat => (
        <OrderStat key={stat.id} stat={stat} />
      ))}
    </div>
  );
};

export default WidgetOrderStats;
    