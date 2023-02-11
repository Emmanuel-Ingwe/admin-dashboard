import React from 'react';

import LineChart from "../../components/Charts/LineChart";

const Line = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <h1 className="text-xl font-bold">Inflation Rate</h1>
    <div className="w-full">
      <LineChart />
    </div>
  </div>
);

export default Line;