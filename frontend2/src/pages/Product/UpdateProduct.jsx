import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({ name: "",description:"", price: "" });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/product/view/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/product/update/${id}`, product);
    navigate("/products"); // Redirect back to product list
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h2 className="text-center">Update Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input type="text" name="name" value={product.name} className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input type="text" name="description" value={product.description} className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input type="number" name="price" value={product.price} className="form-control" onChange={handleChange} required />
          </div>
          <button className="btn btn-warning w-100" type="submit">Update Product</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
