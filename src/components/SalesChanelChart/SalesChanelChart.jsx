import React from 'react';
import WrapperChart from '../WrapperChart/WrapperChart';
import {ResponsiveContainer, Cell, Bar, BarChart, CartesianGrid, YAxis, XAxis, Tooltip } from 'recharts';

const COLORS_SALES_CHANNEL = ['#6366F1', '#8B5CF6', '#EC4899', '#10B981', '#F59E08'];


const mockDataSalesChannel = [
  { name: 'Website', value: 45600 },
  { name: 'Mobile App', value: 45600 },
  { name: 'Marketplace', value: 29800 },
  { name: 'Social Media', value: 18700 },
]

const SalesChanelChart = () => {
  return (
    <WrapperChart title={'Sales by channel'} addClass={'lg:col-span-2'}>
      <ResponsiveContainer>

        <BarChart data={mockDataSalesChannel} >

          <CartesianGrid strokeDasharray={'3 3'} stroke='#4B5563' />
          <XAxis dataKey={'name'} stroke='#9ca3af' />
          <YAxis stroke='#9ca3af' />
          <Tooltip contentStyle={{
            background: 'rgba(31, 41, 55, 0.8)',
            borderColor: '#4B5563'
          }} itemStyle={{ color: '#E5E7EB' }} />
          {/* <Legend /> */}
          <Bar dataKey={'value'} fill='#8884d8' >
            {mockDataSalesChannel.map((item, index) => {
              return (<Cell key={`cell-${item.name}`} fill={COLORS_SALES_CHANNEL[index % COLORS_SALES_CHANNEL.length]} />)
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

    </WrapperChart>
  )
}

export default SalesChanelChart