import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/api";
import { useCart } from "../../context/CartContext";
import "./styles/ProductDetails.css";
import IconReturn from "../../assets/images/SingleProduct/return.png";
import IconDelivery from "../../assets/images/SingleProduct/delivery.png";
import Heart from "../../assets/icons/Heart.png";

export default function ProductInformation() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < selectedQuantity; i++) {
        addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
        });
      }
      alert(`${selectedQuantity} item(s) added to cart!`);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  // إنشاء مصفوفة صور (الصورة الأساسية + 3 نسخ للعرض)
  // في حالة API حقيقي، ستحصل على صور متعددة من الـ response
  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  return (
    <div className="product-details-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Home</span> / <span>{product.category}</span> /{" "}
        <span className="active">{product.title}</span>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="product-details-container">
        {/* قسم الصور */}
        <div className="product-images">
          {/* ألبوم الصور الجانبي */}
          <div className="image-gallery">
            {productImages.map((img, index) => (
              <div
                key={index}
                className={`gallery-item ${
                  selectedImageIndex === index ? "active" : ""
                }`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img src={img} alt={`${product.title} - ${index + 1}`} />
              </div>
            ))}
          </div>

          {/* الصورة الرئيسية */}
          <div className="main-image">
            <img src={productImages[selectedImageIndex]} alt={product.title} />
          </div>
        </div>

        {/* التفاصيل */}
        <div className="pd-product-info">
          <h1>{product.title}</h1>

          {/* التقييم */}
          <div className="rating-section">
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="star">
                  {i < Math.floor(product.rating?.rate || 4.5) ? "★" : "☆"}
                </span>
              ))}
            </div>
            <span className="reviews-count">
              ({product.rating?.count || 150} Reviews)
            </span>
            <span className="in-stock">| In Stock</span>
          </div>

          {/* السعر */}
          <p className="pd-price">${product.price}</p>

          {/* الوصف */}
          <p className="description">{product.description}</p>

          <hr />

          {/* الألوان (اختياري) */}
          <div className="color-selector">
            <span>Colours:</span>
            <div className="color-options">
              <button
                className="color-btn active"
                style={{ backgroundColor: "#A0BCE0" }}
              ></button>
              <button
                className="color-btn"
                style={{ backgroundColor: "#E07575" }}
              ></button>
            </div>
          </div>

          {/* اختيار الحجم */}
          <div className="size-selector">
            <span>Size:</span>
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={selectedSize === size ? "active" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          {/* اختيار الكمية */}
          <div className="quantity-and-buy">
            <div className="quantity-selector">
              <button
                onClick={() =>
                  setSelectedQuantity(Math.max(1, selectedQuantity - 1))
                }
              >
                -
              </button>
              <span>{selectedQuantity}</span>
              <button onClick={() => setSelectedQuantity(selectedQuantity + 1)}>
                +
              </button>
            </div>

            <button className="buy-now" onClick={handleAddToCart}>
              Buy Now
            </button>

            <button className="wishlist-btn">
              <img src={Heart} alt="Add to wishlist" />
            </button>
          </div>

          {/* معلومات الشحن */}
          <div className="delivery-info">
            <div className="delivery-item">
              <span className="icon">
                <img src={IconDelivery} alt="Delivery" />
              </span>
              <div>
                <strong>Free Delivery</strong>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="delivery-item">
              <span className="icon">
                <img src={IconReturn} alt="Return" />
              </span>
              <div>
                <strong>Return Delivery</strong>
                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
