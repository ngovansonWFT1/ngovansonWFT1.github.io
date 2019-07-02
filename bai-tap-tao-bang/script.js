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

document.querySelector('thead tr th:nth-child(2)').addEventListener('click', function() {
    if(document.querySelector('thead tr th:nth-child(2)').getAttribute('class') == 'giam') {
        sortIncreaseByTitle();
        document.querySelector('thead tr th:nth-child(2)').setAttribute('class', 'tang');
        document.getElementById('ten').setAttribute('class', 'fas fa-sort-up');
    } else if(document.querySelector('thead tr th:nth-child(2)').getAttribute('class') == 'tang') {
        sortDecreaseByTitle();
        document.querySelector('thead tr th:nth-child(2)').setAttribute('class', 'giam');
        document.getElementById('ten').setAttribute('class', 'fas fa-sort-down');

    }
    for (let i =2; i <=6; i++) {
        if (i != 2) {
        document.querySelector('th:nth-child('+i+') i').setAttribute('class', 'fas fa-sort');
        }
    }
});

document.querySelector('thead tr th:nth-child(3)').addEventListener('click', function() {
    if(document.querySelector('thead tr th:nth-child(3)').getAttribute('class') == 'giam') {
        sortIncreaseByProductID();
        document.querySelector('thead tr th:nth-child(3)').setAttribute('class', 'tang');
        document.getElementById('ma').setAttribute('class', 'fas fa-sort-up');
    } else if(document.querySelector('thead tr th:nth-child(3)').getAttribute('class') == 'tang') {
        sortDecreaseByProductID();
        document.querySelector('thead tr th:nth-child(3)').setAttribute('class', 'giam');
        document.getElementById('ma').setAttribute('class', 'fas fa-sort-down');
    }
    for (let i =2; i <=6; i++) {
        if (i != 3) {
        document.querySelector('th:nth-child('+i+') i').setAttribute('class', 'fas fa-sort');
        }
    }
});

document.querySelector('thead tr th:nth-child(4)').addEventListener('click', function() {
    if(document.querySelector('thead tr th:nth-child(4)').getAttribute('class') == 'giam') {
        sortIncreaseByBrand();
        document.querySelector('thead tr th:nth-child(4)').setAttribute('class', 'tang');
        document.getElementById('brand').setAttribute('class', 'fas fa-sort-up');
    } else if(document.querySelector('thead tr th:nth-child(4)').getAttribute('class') == 'tang') {
        sortDecreaseByBrand();
        document.querySelector('thead tr th:nth-child(4)').setAttribute('class', 'giam');
        document.getElementById('brand').setAttribute('class', 'fas fa-sort-down');
    }
    for (let i =2; i <=6; i++) {
        if (i != 4) {
        document.querySelector('th:nth-child('+i+') i').setAttribute('class', 'fas fa-sort');
        }
    }
});

document.querySelector('thead tr th:nth-child(5)').addEventListener('click', function() {
    if(document.querySelector('thead tr th:nth-child(5)').getAttribute('class') == 'giam') {
        sortIncreaseByCost();
        document.querySelector('thead tr th:nth-child(5)').setAttribute('class', 'tang');
        document.getElementById('gia').setAttribute('class', 'fas fa-sort-up');
    } else if(document.querySelector('thead tr th:nth-child(5)').getAttribute('class') == 'tang') {
        sortDecreaseByCost();
        document.querySelector('thead tr th:nth-child(5)').setAttribute('class', 'giam');
        document.getElementById('gia').setAttribute('class', 'fas fa-sort-down');
    }
    for (let i =2; i <=6; i++) {
        if (i != 5) {
        document.querySelector('th:nth-child('+i+') i').setAttribute('class', 'fas fa-sort');
        }
    }
});

document.querySelector('thead tr th:nth-child(6)').addEventListener('click', function() {
    if(document.querySelector('thead tr th:nth-child(6)').getAttribute('class') == 'giam') {
        sortIncreaseByAmount();
        document.querySelector('thead tr th:nth-child(6)').setAttribute('class', 'tang');
        document.getElementById('soluong').setAttribute('class', 'fas fa-sort-up');
    } else if(document.querySelector('thead tr th:nth-child(6)').getAttribute('class') == 'tang') {
        sortDecreaseByAmount();
        document.querySelector('thead tr th:nth-child(6)').setAttribute('class', 'giam');
        document.getElementById('soluong').setAttribute('class', 'fas fa-sort-down');
    }
    for (let i =2; i <=5; i++) {
        document.querySelector('th:nth-child('+i+') i').setAttribute('class', 'fas fa-sort');
    }
    //document.querySelectorAll('th:nth-child(2),:nth-child(3),:nth-child(4),:nth-child(5) i').setAttribute('class', 'fas fa-sort');
});

function sortIncreaseByTitle() {
    listSanPham.sort(function (a, b) {
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
        } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        }
        else {
            return 0;
        }

    });
    document.getElementsByClassName('thongtinsanpham')[0].innerHTML = '<tr></tr>';
    importProductInTable();

}

function sortDecreaseByTitle() {
    listSanPham.sort(function (a, b) {
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
        } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        }
        else {
            return 0;
        }

    }).reverse();
    document.getElementsByClassName('thongtinsanpham')[0].innerHTML = '<tr></tr>';
    importProductInTable();

}

function sortIncreaseByProductID() {
    listSanPham.sort(function (a, b) {
        if (a.productID.toLowerCase() > b.productID.toLowerCase()) {
            return 1;
        } else if (a.productID.toLowerCase() < b.productID.toLowerCase()) {
            return -1;
        }
        else {
            return 0;
        }

    });
    document.getElementsByClassName('thongtinsanpham')[0].innerHTML = '<tr></tr>';
    importProductInTable();
}

function sortDecreaseByProductID() {
    listSanPham.sort(function (a, b) {
        if (a.productID.toLowerCase() > b.productID.toLowerCase()) {
            return 1;
        } else if (a.productID.toLowerCase() < b.productID.toLowerCase()) {
            return -1;
        }
        else {
            return 0;
        }

    }).reverse();
    document.getElementsByClassName('thongtinsanpham')[0].innerHTML = '<tr></tr>';
    importProductInTable();
}

function sortIncreaseByBrand() {
    listSanPham.sort(function (a, b) {
        if (a.brand.toLowerCase() > b.brand.toLowerCase()) {
            return 1;
        } else if (a.brand.toLowerCase() < b.brand.toLowerCase()) {
            return -1;
        }
        else {
            return 0;
        }

    });
    document.getElementsByClassName('thongtinsanpham')[0].innerHTML = '<tr></tr>';
    importProductInTable();
}

function sortDecreaseByBrand() {
    listSanPham.sort(function (a, b) {
        if (a.brand.toLowerCase() > b.brand.toLowerCase()) {
            return 1;
        } else if (a.brand.toLowerCase() < b.brand.toLowerCase()) {
            return -1;
        }
        else {
            return 0;
        }

    }).reverse();
    document.getElementsByClassName('thongtinsanpham')[0].innerHTML = '<tr></tr>';
    importProductInTable();
}

function sortIncreaseByCost() {
    listSanPham.sort(function (a, b) {
        return a.cost - b.cost;

    });
    document.getElementsByClassName('thongtinsanpham')[0].innerHTML = '<tr></tr>';
    importProductInTable();
}

function sortDecreaseByCost() {
    listSanPham.sort(function (a, b) {
        return b.cost - a.cost;

    });
    document.getElementsByClassName('thongtinsanpham')[0].innerHTML = '<tr></tr>';
    importProductInTable();
}

function sortIncreaseByAmount() {
    listSanPham.sort(function (a, b) {
        return a.amount - b.amount;

    });
    document.getElementsByClassName('thongtinsanpham')[0].innerHTML = '<tr></tr>';
    importProductInTable();
}

function sortDecreaseByAmount() {
    listSanPham.sort(function (a, b) {
        return b.amount - a.amount;

    });
    document.getElementsByClassName('thongtinsanpham')[0].innerHTML = '<tr></tr>';
    importProductInTable();
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

function importProductInTable() {
    for (let i = 0; i < listSanPham.length; i++) {
        let trNew = document.createElement('tr');
        document.getElementsByClassName('thongtinsanpham')[0].appendChild(trNew);

        trNew.appendChild(document.createElement('td')).innerHTML = '<img src = "' + listSanPham[i].thumbnail + '" alt ="ảnh sản phẩm"' + '/>';
        trNew.appendChild(document.createElement('td')).innerHTML = listSanPham[i].title;
        trNew.appendChild(document.createElement('td')).innerHTML = listSanPham[i].productID;
        trNew.appendChild(document.createElement('td')).innerHTML = listSanPham[i].brand;
        trNew.appendChild(document.createElement('td')).innerHTML = formatNumber(listSanPham[i].cost);
        trNew.appendChild(document.createElement('td')).innerHTML = listSanPham[i].amount;
        trNew.appendChild(document.createElement('td')).innerHTML = listSanPham[i].status;

    }
}
//importProductInTable();

function sumPrice(arr) {
    let sum = 0; 
    for (let i =0; i< arr.length; i++) {
        sum += arr[i].cost*arr[i].amount;
    }
    return sum;
}

document.getElementsByClassName('gia')[0].innerHTML = `${formatNumber(sumPrice(listSanPham))} VNĐ`;


function renderContent() {
    for(let i = 0; i < listSanPham.length; i++) {
        let strNew = document.createElement('tr');
        let content = '';
        content += `<td><img src="${listSanPham[i].thumbnail}"  alt= "ảnh sản phẩm"/></td>`;
        content += `<td>${listSanPham[i].title} </td>`;
        content += `<td>${listSanPham[i].productID} </td>`;
        content += `<td>${listSanPham[i].brand} </td>`;
        content += `<td>${formatNumber(listSanPham[i].cost)} </td>`;
        content += `<td>${listSanPham[i].amount} </td>`;
        content += `<td>${listSanPham[i].status} </td>`;
        strNew.innerHTML = content;
        document.getElementsByTagName('tbody')[0].appendChild(strNew);
    }
}
renderContent();
