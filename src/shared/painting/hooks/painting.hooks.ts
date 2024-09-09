import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import paintingService from '../api/painting.service';
import { setTotalPages } from '../slice/page.slice';

function usePaintings(page: number) {
  const {
    data: queryData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ['paintings', page],
    queryFn: () => paintingService.getAll(page),
    select: (data) => data.data,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      console.log('Response to server is success!', queryData);
      dispatch(setTotalPages(queryData.totalPages));
    }
  }, [dispatch, isSuccess, queryData]);

  useEffect(() => {
    if (isError) {
      console.error('Response to server is error', error.message);
    }
  }, [isError, error]);

  return { data: queryData?.paintings, isLoading };
}

export default usePaintings;
