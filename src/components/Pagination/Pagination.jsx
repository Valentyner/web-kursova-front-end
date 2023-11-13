import React from 'react';
import './Pagination.css'
import "bootstrap/dist/js/bootstrap.min.js";

const Pagination = () => {
    return (
            <div className="card-body">
                <nav>
                    <ul className="pagination d-flex justify-content-center flex-wrap pagination-rounded-flat pagination-success">
                        <li className="page-item"><a className="page-link" href="#" data-abc="true"><i className="fa fa-angle-left"></i></a></li>
                        <li className="page-item active"><a className="page-link" href="#" data-abc="true">1</a></li>
                        <li className="page-item "><a className="page-link" href="#" data-abc="true">2</a></li>
                        <li className="page-item "><a className="page-link" href="#" data-abc="true">3</a></li>
                        <li className="page-item"><a className="page-link" href="#" data-abc="true">4</a></li>
                        <li className="page-item"><a className="page-link" href="#" data-abc="true">5</a></li>
                        <li className="page-item"><a className="page-link" href="#" data-abc="true">6</a></li>
                        <li className="page-item"><a className="page-link" href="#" data-abc="true">7</a></li>
                        <li className="page-item"><a className="page-link" href="#" data-abc="true"><i className="fa fa-angle-right"></i></a></li>
                    </ul>
                </nav>
            </div>
    );
};

export default Pagination;