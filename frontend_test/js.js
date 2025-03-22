const form_name = document.querySelector(".name1")
const form_phone = document.querySelector(".ph")
const form_pochta = document.querySelector(".pch")
const form_position_name = document.querySelector(".pst")
const form_hire_date = document.querySelector(".dt")
const form_department = document.querySelector(".divis")
const overlay_popup = document.querySelector(".overlay_popup")
const grid = document.querySelector(".grid")
const srcimgphone = "img/phone.png"
const srcimgpochta = "img/pochta.png"
document.querySelector(".img_clouse").addEventListener("click",() => {overlay_popup.classList.remove("active")});
document.querySelector(".overlay").addEventListener("click", () => {overlay_popup.classList.remove("active");});


    const xhr = new XMLHttpRequest()
    xhr.open("GET", `http://localhost:3000`)
    xhr.responseType = 'json';
    xhr.onload = function() {
        const responseobj = xhr.response;
         for(let i = 0; i < responseobj.length; i++){
    const element = document.createElement("div")
    const name = document.createElement("span")
    const imgphone = document.createElement("div")  
    const imgpochta = document.createElement("div")
    const imgph = document.createElement("img")
    const imgpch = document.createElement("img")
    const phone_txt = document.createElement("span")     
    const pochta_txt = document.createElement("span")
    element.classList.add("element")
    name.classList.add("name")
    imgphone.classList.add("imgphone")  
    imgpochta.classList.add("imgpochta")
    phone_txt.classList.add("phone_txt")    
    pochta_txt.classList.add("pochta_txt")
    imgph.src = srcimgphone
    imgpch.src = srcimgpochta
    element.appendChild(name)
    element.appendChild(imgphone)
    element.appendChild(imgpochta)
    imgphone.appendChild(imgph)
    imgphone.appendChild(phone_txt)
    imgpochta.appendChild(imgpch)
    imgpochta.appendChild(pochta_txt)
    name.innerText = responseobj[i]["name"]
    phone_txt.innerText = responseobj[i]["phone"]
    pochta_txt.innerText = responseobj[i]["email"]
    element.addEventListener("click",function () {
        const name1 = this.querySelector(".name").innerText
        const xhr = new XMLHttpRequest()
        xhr.open("GET", `http://localhost:3000/?term=${name1}`)
        xhr.responseType = 'json';
        xhr.onload = function() {
        const responseobj1 = xhr.response;
        form_name.innerText = responseobj1[0]["name"]
        form_phone.innerText = responseobj1[0]["phone"]
        form_pochta.innerText = responseobj1[0]["email"]
        form_position_name.innerText = responseobj1[0]["position_name"]
        form_hire_date.innerText = responseobj1[0]["hire_date"]
        form_department.innerText = responseobj1[0]["department"]
        overlay_popup.classList.add("active")
        }
        xhr.send()
    })
    grid.appendChild(element)
    }
    }
    xhr.send()
    
document.getElementsByTagName("input")[0].oninput = function () {
    const value = this.value
    if(!value.trim().length)
    {
        grid.replaceChildren()
        const xhr = new XMLHttpRequest()
        xhr.open("GET", `http://localhost:3000`)
        xhr.responseType = 'json';
        xhr.onload = function() {
            const responseobj = xhr.response;
             for(let i = 0; i < responseobj.length; i++){
        const element = document.createElement("div")
        const name = document.createElement("span")
        const imgphone = document.createElement("div")  
        const imgpochta = document.createElement("div")
        const imgph = document.createElement("img")
        const imgpch = document.createElement("img")
        const phone_txt = document.createElement("span")     
        const pochta_txt = document.createElement("span")
        element.classList.add("element")
        name.classList.add("name")
        imgphone.classList.add("imgphone")  
        imgpochta.classList.add("imgpochta")
        phone_txt.classList.add("phone_txt")    
        pochta_txt.classList.add("pochta_txt")
        imgph.src = srcimgphone
        imgpch.src = srcimgpochta
        element.appendChild(name)
        element.appendChild(imgphone)
        element.appendChild(imgpochta)
        imgphone.appendChild(imgph)
        imgphone.appendChild(phone_txt)
        imgpochta.appendChild(imgpch)
        imgpochta.appendChild(pochta_txt)
        name.innerText = responseobj[i]["name"]
        phone_txt.innerText = responseobj[i]["phone"]
        pochta_txt.innerText = responseobj[i]["email"]
        element.addEventListener("click",function () {
            const name1 = this.querySelector(".name").innerText
            const xhr = new XMLHttpRequest()
            xhr.open("GET", `http://localhost:3000/?term=${name1}`)
            xhr.responseType = 'json';
            xhr.onload = function() {
            const responseobj1 = xhr.response;
            form_name.innerText = responseobj1[0]["name"]
            form_phone.innerText = responseobj1[0]["phone"]
            form_pochta.innerText = responseobj1[0]["email"]
            form_position_name.innerText = responseobj1[0]["position_name"]
            form_hire_date.innerText = responseobj1[0]["hire_date"]
            form_department.innerText = responseobj1[0]["department"]
            overlay_popup.classList.add("active")
            }
            xhr.send()
        })
        grid.appendChild(element)
        }
        }
        xhr.send()
        return
    }
    grid.replaceChildren()
    const xhr = new XMLHttpRequest()
    xhr.open("GET", `http://localhost:3000/?term=${value}`)
    xhr.responseType = 'json';
    xhr.onload = function() {
        const responseobj = xhr.response;
         for(let i = 0; i < responseobj.length; i++){
    const element = document.createElement("div")
    const name = document.createElement("span")
    const imgphone = document.createElement("div")  
    const imgpochta = document.createElement("div")
    const imgph = document.createElement("img")
    const imgpch = document.createElement("img")
    const phone_txt = document.createElement("span")     
    const pochta_txt = document.createElement("span")
    element.classList.add("element")
    name.classList.add("name")
    imgphone.classList.add("imgphone")  
    imgpochta.classList.add("imgpochta")
    phone_txt.classList.add("phone_txt")    
    pochta_txt.classList.add("pochta_txt")
    imgph.src = srcimgphone
    imgpch.src = srcimgpochta
    element.appendChild(name)
    element.appendChild(imgphone)
    element.appendChild(imgpochta)
    imgphone.appendChild(imgph)
    imgphone.appendChild(phone_txt)
    imgpochta.appendChild(imgpch)
    imgpochta.appendChild(pochta_txt)
    name.innerText = responseobj[i]["name"]
    phone_txt.innerText = responseobj[i]["phone"]
    pochta_txt.innerText = responseobj[i]["email"]
    element.addEventListener("click",function () {
        const name1 = this.querySelector(".name").innerText
        const xhr = new XMLHttpRequest()
        xhr.open("GET", `http://localhost:3000/?term=${name1}`)
        xhr.responseType = 'json';
        xhr.onload = function() {
        const responseobj1 = xhr.response;
        form_name.innerText = responseobj1[0]["name"]
        form_phone.innerText = responseobj1[0]["phone"]
        form_pochta.innerText = responseobj1[0]["email"]
        form_position_name.innerText = responseobj1[0]["position_name"]
        form_hire_date.innerText = responseobj1[0]["hire_date"]
        form_department.innerText = responseobj1[0]["department"]
        overlay_popup.classList.add("active")
        }
        xhr.send()
    })
    grid.appendChild(element)
    }
    }
    xhr.send()
}