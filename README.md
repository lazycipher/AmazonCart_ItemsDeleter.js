# AmazonCart_ItemsDeleter.js

### Script to delete items in your amazon cart

```
function DelCartItems() {
	var buffer = document.querySelectorAll("#sc-active-cart input[value=Delete]")
	if (buffer.length) {
		buffer[0].click();
	}
	if (buffer.length > 1) {
		setTimeout(DelCartItems,1000);
	}
	else {
		console.log('Shopping Cart is Empty Now ! Happy Shopping');
	}
}
DelCartItems();
