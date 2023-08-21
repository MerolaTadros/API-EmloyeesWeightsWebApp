async function getData(){
  try{
    const response = await fetch("http://localhost:8000/getdocs");
    const data = await response.json();
    displayData(data);
  } catch(err){
    console.log(err);
  }
};


function displayData(arr) { 
	let outHTML = "";
	for(let i=0; i < arr.length; i++){
		outHTML+="<div>"+arr[i].empName + " weighed " + arr[i].empWeight + " Kgs</div>";
	}
	document.getElementById("records").innerHTML = outHTML; 
}

function validateForm(){
  document.getElementById("nameMessage").innerHTML="";
  document.getElementById("weightMessage").innerHTML="";
  let empName = document.forms["frmCollectWeights"]["empName"];
  let empWeight = document.forms["frmCollectWeights"]["empWeight"];
  let alphaOnly = /^[A-Za-z]+$/;
  //
  if (empName.value == "") {
    document.getElementById("nameMessage").innerHTML="Name cannot be empty!";
	  empName.focus();
    return false;
  }
  if (!empName.value.match(alphaOnly)) {
    document.getElementById("nameMessage").innerHTML="Name cannot contain numbers!";
    empName.focus();
    return false;
  }
  if (empName.value.length < 3 && empName.value != "") {
    document.getElementById("nameMessage").innerHTML="Name too short!";
    empName.focus();
    return false;
  }
  if (empWeight.value == "") {
    document.getElementById("weightMessage").innerHTML="Weight cannot be empty!";
	  empName.focus();
    return false;
  }
  if (isNaN(empWeight.value)) {
    document.getElementById("weightMessage").innerHTML="Weight must be a number";
    empWeight.focus();
    return false;
  }
  //
  return true;
}
