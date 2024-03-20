import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {

    const items = useSelector((state) => state.cart)

    return (
        <div className=" bg-slate-100 py-2 shadow-lg">
            <div className=" max-w-screen-xl mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <a href="/" className="btn btn-ghost text-xl font-semibold">
                            ReTool
                        </a>
                    </div>
                    <div className=" space-x-5">
                        <Link to="/">Home</Link>
                        <div className="indicator">
                        <span className="indicator-item px-[6px] py-[1px] text-white bg-green-500 rounded-full text-xs">{items.length}</span>
                        <Link to="/carts">Carts</Link>
                        </div>
                    </div>
                    <div>
                        <button className="px-3 py-2 bg-green-500 text-white rounded-md text-sm">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
