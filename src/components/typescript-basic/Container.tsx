type Props = {
  styles: React.CSSProperties;
};

const Container = (props: Props) => {
  return <div style={props.styles}>Text content goes here</div>;
};

export default Container;
