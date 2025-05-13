
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '@/components/AuthForm';
import { toast } from '@/components/ui/use-toast';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (data: { email: string; password: string }) => {
    console.log('Login submitted:', data);
    
    // Simulating successful login
    toast({
      title: "Login successful",
      description: "Welcome back to DigiCertify!",
    });
    
    // Redirect to dashboard after successful login
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="absolute top-4 left-4">
        <Link to="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-digicertify-primary dark:hover:text-digicertify-secondary flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          Back to Home
        </Link>
      </div>
      
      <AuthForm 
        onLogin={handleLogin}
        defaultTab="login"
      />
      
      <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>Don't have an account? <Link to="/register" className="text-digicertify-primary dark:text-digicertify-secondary hover:underline">Register here</Link></p>
      </div>
    </div>
  );
};

export default Login;
