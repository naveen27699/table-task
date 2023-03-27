var b=[
	{
        "id": 1,
        "name": "test product1",
        "price": 12.50,
        "tags": ["TRADE A", "ice"],
		"vendor":"Vendor 5",
		"discount" : 0
    },
    {
        "id": 2,
        "name": "test product2",
        "price": 42.50,
        "tags": ["TRADE B", "ice2"],
		"vendor":"Vendor 4",
		"discount" : 0
    },
    {
        "id": 3,
        "name": "test product3",
        "price": 200.00,
        "tags": ["TRADE C", "test"],
		"vendor":"Vendor 3",
		"discount" : 3
    },
    {
        "id": 4,
        "name": "test product4",
        "price": 52.50,
        "tags": ["TRADE C", "test"],
		"vendor":"Vendor 2",
		"discount" : 0
    },
    {
        "id": 5,
        "name": "test product5",
        "price": 712.50,
        "tags": ["TRADE D", "test"],
		"vendor":"Vendor 1",
		"discount" : 0
    },
    {
        "id": 6,
        "name": "test product6",
        "price": 17.00,
        "tags": ["TRADE A", "test"],
		"vendor":"Vendor 3",
		"discount" : 12
    },
    {
        "id": 7,
        "name": "test product7",
        "price": 55.00,
        "tags": ["TRADE A", "test"],
		"vendor":"Vendor 3",
		"discount" : 12
    },
    {
        "id": 8,
        "name": "test product11",
        "price": 37.00,
        "tags": ["TRADE D", "test"],
		"vendor":"Vendor 4",
		"discount" : 12
    },
    {
        "id": 9,
        "name": "test product9",
        "price": 82.00,
        "tags": ["TRADE C", "test"],
		"vendor":"Vendor 4",
		"discount" : 34
    },
    {
        "id": 10,
        "name": "test product10",
        "price": 52.00,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 2",
		"discount" : 25
    },
    {
        "id": 11,
        "name": "test product22",
        "price": 102.00,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 1",
		"discount" : 25
		
    },
    {
        "id": 12,
        "name": "test product457",
        "price": 172.50,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 4",
		"discount" : 0
    },
    {
        "id": 13,
        "name": "test product15",
        "price": 100.00,
        "tags": ["TRADE D", "test"],
		"vendor":"Vendor 5",
		"discount" : 12
    },
    {
        "id": 14,
        "name": "test product33",
        "price": 99.50,
        "tags": ["TRADE D", "test"],
		"vendor":"Vendor 5",
		"discount" : 12
    },
    {
        "id": 15,
        "name": "test product85",
        "price": 87.50,
        "tags": ["TRADE A", "test"],
		"vendor":"Vendor 5",
		"discount" : 0
    },
    {
        "id": 16,
        "name": "test product63",
        "price": 57.00,
        "tags": ["TRADE A", "test"],
		"vendor":"Vendor 1",
		"discount" : 29
    },
    {
        "id": 17,
        "name": "test product74",
        "price": 10.00,
        "tags": ["TRADE C", "test"],
		"vendor":"Vendor 2",
		"discount" : 0
    },
    {
        "id": 18,
        "name": "test product102",
        "price": 412.50,
        "tags": ["TRADE D", "test"],
		"vendor":"Vendor 3",
		"discount" : 56
    },
    {
        "id": 19,
        "name": "test product358",
        "price": 112.50,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 4",
		"discount" : 0
    },
    {
        "id": 20,
        "name": "test product568",
        "price": 102.00,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 5",
		"discount" : 15
    },
    {
        "id": 21,
        "name": "test product475",
        "price": 52.00,
        "tags": ["TRADE A", "test"],
		"vendor":"Vendor 3",
		"discount" : 12
    },
    {
        "id": 22,
        "name": "test product28",
        "price": 32.00,
        "tags": ["TRADE C", "test"],
		"vendor":"Vendor 2",
		"discount" : 0
    },
    {
        "id": 23,
        "name": "test product1405",
        "price": 12.00,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 4",
		"discount" : 0
    },
    {
        "id": 24,
        "name": "test product389",
        "price": 584.50,
        "tags": ["TRADE D", "test"],
		"vendor":"Vendor 1",
		"discount" : 0
    },
    {
        "id": 25,
        "name": "test product555",
        "price": 67.00,
        "tags": ["TRADE D", "test"],
		"vendor":"Vendor 5",
        "discount" : 0

    },
    {
        "id": 26,
        "name": "test product444",
        "price": 132.50,
        "tags": ["TRADE A", "test"],
		"vendor":"Vendor 5",
		"discount" : 0
    },
    {
        "id": 27,
        "name": "test product333",
        "price": 42.50,
        "tags": ["TRADE B", "test"],
		"vendor":"Vendor 2",
		"discount" : 0
    }


]
var data=JSON.stringify(b);
var ddata=JSON.parse(data)
var kk=ddata[0]

document.write(`<h1> production table</h1>`);


document.write("<table id=dat border==\"1\"><tr>" );
for (var key in ddata[0]) {
	document.write('<th>' + key + '</th>');
}
document.write(`<th> cart</th>`);
document.write("</tr>");
for (var i = 0; i < ddata.length; i++) {
	document.write('<tr>');
	for (key in ddata[i]) {
  	document.write('<td class="val ge">' + ddata[i][key]+'</td>'
    );
  }
  document.write(`<td  ><span class="ge ccc">add to cart</span></td>`);

	document.write('</tr>');
}
document.write("</table>");

document.write("</table>");
var iid=0;

$(document).ready(function(){
  


  $("#dat").on('click','.ge', function(){
    
   var currentRow=$(this).closest("tr");
   var id=currentRow.find("td:eq(0)").text();
   var productname=currentRow.find("td:eq(1)").text();
   var originalprice=currentRow.find("td:eq(2)").text();
   var discount=currentRow.find("td:eq(5)").text();
   var vendor=currentRow.find("td:eq(4)").text();
   iid++;
   var ori=0

   if (discount==0) {
    ori=originalprice
    
   } else {
     ori=(originalprice-discount)
   }


   return document.getElementById('t').innerHTML+=`
  <tr id='d'>
  <td>${iid}</td>
  <td>${productname}</td>
  <td>${originalprice}</td>
  <td>${discount}</td>
  <td>${ori}</td>
  <td>${vendor}</td>
  <td><span class="y" >delete</span></td>
  </tr>`
  });
  
 });
 

 $('.y').click(()=>{
  alert('ddd')
})



























