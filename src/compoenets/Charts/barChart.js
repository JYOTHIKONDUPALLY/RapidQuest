import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartDemo = () => {
  const data = [
    { category: '1', employee: 30, employer: 40, interest: 25 },
    { category: '2', employee: 50, employer: 60, interest: 35 },
    { category: '3', employee: 20, employer: 25, interest: 15 },
    { category: '4', employee: 70, employer: 80, interest: 45 },
    { category: '5', employee: 40, employer: 30, interest: 20 },
    { category: '6', employee: 60, employer: 70, interest: 55 },
    { category: '7', employee: 25, employer: 15, interest: 10 },
    { category: '8', employee: 80, employer: 90, interest: 65 },
    { category: '9', employee: 35, employer: 50, interest: 30 },
    { category: '10', employee: 45, employer: 55, interest: 40 },
    { category: '11', employee: 55, employer: 65, interest: 50 },
    { category: '12', employee: 15, employer: 10, interest: 5 },
  ];

  const maxEmployee = Math.max(...data.map(entry => entry.employee));
  const maxEmployer = Math.max(...data.map(entry => entry.employer));
  const totalInterest = data.reduce((sum, entry) => sum + entry.interest, 0);

  const formatValueInThousands = (value) => `${(value / 1000).toFixed(1)}k`;

  return (
    <ResponsiveContainer width="100%" height={300}   style={{
      '@media only screen and (max-width: 600px)': {
        width: '200px',
        maxWidth: '100%',
      },
    }}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis tickFormatter={formatValueInThousands} />
        <Tooltip formatter={(value) => formatValueInThousands(value)} />
        <Legend layout="horizontal" verticalAlign="top" />
        <Bar dataKey="employee" fill="#8884d8" name={`Employee (Max: ${formatValueInThousands(maxEmployee)})`} barSize={10} />
        <Bar dataKey="employer" fill="#365486" name={`Employer (Max: ${formatValueInThousands(maxEmployer)})`} barSize={10} />
        <Bar dataKey="interest" fill="#43766C" name={`Interest (Total: ${formatValueInThousands(totalInterest)})`} barSize={10}/>
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarChartDemo;
