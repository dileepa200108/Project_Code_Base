import React from 'react';
import { Form, Input, Button } from '@nextui-org/react';
import { createNewUser } from '../../api/services/user_services'; // Import your createNewUser function
import { toast } from 'react-toastify';

export default function App() {
  const [action, setAction] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    let data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const response = await createNewUser(data.username, data.email, data.age);
      toast.success('User Created Successfully.Yaaaay!');
    } catch (err) {
      if (err.response && err.response.status === 400) {
        toast.error('User with this email already exists.');
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-100'>
      <h1 className='text-2xl font-f1 mb-6'>Add New User</h1>
      <h1>Hello!</h1>
      <Form
        className='w-full max-w-xs flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md font-f1'
        validationBehavior='native'
        onReset={() => setAction('reset')}
        onSubmit={handleSubmit}
      >
        <Input
          isRequired
          errorMessage='Please enter a valid username'
          label='Username'
          labelPlacement='outside'
          name='username'
          placeholder='Enter your username'
          type='text'
        />

        <Input
          isRequired
          errorMessage='Please enter a valid email'
          label='Email'
          labelPlacement='outside'
          name='email'
          placeholder='Enter your email'
          type='email'
        />

        <Input
          isRequired
          errorMessage='Please enter a valid age'
          label='Age'
          labelPlacement='outside'
          name='age'
          placeholder='Enter your age'
          type='number'
          min='1'
        />

        <div className='flex gap-2'>
          <Button color='primary' type='submit' isDisabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
          <Button type='reset' variant='flat'>
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
}
