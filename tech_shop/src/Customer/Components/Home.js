import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    // const usenavigate = useNavigate();


    // useEffect(() => {
    //    let username = sessionStorage.getItem('username');
    //     if(username==='' || username === null){
    //       usenavigate('/login');
    //     }



    // }, []);

    return (
        <div className="App">
            
            <section class="section-content padding-y">
                <div class="container">
                    <div class="row">
                        <div>
                            <aside class="col-md-3">

                                <div class="card">
                                    <article class="filter-group">
                                        <header class="card-header">
                                            <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" class="">
                                                <i class="icon-control fa fa-chevron-down"></i>
                                                <h6 class="title">Product type</h6>
                                            </a>
                                        </header>
                                        <div class="filter-content collapse show" id="collapse_1">
                                            <div class="card-body">
                                                {/* <form class="pb-3">
                            <div class="input-group">
                              <input type="text" class="form-control" placeholder="Search" />
                              <div class="input-group-append">
                                <button class="btn btn-light" type="button"><i class="fa fa-search"></i></button>
                              </div>
                            </div>
                            </form> */}

                                                <ul class="list-menu">
                                                    <li><a href="#">Apple    </a></li>
                                                    <li><a href="#">Xiaomi </a></li>
                                                    <li><a href="#">Samsung  </a></li>
                                                    <li><a href="#">Oppo  </a></li>
                                                    <li><a href="#">Realme </a></li>
                                                    <li><a href="#"></a></li>
                                                    <li><a href="#"> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>


                                </div>
                            </aside>

                            <div>
                                

                            </div>

                        </div>
                        <div class="Row">
                            <main >
                                <header class="border-bottom mb-4 pb-3">
                                    <div class="form-inline">
                                        <span class="mr-md-auto">32 Items found </span>
                                        <select class="mr-2 form-control">
                                            <option>Latest items</option>
                                            <option>Trending</option>
                                            <option>Most Popular</option>
                                            <option>Cheapest</option>
                                        </select>
                                        <div class="btn-group">
                                            <a href="#" class="btn btn-outline-secondary" data-toggle="tooltip" title="List view">
                                                <i class="fa fa-bars"></i></a>
                                            <a href="#" class="btn  btn-outline-secondary active" data-toggle="tooltip" title="Grid view">
                                                <i class="fa fa-th"></i></a>
                                        </div>
                                    </div>
                                </header>
                                <div class="row">
                                    <div class="col-md-4">
                                        <figure class="card card-product-grid">
                                            <div class="img-wrap">
                                                <span class="badge badge-danger"> NEW </span>
                                                <img src="src/Customer/img/15-Pro-nar1170930957.jpg" />
                                                <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                            </div>
                                            <figcaption class="info-wrap">
                                                <div class="fix-height">
                                                    <a href="#" class="title">Great item name goes here</a>
                                                    <div class="price-wrap mt-2">
                                                        <span class="price">$1280</span>
                                                        <del class="price-old">$1980</del>
                                                    </div>
                                                </div>
                                                <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div class="col-md-4">
                                        <figure class="card card-product-grid">
                                            <div class="img-wrap">
                                                <img src="src/Customer/img/15-Pro-nar1170930957.jpg" />
                                                <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                            </div>
                                            <figcaption class="info-wrap">
                                                <div class="fix-height">
                                                    <a href="#" class="title">Product name goes here just for demo item</a>
                                                    <div class="price-wrap mt-2">
                                                        <span class="price">$1280</span>
                                                    </div>
                                                </div>
                                                <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div class="col-md-4">
                                        <figure class="card card-product-grid">
                                            <div class="img-wrap">
                                                <img src="src/Customer/img/15-Pro-nar1170930957.jpg" />
                                                <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                            </div>
                                            <figcaption class="info-wrap">
                                                <div class="fix-height">
                                                    <a href="#" class="title">Product name goes here just for demo item</a>
                                                    <div class="price-wrap mt-2">
                                                        <span class="price">$1280</span>
                                                    </div>
                                                </div>
                                                <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div class="col-md-4">
                                        <figure class="card card-product-grid">
                                            <div class="img-wrap">
                                                <img src="src/Customer/img/15-Pro-nar1170930957.jpg" />
                                                <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                            </div>
                                            <figcaption class="info-wrap">
                                                <div class="fix-height">
                                                    <a href="#" class="title">Product name goes here just for demo item</a>
                                                    <div class="price-wrap mt-2">
                                                        <span class="price">$1280</span>
                                                    </div>
                                                </div>
                                                <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div class="col-md-4">
                                        <figure class="card card-product-grid">
                                            <div class="img-wrap">
                                                <img src="src/Customer/img/15-Pro-nar1170930957.jpg" />
                                                <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                            </div>
                                            <figcaption class="info-wrap">
                                                <div class="fix-height">
                                                    <a href="#" class="title">Product name goes here just for demo item</a>
                                                    <div class="price-wrap mt-2">
                                                        <span class="price">$1280</span>
                                                    </div>
                                                </div>
                                                <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div class="col-md-4">
                                        <figure class="card card-product-grid">
                                            <div class="img-wrap">
                                                <img src="src/Customer/img/15-Pro-nar1170930957.jpg" />
                                                <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                            </div>
                                            <figcaption class="info-wrap">
                                                <div class="fix-height">
                                                    <a href="#" class="title">Product name goes here just for demo item</a>
                                                    <div class="price-wrap mt-2">
                                                        <span class="price">$1280</span>
                                                    </div>
                                                </div>
                                                <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div class="col-md-4">
                                        <figure class="card card-product-grid">
                                            <div class="img-wrap">
                                                <img src="src/Customer/img/15-Pro-nar1170930957.jpg" />
                                                <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                            </div>
                                            <figcaption class="info-wrap">
                                                <div class="fix-height">
                                                    <a href="#" class="title">Product name goes here just for demo item</a>
                                                    <div class="price-wrap mt-2">
                                                        <span class="price">$1280</span>
                                                    </div>
                                                </div>
                                                <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div class="col-md-4">
                                        <figure class="card card-product-grid">
                                            <div class="img-wrap">
                                                <img src="src/Customer/img/15-Pro-nar1170930957.jpg" />
                                                <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                            </div>
                                            <figcaption class="info-wrap">
                                                <div class="fix-height">
                                                    <a href="#" class="title">Product name goes here just for demo item</a>
                                                    <div class="price-wrap mt-2">
                                                        <span class="price">$1280</span>
                                                    </div>
                                                </div>
                                                <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <nav class="mt-4" aria-label="Page navigation sample">
                                    <ul class="pagination">
                                        <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                    </ul>
                                </nav>
                            </main>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="section-footer border-top padding-y">
                <div class="container">
                    <p class="float-md-right">
                        &copy; Copyright 2021 All rights reserved
                    </p>
                    <p>
                        <a href="#">Terms and conditions</a>
                    </p>
                </div>
            </footer>


        </div>
    );
}

export default Home;