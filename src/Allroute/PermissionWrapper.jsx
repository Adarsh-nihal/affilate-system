import React, { useEffect } from 'react';
import { retrieveUserDetails } from '../redux/authredux/middleware/localstorageconfig';
import { Navigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

const PermissionWrapper = ({ children }) => {
  const token = retrieveUserDetails('adminauth');
  const toast = useToast();

  // Log the token to check if it's being retrieved
  console.log("Token retrieved:", token);

  useEffect(() => {
    if (!token) {
      toast({
        position: 'top',
        title: "Please Login First",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }, [toast, token]);

  // If no token, redirect to login page
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PermissionWrapper;
