import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/product/view").then(res => setProducts(res.data));
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/product/delete/${id}`);
    setProducts(products.filter(p => p._id !== id)); // Update state
  };

  return (
    <div className="container">
      <div className="card p-4">
        <h2 className="text-center">Product List</h2>
        <Link to="/add-product" className="btn btn-success mb-3">Add Product</Link>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p._id}>
                  <td>{p.name}</td>
                  <td>{p.description}</td>
                  <td>${p.price}</td>
                  <td>
                    <Link to={`/update-product/${p._id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(p._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
