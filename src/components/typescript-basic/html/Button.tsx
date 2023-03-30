type Props = {
  variant: 'primary' | 'secondary';
  children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>;

const Button = ({ variant, children, ...rest }: Props) => {
  return (
    <button className={`class-width-${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
