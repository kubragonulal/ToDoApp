//Document Objesi

console.log(window);

let value;

console.log(document.location);


//value = document.location.href; //kodun çalıştığı sayfanın adresini verir
//value = document.location.hostname; // ip or domain name return
//value = document.location.port; // URL'nin port numarasını verir
//value = document.location.pathname; //returns the path and filename of the current page

//value = document.all;
//value = document.characterSet // UTF-8
//value = document.title // sayfanın başlığını verir
value = document.links; // sayfadaki tüm linkleri verir
//value = document.links.item
console.log(value);