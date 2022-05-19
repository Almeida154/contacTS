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
      danger_stronger: string;
      success_light: string;
      success_strong: string;
      success_stronger: string;
      alert_light: string;
      alert_strong: string;
      alert_stronger: string;
    };
  }
}
