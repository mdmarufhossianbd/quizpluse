// Hooks/useAlluserdata.js

'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const UseAlluserdata = () => {
  const { data: allUser, refetch, isLoading, isError, error } = useQuery({
    queryKey: ['allUser'],
    queryFn: async () => {
      const res = await axios.get(`/api/v1/user`);
      return res.data;
    },
    onError: (error) => {
      console.error('Error fetching users:', error);
    }
  });

  return [allUser, refetch, isLoading, isError, error];
};

export default UseAlluserdata;
