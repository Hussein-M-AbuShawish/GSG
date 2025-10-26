// src/components/CheckoutComponents/BillingForm.jsx
import React from "react";

export default function BillingForm({
  formData,
  setFormData,
  errors,
  setErrors,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <form className="billing-form">
      <div className="form-group">
        <label>
          First Name<span className="required">*</span>
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className={errors.firstName ? "error" : ""}
        />
        {errors.firstName && (
          <span className="error-text">{errors.firstName}</span>
        )}
      </div>

      <div className="form-group">
        <label>Company Name</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>
          Street Address<span className="required">*</span>
        </label>
        <input
          type="text"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleChange}
          className={errors.streetAddress ? "error" : ""}
        />
        {errors.streetAddress && (
          <span className="error-text">{errors.streetAddress}</span>
        )}
      </div>

      <div className="form-group">
        <label>Apartment, floor, etc.</label>
        <input
          type="text"
          name="apartment"
          value={formData.apartment}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>
          City<span className="required">*</span>
        </label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className={errors.city ? "error" : ""}
        />
        {errors.city && <span className="error-text">{errors.city}</span>}
      </div>

      <div className="form-group">
        <label>
          Phone<span className="required">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? "error" : ""}
        />
        {errors.phone && <span className="error-text">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <label>
          Email<span className="required">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "error" : ""}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>
    </form>
  );
}
