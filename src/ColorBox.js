import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    console.log(this.props.opacity)

      const newValue = this.props.opacity - 0.1;
    return this.props.opacity < .2 ? null : (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBox opacity={newValue}/>
      </div>
    )
    // if(this.props.opacity >= .2) {
    //   return (
    //     <div className="color-box" style={{opacity: this.props.opacity}}>
    //       {/* your conditional code here! */
    //       <ColorBox opacity={this.props.opacity - 0.1} />
    //       }
    //     </div>
    //   )
    // }
    // else {
    //   return null;
    // }

  }

}

