
let h=document.getElementsByTagName("h1");
let image=document.getElementsByTagName("img");
let a=document.getElementsByTagName("a");
console.log(h);
console.log(image);
console.log(a);
let creation;

function edit(){
let update = h[0].innerText="This is my output"
  let size=h[0].style.fontSize="40px";
let width = image[0].style.width="50%";
console.log("Updated Text:", h[0].innerText);
  console.log("Font Size:", h[0].style.fontSize);
  console.log("Image Width:", image[0].style.width);
}
function get(){
	
console.log(h[0].innerText);

let atag=a[0].getAttribute('href');	
 console.log("Link Href:", atag);
	
}
function create(){
	
	
	creation=document.createElement("div");
	creation.innerText="THIS IS CREATE ELEMENT";
	creation.setAttribute("id","setat");
	creation.setAttribute("style", "color: red; font-size: 20px;");
	document.body.appendChild(creation);
	
	 console.log("Element Created:", creation);
	
}
let del=()=>{
	let remove=a[0].remove();
 
 
 
}
del();