import axios from 'axios';
import PaintingSearchDto from '../model/painting.search.dto';
import PaintingDto from '../model/painting.dto';
import UrlUtils from '../../url.utils';

class PaintingService {
  private readonly URL = '/painting';

  async getAll(): Promise<PaintingDto[]> {
    const response = await axios.get(UrlUtils.buildUrl(this.URL, '/get'));
    return response.data;
  }

  async searchByParams(dto: PaintingSearchDto): Promise<PaintingDto[]> {
    const searchParams = new URLSearchParams({
      artist: dto.artist ?? 'null',
      location: dto.location ?? 'null',
      fromYear: dto.fromYear ?? 'null',
      toYear: dto.toYear ?? 'null',
    });

    const response = await axios.get(UrlUtils.buildUrl(this.URL, '/search'), {
      params: searchParams,
    });

    return response.data;
  }
}

const paintingService = new PaintingService();
export default paintingService;
