import { useNavigate, Link } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const goToAbout = () => navigate("/about");

    return (
        <div>
            <h1 className="text-2xl font-bold m-4">Welcome to Our App</h1>
            <button onClick={goToAbout} className="bg-teal-500 text-white p-2 rounded m-2 hover:bg-teal-600 hover:font-bold">Go to About</button>
            <p className="m-4 text-teal-500 decoration-teal-500 decoration-2 underline underline-offset-4 hover:text-teal-700 hover:decoration-teal-700"><Link to="contact">Go to Contact</Link></p>
        </div>
    )
};

export default Home;