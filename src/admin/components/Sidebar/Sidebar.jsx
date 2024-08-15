import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';
import { Fragment, useCallback, useEffect, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLocation, useNavigate } from 'react-router-dom'
import { store } from '../../../State/store'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, logout } from '../../../State/Auth/Action'
import { Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import AuthModal from '../../../admin/Auth/AuthModal'


function Sidebar() {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [openAuthModal, setOpenAuthModel] = useState(false);
  const [anchorE1, setAnchorE1] = useState(null);
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();
  const { auth } = useSelector(store => store)
  const dispatch = useDispatch()
  const location = useLocation()
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    console.log(auth.user);
    dispatch(logout());
    console.log(auth.user);
    navigate('/admin/dashboard');
    toggleDropdown();
  };

  const handleOpenSignin = () => {
    setOpenAuthModel(true);
    navigate(`/admin/login`)
  }
  const handleOpenCreate = () => {
    setOpenAuthModel(true);
    navigate(`/admin/register`)
  }
  const handleClose = () => {
    setOpenAuthModel(false);
    navigate(`/admin/dashboard`);
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  useEffect(() => {
    console.log(auth.jwt);
    if (jwt) {
      console.log(jwt);
      dispatch(getUser())
      handleClose();
    }
  }, [jwt, auth.jwt])

  useEffect(() => {
    console.log("user",auth.user);
    console.log("auth.jwt",auth.jwt);
    console.log("jwt",jwt);
    if (location.pathname === '/admin/login' || location.pathname === '/admin/register') {
      navigate(`/admin/dashboard`)
    }
    if(auth.user!=null){
      handleClose();
    }
  }, [auth.user])
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className='width-[100rem] pr-[3rem] mr-[3rem] pl-[69rem]'>
            <div className="ml-5 pr-10 flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                {auth.user ? (
                  <div className="relative">
                    <Avatar onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                      {auth.user.firstName.charAt(0).toUpperCase()}
                    </Avatar>
                    {dropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                        <button
                          onClick={handleLogout}
                          className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <button onClick={handleOpenSignin} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Sign in
                    </button>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <button onClick={handleOpenCreate} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Create account
                    </button>
                  </>
                )}
              </div>
            </div>

            <AuthModal handleClose={handleClose} open={openAuthModal} />
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;