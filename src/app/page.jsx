"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useState } from 'react';

export default function Home() {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query) return;

    const res = await fetch(`/pages/api/search?query=${query}`);
    const data = await res.json();
    setResults(data);
  };

  return (
    <>
      <Navbar/>
      <div className="h-screen">
        <form onSubmit={handleSearch} className="flex justify-center items-center mx-auto max-w-[800px] px-6 mt-8">
          <input
            type="text"
            placeholder="Rechercher un terme..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <button type="submit" className="ml-2 bg-blue-600 text-white p-2 rounded-md">
            Rechercher
          </button>
        </form>

        <div className="flex justify-center mx-auto mt-4">
          {results.length > 0 ? (
            <ul>
              {results.map((product) => (
                <li key={product._id} className="border-b border-gray-200 py-2">
                  {product.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucun résultat trouvé.</p>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
}

