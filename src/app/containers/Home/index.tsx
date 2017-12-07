import { StyleRules, withStyles } from 'material-ui/styles';
import * as React from 'react';
import { compose } from 'recompose';

const styles = (): StyleRules => ({
  root: {
    textAlign: 'center',
    color: 'red',
  },
});

interface HomeProps {
  classes: any;
}

class HomeComponent extends React.Component<HomeProps, any> {
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <img src={require('./barbar.png')} />
        <p>Hello!</p>
      </div>
    );
  }
}

const Home = compose(
  withStyles(styles),
)<{}>(HomeComponent);

export { Home };
