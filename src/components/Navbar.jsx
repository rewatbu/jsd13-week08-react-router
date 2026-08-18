import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav>
            <div className="min-h-20 flex justify-center items-center bg-green-400">
                <ul className="flex justify-center gap-8">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                    <li><Link to="products">Products</Link></li>
                    <li>{props.name}</li>
                </ul>
            </div>
        </nav>
    )
};