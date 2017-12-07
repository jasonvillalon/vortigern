import { Stars } from 'models/stars';
import * as React from 'react';

import { Store } from 'redux/IStore';

import { StyleRules, withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { getStars } from 'redux/modules/stars';

const styles = (): StyleRules => ({
  root: {
  },
});

interface StarsProps {
  stars: Stars;
  getStars: any;
  classes: any;
}

class StarsComponent extends React.Component<StarsProps, {}> {
  public state = {
    isReady: false,
  };
  public componentDidMount() {
    this.fetch();
  }
  public async fetch() {
    await this.props.getStars();
    this.setState({isReady: true});
  }
  public render() {
    const { classes, stars } = this.props;
    return (
      <div className={classes.Stars}>
        {stars.isFetching ? 'Fetching Stars' : stars.count}
      </div>
    );
  }
}

const Stars = compose(
  withStyles(styles),
)<{}>(connect(
  (state: Store) => ({ stars: state.stars }),
  (dispatch) => ({
    getStars: () => dispatch(getStars()),
  }),
)(StarsComponent));

export { Stars };
