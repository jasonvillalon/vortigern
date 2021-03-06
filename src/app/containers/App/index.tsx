const appConfig = require('../../../../config/main');
import { Header } from 'components';
import withRoot from 'components/withRoot';
import { About, Counter, Home, Stars } from 'containers';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router';

import * as classNames from 'classnames';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import List from 'material-ui/List';
import { StyleRules, Theme, withStyles } from 'material-ui/styles';
import { compose } from 'recompose';
import { MainFolderListItems, OtherMainFolderListItems } from './tileData';

const drawerWidth = 240;

const styles = (theme): StyleRules => ({
  root: {
    width: '100%',
    height: '100vh',
    // marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    // flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    width: 60,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

interface MiniDrawerProps {
    classes: any;
    theme: Theme;
  }
class MiniDrawer extends React.Component<MiniDrawerProps, any> {
  state = {
    open: false,
  };

  toggleOpenDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Helmet {...appConfig.app} {...appConfig.app.head}/>
          <Header onMenuClick={this.toggleOpenDrawer} />
          <Drawer
            type="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.drawerInner}>
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <List className={classes.list}><MainFolderListItems /></List>
              <Divider />
              <List className={classes.list}><OtherMainFolderListItems /></List>
            </div>
          </Drawer>
          <main className={classes.content}>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/about" component={About} />
            <Route path="/stars" component={Stars} />
            <Route path="/counter" component={Counter} />
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}

export default withRoot(compose(
  withStyles(styles, { withTheme: true }),
)<{}>(MiniDrawer));