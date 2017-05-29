// @flow weak

import React, { Component, PropTypes } from 'react'
import muiThemeable from 'material-ui/styles/muiThemeable'

class PaginationDot extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.styles = {
      root: {
        height: 18,
        width: 18,
        cursor: 'pointer',
        border: 0,
        background: 'none',
        padding: 0
      },
      dot: {
        backgroundColor: '#e4e6e7',
        height: 12,
        width: 12,
        borderRadius: 6,
        margin: 3
      },
      active: {
        backgroundColor: this.props.muiTheme.palette.primary1Color
      }
    }
  }

  handleClick = (event) => {
    this.props.onClick(event, this.props.index)
  };

  render () {
    const {
      active
    } = this.props

    let styleDot

    if (active) {
      styleDot = Object.assign({}, this.styles.dot, this.styles.active)
    } else {
      styleDot = this.styles.dot
    }

    return (
      <button style={this.styles.root} onClick={this.handleClick}>
        <div style={styleDot} />
      </button>
    )
  }
}

export default muiThemeable()(PaginationDot)
