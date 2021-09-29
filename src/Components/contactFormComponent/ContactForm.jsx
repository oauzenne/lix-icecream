import React from "react";

const ContactForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [body, setBody] = React.useState("");

  const handleSubmit = (event) => {
    // console.log(`
    //   Name: ${name}
    //   Email: ${email}
    //   Subject: ${subject}
    //   Body: ${body}
    // `);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />{" "}
        </div>
        <div className="field">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label>Subject</label>
          <input
            name="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label>Body</label>​
          <textarea
            name="body"
            value={body}
            rows="10"
            cols="70"
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Sign Me Up!</button>
      </form>
    </div>
  );
};

export default ContactForm;
