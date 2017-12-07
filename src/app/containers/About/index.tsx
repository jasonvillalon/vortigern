import { StyleRules, withStyles } from 'material-ui/styles';
import * as React from 'react';
import { compose } from 'recompose';

const styles = (): StyleRules => ({
  root: {
  },
});

class AboutComponent extends React.Component<any, any> {
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h4>About</h4>
      </div>
    );
  }
}

const About = compose(
  withStyles(styles),
)<{}>(AboutComponent);

export { About };
