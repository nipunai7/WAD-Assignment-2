    var switch_t_val=0;
    var clr;

        function total(){
                var x = parseInt(document.getElementById("num1").value);
                var y = parseInt(document.getElementById("num2").value);
                var z = x+y;

           if (isNaN(z)){
                console.log(z);
                alert("Inputs are not numbers or no inputs");
           }else{
                console.log(z);
                document.getElementById("num3").value = z;
           }
        }

        function clear_n(){
            document.getElementById("num1").value ="";
            document.getElementById("num2").value = "";
            document.getElementById("num3").value = "";
        }

        function bmi(){
            var height = parseInt(document.getElementById("height").value);
            var weight = parseInt(document.getElementById("weight").value);
            var bmi = ((weight/height)/height)*100*100;

            if (isNaN(bmi)){
                console.log("BMI is:" ,bmi);
                alert("Inputs are not numbers or no inputs");
           }else{
                console.log("BMI is:" ,bmi);
                document.getElementById("bmi").value = bmi;
           }
        }

        function clear_bmi(){
            document.getElementById("height").value ="";
            document.getElementById("weight").value = "";
            document.getElementById("bmi").value = "";
        }

        function save_text(){
    		var savetext = document.getElementById("savetext").value;
    		var saveblob = new Blob([savetext], {type:"text/plain"});
    		var savepath = window.URL.createObjectURL(saveblob);
			var savename = document.getElementById("saveName").value;
   			var savelink = document.createElement("a");
   			savelink.download = savename;
   			savelink.innerHTML = "Download File";
   			savelink.href = savepath;
   			savelink.onclick = destroyClickedElement;
   			savelink.style.display = "none";
   			document.body.appendChild(savelink); 
   			savelink.click();
        }
        
        function destroyClickedElement(event){
   			document.body.removeChild(event.target);
        }

        function tempValidate(tempval)    {
            var RE = /^(?:\d*\.\d{1,2}|\d+)$/
            if(RE.test(tempval)){
               return true;
            }else{
               return false;
            }
        }
    
        function temp_convert1(){

            console.log("cel to fah");
            var a = document.getElementById("temp1").value; 
            if(a==""){
                alert("Please add a value for Celcius");
            }else{
                if (tempValidate(a)==true){
                    document.getElementById("temp2").value=((a* 9/5) + 32).toFixed(2);
                }else{
                    alert("Please add only till two decimal points");
                }
            }
            
        }

        function temp_convert2(){

            console.log("fah to cel");
            var a = document.getElementById("temp1").value;
            if(a==""){
                alert("Please add a value for Fahrenheit"); 
            }else{
                if (tempValidate(a)==true){
                    document.getElementById("temp2").value = ((a-32)*5/9).toFixed(2);
                }else{
                    alert("Please add only till two decimal points");
                } 
            }
            
        }

        function switch_t(){
           if(switch_t_val==1){
                document.getElementById("temp1.1").innerText = "Celcius";
                document.getElementById("temp1.2").innerText = "Fahrenheit";
                document.getElementById("temp_convert").onclick = temp_convert1;
                tempswitch_help();
                alert("Now Coverting Celcius to Fahrenheit");
                console.log(switch_t_val);
                switch_t_val=0;
           }else{
                document.getElementById("temp1.1").innerText = "Fahrenheit";
                document.getElementById("temp1.2").innerText = "Celcius";
                document.getElementById("temp_convert").onclick = temp_convert2;
                tempswitch_help();
                alert("Now Coverting Fahrenheit to Celcius");
                console.log(switch_t_val);
                switch_t_val=1;
           }

           function tempswitch_help(){
            var tempvalue = document.getElementById("temp1").value;
            document.getElementById("temp1").value = document.getElementById("temp2").value;
            document.getElementById("temp2").value = tempvalue;
           }

        }

        function retrieve(){
            document.getElementById("browsersave").value = localStorage.getItem("fullname");
            clr = localStorage.getItem("colorval");
            setsavedclr();
            passval();
            getweather();
        }

        function browserstore(){

            var mnk = document.getElementById("browsersave").value;

            if (typeof(Storage) !== "undefined") {
                localStorage.setItem("fullname", mnk);
                console.log(document.getElementById("browsersave").value);

              } else {
                alert( "Sorry, your browser does not support Web Storage...");
              }
        }

        function passval(){
            counterpass = 0;

            var x = document.getElementById("passwordval").value;
            if (x.length >= 15){
                document.getElementById("passlength").style.display = 'none';
                counterpass++;
            }else{
                document.getElementById("passlength").style.display = 'block';
                counterpass--;
            }

            var val1 = /^(?=(.*[A-Z]){4,}).+/
            if (val1.test(x)==true){
                document.getElementById("passupper").style.display = 'none';
                counterpass++;
            }else{
                document.getElementById("passupper").style.display = 'block';
                counterpass--;
            }

            var val2 = /^(?=(.*[a-z]){4,}).+/
            if (val2.test(x)==true){
                document.getElementById("passlower").style.display = 'none';
                counterpass++;
            }else{
                document.getElementById("passlower").style.display = 'block';
                counterpass--;
            }

            var val3 = /^(?=(.*[0-9]){2,}).+/
            if (val3.test(x)==true){
                document.getElementById("passnum").style.display = 'none';
                counterpass++;
            }else{
                document.getElementById("passnum").style.display = 'block';
                counterpass--;
            }

            var val4 = /^(?=(.*[^A-Za-z0-9 ]){3,}).+/
            if (val4.test(x)==true){
                document.getElementById("passspecial").style.display = 'none';
                counterpass++;
            }else{
                document.getElementById("passspecial").style.display = 'block';
                counterpass--;
            }

            if (counterpass==5){
                console.log(counterpass);
                document.getElementById("doneval").style.display = 'block';
            }else{
                document.getElementById("doneval").style.display = 'none';
            }
        }

        function setsavedclr(){
            if (clr==0){
                document.getElementById("squarec").style.backgroundColor = "blue";
            }else if(clr==1){
                document.getElementById("squarec").style.backgroundColor = "yellow";
            }else if(clr==2){
                document.getElementById("squarec").style.backgroundColor = "red";
            }else if(clr=3){
                document.getElementById("squarec").style.backgroundColor = "green";
            }
        }

        function changec(){
            localStorage.setItem("colorval", clr);
            console.log(clr);

            if (clr==0){
                document.getElementById("squarec").style.backgroundColor = "blue";
                clr = 1;
            }else if(clr==1){
                document.getElementById("squarec").style.backgroundColor = "yellow";
                clr = 2;
            }else if(clr==2){
                document.getElementById("squarec").style.backgroundColor = "red";
                clr = 3;
            }else if(clr=3){
                document.getElementById("squarec").style.backgroundColor = "green";
                clr = 0;
            }
            
        }

        function getweather(){

            fetch ('https://api.openweathermap.org/data/2.5/weather?q=colombo&appid=ae4fe06579a79364db818382d52b17be')
            .then(response => response.json())
            .then(data => {
                var tempval = data ['main']['temp']-273.15;

                document.getElementById("tempvalcol").innerHTML = (tempval).toFixed(2);
            })

            .catch (err => alert("Weather Wada nathooo!!"))
        }

        