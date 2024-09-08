import { useQuery } from '@tanstack/react-query';
import artistService from '../api/artist.service';

function useArtists() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['artists'],
    queryFn: artistService.getAll,
  });

  return { data, error, isLoading };
}

export default useArtists;
