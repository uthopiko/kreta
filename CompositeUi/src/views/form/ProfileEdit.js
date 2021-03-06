/*
 * This file is part of the Kreta package.
 *
 * (c) Beñat Espiña <benatespina@gmail.com>
 * (c) Gorka Laucirica <gorka.lauzirika@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

import Button from './../component/Button';
import Form from './../component/Form';
import FormActions from './../component/FormActions';
import FormInput from './../component/FormInput';
import FormInputFile from './../component/FormInputFile';
import {Row, RowColumn} from './../component/Grid';

const validate = (values) => {
  const errors = {},
    requiredFields = ['first_name', 'last_name', 'username'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  return errors;
};

@connect(state => ({initialValues: state.profile.profile}))
@reduxForm({form: 'profileEdit', validate})
class ProfileEdit extends React.Component {
  render() {
    const {handleSubmit} = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Row>
          <RowColumn>
            <Field component={FormInputFile} name="photo"/>
            <Field component={FormInput} label="First Name" name="first_name" tabIndex={2}/>
            <Field component={FormInput} label="Last Name" name="last_name" tabIndex={3}/>
            <Field component={FormInput} label="Username" name="username" tabIndex={4}/>
            <FormActions>
              <Button color="green" type="submit">Update</Button>
            </FormActions>
          </RowColumn>
        </Row>
      </Form>
    );
  }
}

export default ProfileEdit;
