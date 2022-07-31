import React from "react";
import { Form, Formik, Field } from "formik";
import { SCHEMA_TASK_NAME } from "../../../utils/schemaValidation";
import styles from "./TodoFormHard.module.scss";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
const TodoFormHard = (props) => {
  const form = document.getElementById("form-id");
  const { addTask } = props;
  return (
    <Formik
      initialValues={{ body: "" }}
      onSubmit={addTask}
    >
      <Form className={styles.formContainer} id="form-id">
        <Field name="body" />
        <div className={styles.addCross}>
          <AddBoxSharpIcon
          onClick={form.submit()}
            fontSiza="small"
          />
        </div>
      </Form>
    </Formik>
  );
};

export default TodoFormHard;
