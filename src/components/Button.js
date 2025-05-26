import cx from 'classnames';

const Button = (props) => {
  const {
    text = '',
    textColorPrimary,
    className: classNameProp,
    backgroundPrimary,
    ...rest
  } = props || {};

  const cls = cx(
    'rounded-md font-bold py-2 h-fit text-nowrap border-2 border-primary',
    classNameProp,
    {
      ['text-primary']: textColorPrimary,
      ['text-secondary']: !textColorPrimary,
      ['bg-primary px-3']: backgroundPrimary,
      ['bg-transparent px-5']: !backgroundPrimary,
      ['px-10']: text.length <= 4,
    }
  );

  return (
    <button className={cls} {...rest}>
      {text}
    </button>
  );
};

export default Button;
