import ArtistDto from '../../artist/model/artist.dto';
import LocationDto from '../../location/model/location.dto';

export default interface PaintingDto {
  title: string;
  artist: ArtistDto;
  location: LocationDto;
  year: string;
  image: string;
}
