let theYear = document.querySelector("#idSelectYear"),
    theMonth = document.querySelector("#idSelectMonth"),
    theDay = document.querySelector("#idSelectDay");

theYear.addEventListener("change", addDate);
theMonth.addEventListener("change", addDate);
theDay.addEventListener("change", addDate);

let docFrag = document.createDocumentFragment();
for (let i = 2010; i <= 2025; i++) {   //新增月
    let opt = document.createElement("option"); //<option></option>
    opt.setAttribute("value", i);//<option value="1"></option>
    let optTxt = document.createTextNode(i);//1
    opt.appendChild(optTxt);//<option value="1">1</option>
    //opt.value = i;
    //opt.innerHTML = i;
    docFrag.appendChild(opt);
}
theYear.appendChild(docFrag);

docFrag = document.createDocumentFragment();
for (let i = 1; i <= 12; i++) {   //新增月
    let opt = document.createElement("option"); //<option></option>
    opt.setAttribute("value", i);//<option value="1"></option>
    let optTxt = document.createTextNode(i);//1
    opt.appendChild(optTxt);//<option value="1">1</option>
    //opt.value = i;
    //opt.innerHTML = i;
    docFrag.appendChild(opt);
}
theMonth.appendChild(docFrag);

//let d = new Date(2022, 5, 0);   //6月的第0天
//console.log(d);

docFrag = document.createDocumentFragment();
let yy, mm
function addDate() {
    yy = theYear.value;
    mm = theMonth.value;
    let d = new Date(yy, (mm), 0),
        dd = d.getDate();

    for (let i = 1; i <= dd; i++) {
        let opt = document.createElement("option");
        opt.setAttribute("value", i);
        let optTxt = document.createTextNode(i);
        opt.appendChild(optTxt);
        docFrag.appendChild(opt);
    }
    theDay.appendChild(docFrag);
    date = theDay.value;
    let span = document.querySelector("#span1");
    span.textContent = `西元${yy}年 ${mm}月 ${date}日`;
}