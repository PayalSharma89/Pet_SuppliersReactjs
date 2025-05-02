import React from 'react';

function ShippingPolicy() {
  return (
    <div className="container rtl pb-4 pt-3 px-0 px-md-3 mt-3 t" style={{ backgroundColor: 'white' }}>
      <div className="shipping-policy-web">
        <div className="row g-3 justify-content-center mx-max-md-0">
          
          {/* First Shipping Box */}
          <div className="col-md-3 d-flex justify-content-center px-max-md-0">
            <div className="shipping-method-system" >
              <div className="text-center">
                <img
                  className="mr-2 size-60"
                  src="https://six.valley.new.zeroitsolutions.com/storage/app/public/company-reliability/"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/delivery_info.png';
                  }}
                  alt="Fast Delivery"
                />
              </div>
              <div className="text-center">
                <p className="m-0">Fast Delivery all across the country</p>
              </div>
            </div>
          </div>

          {/* Second Shipping Box */}
          <div className="col-md-3 d-flex justify-content-center px-max-md-0">
            <div className="shipping-method-system">
              <div className="text-center">
                <img
                  className="mr-2 size-60"
                  src="https://six.valley.new.zeroitsolutions.com/storage/app/public/company-reliability/"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://six.valley.new.zeroitsolutions.com/public/assets/front-end/img/authentic_product.png';
                  }}
                  alt="Authentic Products"
                />
              </div>
              <div className="text-center">
                <p className="m-0">100% Authentic Products</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ShippingPolicy;
