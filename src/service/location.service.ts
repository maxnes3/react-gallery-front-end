import axios from 'axios';
import LocationDto from '../types/location.dto';
import UrlUtils from './url.utils';

class LocationService {
  private readonly URL = '/location';

  async getAll(): Promise<LocationDto[]> {
    const response = await axios.get(UrlUtils.buildUrl(this.URL, '/get'));
    return response.data;
  }
}

const locationService = new LocationService();
export default locationService;
