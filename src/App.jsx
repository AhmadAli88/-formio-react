import React, { useState } from 'react';
import { FormBuilder, Form } from '@formio/react';

const App = () => {
  // Initial form schema
  const initialSchema = {
    components: [
      {
        type: 'textfield', // Field type
        key: 'firstName', // Unique field identifier
        label: 'First Name', // Label for the field
        placeholder: 'Enter your first name',
        input: true, // Indicates an input field
      },
      {
        type: 'textfield',
        key: 'lastName',
        label: 'Last Name',
        placeholder: 'Enter your last name',
        input: true,
      },
      {
        type: 'email',
        key: 'email',
        label: 'Email',
        placeholder: 'Enter your email address',
        input: true,
        validate: {
          required: true, // Marks this field as required
        },
      },
    ],
  };

  // State for managing the schema
  const [formSchema, setFormSchema] = useState(initialSchema);

  // State to toggle between builder and preview modes
  const [isBuilderMode, setIsBuilderMode] = useState(true);

  // Handle schema changes
  const onChange = (schema) => {
    setFormSchema(schema);
    console.log('Updated Form Schema:', schema);
  };

  // Handle form submission
  const onSubmit = (submission) => {
    console.log('Form Submission:', submission);
    alert(`Form Submitted: ${JSON.stringify(submission.data)}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>React Form Builder & Renderer</h1>
      <button onClick={() => setIsBuilderMode(!isBuilderMode)} style={{ marginBottom: '20px' }}>
        {isBuilderMode ? 'Switch to Render Mode' : 'Switch to Builder Mode'}
      </button>

      {/* Render the Form Builder or Form */}
      {isBuilderMode ? (
        <div>
          <h2>Form Builder</h2>
          <FormBuilder
            form={formSchema} // Pass the schema
            onChange={onChange} // Handle schema updates
          />
        </div>
      ) : (
        <div>
          <h2>Preview Form</h2>
          <Form
            form={formSchema} // Pass the schema to render
            onSubmit={onSubmit} // Handle form submissions
          />
        </div>
      )}
    </div>
  );
};

export default App;
