import React, { useState } from 'react';

const ForgotPassword = () => {
  const [identity, setIdentity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Phone Number:', identity);
  };

  return (
    <div className="container py-4 py-lg-5 my-4 rtl">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 text-start">
          <h2 className="h3 mb-4">Forgot your password?</h2>
          <p className="font-size-md">
            Change your password in three easy steps. This helps to keep your new password secure.
          </p>
          <ol className="list-unstyled font-size-md p-0">
            <li>
              <span className="text-primary me-2">1.</span>Fill in your phone number below.
            </li>
            <li>
              <span className="text-primary me-2">2.</span>We will send you a temporary code to your phone number.
            </li>
            <li>
              <span className="text-primary me-2">3.</span>Use the code to change your password on our secure website.
            </li>
          </ol>

          <div className="card py-2 mt-4">
            <form className="card-body needs-validation" onSubmit={handleSubmit}>
              {/* You can use a library like react-hook-form or just native validation */}
              <div className="form-group">
                <label htmlFor="identity">Enter your phone number</label> <br />
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <span role="img" aria-label="iraq-flag">🇮🇶</span> +964
                    </div>
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    name="identity"
                    id="identity"
                    style={{ textAlign: 'left' }}
                    placeholder="7xx xxx xxxx"
                    required
                    value={identity}
                    onChange={(e) => setIdentity(e.target.value)}
                  />
                  <div className="invalid-feedback">Please provide valid phone number!</div>
                </div>
              </div>
              <button className="btn btn--primary" type="submit">
                Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
