export function FlagSA({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={Math.round((size * 2) / 3)}
      viewBox="0 0 30 20"
      fill="none"
      className={`flag-icon ${className}`}
      style={{ borderRadius: "3px", overflow: "hidden", display: "inline-block", verticalAlign: "middle", boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
    >
      <rect width="30" height="20" fill="#006C35" />
      {/* White emblem & sword representation */}
      <path d="M7 7.5h16v1.4H7zM9 10.8h12v1H9zM7 13.5l16-.2v.8l-16 .2z" fill="#ffffff" opacity="0.95" />
      <polygon points="6,13.5 9,12.5 9,14.5" fill="#ffffff" />
    </svg>
  );
}

export function FlagUS({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={Math.round((size * 2) / 3)}
      viewBox="0 0 30 20"
      fill="none"
      className={`flag-icon ${className}`}
      style={{ borderRadius: "3px", overflow: "hidden", display: "inline-block", verticalAlign: "middle", boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
    >
      <rect width="30" height="20" fill="#B22234" />
      {/* White stripes */}
      <path d="M0 2.3h30v1.5H0zM0 5.4h30v1.5H0zM0 8.5h30v1.5H0zM0 11.5h30v1.5H0zM0 14.6h30v1.5H0zM0 17.7h30v1.5H0z" fill="#ffffff" />
      {/* Blue canton */}
      <rect width="13" height="10.8" fill="#3C3B6E" />
      {/* White stars representation */}
      <circle cx="3" cy="2.5" r="0.8" fill="#fff" />
      <circle cx="6.5" cy="2.5" r="0.8" fill="#fff" />
      <circle cx="10" cy="2.5" r="0.8" fill="#fff" />
      <circle cx="4.8" cy="5.4" r="0.8" fill="#fff" />
      <circle cx="8.3" cy="5.4" r="0.8" fill="#fff" />
      <circle cx="3" cy="8.3" r="0.8" fill="#fff" />
      <circle cx="6.5" cy="8.3" r="0.8" fill="#fff" />
      <circle cx="10" cy="8.3" r="0.8" fill="#fff" />
    </svg>
  );
}
