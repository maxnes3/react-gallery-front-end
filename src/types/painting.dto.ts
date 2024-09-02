import ArtistDto from './artist.dto';
import LocationDto from './location.dto';

export default interface PaintingDto {
  title: string;
  artist: ArtistDto;
  location: LocationDto;
  year: string;
}
