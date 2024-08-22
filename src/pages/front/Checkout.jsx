import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'

const Checkout = () => {
  return (
    <>

      {/* <!-- Single Page Header start --> */}
      <Breadcrumb marginTop={"150px"} />
      {/* <!-- Single Page Header End --> */}


      {/* <!-- Checkout Page Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <h1 className="mb-4">Billing details</h1>
          <form action="#">
            <div className="row g-5">
              <div className="col-md-12 col-lg-6 col-xl-7">
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3">First Name<sup>*</sup></label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3">Last Name<sup>*</sup></label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="form-item">
                  <label className="form-label my-3">Company Name<sup>*</sup></label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">Address <sup>*</sup></label>
                  <input type="text" className="form-control" placeholder="House Number Street Name" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">Town/City<sup>*</sup></label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">Country<sup>*</sup></label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">Postcode/Zip<sup>*</sup></label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">Mobile<sup>*</sup></label>
                  <input type="tel" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">Email Address<sup>*</sup></label>
                  <input type="email" className="form-control" />
                </div>

               
              </div>
              <div className="col-md-12 col-lg-6 col-xl-5">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Products</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <div className="d-flex align-items-center mt-2">
                            <img src="img/vegetable-item-2.jpg" className="img-fluid rounded-circle" style={{height: "90px", width: "90px"}} alt="" />
                          </div>
                        </th>
                        <td className="py-5">Awesome Brocoli</td>
                        <td className="py-5">$69.00</td>
                        <td className="py-5">2</td>
                        <td className="py-5">$138.00</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="d-flex align-items-center mt-2">
                            <img src="img/vegetable-item-5.jpg" className="img-fluid rounded-circle" style={{height: "90px", width: "90px"}} alt="" />
                          </div>
                        </th>
                        <td className="py-5">Potatoes</td>
                        <td className="py-5">$69.00</td>
                        <td className="py-5">2</td>
                        <td className="py-5">$138.00</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="d-flex align-items-center mt-2">
                            <img src="img/vegetable-item-3.png" className="img-fluid rounded-circle" style={{height: "90px", width: "90px"}} alt="" />
                          </div>
                        </th>
                        <td className="py-5">Big Banana</td>
                        <td className="py-5">$69.00</td>
                        <td className="py-5">2</td>
                        <td className="py-5">$138.00</td>
                      </tr>
                      <tr>
                        <th scope="row">
                        </th>
                        <td className="py-5"></td>
                        <td className="py-5"></td>
                        <td className="py-5">
                          <p className="mb-0 text-dark py-3">Subtotal</p>
                        </td>
                        <td className="py-5">
                          <div className="py-3 border-bottom border-top">
                            <p className="mb-0 text-dark">$414.00</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                        </th>
                       

                      </tr>
                      <tr>
                        <th scope="row">
                        </th>
                        <td className="py-5">
                          <p className="mb-0 text-dark text-uppercase py-3">TOTAL</p>
                        </td>
                        <td className="py-5"></td>
                        <td className="py-5"></td>
                        <td className="py-5">
                          <div className="py-3 border-bottom border-top">
                            <p className="mb-0 text-dark">$135.00</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                  <button type="button" className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary">Place Order</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- Checkout Page End --> */}
    </>
  )
}

export default Checkout