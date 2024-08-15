import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { BrowserRouter } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DomainIcon from '@mui/icons-material/Domain';

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/admin/products",
    icon: <ProductionQuantityLimitsIcon/>,
    cName: "nav-text",
  },
  {
    title: "Orders",
    path: "/admin/orders",
    icon: <DomainIcon />,
    cName: "nav-text",
  },
  {
    title: "Add Products",
    path: "/admin/add_products",
    icon: <AddShoppingCartIcon />,
    cName: "nav-text",
  },
  {
    title: "Customers",
    path: "/admin/customers",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];