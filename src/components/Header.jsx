import React from "react";
import { Link } from "react-router-dom";
import { PiBrain } from "react-icons/pi";


const Header = () => {
  return (
    <header className="py-10 px-10 flex justify-between items-center max-xl:flex-col max-xl:gap-y-10">
        <Link className="text-2xl flex items-center"><PiBrain className="text-4xl mr-2" /> AI-Enhanced Flashcard Application</Link>
        <ul className="flex gap-x-5 text-xl">
            <li>
                <Link>Home</Link>
            </li>
            <li>
                <Link>Search flashcards</Link>
            </li>
            <li>
                <Link>Why it works?</Link>
            </li>
            <li>
                <Link>Login</Link>
            </li>
            <li>
                <Link>Register</Link>
            </li>
        </ul>

    </header>
  );
};

export default Header;
