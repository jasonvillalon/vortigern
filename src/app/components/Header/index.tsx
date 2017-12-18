import AccountCircle from 'material-ui-icons/AccountCircle';
import MenuIcon from 'material-ui-icons/Menu';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import { StyleRules, Theme, withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import * as React from 'react';
import { compose } from 'recompose';

const drawerWidth = 240;

const styles = (theme: Theme): StyleRules => ({
  root: {
    marginBottom: theme.spacing.unit * 3,
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.navDrawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  flex: {
    flex: 1,
    textAlign: 'left',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

interface HeaderState {
  auth: boolean;
  anchorEl?: HTMLElement;
}

interface HeaderProps {
  classes: any;
  onMenuClick: () => void;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  state = {
    auth: true,
    anchorEl: undefined,
  };

  handleChange = (_0: any, checked: boolean) => {
    this.setState({ auth: checked });
  }

  handleMenu = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleRequestClose = () => {
    this.setState({ anchorEl: undefined });
  }

  onMenuClick = () => {
    if (this.props.onMenuClick) {
      this.props.onMenuClick();
    }
  }
  render(): JSX.Element {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton onClick={this.onMenuClick} className={classes.menuButton} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Barbar
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="contrast"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleRequestClose}
                >
                  <MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
    );
  }
}

export default compose(
  withStyles(styles),
)<{}>(Header);
