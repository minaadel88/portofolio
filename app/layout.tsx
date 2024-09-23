// app/layout.js
import '../styles/globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'Showcasing my projects and skills.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
