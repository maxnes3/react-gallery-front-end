import { useDispatch, useSelector } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';
import { PageStateType, setCurrentPage } from '../../../shared/painting';
import '../styles/_pagination.module.scss';

function Pagination() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: PageStateType) => state.page.current);
  const totalPages = useSelector((state: PageStateType) => state.page.total);
  const queryClient = useQueryClient();

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) {
      console.error('Page out of range!');
      return;
    }
    dispatch(setCurrentPage(newPage));
    queryClient.invalidateQueries({ queryKey: ['paintings', newPage] });
  };

  const renderPageNumbers = () => {
    const pageNumbers: string[] = [];
    const middlePages = [currentPage - 1, currentPage, currentPage + 1];

    for (let i = 1; i <= totalPages; ++i) {
      const isMiddlePage = middlePages.includes(i);
      const isFirstPage = i === 1;
      const isLastPage = i === totalPages;

      if (!isMiddlePage && !(isFirstPage || isLastPage)) {
        if (pageNumbers[pageNumbers.length - 1] !== '...') {
          pageNumbers.push('...');
        }
      } else {
        pageNumbers.push(i.toString());
      }
    }

    return pageNumbers.map((page) => {
      if (page === '...') {
        return (
          <span key={page} className="dots">
            ...
          </span>
        );
      }
      return (
        <button
          key={page}
          type="button"
          onClick={() => handlePageChange(Number(page))}
          className={`page ${Number(page) === currentPage ? 'active' : ''}`}
        >
          {page}
        </button>
      );
    });
  };

  return (
    <div className="pagination">
      <button
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        className="arrow invert"
      >
        <img src="/arrow.page.icon.svg" alt="arrow.page" />
      </button>
      {totalPages > 1 && renderPageNumbers()}
      <button
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        className="arrow"
      >
        <img src="/arrow.page.icon.svg" alt="arrow.page" />
      </button>
    </div>
  );
}

export default Pagination;
