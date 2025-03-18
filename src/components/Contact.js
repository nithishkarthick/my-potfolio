import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

// Styled components for the layout
const ContactSection = styled.section`
  position: relative;
  padding: 60px 20px;
  text-align: center;
  overflow: hidden; /* Ensures the content doesn't overflow */
  
  /* Video background */
  video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1; /* Ensure video stays in the background */
  }
`;

const ContactForm = styled.form`
  background: linear-gradient(45deg, rgba(228, 49, 18, 0.8), rgba(51, 233, 15, 0.8), rgba(221, 239, 21, 0.8), rgba(206, 28, 222, 0.8)); /* Gradient background */
  padding: 40px;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 50px auto;
  z-index: 1;
  position: relative;
`;

const InputField = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const TextareaField = styled.textarea`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (name && email && message) {
      emailjs
        .sendForm('service_i41h5im', 'template_bygfysy', e.target, 'hI4itZVOvo6OCqqmj')
        .then(
          (result) => {
            console.log(result.text);
            setIsSuccess(true);
            setIsError(false);
            setFormData({ name: '', email: '', message: '' });
          },
          (error) => {
            console.log(error.text);
            setIsError(true);
            setIsSuccess(false);
          }
        );
    } else {
      setIsError(true);
      setIsSuccess(false);
    }
  };

  return (
    <ContactSection>
      {/* Background Video */}
      <video autoPlay loop muted>
        <source src="/images/coour shadding.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

  
      <ContactForm onSubmit={handleSubmit}>
      <h2>Get In Touch</h2>
        <InputField
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <InputField
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextareaField
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
      {isSuccess && <p>Your message has been sent successfully!</p>}
      {isError && <p>There was an error sending your message. Please try again later.</p>}
    </ContactSection>
  );
};

export default Contact;
