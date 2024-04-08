import * as Yup from "yup";

const createSystemValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});

export default createSystemValidation;
