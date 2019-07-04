$.ajax({
    url: 'https://ngovansonwft1.github.io/listProduct.JSON',
    type: 'get',
    dataType: 'json',
}).done(function (listSanPham) {
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

    renderContent();


    $($('th')[1]).click(function sortColumn() {
        $('i.fa-sort-up').removeClass('fa-sort-up').addClass('fa-sort');
        $('i.fa-sort-down').removeClass('fa-sort-down').addClass('fa-sort');

        if ($($('th')[1]).attr('data-order') === 'desc') {
            $($('th')[1]).attr('data-order', 'asc');
            sortAzZa($($('th')[1]).attr('data-column'), $($('th')[1]).attr('data-order'));
            $($('th')[1]).children().removeClass('fa-sort').addClass('fa-sort-up');
            $($('th')[1]).children().removeClass('fa-sort-down');


        } else {
            $($('th')[1]).attr('data-order', 'desc');
            sortAzZa($($('th')[1]).attr('data-column'), $($('th')[1]).attr('data-order'));
            $($('th')[1]).children().removeClass('fa-sort-up').addClass('fa-sort-down');

        }
        renderContent();
    })

    $($('th')[2]).click(function sortColumn() {
        $('i.fa-sort-up').removeClass('fa-sort-up').addClass('fa-sort');
        $('i.fa-sort-down').removeClass('fa-sort-down').addClass('fa-sort');

        if ($($('th')[2]).attr('data-order') === 'desc') {
            $($('th')[2]).attr('data-order', 'asc');
            sortAzZa($($('th')[2]).attr('data-column'), $($('th')[2]).attr('data-order'));
            $($('th')[2]).children().removeClass('fa-sort').addClass('fa-sort-up');
            $($('th')[2]).children().removeClass('fa-sort-down');


        } else {
            $($('th')[2]).attr('data-order', 'desc');
            sortAzZa($($('th')[2]).attr('data-column'), $($('th')[2]).attr('data-order'));
            $($('th')[2]).children().removeClass('fa-sort-up').addClass('fa-sort-down');

        }
        renderContent();
    })

    $($('th')[3]).click(function sortColumn() {
        $('i.fa-sort-up').removeClass('fa-sort-up').addClass('fa-sort');
        $('i.fa-sort-down').removeClass('fa-sort-down').addClass('fa-sort');

        if ($($('th')[3]).attr('data-order') === 'desc') {
            $($('th')[3]).attr('data-order', 'asc');
            sortAzZa($($('th')[3]).attr('data-column'), $($('th')[3]).attr('data-order'));
            $($('th')[3]).children().removeClass('fa-sort').addClass('fa-sort-up');
            $($('th')[3]).children().removeClass('fa-sort-down');


        } else {
            $($('th')[3]).attr('data-order', 'desc');
            sortAzZa($($('th')[3]).attr('data-column'), $($('th')[3]).attr('data-order'));
            $($('th')[3]).children().removeClass('fa-sort-up').addClass('fa-sort-down');

        }
        renderContent();
    })

    $($('th')[4]).click(function sortColumn() {
        $('i.fa-sort-up').removeClass('fa-sort-up').addClass('fa-sort');
        $('i.fa-sort-down').removeClass('fa-sort-down').addClass('fa-sort');

        if ($($('th')[4]).attr('data-order') === 'desc') {
            $($('th')[4]).attr('data-order', 'asc');
            sortAzZa($($('th')[4]).attr('data-column'), $($('th')[4]).attr('data-order'));
            $($('th')[4]).children().removeClass('fa-sort').addClass('fa-sort-up');
            $($('th')[4]).children().removeClass('fa-sort-down');


        } else {
            $($('th')[4]).attr('data-order', 'desc');
            sortAzZa($($('th')[4]).attr('data-column'), $($('th')[4]).attr('data-order'));
            $($('th')[4]).children().removeClass('fa-sort-up').addClass('fa-sort-down');

        }
        renderContent();
    })

    $($('th')[5]).click(function sortColumn() {
        $('i.fa-sort-up').removeClass('fa-sort-up').addClass('fa-sort');
        $('i.fa-sort-down').removeClass('fa-sort-down').addClass('fa-sort');

        if ($($('th')[5]).attr('data-order') === 'desc') {
            $($('th')[5]).attr('data-order', 'asc');
            sortAzZa($($('th')[5]).attr('data-column'), $($('th')[5]).attr('data-order'));
            $($('th')[5]).children().removeClass('fa-sort').addClass('fa-sort-up');
            $($('th')[5]).children().removeClass('fa-sort-down');


        } else {
            $($('th')[5]).attr('data-order', 'desc');
            sortAzZa($($('th')[5]).attr('data-column'), $($('th')[5]).attr('data-order'));
            $($('th')[5]).children().removeClass('fa-sort-up').addClass('fa-sort-down');

        }
        renderContent();
    })

    function sortAzZa(column, data) {
        listSanPham.sort(function (a, b) {
            let x = a[column];
            let y = b[column];
            if (typeof a[column] == 'string') x = a[column].toLowerCase();
            if (typeof b[column] == 'string') y = b[column].toLowerCase();
            if (x > y) return 1;
            if (x < y) return -1;
            return 0;

        });
        if (data == 'asc') return listSanPham;
        else return listSanPham.reverse();
    }

    function sumPrice(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i].cost * arr[i].amount;
        }
        return sum;
    }

    document.getElementsByClassName('gia')[0].innerHTML = `${formatNumber(sumPrice(listSanPham))} VNĐ`;
})
