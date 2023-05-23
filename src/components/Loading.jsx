import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <div className="spinner">
      <Spinner animation="border" role="status">
      </Spinner>
    </div>
  );
}

export default Loading;
