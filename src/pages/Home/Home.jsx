/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { add } from "../../Redux/CartsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Status, fetchProducts } from "../../Redux/ProductSlice";

const Home = () => {
    // const [products, setProducts] = useState([]);
    const dispatch = useDispatch()

    const {data:products, status} = useSelector(state => state.product)

    // useEffect(() => {
    //     const productsData = async () => {
    //         const res = await fetch("https://fakestoreapi.com/products");
    //         const data = await res.json();
    //         setProducts(data);
    //     };
    //     productsData();
    // }, []);

    // console.log(products);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const handleAdd = (product) => {
        dispatch(add(product))
    }
    if(status === Status.loading){
        return <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>
    }

    return (
        <div className="max-w-screen-xl mx-auto mb-20 mt-10">
            <h1 className="text-center text-3xl font-semibold">
                Cart your products
            </h1>
            <div className="flex justify-center mt-2">
                <div className="border-2  mb-10 border-blue-950 w-72 "></div>
            </div>
            <div className="grid grid-cols-4 gap-12">
                {products.map((product) => (
                    <div key={product.id}>
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
                                    <button className="px-3 py-2 bg-green-500 text-white rounded-md" onClick={() => handleAdd(product)}>
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
