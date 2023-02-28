
const custmAlert = document.getElementById("customAlertBtn");
const alertDia = document.getElementById("alertDialog");
custmAlert.addEventListener("click", ()=>{
    alertDia.showModal();
})

const custmConfirm = document.getElementById("customConfirmBtn");
const confirmDia = document.getElementById("confirmDialog");
const confirmYes = document.getElementById("confirmYes");
const confirmNo = document.getElementById("confirmNo");

custmConfirm.addEventListener("click", () => {
    confirmDia.showModal();
})

confirmYes.addEventListener("click", ()=>{
    document.getElementById("customConfirmOut").innerHTML = "yes";
})

confirmNo.addEventListener("click", ()=>{
    document.getElementById("customConfirmOut").innerHTML = "no";
})

const custmPrompt = document.getElementById("customPromptBtn");
const promptDia = document.getElementById("promptDialog");
const promptVal = document.getElementById("customPromptVal");
const confirmSubmit = document.getElementById("promptYes");
const confirmCancel = document.getElementById("promptNo");
let output;
custmPrompt.addEventListener("click", () =>{
    promptDia.showModal();
})

promptVal.addEventListener("change", (e)=>{
    output = e;
})

confirmSubmit.addEventListener("click", ()=>{
    document.getElementById("customPromptOut").innerHTML = output;
})

confirmCancel.addEventListener("click", ()=>{
    document.getElementById("customPromptOut").innerHTML = "Canceled!";
})

