import '../styles/globals.scss';
import localFont from 'next/font/local';

const myFont = localFont({
  src: [
    { path: '../fonts/Segoe UI.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/Segoe UI Bold.ttf', weight: '700', style: 'normal' },
    { path: '../fonts/Segoe UI Bold Italic.ttf', weight: '700', style: 'italic' },
    { path: '../fonts/Segoe UI Italic.ttf', weight: '400', style: 'italic' },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
