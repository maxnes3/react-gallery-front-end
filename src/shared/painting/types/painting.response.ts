import PaintingDto from './painting.dto';

export default interface PaintingsResponse {
  paintings: PaintingDto[];
  totalPages: number;
}
