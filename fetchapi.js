function getData(){
    fetch("http://localhost:3000/users")
    .then(res=>res.json())
    .then((data)=>{
         let table='<table id="table" width="15%" border=2px style="border-collapse:collapse;"><tr><th>ID</th><th>Name</th><th>Branch</th></tr>'
        data.forEach(element => {
            table+=`<tr id="row_${element.id}"><td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.branch}</td>
                    <td><button onclick="delData(${element.id})">delete</button>`
        });
        table+='</table>'
        document.getElementById("res").innerHTML=table;
      } 
    )
}

function delData(id){
    fetch(`http://localhost:3000/users/${id}`,{
        method:"DELETE"
    })
    .then((res) => {
        res.json()
        getData()
    });
}

function createData(){
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const branch = document.getElementById("branch").value;
    fetch("http://localhost:3000/users",{
        method:"POST",
        body: JSON.stringify({
            id:id,
            name: name,
            branch: branch
        })
    })
    .then(res=>{
        res.json()
        getData()
    })
}

function updateData(){
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const branch = document.getElementById("branch").value;
    fetch(`http://localhost:3000/users/${id}`,{
        method:"PUT",
        body:JSON.stringify({
            id:id,
            name: name,
            branch: branch
        })
    })
    .then(res=>{
        res.json()
        getData()
    })
}