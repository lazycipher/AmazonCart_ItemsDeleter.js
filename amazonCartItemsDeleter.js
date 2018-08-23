function DelCartItems() { 
    var buffer = document.querySelectorAll("#sc-active-cart input[value=Delete]") 
    if(buffer.length) { buffer[0].click(); } 
    if(buffer.length > 1) { setTimeout(DelCartItems,1000); } 
    else{ console.log('Shoping Cart is Empty ! Happy Shopping '); } } 
    DelCartItems();