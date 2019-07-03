function loadDoc() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      renderContent(this);
    }
  };
  xhttp.open("GET", "https://ngovansonwft1.github.io/listProduct.JSON", true);
  xhttp.send();
}

loadDoc();



function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function renderContent(xml) {
  let listProduct = JSON.parse(xml.responseText);
  let content = '';
  for (let i = 0; i < listProduct.length; i++) {

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