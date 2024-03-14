import { Navigate } from "react-router-dom";
import Footer from "../commons/Footer";
import Header from "../commons/Header";
import LoginForm from "../components/auth/LoginForm";
import { useAuth } from "../hooks/useAuth";
import ProfileProvider from "../providers/ProfileProvider";
import Page from "./Page";
export default function Login() {
  const { auth } = useAuth();
  return (
    <>
      <ProfileProvider>
        {auth.user ? (
          <Navigate to="/" />
        ) : (
          <>
            <Header />
            <Page>
              <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <LoginForm />
              </div>
            </Page>
            <Footer />
          </>
        )}
      </ProfileProvider>
    </>
  );
}
