type ShinyTextProps = {
    text: string;
    disabled?: boolean;
    speed: number;
    className?: string;
}

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }: ShinyTextProps) => {
    const animationDuration = `${speed}s`;
  
    return (
      <div
        className={`text-[#c6c6c6b2] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
        style={{
          backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          animationDuration: animationDuration,
        }}
      >
        {text}
      </div>
    );
  };
  
  export default ShinyText;