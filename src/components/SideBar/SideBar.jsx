
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SIDEBAR_ITEMS } from '../../data/constant';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';



const SideBar = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);

    return (
        <motion.div
            className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSideBarOpen ? 'w-64' : 'w-20'}`}
            animate={{ width: isSideBarOpen ? 256 : 86 }}
        >
            <div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700'>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsSideBarOpen(prev => !prev)}
                    className='p-4 rounded-full hover:bg-gray-700 transition-colors max-w-fit'
                >
                    <Menu size={24} />
                </motion.button>
                <nav className='mt-8 flex-grow flex flex-col gap-2'>
                    {SIDEBAR_ITEMS.map((item, index) => (
                        <Link key={`${item.href}-${item.name}`} to={item.href}>
                            <motion.div
                                className='flex items-center p-4 gap-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors '
                            >
                                <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                                <AnimatePresence>{isSideBarOpen && (<motion.span className='whitespace-nowrap' initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 'auto' }} exit={{ opacity: 0, width: 0 }} transition={{ duration: 0.2, delay: 0.3 }}>{item.name}</motion.span>)}</AnimatePresence>
                            </motion.div>
                        </Link>
                    ))}

                </nav>
            </div>
        </motion.div>
    )
}

export default SideBar