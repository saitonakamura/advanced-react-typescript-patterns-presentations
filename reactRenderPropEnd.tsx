import React from "react";

type DataProviderProps = { children: (data: string) => React.ReactNode };
type DataProviderState = { data: string };

class DataProvider extends React.Component<
  DataProviderProps,
  DataProviderState
> {
  componentDidMount() {
    this.setState({ data: "some data" });
  }

  render() {
    return this.props.children(this.state.data);
  }
}

export const App = ({}) => (
  <DataProvider>{data => <span>{data}</span>}</DataProvider>
);
