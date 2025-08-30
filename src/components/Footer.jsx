import {  FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ background: "#1a1a1a", color: "#fff", padding: "2rem 0", marginTop: "2rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        
        {/* Brand Info */}
        <div>
          <h2 className="footerhead" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>ShoopyGlobe</h2>
          <p style={{ fontSize: ".9rem", lineHeight: "1.5" }}>
            Your one-stop shop for all your needs. Quality products at the best prices, delivered to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ marginBottom: "1rem" }}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0, fontSize: ".9rem", lineHeight: "1.8" }}>
            <li><a href="/" style={{ color: "#fff", textDecoration: "none" }}>Products</a></li>
            <li><a href="/cart" style={{ color: "#fff", textDecoration: "none" }}>Cart</a></li>
            <li><a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 style={{ marginBottom: "1rem" }}>Customer Support</h3>
          <p style={{ fontSize: ".9rem" }}>📍 Gondia, Maharashtra, India</p>
          <p style={{ fontSize: ".9rem" }}>📞 +91 8788571169</p>
          <p style={{ fontSize: ".9rem" }}>📧 bhushannasre3@gmail.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 style={{ marginBottom: "1rem" }}>Follow Us</h3>
          <div style={{ display: "flex", gap: "1rem", fontSize: "1.5rem" }}>
            <a href="https://github.com/Bhushannasre/ShoppyGlobal-Application.git" style={{ color: "#fff" }}><FaGithub /></a>
            <a href="https://www.instagram.com/bhushan_nasre/" style={{ color: "#fff" }}><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/bhushan-nasre-b03b13209/" style={{ color: "#fff" }}><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ textAlign: "center", marginTop: "2rem", fontSize: ".8rem", borderTop: "1px solid #333", paddingTop: "1rem" }}>
        © {new Date().getFullYear()} ShoopyGlobe. All rights reserved.
      </div>
    </footer>
  );
}
