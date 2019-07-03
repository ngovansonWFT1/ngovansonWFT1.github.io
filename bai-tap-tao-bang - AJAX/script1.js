
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("ten").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "https://ngovansonwft1.github.io/listProduct.JSON", true);
    xhttp.send();
  }


function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

function renderContent() {
    let content = '';
    for(let i = 0; i < listProduct.length; i++) {

        content += `<tr> <td><img src="${listProduct[i].thumbnail}"  alt= "${listProduct[i].title}"/></td>`;
        content += `<td>${listProduct[i].title} </td>`;
        content += `<td>${listProduct[i].productID} </td>`;
        content += `<td>${listProduct[i].brand} </td>`;
        content += `<td>${formatNumber(listProduct[i].cost)} </td>`;
        content += `<td>${listProduct[i].amount} </td>`;
        content += `<td>${listProduct[i].status} </td> </tr>`;
        
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
    listProduct.sort(function(a,b) {
        let x = a[column];
        let y = b[column];
        if(typeof a[column] == 'string') x = a[column].toLowerCase();
        if(typeof b[column] == 'string') y = b[column].toLowerCase();
        if(x > y) return 1;
        if (x < y) return -1;
        return 0;

    });
    if (data == 'asc') return listProduct;
    else return listProduct.reverse();
}