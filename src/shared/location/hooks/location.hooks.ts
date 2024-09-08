import { useQuery } from '@tanstack/react-query';
import locationService from '../api/location.service';

function useLocations() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['locations'],
    queryFn: locationService.getAll,
  });

  return { data, error, isLoading };
}

export default useLocations;
