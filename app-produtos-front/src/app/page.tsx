"use client";

import { useEffect, useState } from "react";
import { getAllProducts } from "@/services/api"
import "./globals.css";
import Card from "./components/Card";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail?: string;
};

export default function Home() {
  const [products, updateProducts] = useState<Product[]>([]);
  const [searchTitle, setSearchTitle] = useState<string>("");

  const loadProducts = () => {
    getAllProducts().then((result) => {
      updateProducts(result.data.products);
    });
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold text-gray-800 my-4">Product Search</h1>
        <input
          type="text"
          placeholder="Search product by title..."
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mb-4"
          onClick={loadProducts}
        >
          Reload products
        </button>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 my-4">Products</h2>
          <div className="p-4 flex flex-col gap-4">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                id={product.id.toString()}
                title={product.title}
                description={product.description}
                price={product.price}
                rating={product.rating}
                thumbnail={product.thumbnail}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
