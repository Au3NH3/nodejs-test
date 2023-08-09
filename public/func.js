// var dbg = 1;
const form = document.querySelector("form");
// const cmd = document.querySelector("#run");
const input = document.querySelector("input");
const output = document.querySelector("#out");
const clear = document.querySelector(".clear");
const stat = document.querySelector("#stat");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	//var	fd = new FormData(form);
	//fetch("/run?, {body:fd}")//.then(res => res.json()).then(json => console.log(json));
	// fetch("/run?" + input.name + "=" + input.value).then(
		// res => res.json()).then(json => console.log(json));
	fetch("/run?" + input.name + "=" + input.value).then(
		res => res.text()).then(text => {
			stat.textContent = "output:";
			output.textContent += text;
			input.value = "";
			});
	//console.log(input.name, input.value);
	// output.textContent = "running...";
	stat.textContent = "running...";
	output.textContent = "$ " + input.value +"\n";
});

clear.addEventListener("click", ()=>{
	input.value = "";
	output.textContent = "$_";
})