type Props = {
  status: 'loading' | 'success' | 'error';
};

const Status = (props: Props) => {
  let message;
  if (props.status === 'loading') {
    message = 'Loading...';
  } else if (props.status === 'success') {
    message = 'Data fetched successfully!';
  } else if (props.status === 'error') {
    message = 'Error fetching data';
  }

  return <div>Status - {message}</div>;
};

export default Status;
