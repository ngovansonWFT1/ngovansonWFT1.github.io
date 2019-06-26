let listSanPham = [
    {
        thumbnail: './img/1.jpg',
        title: 'SSD Crucial BX500 3D NAND SATA III 2.5 inch 120GB',
        maSp: 'CT120BX500SSD1',
        thuonghieu: 'Crucial',
        cost: 480000,
        amount: 30,
        status: 'còn hàng'
    },
    {
        thumbnail: './img/2.jpg',
        title: 'SSD Kingston UV500 3D-NAND SATA III 120GB',
        maSp: 'SUV500/120G',
        thuonghieu: 'Kingston',
        cost: 700000,
        amount: 30,
        status: 'còn hàng'
    },
    {
        thumbnail: './img/3.jpg',
        title: 'SSD Crucial MX500 3D NAND SATA III 2.5 inch 250GB',
        maSp: 'CT250MX500SSD1',
        thuonghieu: 'Crucial',
        cost: 1090000,
        amount: 20,
        status: 'còn hàng'
    },
    {
        thumbnail: './img/4.jpg',
        title: 'SSD Samsung 860 Evo 250GB 2.5-Inch SATA III',
        maSp: 'MZ-76E250BW',
        thuonghieu: 'Samsung',
        cost: 1099000,
        amount: 10,
        status: 'còn hàng'
    },
    {
        thumbnail: './img/5.jpg',
        title: 'SSD Kingston UV500 3D-NAND mSATA SATA III 240GB',
        maSp: 'SUV500MS/240G',
        thuonghieu: 'Kingston',
        cost: 1090000,
        amount: 40,
        status: 'còn hàng'
    },
];

document.getElementById('ten').addEventListener('click', function() {
    if(document.querySelector('thead tr th:nth-child(2)').getAttribute('class') == 'giam') {
        sapXepTheoTenTangDan();
        document.querySelector('thead tr th:nth-child(2)').setAttribute('class', 'tang');
        document.getElementById('ten').setAttribute('class', 'fas fa-sort-up');
    } else if(document.querySelector('thead tr th:nth-child(2)').getAttribute('class') == 'tang') {
        sapXepTheoTenGiamDan();
        document.querySelector('thead tr th:nth-child(2)').setAttribute('class', 'giam');
        document.getElementById('ten').setAttribute('class', 'fas fa-sort-down');
    }
});

document.getElementById('ma').addEventListener('click', function() {
    if(document.querySelector('thead tr th:nth-child(3)').getAttribute('class') == 'giam') {
        sapXepTheoMaSpTangDan();
        document.querySelector('thead tr th:nth-child(3)').setAttribute('class', 'tang');
        document.getElementById('ma').setAttribute('class', 'fas fa-sort-up');
    } else if(document.querySelector('thead tr th:nth-child(3)').getAttribute('class') == 'tang') {
        sapXepTheoMaSpGianDan();
        document.querySelector('thead tr th:nth-child(3)').setAttribute('class', 'giam');
        document.getElementById('ma').setAttribute('class', 'fas fa-sort-down');
    }
});

document.getElementById('thuonghieu').addEventListener('click', function() {
    if(document.querySelector('thead tr th:nth-child(4)').getAttribute('class') == 'giam') {
        sapXepTheoThuongHieuTangDan();
        document.querySelector('thead tr th:nth-child(4)').setAttribute('class', 'tang');
        document.getElementById('thuonghieu').setAttribute('class', 'fas fa-sort-up');
    } else if(document.querySelector('thead tr th:nth-child(4)').getAttribute('class') == 'tang') {
        sapXepTheoThuongHieuGiamDan();
        document.querySelector('thead tr th:nth-child(4)').setAttribute('class', 'giam');
        document.getElementById('thuonghieu').setAttribute('class', 'fas fa-sort-down');
    }
});

document.getElementById('gia').addEventListener('click', function() {
    if(document.querySelector('thead tr th:nth-child(5)').getAttribute('class') == 'giam') {
        sapXepTheoGiaTangDan();
        document.querySelector('thead tr th:nth-child(5)').setAttribute('class', 'tang');
        document.getElementById('gia').setAttribute('class', 'fas fa-sort-up');
    } else if(document.querySelector('thead tr th:nth-child(5)').getAttribute('class') == 'tang') {
        sapXepTheoGiaGiamDan();
        document.querySelector('thead tr th:nth-child(5)').setAttribute('class', 'giam');
        document.getElementById('gia').setAttribute('class', 'fas fa-sort-down');
    }
});

document.getElementById('soluong').addEventListener('click', function() {
    if(document.querySelector('thead tr th:nth-child(6)').getAttribute('class') == 'giam') {
        sapXepTheoSoLuongTangDan();
        document.querySelector('thead tr th:nth-child(6)').setAttribute('class', 'tang');
        document.getElementById('soluong').setAttribute('class', 'fas fa-sort-up');
    } else if(document.querySelector('thead tr th:nth-child(6)').getAttribute('class') == 'tang') {
        sapXepTheoSoLuongGiamDan();
        document.querySelector('thead tr th:nth-child(6)').setAttribute('class', 'giam');
        document.getElementById('soluong').setAttribute('class', 'fas fa-sort-down');
    }
});

function sapXepTheoTenTangDan() {
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
    themSanPhamVaoBang();

}

function sapXepTheoTenGiamDan() {
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
    themSanPhamVaoBang();

}

function sapXepTheoMaSpTangDan() {
    listSanPham.sort(function (a, b) {
        if (a.maSp.toLowerCase() > b.maSp.toLowerCase()) {
            return 1;
        } else if (a.maSp.toLowerCase() < b.maSp.toLowerCase()) {
            return -1;
        }
        else {
            return 0;
        }

    });
    document.getElementsByClassName('thongtinsanpham')[0].innerHTML = '<tr></tr>';
    themSanPhamVaoBang();
}

function sapXepTheoMaSpGianDan() {
    listSanPham.sort(function (a, b) {
        if (a.maSp.toLowerCase() > b.maSp.toLowerCase()) {
            return 1;
        } else if (a.maSp.toLowerCase() < b.maSp.toLowerCase()) {
            return -1;
        }
        else {
            return 0;
        }

    }).reverse();
    document.getElementsByClassName('thongtinsanpham')[0].innerHTML = '<tr></tr>';
    themSanPhamVaoBang();
}

function sapXepTheoThuongHieuTangDan() {
    listSanPham.sort(function (a, b) {
        if (a.thuonghieu.toLowerCase() > b.thuonghieu.toLowerCase()) {
            return 1;
        } else if (a.thuonghieu.toLowerCase() < b.thuonghieu.toLowerCase()) {
            return -1;
        }
        else {
            return 0;
        }

    });
    document.getElementsByClassName('thongtinsanpham')[0].innerHTML = '<tr></tr>';
    themSanPhamVaoBang();
}

function sapXepTheoThuongHieuGiamDan() {
    listSanPham.sort(function (a, b) {
        if (a.thuonghieu.toLowerCase() > b.thuonghieu.toLowerCase()) {
            return 1;
        } else if (a.thuonghieu.toLowerCase() < b.thuonghieu.toLowerCase()) {
            return -1;
        }
        else {
            return 0;
        }

    }).reverse();
    document.getElementsByClassName('thongtinsanpham')[0].innerHTML = '<tr></tr>';
    themSanPhamVaoBang();
}

function sapXepTheoGiaTangDan() {
    listSanPham.sort(function (a, b) {
        return a.cost - b.cost;

    });
    document.getElementsByClassName('thongtinsanpham')[0].innerHTML = '<tr></tr>';
    themSanPhamVaoBang();
}

function sapXepTheoGiaGiamDan() {
    listSanPham.sort(function (a, b) {
        return b.cost - a.cost;

    });
    document.getElementsByClassName('thongtinsanpham')[0].innerHTML = '<tr></tr>';
    themSanPhamVaoBang();
}

function sapXepTheoSoLuongTangDan() {
    listSanPham.sort(function (a, b) {
        return a.amount - b.amount;

    });
    document.getElementsByClassName('thongtinsanpham')[0].innerHTML = '<tr></tr>';
    themSanPhamVaoBang();
}

function sapXepTheoSoLuongGiamDan() {
    listSanPham.sort(function (a, b) {
        return b.amount - a.amount;

    });
    document.getElementsByClassName('thongtinsanpham')[0].innerHTML = '<tr></tr>';
    themSanPhamVaoBang();
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

function themSanPhamVaoBang() {
    for (let i = 0; i < listSanPham.length; i++) {
        let trNew = document.createElement('tr');
        document.getElementsByClassName('thongtinsanpham')[0].appendChild(trNew);

        trNew.appendChild(document.createElement('td')).innerHTML = '<img src = "' + listSanPham[i].thumbnail + '" alt ="ảnh sản phẩm"' + '/>';
        trNew.appendChild(document.createElement('td')).innerHTML = listSanPham[i].title;
        trNew.appendChild(document.createElement('td')).innerHTML = listSanPham[i].maSp;
        trNew.appendChild(document.createElement('td')).innerHTML = listSanPham[i].thuonghieu;
        trNew.appendChild(document.createElement('td')).innerHTML = formatNumber(listSanPham[i].cost);
        trNew.appendChild(document.createElement('td')).innerHTML = listSanPham[i].amount;
        trNew.appendChild(document.createElement('td')).innerHTML = listSanPham[i].status;

    }
}
themSanPhamVaoBang();