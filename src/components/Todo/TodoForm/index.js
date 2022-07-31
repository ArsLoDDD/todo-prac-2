import React from "react";
import { Form, Formik, Field } from "formik";
import { SCHEMA_TASK_NAME } from "../../../utils/schemaValidation";
import styles from "./TodoForm.module.scss";

const TodoForm = (props) => {
  const { addTask } = props;
  return (
    <Formik
      initialValues={{ body: "" }}
      onSubmit={addTask}
      validationSchema={SCHEMA_TASK_NAME}
    >
      <Form className={styles.formContainer}>
        <Field name="body" placeholder="Enter new task" />
        <input type="submit" value="add" />
      </Form>
    </Formik>
    
  );
};

export default TodoForm;
