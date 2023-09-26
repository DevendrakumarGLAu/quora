import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import "../header/header.css";
import {
  FeaturedPlayListOutlined,
  NotificationImportantOutlined,
} from "@material-ui/icons/";
import { PeopleAltOutlined } from "@material-ui/icons";
import { AssignmentTurnedInOutlined } from "@material-ui/icons/";
import { Avatar } from "@material-ui/core";

function header() {
  return (
    <div className="header card">
      <nav
        class="navbar navbar-expand-lg sticky"
        style={{ backgroundColor: "##dee0e1;" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Quora
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <HomeIcon style={{ color: "#b92b27" }} />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <FeaturedPlayListOutlined style={{ color: "#b92b27" }} />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <AssignmentTurnedInOutlined style={{ color: "#b92b27" }} />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <PeopleAltOutlined style={{ color: "#b92b27" }} />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <NotificationImportantOutlined style={{ color: "#b92b27" }} />
                </a>
              </li>
              {/* <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
            <form class="d-flex justify-content-around">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ height: "30px" }}
              />
              <button
                class="btn btn-sm btn-outline-secondary"
                type="button"
                style={{ height: "30px" }}
              >
                Search
              </button>

              <Avatar
                style={{ color: "#b92b27", marginLeft: "10px", height: "30px" }}
              />
              <button
                class="btn btn-sm btn-outline-secondary"
                type="button"
                style={{ height: "30px" , width: "180px", marginLeft: "30px"}}
              >
                Ask Question
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default header;
