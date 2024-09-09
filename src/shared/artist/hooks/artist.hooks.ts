import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import artistService from '../api/artist.service';

function useArtists() {
  const {
    data: queryData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ['artists'],
    queryFn: artistService.getAll,
    select: (data) => data.data,
  });

  useEffect(() => {
    if (isSuccess) {
      console.log('Response to server is success!', queryData);
    }
  }, [isSuccess, queryData]);

  useEffect(() => {
    if (isError) {
      console.error('Response to server is error', error.message);
    }
  }, [isError, error]);

  return { queryData, isLoading };
}

export default useArtists;
