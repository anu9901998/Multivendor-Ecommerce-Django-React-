import React from 'react'
import SingleProduct from './SingleProduct'

const ProductDetail = () => {
  return (
    <section className='container mt-4'>
       <div className='row'>
          <div className='col-4'> 
          <div id="productThumbnailSlider" className="carousel carousel-dark slide carousel-fade bg-light  mt-4">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className='row mb-5'>
      <img src="..." className="img-thumbnail mb-5" alt="..." />
      </div>
    </div>
    <div className="carousel-item">
    <div className='row mb-5'>
    <img src="..." className="img-thumbnail mb-5" alt="..." />
      </div>
    </div>
    <div className="carousel-item">
    <div className='row mb-5'>
    <img src="..." className="img-thumbnail mb-5" alt="..." />
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
          </div>
          <div className='col-4'>
            <h3>Product Title</h3>
            <p>Product DES</p>
            <h5 className='card-title'>Price: Rs. 500</h5>
            <p className='mt-3'>
            <button title="Add to cart" className="btn btn-secondary " >
                <i className="fa-solid fa-cart-plus" />Add to Cart
              </button>
              <button title="Add to cart" className="btn btn-success ms-1" >
                <i className="fa-solid fa-cart-plus" />Buy Now
              </button>
              <button title="Add to cart" className="btn btn-danger ms-1" >
                <i className="fa-solid fa-heart" /> Wishlist
              </button>
            </p>
          </div>
       </div>
       {/* {Releated product} */}
       <h3 className='mt-5 mb-3'> Related Products</h3>
       <div id="relatedProductsSlider" className="carousel carousel-dark slide bg-light  mt-4">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className='row mb-5'>
        <SingleProduct title={"dd"}/>
        <SingleProduct title={"dd"}/>
        <SingleProduct title={"dd"}/>
        <SingleProduct title={"dd"}/>
      </div>
    </div>
    <div className="carousel-item">
    <div className='row mb-5'>
        <SingleProduct title={"dd"}/>
        <SingleProduct title={"dd"}/>
        <SingleProduct title={"dd"}/>
        <SingleProduct title={"dd"}/>
      </div>
    </div>
    <div className="carousel-item">
    <div className='row mb-5'>
        <SingleProduct title={"dd"}/>
        <SingleProduct title={"dd"}/>
        <SingleProduct title={"dd"}/>
        <SingleProduct title={"dd"}/>
      </div>
    </div>
  </div>
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#relatedProductsSlider" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#relatedProductsSlider" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
</div>
       {/* {end} */}

    </section>
  )
}

export default ProductDetail