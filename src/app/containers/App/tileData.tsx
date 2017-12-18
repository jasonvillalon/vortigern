import AddCircleIcon from 'material-ui-icons/AddCircle';
import HomeIcon from 'material-ui-icons/Home';
import InfoIcon from 'material-ui-icons/Info';
import LogoutIcon from 'material-ui-icons/KeyboardArrowLeft';
import StarIcon from 'material-ui-icons/Star';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

interface DispatchProps {
  pushUrl: (url: string) => void;
}

class MainFolderListItemsComponent extends React.Component<DispatchProps, any> {
  render() {
    const { pushUrl } = this.props;
    return (
      <div>
        <ListItem button onClick={() => pushUrl('/')}>
          <ListItemIcon>
            <HomeIcon/>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => pushUrl('/stars')}>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Starred" />
        </ListItem>
        <ListItem button onClick={() => pushUrl('/counter')}>
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Counter" />
        </ListItem>
        <ListItem button onClick={() => pushUrl('/about')}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </div>
    );
  }
}

class OtherMainFolderListItemsComponent extends React.Component<DispatchProps, any> {
  render() {
    return (
      <div>
        <ListItem button>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </div>
    );
  }
}

export const MainFolderListItems = connect<undefined, DispatchProps, undefined>(
  undefined,
  (dispatch) => ({
    pushUrl: (url: string) => {
      dispatch(push(url));
    }
  }),
)(MainFolderListItemsComponent);

export const OtherMainFolderListItems = connect<undefined, DispatchProps, undefined>(
  undefined,
  (dispatch) => ({
    pushUrl: (url: string) => {
      dispatch(push(url));
    }
  }),
)(OtherMainFolderListItemsComponent);
