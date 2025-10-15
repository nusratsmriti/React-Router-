import React from 'react'
import Header from '../Header/Header'
import { Outlet, useNavigation } from 'react-router'
import Footer from '../Footer/Footer'
import SideBar from '../SideBar/SideBar';
import "./root.css";
export default function Root() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <div>
      <Header></Header>
      <div className="main-div">
        <SideBar></SideBar>
        {isNavigating && <span>Loading...</span> }
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}
