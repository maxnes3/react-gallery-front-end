import axios from 'axios';
import ArtistDto from '../types/artist.dto';

class ArtistService {
  private readonly URL = `${import.meta.env.VITE_SERVER_URL}/artist`;

  getAll() {
    return axios.get<ArtistDto[]>(`${this.URL}/get`);
  }
}

const artistService = new ArtistService();
export default artistService;
