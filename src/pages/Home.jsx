import Footer from "../commons/Footer";
import Header from "../commons/Header";
import AllPosts from "../components/posts/AllPosts";
import MostFavourite from "../components/sidebar/MostFavourite";
import MostPopular from "../components/sidebar/MostPopulat";
import { useAuth } from "../hooks/useAuth";
import Page from "./Page";

export default function Home() {
  const {auth} = useAuth();
  console.log(auth);
  return (
    <>
      <Header />
      <Page>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          <AllPosts />

          <div className="md:col-span-2 h-full w-full space-y-5">
            <MostPopular />

            <MostFavourite />
          </div>
        </div>
      </Page>
      <Footer />
    </>
  );
}
