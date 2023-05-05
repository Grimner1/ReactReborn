import React from "react";
import { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "",
    };
  }

  enter(e) {
    const color = e.target.dataset.color;
    // console.log(color);
    this.setState({
      color: color,
    });
  }

  leave() {
    // console.log(1);
    this.setState({
      color: "",
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={(e) => this.enter(e)}
            onMouseLeave={() => this.leave()}
            data-color="Coral"
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={(e) => this.enter(e)}
            onMouseLeave={() => this.leave()}
            data-color="Aqua"
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={(e) => this.enter(e)}
            onMouseLeave={() => this.leave()}
            data-color="Bisque"
          ></button>
        </div>
      </div>
    );
  }
}

// ===================================

// const ColorPicker = () => {
//   const enter = (e) => {
//     // const color = e.target.style;
//     console.log(e.target.style.backgroundColor);
//   };

//   return (
//     <div>
//       <div className="picker__title">Red</div>
//       <div>
//         <button
//           className="picker__button picker__button_coral"
//           onMouseEnter={enter}
//         ></button>
//         <button className="picker__button picker__button_aqua"></button>
//         <button className="picker__button picker__button_bisque"></button>
//       </div>
//     </div>
//   );
// };

// ===================================

export default ColorPicker;
