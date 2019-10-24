import React from 'react';

const SignInModal = () => (
  <div className="SignInModal">
      <div className="SignInModalInner">
          <div className="SignInModalTitle">Connect To Your Bank</div>
          <div className="SignInModalList">
              <div className="SignInModalListOption" onClick={() => window.open("http://localhost:3000/?appId=1",'_blank')}>HSBC</div>
              <div className="SignInModalListOption">Other Bank 1</div>
              <div className="SignInModalListOption">Other Bank 2</div>
              <div className="SignInModalListOption">Other Bank 3</div>
          </div>
      </div>
  </div>
);

export default SignInModal;
