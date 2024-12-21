import { Sidebar } from "./Components/Sidebar";
import { SidebarProvider } from "./context/SidebarContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import "./globals.css";
import AuthLayout from "./AuthLayout";

export const metadata = {
  title: "CodeAnt",
  description: "CodeAnt Frontend Developer Intern Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased ">
        <AuthProvider>
          <SidebarProvider>
            <AuthLayout>{children}</AuthLayout>
          </SidebarProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

function AuthenticatedLayout({ children }) {
  const { isSignedIn } = useAuth();
  return (
    <>
      {isSignedIn && <Sidebar />}
      {children}
    </>
  );
}
