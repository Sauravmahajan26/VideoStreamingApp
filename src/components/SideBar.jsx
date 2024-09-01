import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <div className="col-2 flex">
        <div
          className="d-flex flex-column mr-10 p-0  text-center text-gray-800"
          style={{ width: "100%", marginTop: "115px", marginLeft: "-40px" }}
        >
          <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-100">
            Menu
          </h1>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto text-slate-900">
            <li className="nav-item">
              <Link to="/" className="nav-link " aria-current="page">
                <svg className=" pe-none me-2" width="16" height="16"></svg>
                Home
              </Link>
            </li>
            <li>
              <Link to="/upload" className="nav-link ">
                <svg className=" pe-none me-2" width="16" height="16">
                  <use xlinkHref="#speedometer2"></use>
                </svg>
                Upload Video
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
