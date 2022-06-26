import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated, signout } from "../Auth/authapicalls";
import "./Styles/Menu.css";


const Menu=({
  history
})=>{

  

    return(
      <div className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
        <div className="">
        <div className="flex ">
          <div className="w-1/3 h-12">
            <h1 className="text-black text-left text-3xl text-bold  ml-14 mt-2">
              <Link to="/">Meme templates</Link>
            </h1>
          </div>
          <div className="w-2/3  h-14">
            <ul className="flex">
              <li className="mr-14 mt-2 py-1 px-3 hover:bg-black hover:rounded-2xl hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-30">
                <Link to="/" className="text-black text-center ">Home</Link>
              </li>

              {!isAuthenticated()&& (
                <Fragment>
                 <li className="mr-14 mt-2 py-1 px-3 hover:bg-black hover:rounded-2xl hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-30">
                  <Link to="/signin" className="text-bold text-black text-center ">Signin</Link>
                </li>
                  </Fragment>
              )}
             
             

              {isAuthenticated() && isAuthenticated().user.role===1 && (
                <li className="mr-14 mt-2 py-1 px-3 hover:bg-black hover:rounded-2xl hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-30">
                <Link to="/admin/dashboard" className="text-bold text-black text-center " >Admin Dashboard</Link>
               </li>
              )}
              
              {isAuthenticated()&& (
                <li className="mr-14 mt-2 py-1 px-3 hover:bg-black hover:rounded-2xl hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-30">
                <span className="text-bold text-black text-center cursor-pointer" onClick={()=>{
                  signout(()=>{
                    console.log("ready to redirect");
                    window.location.reload();
                  })
                }}>Signout</span>
              </li>
              )}
             
              <li className=" flex ml-10 mt-2">
              <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-5 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search templates" aria-label="Search" aria-describedby="button-addon2"/>
              <button className="btn px-4 py-1 bg-blue-600 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </button>
              </li>
            </ul>
           
            
        </div>
       </div>
       </div>
       </div>
    )
}
export default Menu;