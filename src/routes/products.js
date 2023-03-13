import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Products() {
    const [products, setProducts] = useState(["empty"]);
    useEffect(() => {
        const fetchData = async() => {
            try{
                const res = await axios.get("http://localhost:8000/products");
                console.log(res.data);
                setProducts(res.data);
            } catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, [])

    const handleDelete = async (id) => {
        try{
            await axios.delete(`http://localhost:8000/products/${id}`);
            window.location.reload();
        } catch(err){
            console.log(err);
        }
    }
    return ( <div>
                <h1>Products List</h1>
                <div className='products'>
                    {
                        products.map((product, ind) => (
                            <div className='product' key={product.productId +"-"+ ind}>
                                <h3>{product.productName}</h3>
                                <p>{product.description}</p>
                                <p>{product.Price}</p>
                                <button className="delete" onClick={() => handleDelete(product.productId)}>Delete</button>
                                <button className="update">
                                    <Link
                                        to={`/update/${product.productId}`}
                                        style={{ color: "inherit", textDecoration: "none" }}>
                                        Update
                                    </Link>
                                </button>
                            </div>
                        ))
                    }
                </div>
                <button className="addHome">
                    <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
                    Add new book
                    </Link>
                </button>

            </div> );
}

export default Products;