import axios from 'axios';
import ArtistDto from '../model/artist.dto';
import UrlUtils from '../../url.utils';

class ArtistService {
  private readonly URL = '/artist';

  async getAll(): Promise<ArtistDto[]> {
    const response = await axios.get(UrlUtils.buildUrl(this.URL, '/get'));
    return response.data;
  }
}

const artistService = new ArtistService();
export default artistService;
