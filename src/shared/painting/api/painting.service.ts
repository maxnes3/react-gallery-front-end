import axios from 'axios';
import PaintingSearchDto from '../types/painting.search.dto';
import PaintingsResponse from '../types/painting.response';

class PaintingService {
  private readonly URL = `${import.meta.env.VITE_SERVER_URL}/painting`;

  getAll(page: number = 1) {
    return axios.get<PaintingsResponse>(`${this.URL}/get`, {
      params: {
        page,
      },
    });
  }

  searchByParams(dto: PaintingSearchDto) {
    const searchParams = new URLSearchParams({
      artist: dto.artist ?? 'null',
      location: dto.location ?? 'null',
      fromYear: dto.fromYear?.toString() ?? 'null',
      toYear: dto.toYear?.toString() ?? 'null',
    });

    return axios.get<PaintingsResponse>(`${this.URL}/search`, {
      params: searchParams,
    });
  }
}

const paintingService = new PaintingService();
export default paintingService;
