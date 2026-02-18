import { footerLinks } from "../constants";

export default function Footer() {
  return (
    <footer>
      <div className="info">
        <p>More ways to shop: Find and Apple Store or other retailer near you</p>
        <img src="/logo.svg" alt="Apple Logo" />
      </div>
    <hr />
    <div className="links">
      <p>Copyright 2026 Apple Inc. All rights reserved</p>
      <ul>
        {footerLinks.map(({label, link}) => (
          <li key={label}>
            <a href={link}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
    </footer>
  )
}
