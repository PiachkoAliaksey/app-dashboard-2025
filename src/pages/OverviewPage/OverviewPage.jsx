import React from 'react';
import { BarChart2, ShoppingBag, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

import StatCard from '../../components/StatCard/StatCard';
import SalesOverviewChart from '../../components/SalesOverviewChart/SalesOverviewChart';
import CategoryDistributionChart from '../../components/CategoryDistributionChart/CategoryDistributionChart';
import SalesChanelChart from '../../components/SalesChanelChart/SalesChanelChart';

const mockDataStatCard = [
    { name: 'Total sales', icon: Zap, value: '$12,34', color: '#6366F1' },
    { name: 'New users', icon: Users, value: '1,234', color: '#8B5CF6' },
    { name: 'Total products', icon: ShoppingBag, value: '567', color: '#EC4899' },
    { name: 'Conversion Rate', icon: BarChart2, value: '12.5%', color: '#10B981' },

]

const OverviewPage = () => {
    return (
        <>
            <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            >
                {mockDataStatCard?.map((item) => (
                    <StatCard key={item.name} name={item.name} icon={item.icon} value={item.value} color={item.color} />
                ))}

            </motion.div>

            {/* Charts */}

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
                <SalesOverviewChart />
                <CategoryDistributionChart />
                <SalesChanelChart />
            </div>
        </>

    )
}

export default OverviewPage