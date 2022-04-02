import { Header } from "../components";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const Wishlist = () => {
  useDocumentTitle("P8-Gamez | Wishlist");
  return (
    <>
      <Header />
      <div className="wishlist-container grid g-2 mx-auto my-1">
        <div className="card pos-relative flex-sbw-c flex-col">
          <img
            className="card-img"
            src="https://store-images.s-microsoft.com/image/apps.29520.63657969076271726.154f5a09-55ab-4b31-bc57-4e0335fab06a.98159a5f-99d5-4db9-89bc-4ae02f971596"
            alt="Assassin's Creed Origins"
          />
          <div className="card-info flex-sbw flex-col">
            <p className="card-title">Assassin's Creed Origins</p>
            <div className="price-info flex-center">
              <div className="final-price">₹2,000</div>
              <div className="mrp">₹2,499</div>
              <p className="price-percentage">(20% OFF)</p>
            </div>
          </div>
          <div className="cta">
            <button className="btn py-sm px-1 btn-primary">Add to Cart</button>
            <button className="btn py-sm px-1 btn-secondary">
              Remove from Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
