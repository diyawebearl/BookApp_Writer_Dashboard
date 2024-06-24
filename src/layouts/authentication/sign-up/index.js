import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Grid,
  Card,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const AddWriter = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    city: "",
    state: "",
    country: "",
    gender: "",
    photo: null,
    status: false,
    mobile: "",
    email: "",
  });

  const handleInsert = async () => {
    try {
      const formDataToSend = new FormData();

      formDataToSend.append("name", formData.name);
      formDataToSend.append("dob", formData.dob);
      formDataToSend.append("city", formData.city);
      formDataToSend.append("state", formData.state);
      formDataToSend.append("country", formData.country);
      formDataToSend.append("gender", formData.gender);
      formDataToSend.append("status", formData.status);
      formDataToSend.append("mobile", formData.mobile);
      formDataToSend.append("email", formData.email);

      if (formData.photo instanceof File) {
        formDataToSend.append('file', formData.photo, formData.photo.name);
      }

      const response = await fetch(
        "https://bookingreadingapp.onrender.com/api/author/registerAuthor",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Success:", response);
      navigate("/authentication/sign-in");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Add Writer
                </MDTypography>
              </MDBox>
              <MDBox p={3}>
                <form>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <TextField
                    margin="dense"
                    id="dob"
                    label="DOB"
                    type="text"
                    fullWidth
                    value={formData.dob}
                    onChange={(e) =>
                      setFormData({ ...formData, dob: e.target.value })
                    }
                  />
                  <TextField
                    margin="dense"
                    id="city"
                    label="City"
                    type="text"
                    fullWidth
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                  />
                  <TextField
                    margin="dense"
                    id="state"
                    label="State"
                    type="text"
                    fullWidth
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                  />
                  <TextField
                    margin="dense"
                    id="country"
                    label="Country"
                    type="text"
                    fullWidth
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                  />
                  <TextField
                    margin="dense"
                    id="gender"
                    label="Gender"
                    select
                    fullWidth
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </TextField>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.status}
                        onChange={(e) =>
                          setFormData({ ...formData, status: e.target.checked })
                        }
                        color="primary"
                      />
                    }
                    label="Status"
                  />
                  
                  <TextField
                    margin="dense"
                    id="photo"
                    label="Photo"
                    type="file"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    onChange={(e) =>
                      setFormData({ ...formData, photo: e.target.files[0] })
                    }
                  />
                  <TextField
                    margin="dense"
                    id="mobile"
                    label="Mobile"
                    type="text"
                    fullWidth
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                  />
                  <TextField
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <MDBox mt={3}>
                    <Button onClick={() => navigate("/writer")}>Cancel</Button>
                    <Button onClick={handleInsert} color="primary">
                      Ok
                    </Button>
                  </MDBox>
                </form>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};

export default AddWriter;














// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Button,
//   TextField,
//   Grid,
//   Card,
//   MenuItem,
//   FormControlLabel,
//   Checkbox,
// } from "@mui/material";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
// import CountryStateCity from '../CountryStateCity.json';
// // import CountryStateCity from './CountryStateCity.json';

// const AddWriter = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     dob: null,
//     city: "",
//     state: "",
//     country: "",
//     gender: "",
//     photo: null,
//     status: false,
//     mobile: "",
//     email: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     mobile: "",
//   });

//   const handleInsert = async () => {
//     try {
//       const formDataToSend = new FormData();

//       formDataToSend.append("name", formData.name);
//       formDataToSend.append("dob", formData.dob);
//       formDataToSend.append("city", formData.city);
//       formDataToSend.append("state", formData.state);
//       formDataToSend.append("country", formData.country);
//       formDataToSend.append("gender", formData.gender);
//       formDataToSend.append("status", formData.status);
//       formDataToSend.append("mobile", formData.mobile);
//       formDataToSend.append("email", formData.email);

//       if (formData.photo instanceof File) {
//         formDataToSend.append('file', formData.photo, formData.photo.name);
//       }

//       const response = await fetch(
//         "https://bookingreadingapp.onrender.com/api/author/registerAuthor",
//         {
//           method: "POST",
//           body: formDataToSend,
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       console.log("Success:", response);
//       navigate("/authentication/sign-in");
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleValidation = () => {
//     let isValid = true;
//     let errors = { name: "", mobile: "" };

//     if (!/^[a-zA-Z\s]*$/.test(formData.name)) {
//       isValid = false;
//       errors.name = "Enter characters only";
//     }

//     if (!/^\d{10}$/.test(formData.mobile)) {
//       isValid = false;
//       errors.mobile = "Enter only numbers and exactly 10 digits";
//     }

//     setErrors(errors);
//     return isValid;
//   };

//   const handleSubmit = () => {
//     if (handleValidation()) {
//       handleInsert();
//     }
//   };

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <MDBox pt={6} pb={3}>
//         <Grid container spacing={6}>
//           <Grid item xs={12}>
//             <Card>
//               <MDBox
//                 mx={2}
//                 mt={-3}
//                 py={3}
//                 px={2}
//                 variant="gradient"
//                 bgColor="info"
//                 borderRadius="lg"
//                 coloredShadow="info"
//               >
//                 <MDTypography variant="h6" color="white">
//                   Add Writer
//                 </MDTypography>
//               </MDBox>
//               <MDBox p={3}>
//                 <form>
//                   <TextField
//                     autoFocus
//                     margin="dense"
//                     id="name"
//                     label="Name"
//                     type="text"
//                     fullWidth
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     error={!!errors.name}
//                     helperText={errors.name}
//                   />
//                   <LocalizationProvider dateAdapter={AdapterDateFns}>
//                     <DatePicker
//                       label="DOB"
//                       value={formData.dob}
//                       onChange={(newValue) =>
//                         setFormData({ ...formData, dob: newValue })
//                       }
//                       renderInput={(params) => <TextField fullWidth {...params} />}
//                     />
//                   </LocalizationProvider>
//                   <TextField
//                     margin="dense"
//                     id="city"
//                     label="City"
//                     select
//                     fullWidth
//                     value={formData.city}
//                     onChange={(e) =>
//                       setFormData({ ...formData, city: e.target.value })
//                     }
//                   >
//                     {CountryStateCity.cities.map((city) => (
//                       <MenuItem key={city} value={city}>
//                         {city}
//                       </MenuItem>
//                     ))}
//                   </TextField>
//                   <TextField
//                     margin="dense"
//                     id="state"
//                     label="State"
//                     select
//                     fullWidth
//                     value={formData.state}
//                     onChange={(e) =>
//                       setFormData({ ...formData, state: e.target.value })
//                     }
//                   >
//                     {CountryStateCity.states.map((state) => (
//                       <MenuItem key={state} value={state}>
//                         {state}
//                       </MenuItem>
//                     ))}
//                   </TextField>
//                   <TextField
//                     margin="dense"
//                     id="country"
//                     label="Country"
//                     select
//                     fullWidth
//                     value={formData.country}
//                     onChange={(e) =>
//                       setFormData({ ...formData, country: e.target.value })
//                     }
//                   >
//                     {CountryStateCity.countries.map((country) => (
//                       <MenuItem key={country} value={country}>
//                         {country}
//                       </MenuItem>
//                     ))}
//                   </TextField>
//                   <TextField
//                     margin="dense"
//                     id="gender"
//                     label="Gender"
//                     select
//                     fullWidth
//                     value={formData.gender}
//                     onChange={(e) =>
//                       setFormData({ ...formData, gender: e.target.value })
//                     }
//                   >
//                     <MenuItem value="Male">Male</MenuItem>
//                     <MenuItem value="Female">Female</MenuItem>
//                     <MenuItem value="Other">Other</MenuItem>
//                   </TextField>
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         checked={formData.status}
//                         onChange={(e) =>
//                           setFormData({ ...formData, status: e.target.checked })
//                         }
//                         color="primary"
//                       />
//                     }
//                     label="Status"
//                   />
//                   <TextField
//                     margin="dense"
//                     id="photo"
//                     label="Photo"
//                     type="file"
//                     fullWidth
//                     InputLabelProps={{ shrink: true }}
//                     onChange={(e) =>
//                       setFormData({ ...formData, photo: e.target.files[0] })
//                     }
//                   />
//                   <TextField
//                     margin="dense"
//                     id="mobile"
//                     label="Mobile"
//                     type="text"
//                     fullWidth
//                     value={formData.mobile}
//                     onChange={(e) =>
//                       setFormData({ ...formData, mobile: e.target.value })
//                     }
//                     error={!!errors.mobile}
//                     helperText={errors.mobile}
//                   />
//                   <TextField
//                     margin="dense"
//                     id="email"
//                     label="Email"
//                     type="email"
//                     fullWidth
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                   />
//                   <MDBox mt={3}>
//                     <Button onClick={() => navigate("/writer")}>Cancel</Button>
//                     <Button onClick={handleSubmit} color="primary">
//                       Ok
//                     </Button>
//                   </MDBox>
//                 </form>
//               </MDBox>
//             </Card>
//           </Grid>
//         </Grid>
//       </MDBox>
//     </DashboardLayout>
//   );
// };

// export default AddWriter;
