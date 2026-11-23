export function FlagSA({ size = 22, className = "" }) {
  const width = size;
  const height = Math.round((size * 2) / 3);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`flag-icon flag-sa ${className}`}
      style={{
        borderRadius: "4px",
        overflow: "hidden",
        display: "inline-block",
        verticalAlign: "middle",
        boxShadow: "0 1px 3px rgba(0,0,0,0.35)",
        border: "1px solid rgba(255,255,255,0.15)",
        flexShrink: 0
      }}
    >
      <rect width="36" height="24" fill="#006C35" />
      {/* Arabic Shahada inscription representation */}
      <g fill="#FFFFFF" opacity="0.95">
        <path d="M8 7h2v3H8zm3-1h1.5v4H11zm2.5 1h1.8v3h-1.8zm3-1h1.6v4h-1.6zm2.8 1h1.6v3h-1.6zm2.8-1h1.5v4H25zm2.7 1h1.8v3h-1.8z" />
        <path d="M7 11h22v1.2H7z" opacity="0.8" />
        <path d="M9 8.5c1-1 3-1 4 0m2 0c1-1 3-1 4 0m2 0c1-1 3-1 4 0" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" fill="none" />
      </g>
      {/* Traditional Saudi Sword facing left */}
      <g fill="#FFFFFF">
        {/* Blade */}
        <path d="M9.5 15.2h16.5c.3 0 .5.2.5.5s-.2.5-.5.5H9.5c-.7 0-1.2-.5-1.5-1 .5 0 1 .1 1.5 0z" />
        {/* Guard & Grip */}
        <rect x="25.2" y="14" width="1.2" height="3.4" rx="0.4" />
        <rect x="26.4" y="15.2" width="2" height="1" rx="0.3" />
        <circle cx="28.7" cy="15.7" r="0.7" />
      </g>
    </svg>
  );
}

export function FlagUS({ size = 22, className = "" }) {
  const width = size;
  const height = Math.round((size * 2) / 3);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`flag-icon flag-us ${className}`}
      style={{
        borderRadius: "4px",
        overflow: "hidden",
        display: "inline-block",
        verticalAlign: "middle",
        boxShadow: "0 1px 3px rgba(0,0,0,0.35)",
        border: "1px solid rgba(255,255,255,0.15)",
        flexShrink: 0
      }}
    >
      {/* 13 Stripes: 7 Red, 6 White */}
      <rect width="36" height="24" fill="#B22234" />
      <rect y="1.85" width="36" height="1.85" fill="#FFFFFF" />
      <rect y="5.54" width="36" height="1.85" fill="#FFFFFF" />
      <rect y="9.23" width="36" height="1.85" fill="#FFFFFF" />
      <rect y="12.92" width="36" height="1.85" fill="#FFFFFF" />
      <rect y="16.62" width="36" height="1.85" fill="#FFFFFF" />
      <rect y="20.31" width="36" height="1.85" fill="#FFFFFF" />

      {/* Blue Canton */}
      <rect width="14.8" height="12.92" fill="#3C3B6E" />

      {/* Stars Grid */}
      <g fill="#FFFFFF">
        <circle cx="2.6" cy="2.2" r="0.75" />
        <circle cx="5.6" cy="2.2" r="0.75" />
        <circle cx="8.6" cy="2.2" r="0.75" />
        <circle cx="11.6" cy="2.2" r="0.75" />

        <circle cx="4.1" cy="4.3" r="0.75" />
        <circle cx="7.1" cy="4.3" r="0.75" />
        <circle cx="10.1" cy="4.3" r="0.75" />

        <circle cx="2.6" cy="6.4" r="0.75" />
        <circle cx="5.6" cy="6.4" r="0.75" />
        <circle cx="8.6" cy="6.4" r="0.75" />
        <circle cx="11.6" cy="6.4" r="0.75" />

        <circle cx="4.1" cy="8.5" r="0.75" />
        <circle cx="7.1" cy="8.5" r="0.75" />
        <circle cx="10.1" cy="8.5" r="0.75" />

        <circle cx="2.6" cy="10.6" r="0.75" />
        <circle cx="5.6" cy="10.6" r="0.75" />
        <circle cx="8.6" cy="10.6" r="0.75" />
        <circle cx="11.6" cy="10.6" r="0.75" />
      </g>
    </svg>
  );
}
