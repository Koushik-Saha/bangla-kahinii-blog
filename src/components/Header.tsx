"use client";

import { useState, useEffect } from "react";
import { getRandomQuote } from "@/utils";
import  siteData  from "@/json/siteData.json";

const Header = () => {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        setQuote(getRandomQuote(siteData.funnyQuotes));
    }, []);

    return (
        <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 text-center shadow-xl">
            <h1 className="text-4xl font-extrabold tracking-wide font-serif">
                {siteData.siteName}
            </h1>
            <p className="italic text-lg mt-2">{siteData.tagline}</p>
            <p className="mt-4 text-yellow-300 font-bold text-md animate-bounce">
                {quote}
            </p>
        </header>
    );
};

export default Header;
