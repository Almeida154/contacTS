import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.background};
        -webkit-font-smoothing: antialiased;
        color: ${props => props.theme.colors.text};
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
    }

    body,
    input,
    button {
        font-family: Montserrat, Arial, Helvetica, sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: ${props => props.theme.colors.title};
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.text}
    }
`;
