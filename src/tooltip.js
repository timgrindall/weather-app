import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css';

class Tooltip extends Component {
  constructor (props) {
    super(props)
    this.state = {opacity: false}
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    const tooltipNode = ReactDOM.findDOMNode(this)
    this.setState({
      opacity: !this.state.opacity,
      top: tooltipNode.offsetTop,
      left: tooltipNode.offsetLeft
    })
  }

  render() {
    const style = {
      zIndex: (this.state.opacity) ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + 20,
      left: (this.state.left || 0) - 0
    }
    return (
      <div style={{display: 'block'}}>
        <div style={{color: 'blue', display: 'inline-block'}} onMouseEnter={this.toggle} onMouseOut={this.toggle}>
          {this.props.children}
        </div>
        <div className="tooltip bottom" style={style} role="tooltip">
          <div className="tooltip-arrow"></div>
          <div className="tooltip-inner">{this.props.text}</div>
        </div>
      </div>
    )
  }
}

export default Tooltip;