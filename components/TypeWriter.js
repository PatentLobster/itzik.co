import React from "react";
import clsx from "clsx";

export class TypeWriter extends React.Component {
  state = {
    typeValue: "",
    typeStatus: false,
    typeArray: [
      " Developer.",
      " Hacker.",
      " Maker.",
      " Gamer.",
      " Pilot.",
      " Gopher.",
      " Tech-Junkie.",
      " Thinker.",
      " Human.",
      " Freelancer.",
      " 1337.",
      " Problem Solver.",
      " Tux.",
      " Lobster.",
      "n Advisor.",
    ],
    typingSpeed: 150,
    erasingSpeed: 50,
    newTextDelay: 350,
    charIndex: 0,
    typeArrayIndex: 1,
  };

  componentDidMount() {
    this.typeText();
  }

  typeText = () => {
    const {
      typeArray,
      charIndex,
      typeArrayIndex,
      typeStatus,
      typeValue,
      typingSpeed,
      newTextDelay,
    } = this.state;
    if (charIndex < typeArray[typeArrayIndex].length) {
      if (!typeStatus) {
        this.setState({ typeStatus: true }); // This gives a more realistic cursor effect
      }

      this.setState({
        typeValue: `${typeValue}${typeArray[typeArrayIndex].charAt(charIndex)}`,
        charIndex: 1 + charIndex,
        typeStatus: false,
      });
      setTimeout(() => requestAnimationFrame(this.typeText), typingSpeed);
    } else {
      this.setState({ typeStatus: false }); // This gives a more realistic cursor effect
      setTimeout(() => requestAnimationFrame(this.eraseText), newTextDelay);
    }
  };

  eraseText = () => {
    const {
      typeArray,
      charIndex,
      typeArrayIndex,
      typeStatus,
      typeValue,
      erasingSpeed,
      newTextDelay,
    } = this.state;
    if (charIndex > 0) {
      if (!typeStatus) this.setState({ typeStatus: true }); // This gives a more realistic cursor effect
      this.setState({
        typeValue: typeValue.slice(0, -1),
        charIndex: -1 + charIndex,
        typeStatus: true,
      });
      setTimeout(this.eraseText, erasingSpeed);
    } else {
      this.setState({
        typeValue: typeArray[
          1 + typeArrayIndex >= typeArray.length ? 1 : 1 + typeArrayIndex
        ].charAt(-1 + charIndex),
        charIndex: -1 + charIndex,
        typeArrayIndex:
          1 + typeArrayIndex >= typeArray.length ? 1 : 1 + typeArrayIndex,
        typeStatus: false,
      });
      setTimeout(() => requestAnimationFrame(this.typeText), newTextDelay);
    }
  };

  render() {
    return (
      <h2 className={clsx(this.props.className, "text-xl text-pink-500")}>
        <span className={"font-space"}>A</span>
        <span className={"font-space"}>{this.state.typeValue}</span>
        <span
          className={clsx(
            this.state.typeStatus ? "animate-none" : "animate-cursor",
            "font-ariel ml-1 bg-pink-500 text-xl"
          )}
        >
          &nbsp;
        </span>
      </h2>
    );
  }
}
