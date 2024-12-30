"use client";

import { useEffect, useState } from "react";

const Nav = () => {
  const sections = ["profile", "experience", "projects", "contact"];
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          history.pushState(null, "", `#${id}`);
          setActiveSection(id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav>
      <ul className="flex space-x-4">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={
                activeSection === section ? "text-red-600" : "text-black"
              }
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() +
                section.slice(1).replace("-", " ")}{" "}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
