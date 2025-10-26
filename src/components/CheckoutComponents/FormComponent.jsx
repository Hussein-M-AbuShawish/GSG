export default function FormComponent() {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // إزالة الخطأ عند الكتابة
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.streetAddress.trim()) {
      newErrors.streetAddress = "Street address is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // محاكاة عملية الدفع
      alert(
        `Order placed successfully!\nPayment Method: ${paymentMethod}\nTotal: $${totalAmount.toFixed(
          2
        )}`
      );

      // مسح السلة
      clearCart();

      // الانتقال إلى الصفحة الرئيسية
      navigate("/");
    }
  };
  <form className="billing-form" onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="firstName">
        First Name<span className="required">*</span>
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        className={errors.firstName ? "error" : ""}
        placeholder="Enter your first name"
      />
      {errors.firstName && (
        <span className="error-text">{errors.firstName}</span>
      )}
    </div>

    <div className="form-group">
      <label htmlFor="companyName">Company Name</label>
      <input
        type="text"
        id="companyName"
        name="companyName"
        value={formData.companyName}
        onChange={handleInputChange}
        placeholder="Company name (optional)"
      />
    </div>

    <div className="form-group">
      <label htmlFor="streetAddress">
        Street Address<span className="required">*</span>
      </label>
      <input
        type="text"
        id="streetAddress"
        name="streetAddress"
        value={formData.streetAddress}
        onChange={handleInputChange}
        className={errors.streetAddress ? "error" : ""}
        placeholder="Enter street address"
      />
      {errors.streetAddress && (
        <span className="error-text">{errors.streetAddress}</span>
      )}
    </div>

    <div className="form-group">
      <label htmlFor="apartment">Apartment, floor, etc. (optional)</label>
      <input
        type="text"
        id="apartment"
        name="apartment"
        value={formData.apartment}
        onChange={handleInputChange}
        placeholder="Apartment, suite, unit, etc."
      />
    </div>

    <div className="form-group">
      <label htmlFor="city">
        Town/City<span className="required">*</span>
      </label>
      <input
        type="text"
        id="city"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
        className={errors.city ? "error" : ""}
        placeholder="Enter your city"
      />
      {errors.city && <span className="error-text">{errors.city}</span>}
    </div>

    <div className="form-group">
      <label htmlFor="phone">
        Phone Number<span className="required">*</span>
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        className={errors.phone ? "error" : ""}
        placeholder="Enter phone number"
      />
      {errors.phone && <span className="error-text">{errors.phone}</span>}
    </div>

    <div className="form-group">
      <label htmlFor="email">
        Email Address<span className="required">*</span>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className={errors.email ? "error" : ""}
        placeholder="Enter email address"
      />
      {errors.email && <span className="error-text">{errors.email}</span>}
    </div>

    <div className="save-info-checkbox">
      <input type="checkbox" id="saveInfo" />
      <label htmlFor="saveInfo">
        Save this information for faster check-out next time
      </label>
    </div>
  </form>;
}
