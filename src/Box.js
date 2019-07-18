import React, { Component } from 'react';

class Box extends Component {
    constructor(props){
        super(props)
            this.state = {
                background: "white",
                label: "white",
            }
    }

changeBox = () => {
    const colors = ["white", "green", "blue", "yellow", "red", "purple", "orange"]
    //let newIndex = (colorIndex + 1) % colors.length  is a cleaner option but HOW
    for(let i = 0; i <= colors.length; i++) {
        if(this.state.background === colors[colors.length - 1]) {
            let { label } = this.state
            let { background } = this.state
            background = colors[0]
            this.setState({ background })
            label = colors[0]
            this.setState({ label })
        } else if (this.state.background === colors[i]) {
            let { label } = this.state
            let { background } = this.state
            background = colors[i + 1]
            this.setState({ background })
            label = colors[i + 1]
            this.setState({ label })
        }
    }
}

  render() {
    //   const { light } = this.state
    //   const { color } = this.state
    //   const { background } = this.state //this doesn't want to work in the button style??!
      const { label } = this.state

    return (
        <div>
        <button class="button" style={{backgroundColor:this.state.background}} onClick = {this.changeBox}>{ label }</button>
        </div>
    );
  }
}

export default Box;
