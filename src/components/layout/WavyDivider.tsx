import Image from 'next/image';

interface WavyDividerProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function WavyDivider({ src, alt = 'Wavy divider', className = '' }: WavyDividerProps) {
  return (
    <div className={`wavy-divider ${className}`}>
      {/* Using next/image for optimal loading */}
      <Image src={src} alt={alt} width={1200} height={120} layout="responsive" priority={false} />
    </div>
  );
}
