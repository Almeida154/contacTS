import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      title: string;
      text: string;
      span: string;
      box: string;
      background: string;
    };
  }
}
