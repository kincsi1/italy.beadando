document.addEventListener("DOMContentLoaded", function() {
    const quizz = document.getElementById("quizz");
    const nextb = document.getElementById("nextb");
    let now = 1;
    
    nextb.addEventListener("click", function () {
        const now2 = document.getElementById("page" + now);
        const kovi2 = document.getElementById("page" + (now + 1));

        if (kovi2) {
            now2.style.display = "none";
            kovi2.style.display = "block";
            now++;
        } else {
            quiz();
        }
    });

    function quiz() {
        nameee = document.getElementById("nameee").value;
		
        let score = 0;
		
		const a = document.getElementById("k").checked;
        const b = document.getElementById("ny").checked;
        const c = document.getElementById("s").checked;
        const d = document.getElementById("a").checked;
        if (a==1){score = score + 5;}
        if (b==1){score = score + 2;}
        if (c==1){score = score + 3;}
        if (d==1){score = score + 4;}

        const e = document.getElementById("i").checked;
		const f = document.getElementById("n").checked;
		if (e==1){score = score + 1;}
        if (f==1){score = score + 2;}

		const g = document.getElementById("lista").selectedIndex;
        if (g==0) {score = score + 5;}
        if (g==1) {score = score + 2;}
        if (g==2) {score = score + 3;}
        if (g==3) {score = score + 4;}
		
		const h = document.getElementById("yes").checked;
        const i = document.getElementById("roma").checked;
        const j = document.getElementById("few").checked;
        const k = document.getElementById("no").checked;
        if (h==1){score = score + 1;}
        if (i==1){score = score + 5;}
        if (j==1){score = score + 3;}
        if (k==1){score = score + 2;}


        const l = document.getElementById("olasz").value;
		if (l>=0 && l<=3){score = score + 2;}
        if (l>=4 && l<=7){score = score + 3;}
        if (l>7) {score = score + 4;}


		if(kovi2==9){
		const eredmeny = document.getElementById("eredmeny");
        if (score == 8 || score <= 10){
            document.getElementById("kiiras").innerHTML = "Milánóba kell utaznod " + nameee ;
            document.getElementById("eredmeny").src="images/milano.jpg";
        }
        if (score >=1 && score <= 13){
            document.getElementById("kiiras").innerHTML = "Velencébe kell utaznod " + nameee;
            document.getElementById("eredmeny").src="images/velence.jpg";
        }
        if (score >=14 && score <= 17){
            document.getElementById("kiiras").innerHTML = "Firenzébe kell utaznod " + nameee;
            document.getElementById("eredmeny").src="images/firenze.jpg";
        }
        if (score >=18 && score <= 21){
            document.getElementById("kiiras").innerHTML = "Rómába kell utaznod " + nameee ;
            document.getElementById("eredmeny").src="images/roma.jpg";
        }
		}
	}
});