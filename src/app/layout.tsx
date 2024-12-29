// src/app/layout.tsx
import "../styles/globals.css";

export const metadata = {
  title: "My App",
  description: "A Next.js App with TypeScript, Framer Motion, Three.js, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
