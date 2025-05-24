const Button = ({ props }) => {
  const { text, textColorPrimary, backgroundPrimary, ...rest } = props;

  return (
    <button
      class={`rounded-md font-bold py-2 h-fit text-nowrap border-2 border-primary ${
        textColorPrimary ? `text-primary` : `text-secondary`
      } ${backgroundPrimary ? `bg-primary px-3` : `bg-transparent px-5`} ${
        text.length <= 4 ? `px-10` : ``
      }`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
