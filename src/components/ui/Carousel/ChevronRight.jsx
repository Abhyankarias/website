const ChevronRight = ({
  height = '24',
  width = '24',
  color = 'black',
  flip = false,
}) => {
  const transformStyle = flip ? 'scaleX(-1)' : '';

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ transform: transformStyle }}
    >
      <path
        d='M9 18L15 12L9 6'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ChevronRight;
