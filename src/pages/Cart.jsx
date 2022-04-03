import { CartItems, CartSummary, Header } from "../components";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const Cart = () => {
  useDocumentTitle("P8-Gamez | Cart");
  return (
    <>
    <Header/>
    <main className="flex-c flex-wrap m-1 g-1">
      <CartItems />
      <CartSummary />
    </main>
    </>
  );
};
