import * as React from "react";
import './DashBoard.css';
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import AddCardIcon from '@mui/icons-material/AddCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="sidebar">
      <Toolbar />
      <Divider />
      <Link style={{ textDecoration: "none" , textAlign:"left" }} className="dashboard mt-5 text-black" to={`/dashboard`}>
        <DashboardIcon></DashboardIcon><Button color="inherit">Dashboard</Button>
      </Link>
      <Box className="dash">
        <Link style={{ textDecoration: "none" , textAlign:"left"}} className="dashboard" to={`/dashboard/addBlog`}>
        <AddCardIcon></AddCardIcon><Button className="dash-btn" color="inherit">Add Blog</Button>
        </Link>
        <Link style={{ textDecoration: "none" , textAlign:"left"}} className="dashboard" to={`/dashboard/managePost`}>
          <AllInboxIcon></AllInboxIcon><Button className="dash-btn" color="inherit">All Post Details</Button>
        </Link>
        <Link style={{ textDecoration: "none" , textAlign:"left"}} className="dashboard" to={`/dashboard/manageUserPost`}>
          <ContactMailIcon></ContactMailIcon><Button className="dash-btn" color="inherit">Manage User Post</Button>
        </Link>
        <Link style={{ textDecoration: "none" , textAlign:"left"}} className="dashboard" to={`/dashboard/makeAdmin`}>
          <AdminPanelSettingsIcon></AdminPanelSettingsIcon><Button className="dash-btn" color="inherit">Make Admin</Button>
        </Link>
      </Box>
     
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
