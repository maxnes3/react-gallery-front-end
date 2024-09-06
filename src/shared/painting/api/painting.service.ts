import axios from 'axios';
import PaintingSearchDto from '../model/painting.search.dto';
import PaintingDto from '../model/painting.dto';

class PaintingService {
  // eslint-disable-next-line class-methods-use-this
  async getAll(): Promise<PaintingDto[]> {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/painting/get`,
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching all paintings:', error);
      throw error;
    }
  }

  // async searchByParams(dto: PaintingSearchDto): Promise<PaintingDto[]> {
  //   try {
  //     const searchParams = new URLSearchParams({
  //       artist: dto.artist ?? 'null',
  //       location: dto.location ?? 'null',
  //       fromYear: dto.fromYear?.toString() ?? 'null',
  //       toYear: dto.toYear?.toString() ?? 'null',
  //     });

  //     const response = await axios.get(this.buildUrl('/search'), {
  //       params: searchParams,
  //     });

  //     return response.data;
  //   } catch (error) {
  //     console.error('Error searching paintings by params:', error);
  //     throw error;
  //   }
  // }
}

const paintingService = new PaintingService();
export default paintingService;
