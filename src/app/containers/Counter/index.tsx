import { StyleRules, withStyles } from 'material-ui/styles';
import { Counter as ICounter, CounterAction } from 'models/counter';
import * as React from 'react';
import { compose } from 'recompose';
import { decrement, increment } from 'redux/modules/counter/';

const { connect } = require('react-redux');

const styles = (): StyleRules => ({
  root: {
  },
});

interface CounterProps {
  classes: any;
  counter: ICounter;
  inc: Redux.ActionCreator<CounterAction>;
  dec: Redux.ActionCreator<CounterAction>;
}

@connect(
  (state) => ({ counter: state.counter }),
  (dispatch) => ({
    dec: () => dispatch(decrement()),
    inc: () => dispatch(increment()),
  }),
)

class CounterComponent extends React.Component<CounterProps, {}> {
  public render() {
    const { inc, dec, counter, classes } = this.props;

    return (
      <div className={classes.Counter}>
        <h4>Counter Example</h4>
        <button
          name="incBtn"
          onClick={inc}
        >
          INCREMENT
        </button>
        <button
          name="decBtn"
          onClick={dec}
          disabled={counter.count <= 0}
        >
          DECREMENT
        </button>
        <p>{counter.count}</p>
      </div>
    );
  }
}

const Counter = compose(
  withStyles(styles),
)<{}>(CounterComponent);

export { Counter };
