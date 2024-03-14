import Footer from "../commons/Footer";
import Header from "../commons/Header";
import RegistrationForm from "../components/auth/RegisterForm";
import ProfileProvider from "../providers/ProfileProvider";
import Page from "./Page";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <>
      <ProfileProvider>
        <Header />
        <Page>
          <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <RegistrationForm />
            
          </div>
        </Page>
        <Footer />
      </ProfileProvider>
    </>
  );
}
