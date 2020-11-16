const filters = {
  in: (value) => {
    const arrayOptions = (value.indexOf(',') !== -1) ? value.split(',') : [value]
    return {$in: arrayOptions}
  },
  nin: (value) => {
    const arrayOptions = (value.indexOf(',') !== -1) ? value.split(',') : [value]
    return {$in: arrayOptions}
  },
  is: (value) => {
    return value
  },
  gt: (value) => {
    return value
  },
  gte: (value) => {
    return value
  },
  ne: (value) => {
    return value
  },
  lte: (value) => {
    return value
  },
  lt: (value) => {
    return value
  }
}

function setFilterFormat (filter) {
  const availableFilters = Object.keys(filters)
  const fieldNames = Object.keys(filter)
  for (const field of fieldNames) {
    const [filterType, value] = (filter[field].indexOf('|') !== -1) ? filter[field].split('|') : ['is', filter[field]]
    if (availableFilters.includes(filterType)) filter[field] = filters[filterType](value)
    else if (filterType === 'between') {
      delete filter[field]
      const [minor, mayor] = (value.indexOf(',') !== 1) ? value.split(','): [value]
      if (mayor) filter.$or = [filters.gte(minor), filter.lte(mayor)]
      else filter[field] = filters.gte(minor)
    } else delete filter[field]
  }
  return filter
}

export {setFilterFormat}
