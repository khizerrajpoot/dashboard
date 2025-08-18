import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    toast.success(`Thank you, ${values.name}, your message has been successfully submitted.`, {
      position: "top-right",
      autoClose: 3000,
    });
    resetForm();
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us. We'd love to hear from you!</p>
      </div>
      
      <div className="contact-container">
        <h2>Send us a Message</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <Field type="text" id="name" name="name" placeholder="Enter your full name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <Field type="email" id="email" name="email" placeholder="Enter your email address" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <Field as="textarea" id="message" name="message" placeholder="Type your message here..." />
              <ErrorMessage name="message" component="div" className="error" />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
