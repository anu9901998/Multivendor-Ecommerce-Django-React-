import React from 'react'
import SingleProduct from './SingleProduct'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="mt-3">
    <div className="container">
      <h3 className="mb-4">Latest Products<Link className="float-end btn btn-sm btn-dark" to='/products'>View All Products<i className="fa-solid fa-arrow-right-long ms-1"></i></Link></h3>
      <div className="row mb-4">
        <SingleProduct/>
      </div>

      <h3 className="mb-4">Popular Categgories<a className="float-end btn btn-sm btn-dark" href="#">View All Categories<i className="fa-solid fa-arrow-right-long ms-1"></i></a></h3>
      <div className="row mb-4">
        <div className="col-12 col-md-3 mb-4">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <h5 className="card-title text-muted">Price : Rs. 256</h5>
            </div>
            <div className="card-footer">
              Product Downloads : 2345
            </div>
          </div>
        </div>
      </div>

      <h3 className="mb-4">Popular Products<a className="float-end btn btn-sm btn-dark" href="#">View All Products<i className="fa-solid fa-arrow-right-long ms-1"></i></a></h3>
      <div className="row mb-4">
        <div className="col-12 col-md-3 mb-4">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <h5 className="card-title text-muted">Price : Rs. 256</h5>
            </div>
            <div className="card-footer">
              <button title="Add to cart" className="btn btn-success btn-sm" >
                <i className="fa-solid fa-cart-plus" />
              </button>
              <button title="Add to cart" className="btn btn-danger btn-sm ms-1" >
                <i className="fa-solid fa-heart" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mb-4">Popular Sellers<a className="float-end btn btn-sm btn-dark" href="#">View All Sellers<i className="fa-solid fa-arrow-right-long ms-1"></i></a></h3>
      <div className="row mb-4">
        <div className="col-12 col-md-3 mb-4">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">CSeller Name</h4>
              <h5 className="card-title text-muted">Price : Rs. 256</h5>
            </div>
            <div className="card-footer">
              Categories : <a href="#">Python</a>
            </div>
          </div>
        </div>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide my-4 border bg-dark text-white p-5">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
              <i className='fa fa-star text-warning'/> 
               <i className='fa fa-star text-warning'/> 
               <i className='fa fa-star text-warning'/> 
               <i className='fa fa-star text-warning'/> 
                <cite title="Source Title">Customer Name</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item"> 
          <figure className="text-center">
            <blockquote className="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption className="blockquote-footer">
               <i className='fa fa-star text-warning'/> 
               <i className='fa fa-star text-warning'/> 
               <i className='fa fa-star text-warning'/> 
               <cite title="Source Title">Customer Name</cite>
              </figcaption>
          </figure>
          </div>
          <div className="carousel-item">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
              <i className='fa fa-star text-warning'/> 
              <i className='fa fa-star text-warning'/> 
              <i className='fa fa-star text-warning'/> 
              <i className='fa fa-star text-warning'/> 
               <cite title="Source Title">Customer Name</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    
    </div>
  </main>
  )
}

export default Home