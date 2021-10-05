import React from "react";
import "./ConfirmationPage.css";
import ConfirmedCheck from "../confirmationPageContainer/confirmedCheck.png";

const ConfirmationPage = () => {
  const AddMinutesToDate = (date, minutes) => {
    return new Date(date.getTime() + minutes * 60000);
  };

  const currentDateTime = new Date();

  var orderReady = AddMinutesToDate(currentDateTime, 15);

  const orderReadyTime =
    orderReady.getHours() +
    ":" +
    (orderReady.getMinutes() < 10 ? "0" : "") +
    orderReady.getMinutes();

  console.log(orderReadyTime);

  return (
    <section className="confirmation-container">
      <div className="confirmation-contents">
        <img src={ConfirmedCheck} className="confirmed-check" />
        <h2 className="confirmed-header">Confirmed!</h2>
        <h3 className="confirmation-time">
          Your cone will be ready at:{" "}
          <span style={{ color: "#ED7D90", marginLeft: "8px" }}>
            {orderReadyTime.toString()}
          </span>
        </h3>
        <h4 className="address">
          Please pick your order up here:{" "}
          <span style={{ fontWeight: "300" }}>
            123 Main Street, Houston, TX 77056
          </span>
        </h4>
      </div>
    </section>
  );
};

export default ConfirmationPage;
