
function loadDoc() {
    let xhttp = new XMLHttpRequest();
    let str = '';
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        str += this.responseText;
      }
    };
    xhttp.open("GET", "https://ngovansonwft1.github.io/listProduct.JSON", true);
    xhttp.send();
  }
  let listProduct = JSON.parse(loadDoc());
  console.log(listProduct);
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

function renderContent() {
    let content = '';
    for(let i = 0; i < listSanPham.length; i++) {

        content += `<tr> <td><img src="${listSanPham[i].thumbnail}"  alt= "${listSanPham[i].title}"/></td>`;
        content += `<td>${listSanPham[i].title} </td>`;
        content += `<td>${listSanPham[i].productID} </td>`;
        content += `<td>${listSanPham[i].brand} </td>`;
        content += `<td>${formatNumber(listSanPham[i].cost)} </td>`;
        content += `<td>${listSanPham[i].amount} </td>`;
        content += `<td>${listSanPham[i].status} </td> </tr>`;
        
    }
    $('tbody').html(content);
}

renderContent();





function sortColumn(thElement) {
    $('i.fa-sort-up').removeClass('fa-sort-up').addClass('fa-sort');
    $('i.fa-sort-down').removeClass('fa-sort-down').addClass('fa-sort');

    if ($(thElement).attr('data-order') === 'desc') {
        $(thElement).attr('data-order','asc');
        sortAzZa($(thElement).attr('data-column'),$(thElement).attr('data-order'));
        $(thElement).children().removeClass('fa-sort').addClass('fa-sort-up');
        $(thElement).children().removeClass('fa-sort-down');
        renderContent();

    } else {
        $(thElement).attr('data-order','desc');
        sortAzZa($(thElement).attr('data-column'),$(thElement).attr('data-order'));
        $(thElement).children().removeClass('fa-sort-up').addClass('fa-sort-down');
        renderContent();
    }

}
function sortAzZa(column, data) {
    listSanPham.sort(function(a,b) {
        let x = a[column];
        let y = b[column];
        if(typeof a[column] == 'string') x = a[column].toLowerCase();
        if(typeof b[column] == 'string') y = b[column].toLowerCase();
        if(x > y) return 1;
        if (x < y) return -1;
        return 0;

    });
    if (data == 'asc') return listSanPham;
    else return listSanPham.reverse();
}