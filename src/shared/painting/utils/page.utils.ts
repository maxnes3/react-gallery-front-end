class PageManager {
  static getCurrentPageFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    return page ? parseInt(page, 10) : 1;
  }

  static setPageInUrl(page: number) {
    const params = new URLSearchParams(window.location.search);
    params.set('page', page.toString());
    window.history.pushState(
      {},
      '',
      `${window.location.pathname}?${params.toString()}`,
    );
  }
}

export default PageManager;
