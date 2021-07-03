const dialogButton = document.getElementsByClassName("btn-dialog-btn")[0];
const calculateButton = document.getElementsByClassName("btn-calculate")[0];
const dialog = document.getElementsByClassName("dialog")[0];

let isOpened = false;
const toggleDialog = () => {
    if(isOpened) {
        dialog.classList.remove("display");
        isOpened = false;
    }

    else {
        dialog.classList.add("display");
        isOpened = true;
    }
}


const calculateBMI = () => {
    const height = Number(document.getElementsByClassName("input-height")[0].value);
    const weight = Number(document.getElementsByClassName("input-weight")[0].value);
    const dialogTitle = document.getElementsByClassName("dialog-title")[0];
    const dialogResult = document.getElementsByClassName("dialog-title res")[0];
    const dialogResultIcon = document.getElementsByClassName("result-icon-wrap")[0];

    const result = (weight / ((height * height) / 10000)).toFixed(3);

    if(height == '' || isNaN(height) || height < 0) {
        dialogTitle.innerHTML = 'Invalid Values entered';
        dialogResult.innerHTML = '';
        dialogResultIcon.innerHTML = '<i class="fas fa-times-circle danger"></i>';
    } else if(weight == '' || isNaN(weight) || weight < 0) {
        dialogTitle.innerHTML = 'Invalid Values entered';
        dialogResult.innerHTML = '';
        dialogResultIcon.innerHTML = '<i class="fas fa-times-circle danger"></i>';
    } 
    
    else {
        if(result <= 18.5) {
            dialogResult.innerHTML = 'Result : Underweight';
            dialogResultIcon.innerHTML = '<i class="fas fa-exclamation-circle danger"></i>';
            
        } else if(result >= 18.5 && result <= 24.9) {
            dialogResult.innerHTML = 'Result : Normal';
            dialogResultIcon.innerHTML = '<i class="fas fa-check-circle normal"></i>';
            
        } else if(result >= 25 && result <= 29.9) {
            dialogResult.innerHTML = 'Result : Overweight';
            dialogResultIcon.innerHTML = '<i class="fas fa-exclamation-circle warn"></i>';
            
        } else if(result >= 30) {
            dialogResult.innerHTML = 'Result : Obese';
            dialogResultIcon.innerHTML = '<i class="fas fa-exclamation-circle danger"></i>';
        }
        dialogTitle.innerHTML = `BMI Index: <span>${result}</span>`;
    }

    toggleDialog();
}

dialogButton.addEventListener("click", toggleDialog);
calculateButton.addEventListener("click", calculateBMI);