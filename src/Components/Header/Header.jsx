import React from 'react';

const Header = () => {
  const handleLogin = () => {
    // Handle login logic here
  };

  const handleRegister = () => {
    // Handle register logic here
  };

  return (
    <header>
      <div className="logo">
        {/* Add your logo here */}
      </div>
      <nav>
        {/* Add your navbar items here */}
      </nav>
      <div className="buttons">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
      </div>
    </header>
  );
};

export default Header;
