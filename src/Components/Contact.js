import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");

  // 🔍 Real-time validation
  const validateField = (name, value) => {
    let error = "";

    if (name === "name" && !value.trim()) {
      error = "Name is required";
    }

    if (name === "email") {
      if (!value) {
        error = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Invalid email address";
      }
    }

    if (name === "message" && !value.trim()) {
      error = "Message is required";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // 🖊 Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.message &&
    !errors.name &&
    !errors.email &&
    !errors.message;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setSending(true);

    emailjs
      .send(

        "service_dhruv2412",
        "template_oby6nfa",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "PIwbhmkrctvqFtqOJ"
      )
      .then(() => {
       setSuccess("Thank You, We Connect with You Quickly.");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      })
      .catch(() => {
        setSuccess("Failed to send message. Try again.");
      })
      .finally(() => setSending(false));
  };

  return (
    <div className="container my-4 text-light">
      <form
        className="mx-auto"
        style={{ maxWidth: "600px" }}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="border border-warning border-3 rounded-4 p-4 shadow-sm">
          <h2 className="text-center mb-4 fw-bold reflective-btn text-warning">
            Contact Us
          </h2>

          {success && (
            <div className="alert alert-success text-center py-2">
              {success}
            </div>
          )}

          {/* NAME */}
          <div className="mb-3">
            <label className="form-label fs-5">Name</label>
            <input
              type="text"
              name="name"
              className={`form-control border-warning ${errors.name ? "is-invalid" : ""
                }`}
              placeholder="Enter Your Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

          {/* EMAIL */}
          <div className="mb-3">
            <label className="form-label fs-5">Email</label>
            <input
              type="email"
              name="email"
              className={`form-control border-warning ${errors.email ? "is-invalid" : ""
                }`}
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          {/* MESSAGE */}
          <div className="mb-3">
            <label className="form-label fs-5">Message</label>
            <textarea
              name="message"
              rows="4"
              className={`form-control border-warning ${errors.message ? "is-invalid" : ""
                }`}
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <div className="invalid-feedback">{errors.message}</div>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-warning w-100 fw-bold reflective-btn text-dark"
            disabled={!isFormValid || sending}
          >
            {sending ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
