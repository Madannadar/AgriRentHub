import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { StyledButton } from "../../App";
import OurCollection from "../DashBoard/OurCollection/OurCollection";
import AddEquipment from "../DashBoard/AddEuipment/AddEquipment";
import "./HomePageAfterLogin.css";
import Footer from "../HomePage/Footer/Footer";
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function HomePageAfterLogIn() {
  const { t } = useTranslation(); // Use the useTranslation hook
  const [addEquipment, setAddEquipment] = useState(false);

  return (
    <div>
      <NavBar />
      <OurCollection />
      <div className="HomePageAfterLoginButtonContainer">
        <div className="HomePageAfterLoginButtonSubContainer">
          <div>
            {t('homePageAfterLogin.readyToEarn')}
          </div>
          {addEquipment && <AddEquipment setAddEquipment={setAddEquipment} />}
          <StyledButton
            variant="contained"
            disableElevation
            disableFocusRipple
            disableRipple
            onClick={() => setAddEquipment(true)}
          >
            {t('homePageAfterLogin.addEquipment')}
          </StyledButton>
        </div>
      </div>
      <Footer />
    </div>
  );
}
// import React, { useState } from "react";
// import NavBar from "../NavBar/NavBar";
// import { StyledButton } from "../../App";
// import OurCollection from "../DashBoard/OurCollection/OurCollection";
// import AddEquipment from "../DashBoard/AddEuipment/AddEquipment";
// import Footer from "../HomePage/Footer/Footer";
// import { deleteEquipmentByName } from "../../Firebase/firebbaseFunctions";

// export default function HomePageAfterLogIn() {
//   const [addEquipment, setAddEquipment] = useState(false);
//   const [equipmentName, setEquipmentName] = useState(""); // Store equipment name

//   const handleDelete = async () => {
//     if (equipmentName.trim() === "") {
//       alert("Please enter a valid Equipment Name");
//       return;
//     }

//     try {
//       await deleteEquipmentByName(equipmentName);
//       alert(`Equipment "${equipmentName}" deleted successfully!`);
//       setEquipmentName(""); // Clear input field after deletion
//     } catch (error) {
//       alert("Error deleting equipment. Check the console for details.");
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <NavBar />
//       <OurCollection />
//       <div className="HomePageAfterLoginButtonContainer">
//         <div className="HomePageAfterLoginButtonSubContainer">
//           <div>
//             Ready to earn extra income? Click here to add your equipment for rent!
//           </div>
//           {addEquipment && <AddEquipment setAddEquipment={setAddEquipment} />}
//           <StyledButton
//             variant="contained"
//             disableElevation
//             disableFocusRipple
//             disableRipple
//             onClick={() => setAddEquipment(true)}
//           >
//             Add Equipment
//           </StyledButton>
//         </div>
//       </div>

//       {/* Delete Equipment Section */}
//       <div className="delete-equipment-section">
//         <h3>Delete Equipment</h3>
//         <input
//           type="text"
//           placeholder="Enter Equipment Name"
//           value={equipmentName}
//           onChange={(e) => setEquipmentName(e.target.value)}
//         />
//         <StyledButton
//           variant="contained"
//           disableElevation
//           disableFocusRipple
//           disableRipple
//           onClick={handleDelete}
//         >
//           Delete Equipment
//         </StyledButton>
//       </div>

//       <Footer />
//     </div>
//   );
// }
