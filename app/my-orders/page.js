'use client';
import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../Components/PageHeader';
import MyOrder from '../Components/MyOrder';
import { useRouter } from 'next/navigation';

const MyOrdersPage = () => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="md:pt-[calc(80px+55px)] pt-[80px] px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto mb-24"
    >
      <PageHeader header="My Orders" />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <MyOrder 
          onClick={() => {
            console.log('clicked');
          router.push('/my-orders/1');
        }} />
        <MyOrder 
          onClick={() => {
          router.push('/my-orders/1');
        }} />
        <MyOrder 
          onClick={() => {
          router.push('/my-orders/1');
        }} />
        
        
      </motion.div>
    </motion.div>
  );
};

export default MyOrdersPage;
