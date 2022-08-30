import { Categories, Hero } from "../components";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const HomePage = () => {
  useDocumentTitle("P8-Gamez | Home");
  return (
    <main>
      <Hero />
      <Categories />
    </main>
  );
};
