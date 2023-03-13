import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';



function AddProduct() {
    const [postData, setPostData] = useState({
        productName: "",
        description: "",
        Price: ""
    })
    
    const navigate = useNavigate();

    const handleChange = ({target}) => {
        setPostData(prev => ({...prev, [target.name]: target.value}));
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/products", postData);
            navigate('/');
        } catch(err){
            console.log(err);
        }

    }
    return ( <div className="form">
                <h1>To add Product</h1>
                <input type="text" placeholder='productName' name="productName" onChange={handleChange}/>
                <input type="text" placeholder='description' name="description" onChange={handleChange} />
                <input type="text" placeholder='productPrice' name="Price" onChange={handleChange} />
                <button  onClick={handleClick}>Add product </button>             
            </div> );
}

export default AddProduct;