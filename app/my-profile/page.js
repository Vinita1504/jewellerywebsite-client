'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaEdit, FaShoppingBag, FaMapMarkerAlt, FaHeart, FaShoppingCart } from 'react-icons/fa';
import PageHeader from '../Components/PageHeader';
import PersonalInfo from '../Components/PersonalInfo';
import AddAddress from '../Components/AddAddress.jsx';
import MyOrder from '../Components/MyOrder.jsx';
import { useRouter } from 'next/navigation';

const MyProfile = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('personal');

  const Orders = () => (
    <div>
      <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
      {/* Add order history component here */}
      <p>Your order history will be displayed here.</p>
    </div>
  );

  const Wishlist = () => (
    <div>
      <h2 className="text-2xl font-semibold mb-4">My Wishlist</h2>
      {/* Add wishlist component here */}
      <p>Your wishlist items will be displayed here.</p>
    </div>
  );

  const Cart = () => (
    <div>
      <h2 className="text-2xl font-semibold mb-4">My Cart</h2>
      {/* Add cart component here */}
      <p>Your cart items will be displayed here.</p>
    </div>
  );

  const menuItems = [
    { icon: FaUser, text: 'Personal Information', section: 'personal', component: PersonalInfo },
    { icon: FaShoppingBag, text: 'My Orders', section: 'orders', component: MyOrder },
    { icon: FaMapMarkerAlt, text: 'My Address', section: 'address', component: AddAddress},
    { icon: FaHeart, text: 'Wishlist', section: 'wishlist', component: Wishlist },
    { icon: FaShoppingCart, text: 'My Cart', section: 'cart', component: Cart },
  ];

  const handleMenuItemClick = (item) => {
    if (item.section === 'wishlist') {
      router.push('/wishlist');
    } else if (item.section === 'cart') {
      router.push('/add-to-cart');
    } else {
      setActiveSection(item.section);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="md:pt-[calc(80px+55px)] pt-[80px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24"
    >
      <PageHeader header="My Account" />
      <div className="flex flex-col md:flex-row  mt-8 gap-8">
        {/* Left Section - Menu */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:w-1/4 bg-white p-6 rounded-lg shadow-sm"
        >
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleMenuItemClick(item)}
                  className={`w-full flex items-center p-3 rounded-lg transition duration-300 ${
                    activeSection === item.section ? 'bg-accent text-onSurface' : 'hover:bg-accent hover:bg-opacity-10'
                  }`}
                >
                  <item.icon className={`mr-3 ${activeSection === item.section ? 'text-purple-400' : 'text-onPrimary'}`} />
                  <span>{item.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Section - Content */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:w-3/4 bg-surface rounded-lg shadow-xl"
        >
          {menuItems.map((item) => {
            if (activeSection === item.section) {
              return <item.component 
              key={item.section} />;
            }
            return null;
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MyProfile;
