export const getPagesCut = ({pagesCount, pagesCutCount, currentPage}) => {
    const ceilling = Math.ceil(pagesCutCount / 2);
    const floor = Math.floor(pagesCutCount / 2);

    if(pagesCount < pagesCutCount) {
      return {start: 1, end: pagesCount + 1}
    } else if (currentPage >= 1 && currentPage <= ceilling) {
      return {start: 1, end: pagesCutCount + 1}
    } else if (currentPage + floor >= pagesCount) {
      return {start: pagesCount - pagesCutCount + 1, end: pagesCount + 1}
    } else {
      return {start: currentPage - ceilling + 1, end: currentPage + floor + 1}
    }
  }