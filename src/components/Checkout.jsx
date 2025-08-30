
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

export default function Checkout() {
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    payment: "card",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    dispatch(clearCart());
  };

  if (submitted) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Order Confirmed ✅</h1>
        <p>Thank you, {form.name}! Your order has been placed successfully.</p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-800 rounded shadow mt-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="address"
          placeholder="Shipping Address"
          value={form.address}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <select
          name="payment"
          value={form.payment}
          onChange={handleChange}
          className="w-full border p-2 rounded  text-white"
        >
          <option value="card" className="bg-gray-800 text-white">Credit/Debit Card</option>
          <option value="cod" className="bg-gray-800 text-white">Cash on Delivery</option>
        </select>
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded hover:bg-black-800 transition font-medium cursor-pointer"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
