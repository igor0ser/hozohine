import React, { PureComponent } from 'react';
import './TestComp.css';

class TestComp extends PureComponent {
  onClick = () => {
    console.log(this.input.value);
  }

  render() {
    return (
      <div className="test">
        <input
          type="text"
          className="text-input"
          ref={(node) => { this.input = node; }}
        />
        <button
          className="btn"
          onClick={this.onClick}
        >
          Hello there
        </button>
      </div>
    );
  }
}

export default TestComp;
