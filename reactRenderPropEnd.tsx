import React from "react";

type Language = "jp" | "ru";
type LangProviderProps = { children: (data: Language) => React.ReactNode };
type LangProviderState = { lang: Language };

class DataProvider extends React.Component<
  LangProviderProps,
  LangProviderState
> {
  componentDidMount() {
    this.setState({ lang: "ru" });
  }

  render() {
    return this.props.children(this.state.lang);
  }
}

export const App = ({}) => (
  <DataProvider>
    {lang => <button>{lang === "jp" ? "確かめる" : "Подтверждаю"}</button>}
  </DataProvider>
);
