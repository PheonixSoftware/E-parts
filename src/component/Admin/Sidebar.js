import React from "react";
import "./sidebar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AdbIcon from "@material-ui/icons/TwoWheeler";
import Button from "@material-ui/core/Button";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  return (
    <div className="sidebar">
     
      <AdbIcon style={{ fontSize:"100px", alignContent:"center",marginLeft:"60px", display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Link to="/">
              <Button
              color="transparent"
                variant="h5"
                noWrap
                
                 
                style={{
                  mr: 2,
                 display: { xs: "flex", md: "none" },
                 borderRadius:"20px",
                 "background-image":"linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(10,9,121,1) 31%, rgba(255,0,24,1) 100%)",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                  fontSize:"20px"
                }}
              >
              
                E-Parts
              </Button>
        </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link>
        <TreeView style={{fontWeight:"bold"}}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Products" style={{fontWeight:"bold"}}>
            <Link to="/admin/products">
              <TreeItem nodeId="2" style={{fontWeight:"bold"}} label="All" icon={<PostAddIcon />} />
            </Link>

            <Link to="/admin/product">
              <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
