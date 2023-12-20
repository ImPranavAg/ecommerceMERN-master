import React, { Fragment, useEffect } from 'react';
import {CgMouse} from "react-icons/all"; 
import "./Home.css";
import ProductCard from "../Product/ProductCard";
import MetaData from '../layout/MetaData';
import { clearErrors, getProduct } from '../../actions/productAction';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../loader/Loader';
import { useAlert } from 'react-alert';

const Home = () => {

  const alert = useAlert();
  const dispatch = useDispatch();
  const {loading,error,products} = useSelector(state => state.products);

  useEffect(()=>{
    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(""));
  },[dispatch,error,alert]);
  return(
    <Fragment>
      {loading ? (
        <Loader />
      ): (
        <Fragment>
        <MetaData title="ECOMMERCE"/>
          <div className='banner'>
              <p>Welcome To Ecommerce </p>
              <h1>Find Amazing Product Below</h1>
              <a href="#container">
              <button>
                  Scroll <CgMouse />
              </button>
              </a>
              </div>
              <h2 className='homeHeading'>Featured Products</h2>
              <div className="container" id="container">
                {products && products.map((product) => (<ProductCard product={product}/>))}
              </div>
      </Fragment>
      )}
    </Fragment>
  );
};

export default Home;