// app/layout.js
import '../styles/globals.css';

/**
 * @param {{ children: React.ReactNode }} props
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: 'My Portfolio',
  description: 'Showcasing my projects and skills.',
};
