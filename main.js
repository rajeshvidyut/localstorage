var name;
var names = [];
var names2;
var usertr = document.getElementById("nameTR");

document.getElementById("form").addEventListener("submit",	(e)=> {
	e.preventDefault();
	Create();
	Read();
	Read()
	document.getElementById("form").reset();
});

function Create(){
	let storage = JSON.parse(localStorage.getItem("names"));
	name = document.getElementById("name").value;
	alert(name);
	if (name == '') {
		alert("write the name");
	}else{
		if (storage==null) {
			names.push(name);
			localStorage.setItem("names",JSON.stringify(names));
		}else{
			names=JSON.parse(localStorage.getItem("names"));
			names.push(name);
			localStorage.setItem("names",JSON.stringify(names));
		}
	}
}

function Read(){
	usertr.innerHTML = '';
	names2 = JSON.parse(localStorage.getItem("names"));
	if (names2==null) {
		usertr.innerHTML += `<tr><th>#</th><th>Name</th><th>Operation</th></tr>`
	}else{
		usertr.innerHTML += `<tr><th>#</th><th>Name</th><th>Operation</th></tr>`
		for (var i=0; i < names2.length; i++) {
			usertr.innerHTML += `
			<tr>
				<td>${i+1}</td>
				<td>${names2[i]}</td>
				<td>
					<button Onclick="Update(${i})">Edit</button>
					<button Onclick="Delete(${i})">Delete</button>
				</td>
			</tr>`;
		}
	}
}

function Update(i3){
	usertr.innerHTML = '';
	names4 = JSON.parse(localStorage.getItem("names"));
	usertr.innerHTML = '';
	usertr.innerHTML += `<tr><th>#</th><th>Name</th><th>Operation</th></tr>`
	for (var i=0; i<names4.length; i++) {
		if (i==i3) {
			usertr.innerHTML+=`
				<td>${i+1}</td>
				<td><input type="text" name="updateName" id="updateName" placeholder="${names4[i]}"></td>
				<td>
					<button Onclick="Update2(${i})">Edit</button>
					<button Onclick="Read(${i})">Cancel</button>
				</td>
			`
		}else{
			`
			<tr>
				<td>${i+1}</td>
				<td>${names2[i]}</td>
				<td>
					<button Onclick="Update(${i})">Edit</button>
					<button Onclick="Delete(${i})">Cancel</button>
				</td>
			</tr>
			`
		}
	}
}

function Update2(i){
	let names5 = JSON.parse(localStorage.getItem("names"));
	names5[i]  = document.getElementById("updateName").value;
	if (names5[i]) {
		localStorage.setItem("names", JSON.stringify(names5));
		Read();
	}
}

function Delete(i2){
	alert(i2);
	let names3 = JSON.parse(localStorage.getItem("names"));
	names3.splice(i2,1);
	localStorage.setItem("names", JSON.stringify(names3));
	Read();
}