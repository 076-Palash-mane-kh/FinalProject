import React from 'react'

function Login() {





  return (

    <>
      <div className="divform">
        <div className="container">
          <div className="row px-2 mb-5 mt-2">
            <div className="col-lg-9 col-xl-8 card flex-row mx-auto px-0">
              <div className="img-left d-none d-md-flex">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} /></div>

              <div className="card-body">
                <h4 className="title text-center mt-4">
                  Login into account
                </h4>
                <form className="form-box px-3">

                  <div className="form-input">
                    <span><i className="fa fa-envelope-o"></i></span>
                    <input type="email" name="" placeholder="Email Address" value={email} onChange={handleEmail}
                      className={email === "" && validationError ? "border border-danger" : ""} />
                  </div>
                  <div className="form-input">
                    <span><i className="fa fa-key"></i></span>
                    <input type="password" name="" placeholder="Password" value={password} onChange={handlePassword}
                      className={password === "" && validationError ? "border border-danger" : ""} />
                  </div>

                  <div className="mb-3 ">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="cb1" name="" />
                      <label className="custom-control-label" for="cb1">Remember me</label>
                    </div>
                  </div>

                  <div class="mb-3 mt-4">
                    <button type="submit" class="btn btn-block text-uppercase" onClick={loginUser}>
                      Login
                    </button>
                  </div>

                  <div className="text-right mt-2">
                    <a href='#' className="forget-link">
                      Forget Password?
                    </a>
                  </div>
                  <hr/>
                  <div className="text-center mb-0 mt-5">
                    Don't have an account?
                    
                    <Link to="./signup">Register here</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login