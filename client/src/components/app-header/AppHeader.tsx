import React from "react";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { AppHeaderStyle } from "./AppHeader.styles";
import { NavLink } from "react-router-dom";

const DrawerMenuItem: React.FC<{ link: string; name: string }> = (props) => {
  const classes = AppHeaderStyle();
  return (
    <ListItem
      button
      component={NavLink}
      to={props.link}
      activeClassName={classes.activeMenuItem}
    >
      <ListItemIcon></ListItemIcon>
      <ListItemText primary={props.name} />
    </ListItem>
  );
};

export const AppHeader: React.FC = () => {
  const classes = AppHeaderStyle();

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            HayDay
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <DrawerMenuItem link="/inventory" name="Inventory" />
            <DrawerMenuItem link="/machine" name="Machine" />
            <DrawerMenuItem link="/product" name="Product" />
            <DrawerMenuItem link="/order" name="Order" />
          </List>
          <Divider />
        </div>
      </Drawer>
    </>
  );
};
