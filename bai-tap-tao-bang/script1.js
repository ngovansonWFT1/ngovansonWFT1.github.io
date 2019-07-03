let listSanPham = [
    {
        thumbnail: './img/1.jpg',
        title: 'SSD Crucial BX500 3D NAND SATA III 2.5 inch 120GB',
        productID: 'CT120BX500SSD1',
        brand: 'Crucial',
        cost: 580000,
        amount: 30,
        status: 'còn hàng'
    },
    {
        thumbnail: './img/2.jpg',
        title: 'SSD Kingston UV500 3D-NAND SATA III 120GB',
        productID: 'SUV500/120G',
        brand: 'Kingston',
        cost: 700000,
        amount: 30,
        status: 'còn hàng'
    },
    {
        thumbnail: './img/3.jpg',
        title: 'SSD Crucial MX500 3D NAND SATA III 2.5 inch 250GB',
        productID: 'CT250MX500SSD1',
        brand: 'Crucial',
        cost: 1090000,
        amount: 20,
        status: 'còn hàng'
    },
    {
        thumbnail: './img/4.jpg',
        title: 'SSD Samsung 860 Evo 250GB 2.5-Inch SATA III',
        productID: 'MZ-76E250BW',
        brand: 'Samsung',
        cost: 1099000,
        amount: 10,
        status: 'còn hàng'
    },
    {
        thumbnail: './img/5.jpg',
        title: 'SSD Kingston UV500 3D-NAND mSATA SATA III 240GB',
        productID: 'SUV500MS/240G',
        brand: 'Kingston',
        cost: 1090000,
        amount: 40,
        status: 'còn hàng'
    },
];


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