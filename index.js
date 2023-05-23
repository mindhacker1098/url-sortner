async function geturl(){
    document.getElementById("fetchedUrl").innerHTML=""
    let url=document.getElementById("url").value
    let data={name:url}
    
    var res=await fetch("https://sort.onrender.com", {
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(data)
    })
    
     res = await res.text()
     let but=document.createElement('button');
     but.innerText="copy";
     but.id="damn1"
     but.addEventListener('click',()=>{
    
    navigator.clipboard.writeText(res)
    document.getElementById("damn1").innerText="copied"
    setTimeout(()=>{
        document.getElementById("damn1").innerText="copy"
    
    },1000)
    
     })
    
    // let p=document.createElement("p");
    // p.id="damn";
    // p.innerText=res;
    // document.getElementById("fetchedUrl").appendChild(p)
    document.getElementById("fetchedUrl").innerHTML = res;
    document.getElementById("fetchedUrl").appendChild(but);
    
    
    }
    
    
