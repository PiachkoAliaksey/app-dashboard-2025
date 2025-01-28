import React from 'react';
import { AlertTriangle, BarChart2, DollarSign, Package, ShoppingBag, TrendingUp, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import StatCard from '../../components/StatCard/StatCard';
import ProductTable from '../../components/ProductTable/ProductTable';
import CategoryDistributionChart from '../../components/CategoryDistributionChart/CategoryDistributionChart';
import SalesTrendChart from '../../components/SalesTrendChart/SalesTrendChart';

const mockDataProductsStatCard = [
    { name: 'Total products', icon: Package, value: '1234', color: '#6366F1' },
    { name: 'Top Selling', icon: TrendingUp, value: '89', color: '#10B981' },
    { name: 'Low Stock', icon: AlertTriangle, value: '23', color: '#F59E08' },
    { name: 'Total Revenue', icon: DollarSign, value: '$543,4', color: '#10B981' },
]

const ProductsPage = () => {
    return (
        <>
            <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            >
                {mockDataProductsStatCard?.map((item) => (
                    <StatCard key={item.name} name={item.name} icon={item.icon} value={item.value} color={item.color} />
                ))}

            </motion.div>

            <ProductTable />

            {/* Charts */}

            <div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
                <SalesTrendChart />
                <CategoryDistributionChart />
            </div>
        </>
    )
}

export default ProductsPage