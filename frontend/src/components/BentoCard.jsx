export function BentoCard({ children, wide = false, className = '', ...props }) {
  return (
    <div 
      className={`bento-card ${className}`.trim()} 
      data-span={wide ? 'wide' : undefined} 
      {...props}
    >
      {children}
    </div>
  );
}
