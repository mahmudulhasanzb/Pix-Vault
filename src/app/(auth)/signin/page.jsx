'use client';
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react' ;
import { FaGoogle } from 'react-icons/fa6';
import { toast } from 'react-toastify';


export default function SignInPage() {

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // BetterAuth
    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/"
    });
    
    if (error) {
      
      toast.error( "Failed to sign in");
    } else {
      toast.success("Signed in successfully");
    }
  };

  // Google signin
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
  provider: "google"
})
  }

  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={value => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return 'Please enter a valid email address';
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={value => {
            if (value.length < 8) {
              return 'Password must be at least 8 characters';
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Enter your account password
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button
            type="submit"
            className="bg-linear-to-r from-pink-500 to-purple-600 text-white hover:opacity-80 transition-all duration-200 cursor-pointer"
          >
            <Check />
            Submit
          </Button>
          <Button type="reset" className="text-purple-500 hover:text-purple-600" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
      <p className="text-center">OR</p>
      <Button
      onClick={handleGoogleSignIn}
        className="w-full hover:border-purple-500 hover:text-purple-500" variant='outline' >
        <FaGoogle/>
        Login with Google
      </Button>
    </Card>
  );
}
