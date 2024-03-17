import React, { useEffect, useState } from "react";
import "./main_page.css";
import { FaAngleLeft, FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import axios from "axios";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

function Main_page() {
  const [filterName, setFilterName] = useState("");
  const [hideFilter, setHideFilter] = useState(false);
  const [products, setProducts] = useState("");
  const [likedProducts, setLikedProducts] = useState([]);

  const filter_category_list = [
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilterName = (name) => {
      setFilterName(name);
  };

  const handleLikeClick = (index) => {
    // Check if the product is already liked
    const isLiked = likedProducts.includes(index);

    // Toggle liked state for the product
    if (isLiked) {
      setLikedProducts(likedProducts.filter((item) => item !== index));
    } else {
      setLikedProducts([...likedProducts, index]);
    }
  };

  const handleHideFilter = () => {
    setHideFilter(!hideFilter);
  };

  return (
    <div>

   <Header />

      <section class="product-discovery-section">

        <article class="product-discovery-menu">
          <div className="product-discovery-home">HOME</div>
          <div>SHOP</div>
        </article>

        <article class="product-discovery-content">
          <h1 class="product-discovery-title">DISCOVER OUR PRODUCTS</h1>
          <p class="product-discovery-description">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </article>

        <article class="product-filter-container">
          <div class="product-view-count">3425 TIMES</div>
          <div class="product-filter">
            <FaAngleLeft className="product-filter-icon" />
            <p class="product-filter-text" onClick={handleHideFilter}>
              {hideFilter?"SHOW FILTER":"HIDE FILTER"}
            </p>
          </div>
          <div class="mobile-product-filter">
            FILTER
          </div>
          <select class="product-recommend-select" name="recommend">
            <option value="RECOMMENDED">RECOMMENDED</option>
            <option value="NEWEST FIRST">NEWEST FIRST</option>
            <option value="POPULAR">POPULAR</option>
            <option value="PRICE: HIGH TO LOW">PRICE: HIGH TO LOW</option>
            <option value="PRICE: LOW TO HIGH">PRICE: LOW TO HIGH</option>
          </select>
        </article>
      </section>

      <section className="products-container">
        {!hideFilter && (
          <aside className={`filter-section ${hideFilter ? 'filter-section-hidden' : ''}`}>
            <div class="filter-option">
              <input type="checkbox" class="filter-checkbox" />
              <label class="customizable-text">CUSTOMIZABLE</label>
            </div>

            {filter_category_list.map((name, index) => (
              <div class="filter-category" key={index}>
                <div
                  class="category-dropdown"
                  onClick={() => {filterName === name ? setFilterName("") : handleFilterName(name)}}
                >
                  <div class="category-label">
                    <div class="category-title">{name}</div>
                    <p>All</p>
                  </div>
                  {filterName !== name && <FaAngleDown />}
                  {filterName === name && <FaAngleUp />}
                </div>
                {filterName === name && (
                  <div class="category-options">
                    <p>UNSELECTED</p>
                    <div class="category-option">
                      <input type="checkbox" class="filter-checkbox" />
                      <label class="filter-label">MEN</label>
                    </div>
                    <div class="category-option">
                      <input type="checkbox" class="filter-checkbox" />
                      <label class="filter-label">WOMEN</label>
                    </div>
                    <div class="category-option">
                      <input type="checkbox" class="filter-checkbox" />
                      <label class="filter-label">BABY & KIDS</label>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </aside>
        )}

        <article
          className={`product-list ${hideFilter ? "dynamic-product-list" : ""}`}
        >
          {products &&
            products.map((product, index) => (
              <div
                className={`product-item ${
                  hideFilter ? "dynamic-product-item" : ""
                }`}
                key={index}
              >
                <img className="product-image" src={product.image} alt="" />
                <div className="product-details">
                  <div className="product-info">
                    <h2 className="product-title">{product.title}</h2>
                    <p className="product-description">
                      Sign in or Create an account to see pricing
                    </p>
                  </div>
                  {!likedProducts.includes(index) && (
                    <FaRegHeart
                      className="product-like-icon"
                      onClick={() => handleLikeClick(index)}
                    />
                  )}
                  {likedProducts.includes(index) && (
                    <FaHeart
                      className="liked"
                      onClick={() => handleLikeClick(index)}
                    />
                  )}
                </div>
              </div>
            ))}
        </article>
      </section>

      <Footer />
    </div>
  );
}

export default Main_page;
