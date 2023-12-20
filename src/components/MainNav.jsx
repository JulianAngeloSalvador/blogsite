export default function MainNav() {
  return (
    <nav className="bg-yellow-100 p-2 flex justify-between px-5 items-center">
      <h4>PET CODE</h4>
      <ul className="flex gap-6">
        <li>Home</li>
        <li>About</li>
        <li>Search</li>
        <li>Contact Us</li>
      </ul>
      <div className="flex gap-3">
        <button className="auth-buttons bg-slate-50 rounded-full py-0.5 px-2">
          Sign Up
        </button>
        <button className="auth-buttons">Login</button>
      </div>
    </nav>
  );
}
