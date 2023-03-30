type OwnProps<E extends React.ElementType> = {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
  as?: E;
};

type Props<E extends React.ElementType> = OwnProps<E> & Omit<React.ComponentProps<E>, keyof OwnProps<E>>;

const Text = <E extends React.ElementType = 'div'>({ size, color, children, as }: Props<E>) => {
  const Component = as || 'div';
  return <Component className={`class-with-${size}-${color}`}>{children}</Component>;
};

export default Text;
