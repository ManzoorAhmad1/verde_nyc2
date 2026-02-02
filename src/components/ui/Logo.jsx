const Logo = ({ className = "w-40 h-auto", fill = "currentColor" }) => {
  return (
    <img 
      className={`logo-theme-main logo-theme-custom ${className}`}
      src="/images/logo-Verde-NYC-white.png" 
      alt="Verde Dubai logo"
    />
  );
}

export default Logo;