import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

import { getProduct, clearErrors } from "../../redux/actions/productAction.js";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";

import "./Products.css";

const Products = () => {
	const dispatch = useDispatch();

	const [currentPage, setCurrentPage] = useState(1);
	const [price, setPrice] = useState([0, 200000]);

	const { products, productsCount, loading, error, resultPerPage } =
		useSelector((state) => state.products);

	const { keyword } = useParams(); //Used useParams() instead of match

	const setCurrentPageNo = (e) => {
		setCurrentPage(e);
	};

	const priceHandler = (event, newPrice) => {
		setPrice(newPrice);
	};

	useEffect(() => {
		dispatch(getProduct(keyword, currentPage, price));
	}, [dispatch, keyword, currentPage, price]);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<h2 className="productsHeading">Products</h2>
					<div className="products">
						{products &&
							products.map((product) => (
								<ProductCard key={product._id} product={product} />
							))}
					</div>

					<div className="filterBox">
						<Typography>Price</Typography>
						<Slider
							value={price}
							onChange={priceHandler}
							valueLabelDisplay="auto"
							aria-labelledby="range-slider"
							min={0}
							max={200000}
						/>
					</div>

					{resultPerPage < productsCount && (
						<div className="paginationBox">
							<Pagination
								activePage={currentPage}
								itemsCountPerPage={resultPerPage}
								totalItemsCount={productsCount}
								onChange={setCurrentPageNo}
								nextPageText="Next"
								prevPageText="Previous"
								firstPageText="1st"
								lastPageText="Last"
								itemClass="page-item"
								linkClass="page-link"
								activeClass="pageItemActive"
								activeLinkClass="pageLinkActive"
							/>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default Products;
