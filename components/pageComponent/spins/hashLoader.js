import HashLoader from 'react-spinners/HashLoader';
const HashLoaderCus = ({ children, loadingSpin }) => {
  return (
    <div
      style={{
        backgroundColor: loadingSpin ? 'rgb(220 220 220)' : '#fff',
        height: '100vh',
        zIndex: 10000000,
        position: 'relative',
      }}
    >
      {loadingSpin && (
        <div
          style={{
            backgroundColor: loadingSpin ? 'rgb(220 220 220)' : '#fff',
            height: '100vh',
            width: '100vw',
            zIndex: 1000,
            opacity: '80%',
          }}
          className="position-absolute"
        >
          <div
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            className="position-fixed"
          >
            <HashLoader
              color="#36d7b7"
              loading={loadingSpin}
              speedMultiplier={1}
            />
          </div>
        </div>
      )}

      <div style={{ zIndex: -10 }}>{children}</div>
    </div>
  );
};

export default HashLoaderCus;
