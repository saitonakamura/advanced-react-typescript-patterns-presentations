import React from "react";

type ConfirmButtonProps = {
  text: string;
};

class ConfirmButton extends React.Component<ConfirmButtonProps, {}> {
  static defaultProps: Pick<ConfirmButtonProps, "text"> = { text: "Confirm" };

  render() {
    const { text } = this.props;
    return <button>{text}</button>;
  }
}

type WarningLabelProps = { text: string; color?: string };

const WarningLabel = ({ text, color = "yellow" }: WarningLabelProps) => (
  <span style={{ color }}>{text}</span>
);

export const App: React.SFC<{}> = () => (
  <>
    <WarningLabel text="Are you sure?" />
    <ConfirmButton />
  </>
);
