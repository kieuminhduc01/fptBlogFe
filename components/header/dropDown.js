import Link from 'next/link';

const DropDown = ({ isClickAccount }) => {
  return (
    <>
      {isClickAccount && (
        <div
          style={{
            zIndex: '3000',
            position: 'absolute',
            marginLeft: '-114px',
            borderRadius: '10px',
            padding: '20px',
          }}
          className="bg-body-secondary"
        >
          <div className="d-flex justify-content-center">
            <div className=" ">
              <button
                style={{ whiteSpace: 'nowrap', color: 'black' }}
                className=" ff-lexend d-block fs-22px-xxl fs-20px-xl fs-20px-lg fs-16px-md fs-16px-sm fs-16px bg-body border-0 colo"
              >
                Đổi mật khẩu
              </button>
              <button
                style={{ whiteSpace: 'nowrap', color: 'black' }}
                className="ff-lexend float-start fs-22px-xxl fs-20px-xl fs-20px-lg fs-16px-md fs-16px-sm fs-16px bg-body mt-2 border-0"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DropDown;
