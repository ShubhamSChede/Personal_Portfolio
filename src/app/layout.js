import "./globals.css";

export const metadata = {
  title: "Shubham Chede | Full Stack Developer Portfolio",
  description: "Shubham Chede - Full Stack Developer specializing in Next.js, React Native, Node.js, Supabase, and modern web technologies. View portfolio, projects, and contact Shubham Chede for development opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
