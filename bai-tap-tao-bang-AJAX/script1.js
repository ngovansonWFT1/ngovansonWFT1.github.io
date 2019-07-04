let listSanPham = [];
$.ajax({
    url: 'https://ngovansonwft1.github.io/listProduct.JSON',
    type: 'get',
    dataType: 'json',
}).done(function (data) {
    listSanPham = data;
    renderContent();    
});


function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function renderContent() {
    let content = '';
    for (let i = 0; i < listSanPham.length; i++) {

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

function sortAzZa(column, data) {
    console.log('before',listSanPham)
    listSanPham.sort(function (a, b) {
        let x = a[column];
        let y = b[column];
        if (typeof a[column] == 'string')  {x = a[column].toLowerCase()} ;
        if (typeof b[column] == 'string')  {y = b[column].toLowerCase()};
        if (x > y) return 1;
        if (x < y) return -1;
        return 0;

    });
    console.log('after',listSanPham)
    if (data == 'asc') return listSanPham;
    else return listSanPham.reverse();
    
}

function sortColumn(thElement) {
  $('i.fa-sort-up').removeClass('fa-sort-up').addClass('fa-sort');
  $('i.fa-sort-down').removeClass('fa-sort-down').addClass('fa-sort');

  if ($(thElement).attr('data-order') === 'desc') {
    $(thElement).attr('data-order', 'asc');
    sortAzZa($(thElement).attr('data-column'), $(thElement).attr('data-order'));
    $(thElement).children().removeClass('fa-sort').addClass('fa-sort-up');
    $(thElement).children().removeClass('fa-sort-down');


  } else {
    $(thElement).attr('data-order', 'desc');
    sortAzZa($(thElement).attr('data-column'), $(thElement).attr('data-order'));
    $(thElement).children().removeClass('fa-sort-up').addClass('fa-sort-down');

  }
renderContent();
}


function sumPrice(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].cost * arr[i].amount;
    }
    return sum;
}

document.getElementsByClassName('gia')[0].innerHTML = `${formatNumber(sumPrice(listSanPham))} VNĐ`;