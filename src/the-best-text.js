import React from "react";

class TheBestText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { transformedText: [] };
  }

  render() {
    return (
      <div className="the-best-text">
        <input
          placeholder="type stuff here"
          type="text"
          id="input"
          onChange={this.handleChange}
          value={this.state.inputValue}
        />
        <div className="letter-container">
          {this.state.transformedText.map((c) => this.getLetterImg(c, "white"))}
          {this.state.transformedText.length > 0 ? (
            <button onClick={(e) => this.handleCopy("white")}>copy</button>
          ) : (
            ""
          )}
        </div>
        <div className="letter-container">
          {this.state.transformedText.map((c) =>
            this.getLetterImg(c, "yellow")
          )}
          {this.state.transformedText.length > 0 ? (
            <button onClick={(e) => this.handleCopy("yellow")}>copy</button>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }

  getLetterImg = (c, color) => {
    if (c === " ") {
      return <span style={{ display: "inline-block", width: "50px" }} />;
    } else {
      return (
        <img className="letter" src={`/alphabet/${color}-${c}.png`} alt={c} />
      );
    }
  };

  handleCopy = (color) => {
    let emojis = this.state.transformedText.map((c) => {
      if (c === " ") {
        return "  ";
      } else {
        return `:alphabet-${color}-${c}:`;
      }
    });
    navigator.clipboard.writeText(emojis.join(""));
  };

  handleChange = (event) => {
    let transformedText = event.target.value.toLowerCase().split("");
    transformedText = transformedText.map((c) => {
      if (c.match(/[a-z]/)) {
        return c;
      } else if (c === "@") {
        return "at";
      } else if (c === "!") {
        return "exclamation";
      } else if (c === "?") {
        return "question";
      } else if (c === "#") {
        return "hash";
      } else if (c === " ") {
        return " ";
      }
    });
    this.setState({ transformedText: transformedText });
  };
}

export default TheBestText;
