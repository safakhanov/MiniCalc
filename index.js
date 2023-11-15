
// Inputları tapmaq üçün ID-dən istifadə etdim
let num1Input = document.querySelector("#num1");
let num2Input = document.querySelector("#num2");

// H1 tagını tapmaq üçün ID-dən istifadə etdim
let resultHeading = document.getElementById("result");

// buttonlari tapmaq üçün ID-dən istifadə etdim
let toplamaBtn = document.querySelector("#topla");
let cixmaBtn = document.querySelector("#cix");
let vurmaBtn = document.querySelector("#vur");
let bolmeBtn = document.querySelector("#bol");

// Click  əlavə etdim
toplamaBtn.addEventListener("click", function() {
    calculate("Toplama");
});
cixmaBtn.addEventListener("click", function() {
    
    calculate("Cixma");
});
vurmaBtn.addEventListener("click", function() {
    calculate("Vurma");
});
bolmeBtn.addEventListener("click", function() {
    calculate("Bolme");
});

// Əməliyyatı hesablamaq üçün funksiya
function calculate(operation) {
    // İstifadəçinin daxil etdiyi ədədləri əldə etdim
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);

    // Əgər ədədlər düzgün daxil edilibsə
    if (!isNaN(num1) && !isNaN(num2)) {
        // Hesablama əməliyyatını apar
        let result;

        switch (operation) {
            case "Toplama":
                result = num1 + num2;
                break;
            case "Cixma":
                result = num1 - num2;
                break;
            case "Vurma":
                result = num1 * num2;
                break;
            case "Bolme":
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = "Error: Sifira bolmek olmur get riyaziyyat oyren";
                }
                break;
            default:
                result = "Invalid operation";
        }

        // Nəticəni göstər
        resultHeading.textContent = `Result: ${result}`;
    } else {
        // Əgər ədədlər düzgün daxil edilməyibsə xəbərdarlıq ver
        resultHeading.textContent = "Dogru Reqem ve ya metn daxil edin";
    }
}
