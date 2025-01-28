import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Edit, Search, Trash2 } from 'lucide-react';
import { source } from 'framer-motion/client';


const mockDataProductTable = [
    { id: 1, name: 'Wireless Earbuds', category: 'Electronics', price: 59.99, stock: 143, sales: 1234, source: 'https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'Leather Wallet', category: 'Accessories', price: 39.99, stock: 89, sales: 800, source: 'https://images.unsplash.com/photo-1629958513881-a086d21383cd?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Smart Watch', category: 'Electronics', price: 199.99, stock: 56, sales: 650, source: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'Yoga Mat', category: 'Fitness', price: 29.99, stock: 210, sales: 950, source: 'https://plus.unsplash.com/premium_photo-1664536967987-984ac90ed16c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, name: 'Coffee Maker', category: 'Home', price: 79.99, stock: 78, sales: 720, source: 'https://images.unsplash.com/photo-1610886420679-1ace2990809d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
]

const title = ['name', 'category', 'price', 'stock', 'sales', 'actions']

const ProductTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredData = useMemo(() => mockDataProductTable.filter((item) => item.name.toLowerCase().includes(searchTerm) || item.category.toLowerCase().includes(searchTerm)), [searchTerm])

    const handleSearchTerm = (e) => {
        const term = e.target.value.toLowerCase().trim();
        setSearchTerm(term);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className=' bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border  border-gray-700 flex flex-col gap-4 mb-8'>

            <div className='flex justify-between items-center mb-6 '>
                <h2 className='text-xl font-semibold text-gray-100'>Product list</h2>
                <div className='relative'>
                    <input onChange={(e) => handleSearchTerm(e)} value={searchTerm} type='text' placeholder='Search products...' className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
                </div>
            </div>

            <div className='overflow-x-auto '>
                <table className='min-w-full divide-y divide-gray-700'>
                    <thead>
                        <tr>
                            {title.map((item, index) => <th key={index} className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>{item}</th>)}
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-700 '>
                        {filteredData.map((item) => {
                            return (<motion.tr key={item.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
                                    <img className='size-10 rounded-full ' src={item.source} alt='img' />
                                    {item.name}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300'>
                                    {item.category}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300'>
                                    {item.price.toFixed(2)}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300'>
                                    {item.stock}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300'>
                                    {item.sales}
                                </td>

                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300 flex gap-2'>
                                    <button className='text-indigo-400 hover:text-indigo-300'>
                                        <Edit size={18} />
                                    </button>
                                    <button className='text-red-400 hover:text-red-300'>
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </motion.tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </motion.div>
    )
}

export default ProductTable