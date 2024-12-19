import "./globals.css";

export const metadata = {
  title: "CodeAnt",
  description: "CodeAnt Frontend Developer Intern Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}