// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { TextField, Button } from "@mui/material";
// import Select from "react-select";
// import ReactFlagsSelect from "react-flags-select";
// import { DatePicker } from "@mui/lab";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";

// const opportunityTypeOptions = [
//   { value: "internship", label: "Internship" },
//   { value: "scholarship", label: "Scholarship" },
// ];

// const OpportunityForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [selectedCountry, setSelectedCountry] = useState(null);

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="opportunity-form-container">
//       <form onSubmit={handleSubmit(onSubmit)} className="opportunity-form">

//         <TextField
//           {...register("organizationName", { required: true })}
//           label="Organization Name"
//           error={errors.organizationName}
//           helperText={
//             errors.organizationName && "Organization Name is required"
//           }
//         />

//         <Select
//           {...register("opportunityType", { required: true })}
//           options={opportunityTypeOptions}
//           placeholder="Opportunity Type"
//         />

//         <TextField
//           {...register("opportunityTitle", { required: true })}
//           label="Opportunity Title"
//           error={errors.opportunityTitle}
//           helperText={
//             errors.opportunityTitle && "Opportunity Title is required"
//           }
//         />

//         <TextField
//           {...register("description", { required: true })}
//           label="Description"
//           error={errors.description}
//           helperText={errors.description && "Description is required"}
//         />

//         <ReactFlagsSelect
//           {...register("location", { required: true })}
//           searchable
//           placeholder="Select Location"
//           selected={selectedCountry}
//           onSelect={(code) => setSelectedCountry(code)}
//         />

//         <TextField
//           {...register("duration", { required: true })}
//           label="Duration (in days)"
//           type="number"
//           error={errors.duration}
//           helperText={errors.duration && "Duration is required"}
//         />

//         <Button type="submit">Submit</Button>
//       </form>
//     </div>
//   );
// };

// export default OpportunityForm;

import { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "react-select";

import ReactFlagsSelect from "react-flags-select";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

// import "@mui/lab/DatePicker";
// import "@mui/lab/AdapterDateFns";
// import "@mui/lab/AdapterMoment";
// import "@mui/lab/AdapterLuxon";
// import "@mui/lab/DateRangePicker";
// import "@mui/lab/PickersDay";
// import "@mui/lab/ScheduleDatePicker";
// import "@mui/lab/ScheduleDay";

const opportunityTypeOptions = [
  { value: "internship", label: "Internship" },
  { value: "fellowship", label: "Fellowship" },
  { value: "scholarship", label: "Scholarship" },
];

const OpportunityForm = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="opportunity-form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="opportunity-form">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            {...register("deadline", { required: true })}
            label="Deadline"
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <TextField
          {...register("organizationName", { required: true })}
          label="Organization Name"
          error={errors.organizationName}
          helperText={
            errors.organizationName && "Organization Name is required"
          }
        />

        <Select
          {...register("opportunityType", { required: true })}
          options={opportunityTypeOptions}
          placeholder="Opportunity Type"
        />

        <TextField
          {...register("opportunityTitle", { required: true })}
          label="Opportunity Title"
          error={errors.opportunityTitle}
          helperText={
            errors.opportunityTitle && "Opportunity Title is required"
          }
        />

        <TextField
          {...register("description", { required: true })}
          label="Description"
          error={errors.description}
          helperText={errors.description && "Description is required"}
        />

        <ReactFlagsSelect
          {...register("location", { required: true })}
          searchable
          placeholder="Select Location"
          selected={selectedCountry}
          onSelect={(code) => setSelectedCountry(code)}
        />

        <TextField
          {...register("duration", { required: true })}
          label="Duration (in days)"
          type="number"
          error={errors.duration}
          helperText={errors.duration && "Duration is required"}
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default OpportunityForm;
