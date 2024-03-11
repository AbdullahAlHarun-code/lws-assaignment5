import Footer from "../commons/Footer";
import Header from "../commons/Header";
import LoginForm from "../components/auth/LoginForm";
import Page from "./Page";
import { Link } from "react-router-dom";
export default function Login() {
  return (
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
  );
}
