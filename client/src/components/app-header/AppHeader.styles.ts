import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export const AppHeaderStyle = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    activeMenuItem: {
      color: theme.palette.primary.light,
    },
  })
);
