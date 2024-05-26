import React from 'react'
import SingleProduct from './SingleProduct'

const CategoryProducts = () => {
  return (
    <div className='container mt-4'>
    <div>
    <h3 className="mb-4"><span className='text-success'>Python</span>Products</h3>
      <div className="row mb-2">
        <SingleProduct title={"django 1"}/>
        <SingleProduct title={"django 2"}/>
        <SingleProduct title={"django 3"}/>
        <SingleProduct title={"django 4"}/>
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
    </div>
  )
}

export default CategoryProducts