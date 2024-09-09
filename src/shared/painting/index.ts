export { default as paintingService } from './api/painting.service';
export { setCurrentPage, setTotalPages } from './slice/page.slice';
export type { default as PaintingDto } from './types/painting.dto';
export type { default as PaintingSearchDto } from './types/painting.search.dto';
export type { default as PageStateType } from './types/page.state.type';
export type { default as PaintingsResponseDto } from './types/painting.response.dto';
export { default as usePaintings } from './hooks/painting.hooks';
export { default as pageReducer } from './slice/page.slice';
