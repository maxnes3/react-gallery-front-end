import axios from 'axios';
import LocationDto from '../types/location.dto';

class LocationService {
  private readonly URL = `${import.meta.env.VITE_SERVER_URL}/location`;

  getAll() {
    return axios.get<LocationDto[]>(`${this.URL}/get`);
  }
}

const locationService = new LocationService();
export default locationService;
