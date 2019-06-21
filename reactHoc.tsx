import React from "react";

type Language = "jp" | "ru";

function withLang(WrappedComponent) {
  return class Hoc extends React.Component {
    componentDidMount() {
      this.setState({ lang: 'jp' })
    }

    render() {
      return <WrappedComponent {...this.props} lang={this.state.lang} />;
    }
  };
}

class ReloadIfLangChanges extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.lang !== prevProps.lang) {
      // Reload page
      window.location = window.location;
    }
  }

  render() {
    return this.props.children;
  }
}

const ReloadIfLangChangesWithLang = withLang(ReloadIfLangChanges);

export const App = <ReloadIfLangChangesWithLang />;
