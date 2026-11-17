const links = [
  { label: 'Home', href: '/' },
  { label: 'Articles', href: '/' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <ul>
        {links.map(({ href, label }) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
