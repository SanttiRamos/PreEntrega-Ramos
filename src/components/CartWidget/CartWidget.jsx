import './CartWidget.css';

export default function CartWidget() {
  return (
    <div className="cart-widget">
      <button className="cart-widget-button">
        <img src="https://cdn.pixabay.com/photo/2017/03/29/04/09/shopping-icon-2184065_640.png" alt="Cart" />
        <span className="cart-widget-count">0</span>
      </button>
    </div>
  );
}