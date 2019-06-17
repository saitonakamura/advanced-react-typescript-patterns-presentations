import React from "react";

type HocProps = {
  data: string;
};

type ExcludeHocProps<T extends HocProps> = Pick<T, Exclude<keyof T, "data">>;

export function withData<P extends HocProps>(
  WrappedComponent: React.ComponentType<P>
) {
  return class Hoc extends React.Component<ExcludeHocProps<P>> {
    render() {
      return <WrappedComponent {...(this.props as P)} data="some data" />;
    }
  };
}

const Text = ({ data, color }: { data: string; color: string }) => (
  <span style={{ color }}>{data}</span>
);

const PredefinedText = withData(Text);

export const App = <PredefinedText color="black" />;
