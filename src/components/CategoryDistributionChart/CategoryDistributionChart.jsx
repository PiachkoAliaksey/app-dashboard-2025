import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import WrapperChart from '../WrapperChart/WrapperChart';

const mockDataCategoryDistributionChart = [
    { name: 'Electronics', value: 4500 },
    { name: 'Clothing', value: 3200 },
    { name: 'Home & Garden', value: 2800 },
    { name: 'Books', value: 2100 },
    { name: 'Sports & Outdoors', value: 1900 }
]

const COLORS = ['#6366F1', '#8B5CF6', '#EC4899', '#10B981', '#F59E08']

const CategoryDistributionChart = () => {
    return (
        <WrapperChart title={'Category distribution'}>
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <PieChart>
                    <Pie data={mockDataCategoryDistributionChart} cx={'50%'} cy={'50%'} labelLine={false} outerRadius={80} fill='#8884d8' dataKey={'value'} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                        {mockDataCategoryDistributionChart?.map((item, index) => {
                            return (<Cell key={`cell-${item.name}`} fill={COLORS[index % COLORS.length]} />)
                        })}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: 'rgba(31,41,55,0.8)', borderColor: '#4B5563' }} itemStyle={{ color: '#E5E7EB' }} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </WrapperChart>
    )
}

export default CategoryDistributionChart