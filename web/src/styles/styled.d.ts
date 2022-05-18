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
      lightBox: string;
      box: string;
      background: string;

      danger_light: string;
      danger_strong: string;
      success_light: string;
      success_strong: string;
    };
  }
}
