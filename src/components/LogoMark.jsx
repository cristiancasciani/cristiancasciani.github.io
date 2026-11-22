// CC stamp mark: solid outer C, dashed inner C, star. Colors follow the theme.
export default function LogoMark({ size = 40, className = '' }) {
  return (
    <svg className={`logo-mark ${className}`} width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path className="lm-outer" d="M54.12 16.51A27 27 0 1 0 54.12 47.49" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path className="lm-inner" d="M46.34 21.96A17.5 17.5 0 1 0 46.34 42.04" fill="none" stroke="var(--acc)" strokeWidth="2.6" strokeDasharray="3.2 3" strokeLinecap="round" />
      <path className="lm-star" d="M32 23.5C32.85 28.6 35.4 31.15 40.5 32C35.4 32.85 32.85 35.4 32 40.5C31.15 35.4 28.6 32.85 23.5 32C28.6 31.15 31.15 28.6 32 23.5Z" fill="var(--acc)" />
    </svg>
  );
}
