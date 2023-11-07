import React from 'react';
import './Pagination.css'
import "bootstrap/dist/js/bootstrap.min.js";

const Pagination = () => {
    return (
            <div class="card-body">
                <nav>
                    <ul class="pagination d-flex justify-content-center flex-wrap pagination-rounded-flat pagination-success">
                        <li class="page-item"><a class="page-link" href="#" data-abc="true"><i class="fa fa-angle-left"></i></a></li>
                        <li class="page-item active"><a class="page-link" href="#" data-abc="true">1</a></li>
                        <li class="page-item "><a class="page-link" href="#" data-abc="true">2</a></li>
                        <li class="page-item "><a class="page-link" href="#" data-abc="true">3</a></li>
                        <li class="page-item"><a class="page-link" href="#" data-abc="true">4</a></li>
                        <li class="page-item"><a class="page-link" href="#" data-abc="true">5</a></li>
                        <li class="page-item"><a class="page-link" href="#" data-abc="true">6</a></li>
                        <li class="page-item"><a class="page-link" href="#" data-abc="true">7</a></li>
                        <li class="page-item"><a class="page-link" href="#" data-abc="true"><i class="fa fa-angle-right"></i></a></li>
                    </ul>
                </nav>
            </div>
    );
};

export default Pagination;