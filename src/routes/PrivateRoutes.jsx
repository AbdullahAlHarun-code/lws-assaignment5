import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Header from "../commons/Header";
import ProfileProvider from "../providers/ProfileProvider";
import Footer from "../commons/Footer";

const PrivateRoutes = () => {
  const { auth } = useAuth();

  return (
    <>
      {auth.user ? (
        <>
          <ProfileProvider>
            <Header />
            <main>
              <section>
                <div className="container">
                  <Outlet />
                </div>
              </section>
            </main>
            <Footer />
          </ProfileProvider>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoutes;
