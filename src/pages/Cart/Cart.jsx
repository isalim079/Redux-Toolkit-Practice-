import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../Redux/CartsSlice";


const Cart = () => {

    const dispatch = useDispatch()

    const items = useSelector((state) => state.cart)

    const handleRemove = (product) => {
        dispatch(remove(product.id))
    }

    return (    
        <div className="max-w-screen-xl mx-auto">
            <h1 className="my-10 text-center text-3xl font-semibold">My Cart</h1>
            <div className="grid grid-cols-4 gap-12">
                {
                    items.map(product => <div key={product.id}>
                        <div className="card card-compact h-full max-h-[420px]  shadow-xl">
                            <figure>
                                <img
                                    className="h-full"
                                    src={product?.image}
                                    alt={product?.title}
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{product?.title}</h2>
                                <p>
                                    {product?.description.length > 100
                                        ? product?.description.slice(0, 100)
                                        : product?.description}{" "}
                                    {product?.description.length > 100 ? (
                                        <span className="ml-2 text-xs underline">
                                            read more...
                                        </span>
                                    ) : (
                                        ""
                                    )}
                                </p>
                                <p className="font-bold text-xl">${product?.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="px-3 py-2 bg-green-500 text-white rounded-md" 
                                    >
                                        Buy Now
                                    </button>
                                    <button className="px-3 py-2 bg-red-500 text-white rounded-md" 
                                    onClick={()=> handleRemove(product)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;