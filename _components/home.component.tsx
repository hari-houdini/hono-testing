import { type FC, memo } from 'hono/jsx';
import { FnBox } from './fnBox.component.tsx';
import { Results } from './results.component.tsx';
import {
  mainClass,
  headerClass,
  bodyClass,
  footerClass,
} from '../main.styles.ts';
import { Style } from 'hono/css';

export const Layout: FC = () => {
  const Header = memo(() => (
    <header class={headerClass}>
      Welcome to Streaming Visualisation
    </header>
  ));
  const Footer = memo(() => (
    <footer class={footerClass}>Memoised Headers and Footers</footer>
  ));

  return (
    <html>
      <head>
        <Style />
      </head>
      <body class={mainClass}>
        <Header />
        <div class={bodyClass}>
          <FnBox />
          <Results />
        </div>
        <Footer />
      </body>
    </html>
  );
};
