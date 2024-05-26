import React from 'react'
import { Link } from 'react-router-dom'
const Categories = () => {
  return (
    <section className='container mt-4'>
    <h3 className="mb-4">All Categgories</h3>
    <div className="row mb-2">
      <div className="col-12 col-md-3 mb-4">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title"><Link to='/category/python/1'>Category Title</Link></h4>
            <h5 className="card-title text-muted">Price : Rs. 256</h5>
          </div>
          <div className="card-footer">
            Product Downloads : 2345
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
    </section>
  )
}

export default Categories