// pages/About.js
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Staggered animation for each element
export default function CSR() {
  // 0: main image, 1: overlay text, 2: section title, 3-5: section paragraphs, 6: side image, 7: card1, 8: card2, 9: footer
  const [show, setShow] = useState(Array(10).fill(false));
  const [showFooter, setShowFooter] = useState(false);

  // Staggered animation for each element
  useEffect(() => {
    let timers = [];
    for (let i = 0; i < show.length; i++) {
      timers.push(
        setTimeout(() => setShow((s) => {
          const next = [...s];
          next[i] = true;
          return next;
        }), 200 + i * 120)
      );
    }
    timers.push(
      setTimeout(() => setShowFooter(true), 200 + show.length * 120)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  let idx = 0;

  return (
    <>
      <Navbar />
      {/* Staggered animation for each element: csr_main2 image */}
      <div style={{ position: "relative", width: "100vw", maxWidth: "100%" }}>
        <img
          src={require("../assets/csr_main2.png")}
          alt="CSR Main"
          className={`mb-8 transition-all duration-700 ease-out
            ${show[0] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
          style={{
            width: "100vw",
            maxWidth: "100%",
            display: "block",
            margin: 0,
            padding: 0,
            objectFit: "cover"
          }}
        />
      </div>
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
            <div className="flex-1">
              {/* Staggered animation for each element: section title */}
              <h1
                className={`text-4xl font-bold mb-4 transition-all duration-700 ease-out
                  ${show[1] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
                style={{ color: "#007958", textAlign: "left" }}
              >
                COORPORATE SOCIAL RESPONSIBILITY (CSR)
              </h1>
              {/* Staggered animation for each element: first paragraph */}
              <p className={`text-lg text-gray-700 mb-6 text-left transition-all duration-700 ease-out
                ${show[2] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
                Within the global framework of Corporate Social Responsibility (CSR), <span className="font-semibold text-[#ce4233]">MENA Support Services</span> in India focuses on a few, specific priority actions. In addition, as an important element of its Corporate Social Responsibility, the Group in India lays great emphasis in ensuring that its business practices meet the highest standards of corporate governance and ethics.
              </p>
              {/* Staggered animation for each element: second paragraph */}
              <p className={`text-lg text-gray-700 mb-6 text-left transition-all duration-700 ease-out
                ${show[3] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
                The CSR approach adopted envisages that the group evolves and executes strategies to support communities in partnership with governments, civil society and relevant stakeholders. Key to this approach is <span className="font-semibold text-[#ce4233]">MENA Support Service Ltd.</span>'s employees who generously give of their time, experience and talent to serve communities; group companies encourage and facilitate them to do so.
              </p>
              {/* Staggered animation for each element: third paragraph */}
              <p className={`text-lg text-gray-700 mb-6 text-left transition-all duration-700 ease-out
                ${show[4] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
                The group believes corporate social responsibility (CSR) is a critical mission that is at the heart of everything that it does, how it thinks and what it is. <span className="font-semibold text-[#ce4233]">MENA Support Service Ltd.</span> is committed to integrating environmental, social and ethical principles into the core business, thereby enhancing long-term stakeholder value and touching the lives of over a quarter of the world's population. The group’s CSR programmes aim to be relevant to local, national and global contexts, keep disadvantaged communities as the focus, be based on globally-agreed sustainable development principles and be implemented in partnership with governments, NGOs and other relevant stakeholders.
              </p>
            </div>
            {/* Staggered animation for each element: side image */}
            <div className="flex-shrink-0 w-full md:w-96 flex flex-col items-center relative">
              <img
                src={require("../assets/csr2.jpg")}
                alt="CSR"
                className={`rounded shadow max-w-full h-auto transition-all duration-700 ease-out
                  ${show[5] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
                style={{ maxHeight: "420px", objectFit: "cover", marginTop: "80px" }}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Staggered animation for each element: card 1 */}
            <div className={`bg-white rounded-lg shadow p-6 flex flex-col transition-all duration-700 ease-out
              ${show[6] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
              <h1 className="text-4xl font-bold text-center mb-4" style={{ color: "#007958" }}>
                BRAJ GAURI TRUST
              </h1>
              <img
                src={require("../assets/braj.gif")}
                alt="Braj Gauri Trust"
                className="mx-auto mb-4 rounded"
                style={{ width: "180px", height: "auto", maxHeight: "120px", objectFit: "contain" }}
              />
              <p className="text-gray-700 mb-4">
                Braj Gauri Trust has been set up in Mumbai in the year of 2004, with a vision to serve the poor, down trodden and underprivileged people of this country. This philanthropic trust is founded in the loving memory of grand parents of Dr. Dev Mohanty, who is the founder member and chairman of our trust. He is also the principal donor to this trust and sole inspiration behind all the activities of our trust.
              </p>
              <p className="text-gray-700 mb-4">
                Ours is a completely family trust and formed with a noble principle of <span className="italic text-[#ce4233]">"serving to mankind is serving to God"</span>. We have never accepted any donation and all of our trust activities are funded by our Chairman and his family. Our charitable activities are now being undertaken in Mumbai, Maharashtra and Cuttack, Orissa. We are mostly working in the areas of Education, Health Care and Capacity building of unemployed youths.
              </p>
              <a
                href="http://brajgauri.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ce4233] font-semibold underline hover:text-[#a82d1e] transition self-end"
              >
                Read more...
              </a>
            </div>
            {/* Staggered animation for each element: card 2 */}
            <div className={`bg-white rounded-lg shadow p-6 flex flex-col transition-all duration-700 ease-out
              ${show[7] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
              <h1 className="text-4xl font-bold text-center mb-4" style={{ color: "#007958" }}>
                DEV LOKA EDUCATIONAL TRUST
              </h1>
              <p className="text-gray-700 mb-4">
                There is a great potential in young people. It is like dynamite. Dynamite can do great good when used in the right way. It can pave the way for new buildings, schools, lakes, highways, and numerous other projects which will benefit mankind. In the wrong hands, though, it can be used to take life, often thousands of lives. Young people have the same potential for good or bad.
              </p>
              <p className="text-gray-700 mb-4">
                We at Devloka trust, work day and night with the youths of Kalinga (erstwhile Orissa) to motivate them and Channelize their energy for the betterment of society. At Devloka we engage in various youth engagement program so that we can bring in youth development, public policy and social change.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Staggered animation for each element: footer */}
      <div
        className={`transition-all duration-700 ease-out
          ${showFooter ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
      >
        <Footer />
      </div>
    </>
  );
}
