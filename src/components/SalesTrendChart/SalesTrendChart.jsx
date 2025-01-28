import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import WrapperChart from '../WrapperChart/WrapperChart';

const salesData = [
    { name: 'Jul', sales: 4000 },
    { name: 'Aug', sales: 3000 },
    { name: 'Sep', sales: 5800 },
    { name: 'Oct', sales: 4200 },
    { name: 'Nov', sales: 5100 },
    { name: 'Feb', sales: 3900 },
    { name: 'Apr', sales: 6300 },
    { name: 'May', sales: 7000 },
    { name: 'Jul', sales: 7200 },

]

const SalesTrendChart = () => {
    return (
        <WrapperChart title={'Sales Trend'}>
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray={'3 3'} stroke='#4B5563' />
                    <XAxis dataKey={'name'} stroke='#9ca3af' />
                    <YAxis stroke='#9ca3af' />
                    <Tooltip contentStyle={{
                        background: 'rgba(31, 41, 55, 0.8)',
                        borderColor: '#4B5563'
                    }} itemStyle={{ color: '#E5E7EB' }} />
                    <Line type={'monotone'} dataKey={'sales'} stroke={"#6366F1"} strokeWidth={'3'} dot={{ fill: '#6366F1', strokeWidth: 2, r: 6 }} activeDot={{ r: 8, strokeWidth: 2 }} />
                </LineChart>
            </ResponsiveContainer>
        </WrapperChart>
    )
}

export default SalesTrendChart