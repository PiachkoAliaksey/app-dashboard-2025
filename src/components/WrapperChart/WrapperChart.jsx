import React from 'react';
import { motion } from 'framer-motion';

const WrapperChart = ({ addClass, children,title }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className={`${addClass} bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border  border-gray-700 flex flex-col gap-4`}
        >
            <h2 className='text-lg font-semibold text-gray-100'>{title}</h2>
            <div className='h-80 '>
                {children}
            </div>
        </motion.div>
    )
}

export default WrapperChart