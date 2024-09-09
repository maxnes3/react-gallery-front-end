import PaintingDto from './painting.dto';

export default interface PaintingsResponseDto {
  paintings: PaintingDto[];
  totalPages: number;
}
