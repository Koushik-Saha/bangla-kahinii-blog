import Link from "next/link";
import  siteData  from "@/json/siteData.json";

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-pink-500 to-yellow-500 p-4 shadow-lg">
            <ul className="flex justify-center space-x-6 text-white font-bold text-lg">
                {siteData.navigation.map((item) => (
                    <li key={item.name}>
                        <Link href={item.href} className="hover:text-black transition">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
