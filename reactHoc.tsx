import React from "react";

function withData(WrappedComponent) {
  return class Hoc extends React.Component {
    render() {
      return <WrappedComponent {...this.props} data="some data" />;
    }
  };
}

const Text = ({ data, color }) => <span style={{ color }}>{data}</span>;

const PredefinedText = withData(Text);

export const App = <PredefinedText color="black" />;
