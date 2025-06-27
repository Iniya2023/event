
let h=document.getElementsByTagName("h1");
let image=document.getElementsByTagName("img");
let event_row=document.getElementById("event-row")

console.log(h);
console.log(image);

let creation;

function edit(){
let update = h[0].innerText="This is my output"
  let size=h[0].style.fontSize="40px";
let width = image[0].style.width="50%";
console.log("Updated Text:", h[0].innerText);
  console.log("Font Size:", h[0].style.fontSize);
  
}
function get(){
	
console.log(h[0].innerText);
console.log("Image Width:", image[0].style.width);

}
function create(){
	
	
	creation=document.createElement("div");
	
	creation.setAttribute("id","anchor");
	
	event_row.appendChild(creation);
	
	let a=document.createElement("a");
	
	a.setAttribute('href','#');
	a.href ="https://www.google.com/url?sa=i&url=https%3A%2F%2Feventphotos.com.au%2F&psig=AOvVaw2amXNouDeRXlWPYq8k6YTf&ust=1751093806186000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjI5PWCkY4DFQAAAAAdAAAAABAE";
	
	creation.appendChild(a);
	console.log(creation);
	
	
	
	 
}


	
function del() {
	let atag=document.getElementsByTagName("a");
  atag[0].removeAttribute('href');
  console.log(atag[0]); 
}
