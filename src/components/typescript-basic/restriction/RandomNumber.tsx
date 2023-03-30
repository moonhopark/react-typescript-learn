type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type Zero = RandomNumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type Props = PositiveNumber | NegativeNumber | Zero;

const RandomNumber = ({ value, isPositive, isNegative, isZero }: Props) => {
  return (
    <div>
      {value} {isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'zero'}
    </div>
  );
};

export default RandomNumber;
