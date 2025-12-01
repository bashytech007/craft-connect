import "./globals.css";
import { AuthProvider } from "../src/contexts/AuthContext";

export const metadata = {
  title: "CraftConnect - Connect Artisans with Clients",
  description:
    "Join thousands of skilled artisans connecting with clients who value quality craftsmanship",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
