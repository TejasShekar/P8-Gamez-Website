import { Categories, Hero, Header } from "../components";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const HomePage = () => {
  useDocumentTitle("P8-Gamez | Home");
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
      </main>
    </>
  );
};
