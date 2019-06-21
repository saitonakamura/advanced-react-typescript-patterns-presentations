import React from "react";

type Language = "jp" | "ru";
type LangProviderProps = { };
type LangProviderState = { lang: Language };

class LangProvider extends React.Component<
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
  <LangProvider>
    {lang => <button>{lang === "jp" ? "確かめる" : "Подтверждаю"}</button>}
  </LangProvider>
);
