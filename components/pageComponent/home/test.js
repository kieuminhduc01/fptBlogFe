import MainContainer from '../../content/mainContainer';

const Test = () => {
  return (
    <>
      <MainContainer>
        <button
          style={{ marginTop: '300px' }}
          type="button"
          className="btn btn-primary"
        >
          Primary
        </button>
        <div style={{ height: '2000px', backgroundColor: '#733' }}></div>
      </MainContainer>
    </>
  );
};

export default Test;
