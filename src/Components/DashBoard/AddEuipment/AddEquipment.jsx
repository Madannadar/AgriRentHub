import React, { useState } from "react";
import "./AddEquipment.css";
import { StyledButton } from "../../../App";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { addEquipmentData } from "../../../Firebase/firebbaseFunctions";
import { useAuth } from "../../../AuthContext";
import CloseIcon from "@mui/icons-material/Close"; // Import close icon

const ErrorPopup = ({ open, onClose, message }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      action={
        <button onClick={onClose} style={{ color: "white" }}>
          Close
        </button>
      }
    >
      <Alert onClose={onClose} severity="error">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default function AddEquipment({ setAddEquipment }) {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // New loading state

  const { currentUser } = useAuth();
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!name || !description || !location || !price || !image) {
      setErrorMessage("All fields are required!");
      setErrorOpen(true);
      return;
    }

    const equipmentData = {
      Owner: currentUser.uid,
      Name: name,
      Description: description,
      Location: location,
      Price: price,
    };

    setLoading(true); // Set loading to true when submitting

    try {
      await addEquipmentData(currentUser.uid, equipmentData, image);
      setAddEquipment(false);
    } catch (error) {
      setErrorMessage("Failed to add equipment. Please try again.");
      setErrorOpen(true);
    } finally {
      setLoading(false); // Reset loading state after submission
    }
  };

  return (
    <div className="AddEquipmentContainer">
      <div
        className="AddEquipmentBackground"
        onClick={() => setAddEquipment(false)}
      />
      <div className="AddEquipmentParentContainer">
        <div className="AddEquipmentCloseButtonContainer">
          <button
            className="AddEquipmentCloseButton"
            onClick={() => setAddEquipment(false)}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="AddEquipmentSubContainer">
          <div className="AddEquipmentSubContainerImageContainer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="AddEquipmentImageInput"
            />
            {image && (
              <img
                src={imagePreview}
                alt="Equipment Preview"
                className="EquipmentImagePreview"
              />
            )}
          </div>
          <div className="AddEquipmentSubContainerNameContainer">
            <div className="AddEquipmentSubContainerInputCard">
              <div className="AddEquipmentSubContainerInputCardLabel">
                Equipment Name:
              </div>
              <input
                className="AddEquipmentSubContainerCardInput"
                placeholder="Equipment Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="AddEquipmentSubContainerDescriptionContainer">
            <div className="AddEquipmentSubContainerInputCard">
              <div className="AddEquipmentSubContainerInputCardLabel">
                Equipment Description:
              </div>
              <input
                className="AddEquipmentSubContainerCardInput"
                placeholder="Equipment Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="AddEquipmentSubContainerLocationContainer">
            <div className="AddEquipmentSubContainerInputCard">
              <div className="AddEquipmentSubContainerInputCardLabel">
                Location:
              </div>
              <input
                className="AddEquipmentSubContainerCardInput"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="AddEquipmentSubContainerPriceContainer">
            <div className="AddEquipmentSubContainerInputCard">
              <div className="AddEquipmentSubContainerInputCardLabel">
                Price:
              </div>
              <input
                type="number"
                className="AddEquipmentSubContainerCardInput"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="AddEquipmentSubContainerButtonContainer">
            <StyledButton
              variant="contained"
              disableElevation
              disableFocusRipple
              disableRipple
              onClick={handleSubmit}
              disabled={loading} // Disable button if loading
            >
              {loading ? "Adding..." : "Add"} {/* Change button text */}
            </StyledButton>
          </div>
        </div>
      </div>

      <ErrorPopup
        open={errorOpen}
        onClose={() => setErrorOpen(false)}
        message={errorMessage}
      />
    </div>
  );
}
