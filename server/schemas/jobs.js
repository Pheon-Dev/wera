export default {
  name: "jobs",
  title: "Jobs",
  type: "document",
  fields: [
    {
      name: "jobID",
      title: "Job ID",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "dob",
      title: "DOB (dd/mm/yyyy)",
      type: "date",
    },
    {
      name: "idNumber",
      title: "ID No.",
      type: "string",
    },
    {
      name: "mobileNumber",
      title: "Mobile No.",
      type: "string",
    },
    {
      name: "gender",
      title: "Gender",
      type: "string",
    },
    {
      name: "age",
      title: "Age",
      type: "string",
    },
    {
      name: "postalAddress",
      title: "Postal Address",
      type: "string",
    },
    {
      name: "postalCode",
      title: "Postal Code",
      type: "string",
    },
    {
      name: "cityTown",
      title: "City/Town",
      type: "string",
    },
    {
      name: "residentialAddress",
      title: "Residential Address",
      type: "string",
    },
    {
      name: "emailAddress",
      title: "Email Address",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: 'collateral',
    //   title: 'Collaterals',
    //   type: 'array',
    //   of: [{ type: 'collateral' }],
    // },
  ],
};

