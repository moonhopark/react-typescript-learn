type HorizontalPosition = 'left' | 'center' | 'right';

type VerticalPosition = 'top' | 'center' | 'bottom';

type Props = {
  position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center';
};

const Toast = ({ position }: Props) => {
  return <div>Toast Notification Position = {position}</div>;
};

export default Toast;
