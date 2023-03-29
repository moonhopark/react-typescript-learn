import { Props } from './Person.types';

const Person = (props: Props) => {
  return (
    <div>
      <h2>
        {props.name.first} {props.name.last}
      </h2>
    </div>
  );
};

export default Person;
