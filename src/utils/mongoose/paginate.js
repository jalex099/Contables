function paginateOptions ({filter, page, limit}) {
  const customLabels = {
    totalDocs: 'total_items',
    docs: 'items',
    limit: 'limit',
    page: 'current_page',
    nextPage: 'next_page',
    prevPage: 'prev_page',
    totalPages: 'page_count',
    pagingCounter: 'page',
    meta: 'paginator'
  }
  return {
    filter: filter || {},
    options: {
      page: parseInt(page) || 1,
      limit: parseInt(limit) || 20,
      customLabels
    }
  }
}

export { paginateOptions }
