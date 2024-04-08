
function sim(){
            alert("Você aceitou! Te amo muito, minha Pamonha! <3")
        }

        function desvia(t){
            var btn = t;
            btn.style.position = 'absolute';
            btn.style.bottom = geraPosicao(10, 90);
            btn.style.left = geraPosicao(10, 90);
            console.log("Opa")
        }

        function geraPosicao(min, max){
            return (Math.random() * (max - min) +min) + "%";
        }
