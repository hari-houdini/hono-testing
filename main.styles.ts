import { css } from 'hono/css';

export const mainClass = css`
  margin: 0;
  padding: 0;
  background: #2d0000;
  color: #fffbf6;
  font-family: cursive;
  box-sizing: border-box;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const headerClass = css`
  text-align: center;
  padding: 2rem;
  background: #deb886;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const footerClass = css`
  text-align: center;
  padding: 2rem;
  background: #deb886;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const bodyClass = css`
  flex-grow: 1;
`;
