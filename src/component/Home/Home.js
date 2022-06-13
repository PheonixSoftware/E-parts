import { HiChevronDoubleDown } from "react-icons/hi";
import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";



import ParallaxCarousel from "../Parallax/Demo";
import ButtonBases from "../Product/ProductsBanner";

//import Loader from "../layout/Loader/Loader";

// const product={
//   name:"Wheel",
//   images:[{ url: "https://i.ibb.co/DRST11n/1.webp"}],
//   price:"1000",
//   id:"Hassan"
// }

const Home = () => {
  <MetaData title="Atlas Honda" />;
  //const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  console.log(products);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader></Loader>
      ) : (
        <Fragment>
          <MetaData title="E-Parts" />

          <div>
            <ParallaxCarousel />

            <a href="#container" style={{ color: "white" }}>
              <HiChevronDoubleDown size={40} />
            </a>
          </div>
          <div>
            <ButtonBases />
          </div>
          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => <ProductCard product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
