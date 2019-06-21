import React from "react";

type Language = "jp" | "ru";

type LangHocProps = {
  lang: Language;
};

type ExcludeLangHocProps<T extends LangHocProps> = Pick<
  T,
  Exclude<keyof T, "lang">
>;

function withLang<P extends LangHocProps>(
  WrappedComponent: React.ComponentType<P>
) {
  return class Hoc extends React.Component<
    ExcludeLangHocProps<P>,
    { lang: Language }
  > {
    componentDidMount() {
      this.setState({ lang: "jp" });
    }

    render() {
      return <WrappedComponent {...(this.props as P)} lang={this.state.lang} />;
    }
  };
}

class ReloadIfLangChanges extends React.Component<{ lang: Language }> {
  componentDidUpdate(prevProps: { lang: Language }) {
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
