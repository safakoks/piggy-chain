import React from "react";

const translateType = type => {
  switch (true) {
    case /^uint/.test(type):
      return "number";
    case /^string/.test(type) || /^bytes/.test(type):
      return "text";
    case /^bool/.test(type):
      return "checkbox";
    default:
      return "text";
  }
};

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.settings)
  }

  render() {
      return (
        <form
          className="pure-form pure-form-stacked"
          onSubmit={this.props.settings.handleSubmit}
        >
          {this.props.settings.inputs.map((input, index) => {
            var inputType = translateType(input.type);
            var inputLabel = this.props.settings.labels
              ? this.props.settings.labels[index]
              : input.name;
            // check if input type is struct and if so loop out struct fields as well
            return (
              <input
                key={input.name}
                type={inputType}
                name={input.name}
                value={this.props.settings.state[input.name]}
                placeholder={inputLabel}
                onChange={this.props.settings.handleInputChange}
              />
            );
          })}
          <button
            key="submit"
            className="pure-button"
            type="button"
            onClick={this.props.settings.handleSubmit}
          >
            Submit
          </button>
        </form>
      
      );
    }
};

export default InputForm;