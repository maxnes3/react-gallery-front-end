import axios from 'axios';
import PaintingSearchDto from '../types/painting.search.dto';
import PaintingDto from '../types/painting.dto';

class PaintingService {
  private readonly URL = `${import.meta.env.VITE_SERVER_URL}painting`;

  private buildUrl(path: string): string {
    return `${this.URL}${path}`;
  }

  async getAll(): Promise<PaintingDto[]> {
    const response = await axios.get(this.buildUrl('/getall'));
    return response.data;
  }

  async searchByParams(dto: PaintingSearchDto): Promise<PaintingDto[]> {
    const searchParams = new URLSearchParams({
      artist: dto.artist ?? 'null',
      location: dto.location ?? 'null',
      fromYear: dto.fromYear ?? 'null',
      toYear: dto.toYear ?? 'null',
    });

    const response = await axios.get(this.buildUrl('/search'), {
      params: searchParams,
    });

    return response.data;
  }
}

const paintingService = new PaintingService();
export default paintingService;
