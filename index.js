
        // Inputları tapmaq üçün ID-dən istifadə etdim
        let num1Input = document.querySelector("#num1");
        let num2Input = document.querySelector("#num2");

        // H1 tagını tapmaq üçün ID-dən istifadə etdim
        let resultH1 = document.querySelector("#result");

        // buttonlari tapmaq üçün ID-dən istifadə etdim
        let toplamaBtn = document.querySelector("#topla");
        let cixmaBtn = document.querySelector("#cix");
        let vurmaBtn = document.querySelector("#vur");
        let bolmeBtn = document.querySelector("#bol");
        let clearBtn = document.querySelector("#clear");

        // Click əlavə etdim
        toplamaBtn.addEventListener("click", function () {
            calculate("Topla");
        });
        cixmaBtn.addEventListener("click", function () {
            calculate("Cıx");
        });
        vurmaBtn.addEventListener("click", function () {
            calculate("Vur");
        });
        bolmeBtn.addEventListener("click", function () {
            calculate("Böl");
        });

        clearBtn.addEventListener("click", function () {
            num1Input.value = "";
            num2Input.value = "";
            resultH1.textContent = "İstediyiniz Emeliyyatı yazın";
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
                    case "Çıxma":
                        result = num1 - num2;
                        break;
                    case "Vurma":
                        result = num1 * num2;
                        break;
                    case "Bölme":
                        if (num2 !== 0) {
                            result = num1 / num2;
                        } else {
                            result = "Error: Sıfıra bölmək olmur get Riyaziyyat öyrən";
                        }
                        break;
                    default:
                        result = "Yanlış əməliyyat";
                }

                // Nəticəni göstər
                resultH1.textContent = `Result: ${result}`;
            } else {
                // Əgər ədədlər düzgün daxil edilməyibsə xəbərdarlıq verir
                resultH1.textContent = "Zəhmət olmasa doğru rəqəm daxil edin";
            }
        }
    