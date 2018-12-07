export function getStudentsList(state) {
  const { studentDetails, filterNames, sortNames } = state
  const { isFiltered, filteredList } = filterNames
  const { isSorted, sortedList } = sortNames
  if (isFiltered) {
    if (isSorted) {
      return filteredList.filter(o => !sortedList.find(o2 => o.id === o2.id))
    } else {
      return filteredList.map(a => a)
    }
  } else if (isSorted) {
    if (isFiltered) {
      return filteredList.filter(o => !sortedList.find(o2 => o.id === o2.id))
    } else {
      return sortedList.map(a => a)
    }
  } else {
    return studentDetails.data.map(a => a)
  }
}

export function getList(isFiltered, filteredList, isSorted, sortedList, studentDetails) {
  if (isFiltered) {
    if (isSorted) {
      return sortedList.map(a => a)
    } else {
      return filteredList.map(a => a)
    }
  } else if (isSorted) {
    if (isFiltered) {
      return filteredList.map(a => a)
    } else {
      return sortedList.map(a => a)
    }
  } else {
    return studentDetails.map(a => a)
  }
}

export function findTotalMarks(marks) {
  return Object.values(marks).reduce((a, b) => a + b, 0)
}