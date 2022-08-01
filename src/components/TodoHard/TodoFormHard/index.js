import React from "react";
import { Form, Formik, Field } from "formik";
import { SCHEMA_TASK_NAME } from "../../../utils/schemaValidation";
import styles from "./TodoFormHard.module.scss";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
const TodoFormHard = (props) => {
  const { addTask } = props;
  return (
    <Formik initialValues={{ body: "" }} onSubmit={addTask}>
      <Form className={styles.formContainer} id="form-id">
        <Field name="body" />
        <button type="submit" className={styles.addCross}>
          <AddBoxSharpIcon/>
        </button>
        
      </Form>
    </Formik>
  );
};

export default TodoFormHard;
