import React, {useState} from "react";
import '../css/sample.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faEnvelopeOpenText, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contact_us() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        msg: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Ensure form data is valid
        const { email, name, phone, address, msg } = formData;
        if (!email || !name || !phone || !address || !msg) {
            alert("Please fill out all fields.");
            return;
        }

        try {
            const response = await fetch('https://health-tool.jorim.net/backend-gmail/contact_mail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.text();
            console.log(result);

            if (result === 'success') {
                alert('Email sent successfully!');
            } else {
                alert('Error sending email.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the email.');
        }
    };

    return (
        <>
            <div className="contact_body">
                <section className="contact_us">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="contact_inner">
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="contact_form_inner">
                                                <div className="contact_field">
                                                    <h3>Contact Us</h3>
                                                    <p>
                                                        Feel free to contact us any time. We will get back to you as soon as we can!
                                                    </p>
                                                    <form className="form" onSubmit={handleFormSubmit}>
                                                        <input
                                                            type="text"
                                                            className="form-control form-group"
                                                            placeholder="Name"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                        <input
                                                            type="email"
                                                            className="form-control form-group"
                                                            placeholder="Email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                        <input
                                                            type="number"
                                                            className="form-control form-group"
                                                            placeholder="Phone Number"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                        <input
                                                            type="text"
                                                            className="form-control form-group"
                                                            placeholder="Address"
                                                            name="address"
                                                            value={formData.address}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                        <textarea
                                                            className="form-control form-group"
                                                            placeholder="Message"
                                                            name="msg"
                                                            value={formData.msg}
                                                            onChange={handleInputChange}
                                                            required
                                                        ></textarea>
                                                        <button type="submit" className="contact_form_submit">
                                                            Send
                                                        </button>
                                                    </form>



                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="right_conatct_social_icon d-flex align-items-end justify-content-center">
                                                <ul className="socil_item_inner d-flex">
                                                    <li>
                                                        <a href="https://www.facebook.com/" onClick={(e) => e.preventDefault()}>
                                                            <FontAwesomeIcon icon={faFacebook} />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://wa.me/9150036318?text=Your%20Health%20Test%20Tool!" onClick={(e) => e.preventDefault()}>
                                                            <FontAwesomeIcon icon={faWhatsapp} />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.instagram.com/" onClick={(e) => e.preventDefault()}>
                                                            <FontAwesomeIcon icon={faInstagram} />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact_info_sec">
                                        <h4>Contact Info</h4>
                                        <div className="d-flex info_single align-items-center">
                                            <FontAwesomeIcon icon={faHeadset} />
                                            <span>+91 91500 36318</span>
                                        </div>
                                        <div className="d-flex info_single align-items-center">
                                            <FontAwesomeIcon icon={faEnvelopeOpenText} />
                                            <span>sales@jorimts.com</span>
                                        </div>
                                        <div className="d-flex info_single align-items-center">
                                            <FontAwesomeIcon icon={faMapMarkedAlt} />
                                            <span>
                                                6, First Main Road, Anna Nagar, Pammal, Chennai-600075, Tamilnadu, India
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Contact_us;
