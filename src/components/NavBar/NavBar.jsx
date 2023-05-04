
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

export default function NavBar() {
    return (
        <nav>
            <div class="logo">
                <h2>Ecommerce</h2>
            </div>
            <ul class="nav-links">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}