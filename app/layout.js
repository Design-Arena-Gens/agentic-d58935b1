import "./globals.css";

export const metadata = {
  title: "Agentic Hello",
  description: "Simple greeting experience built by Codex"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
