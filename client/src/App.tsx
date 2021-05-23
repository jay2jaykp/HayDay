import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import { AppHeader } from "./components/app-header/AppHeader";
import { Switch, Route } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { NotificationProvider } from "./context/notification";
import { MachinePage } from "./pages/MachinePage/MachinePage";
import { OrderPage } from "./pages/OrderPage/OrderPage";
import { InventoryPage } from "./pages/InventoryPage/InventoryPage";

// TODO Add Notification and Context for Notification

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const App: React.FC = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <AppHeader />
      <NotificationProvider>
        <main className={classes.content}>
          <Toolbar />
          <Switch>
            <Route path="/inventory">
              <InventoryPage />
            </Route>
            <Route path="/machine">
              <MachinePage />
            </Route>
            <Route path="/product">
              <ProductPage />
            </Route>
            <Route path="/order">
              <OrderPage />
            </Route>
          </Switch>
        </main>
      </NotificationProvider>
    </div>
  );
};

export default App;
