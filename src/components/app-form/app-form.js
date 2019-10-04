import React from "react";
import FormContainer from "./components/form-container";
import FormTitle from "./components/form-title";
import FormInput from "./components/form-input";

const AppForm = ({
  // eslint-disable-line
  formType,
  formTitle,
  formPlaceholder,
  formValue,
  formMin,
  formDisabled,
  onFormValueChange,
  ...others
}) => (
  <FormContainer {...others}>
    <FormTitle>
      {/* eslint-disable-line */}
      {formTitle}
    </FormTitle>
    <FormInput
      // eslint-disable-line
      type={formType}
      placeholder={formPlaceholder}
      value={formValue}
      min={formMin}
      disabled={formDisabled}
      onChange={onFormValueChange}
    />
  </FormContainer>
);

export default AppForm;
