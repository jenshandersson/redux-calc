import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { addNumber, undo } from "./actions";
import { State } from "./reducer";

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

type Props = {
  total: number;
  numbers: number[];
  addNumber: (arg0: number) => void;
  undo: () => void;
};

class App extends React.Component<Props> {
  _digitClicked = (digit: number) => {
    this.props.addNumber(digit);
  };
  render() {
    return (
      <div>
        <h2>Total: {this.props.total}</h2>
        <div className="digits">
          {digits.map(d => (
            <button key={d} onClick={() => this._digitClicked(d)}>
              {d}
            </button>
          ))}
        </div>
        <button onClick={this.props.undo}>Undo</button>
        <h3>History</h3>
        <ol>
          {this.props.numbers.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  total: state.total,
  numbers: state.actions
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      addNumber,
      undo
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
