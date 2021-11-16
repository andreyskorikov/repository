document.addEventListener("click", function(e) {
    var a = e.target.closest("a[href^='registration']").id;
    var b = document.getElementsByName(a);
    var c = b[0].innerText.split("/")
	var sku = b[0].offsetParent.className.split("_")[4]
	var cat = b[0].parentElement.parentElement.parentElement.parentElement.parentElement.id
	var quanty = b[0].querySelectorAll('#tickets')[0].value
	
    var n; 
    var t = ~~(Date.now() / 1000)
    if (t >= 1627776000){n = 1;} else {n = 0;}
	
	var rev = c[n].trim().split(" ")[0];
	var int_rev = parseInt(rev).toFixed(2);
	var ship = String((int_rev * 0.05).toFixed(2));
	var tax = String((int_rev * 0.1).toFixed(2));
	var price = String((int_rev - (int_rev * 0.05) - (int_rev * 0.1)).toFixed(2));

	
	var trnx = ga.getAll()[0].get('clientId') + "-" + t.toString();
  
    if (a) {
		localStorage.transaction = trnx || "";
		localStorage.affiliation = "website";
		localStorage.revenue = rev * quanty || rev;
		localStorage.shipping = ship * quanty || ship;
		localStorage.tax = tax * quanty || tax;		
		
		localStorage.product = a || "";
		localStorage.sku = sku || "";
		localStorage.category = cat || "";
		localStorage.price = price || "";
		localStorage.quantity = quanty || 1;
		
		localStorage.currency = c[n].trim().split(" ")[1];
    }
});