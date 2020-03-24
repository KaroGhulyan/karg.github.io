//Render Table Elements
const renderTableElement = (data, pageNumber) => {
    calculateTotal();
    // Update totalPages after render elements
    totalPages = Math.ceil(data.length / itemsPerPage);
    // Update pagination after render elements
    renderPagination(page);
    const root = document.querySelector('#root');
    if (data.length !== 0) {
      let template = '';
      let count = itemsPerPage;
      let filteredData = [];
      data.forEach(element => {
        if (
          filterCategories.find(item => item.name === element.category).status ===
            true ||
          filterCategories.filter(item => item.status === false).length === 5
        ) {
          filteredData.push(element);
        }
      });
      if (data.length === filteredData) {
        console.log('GOOD')
      }
      filteredData
        .slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage)
        .forEach(element => {
          if (count === 0) {
            return;
          }
          count--;
          template += `
                         <tr class="shadow-s