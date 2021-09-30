import React from "react";
import { useHistory } from "react-router-dom";

import "./Contact.css";

const ContactForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [body, setBody] = React.useState("");
  const [buttonStatus, setButtonStatus] = React.useState("send");

  const history = useHistory();

  const refresh = () => {
    history.go(0);
  };

  const handleSubmit = () => {
    setButtonStatus("sent!");
    setTimeout(() => refresh(), 500);
  };

  return (
    <div className="contact-form-container">
      <form>
        <fieldset>
          <div className="form-row">
            <label className="label">Your name</label>
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="What do people call 'ya?"
              className="input"
            />
          </div>
          <div className="form-row">
            <label className="label">Your email</label>
            <input
              name="email"
              type="email"
              placeholder="How can we electronically communicate with you? :)"
              required
              value={email}
              className="input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label className="label">Subject</label>
            <input
              name="subject"
              type="text"
              placeholder="Main theme of your email here!"
              required
              value={subject}
              className="input"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="form-textarea">
            <label className="label">Body</label>
            <textarea
              name="body"
              required
              value={body}
              rows="5"
              className="textarea"
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="submit-row">
            {buttonStatus === "send" ? (
              <input
                type="submit"
                value={buttonStatus}
                className="form-submit"
                onClick={
                  name !== "" && email !== "" && subject !== "" && body !== ""
                    ? () => handleSubmit()
                    : null
                }
              />
            ) : (
              <input
                type="submit"
                value={buttonStatus}
                className="form-submit-sent"
              />
            )}
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;
