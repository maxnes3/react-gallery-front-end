import { useQuery } from '@tanstack/react-query';
import paintingService from '../api/painting.service';

function usePaintings(page: number) {
  const { data, error, isLoading } = useQuery({
    queryKey: ['paintings'],
    queryFn: () => paintingService.getAll(page),
  });

  return { data, error, isLoading };
}

export default usePaintings;
