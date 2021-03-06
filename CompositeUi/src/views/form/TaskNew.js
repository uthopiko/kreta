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

import Form from './../component/Form';
import FormActions from './../component/FormActions';
import FormInput from './../component/FormInput';
import FormInputWysiwyg from './../component/FormInputWysiwyg';
import Button from './../component/Button';
import Selector from './../component/Selector';
import Thumbnail from './../component/Thumbnail';
import SelectorOption from './../component/SelectorOption';
import {Row, RowColumn} from './../component/Grid';

const validate = (values) => {
  const
    errors = {},
    requiredFields = ['title', 'project', 'assignee', 'priority'];

  requiredFields.forEach(field => {
    if (!values[field] || values[field] === '') {
      errors[field] = 'Required';
    }
  });

  return errors;
};

@connect(state => ({
  initialValues: {
    project: state.currentProject.project !== null ? state.currentProject.project.id : ''
  },
  projects: state.projects.projects
}))

@reduxForm({form: 'TaskNew', validate})
class TaskNew extends React.Component {
  getProjectOptions() {
    const
      defaultEl = [<SelectorOption key="project-empty" text="No project selected" value=""/>],
      optionsEl = this.props.projects.map(project => (
          <SelectorOption
            key={project.node.id}
            text={project.node.name}
            thumbnail={<Thumbnail image={null} text={project.node.name}/>}
            value={project.node.id}
          />
        )
      );

    return [...defaultEl, ...optionsEl];
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Row>
          <RowColumn>
            <Field component={Selector} name="project" tabIndex={1}>
              {this.getProjectOptions()}
            </Field>
            <Field autoFocus component={FormInput} label="Title" name="title" tabIndex={2}/>
             <div className="task-new__description">
               <Field component={FormInputWysiwyg} label="Description" name="description" tabIndex={3}/>
             </div>
          </RowColumn>
        </Row>
        <Row collapse>
          <RowColumn large={4} medium={6}>
            <Field component={Selector} name="assignee" tabIndex={4}>
              <SelectorOption
                text="Unassigned"
                thumbnail={<Thumbnail image={null} text=""/>}
                value=""
              />
              <SelectorOption
                text="User 1"
                thumbnail={<Thumbnail image={null} text="User 1"/>}
                value="1"
              />
            </Field>
          </RowColumn>
          <RowColumn large={4} medium={6}>
            <Field component={Selector} name="priority" tabIndex={5}>
              <SelectorOption text="Select one..." value=""/>
              <SelectorOption text="High" value="1"/>
            </Field>
          </RowColumn>
        </Row>
        <Row>
          <RowColumn>
            <FormActions>
              <Button color="green" tabIndex={6} type="submit">Done</Button>
            </FormActions>
          </RowColumn>
        </Row>
      </Form>
    );
  }
}

export default TaskNew;
