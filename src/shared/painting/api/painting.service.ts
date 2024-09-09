import axios from 'axios';
import PaintingSearchDto from '../types/painting.search.dto';
import PaintingsResponseDto from '../types/painting.response.dto';

class PaintingService {
  private readonly URL = `${import.meta.env.VITE_SERVER_URL}/painting`;

  getAll(page: number = 1) {
    return axios.get<PaintingsResponseDto>(`${this.URL}/get`, {
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

    return axios.get<PaintingsResponseDto>(`${this.URL}/search`, {
      params: searchParams,
    });
  }
}

const paintingService = new PaintingService();
export default paintingService;
