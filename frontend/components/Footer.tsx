import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer hover-animate">
      <p>
        © {currentYear}{" "}
        <a
          target="_blank"
          href="https://github.com/MeAkash77"
        >
          NewsAI 
        </a>
         . (Akash) All rights reserved.
      </p>
    </footer>
  );
}
