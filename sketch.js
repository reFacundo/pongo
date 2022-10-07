

//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 18;
let raio = diametro /2 ;

//variáveis minha raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let colidiu = false;

//variáveis raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYRaqueteOponente ;

//veriaveis de velocidade
let velocidadeXBolinha = 5; 
let velocidadeYBolinha = 5; 
let velocidadeYRaquete = 5;

// placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

/*function preload(){
  trilha = loadSound ("C:\Users\ruanf\Music\trilha.mp3");
  ponto = loadSound ("C:\Users\ruanf\Music\ponto.mp3");
  raquetada = loadSound ("C:\Users\ruanf\Music\raquetada.mp3");
}*/



  function setup() {
    createCanvas(600, 400);
 
  }

  function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    colisaoBolinha();
    mostraRaquete(xRaquete , yRaquete);
    mostraRaquete(xRaqueteOponente , yRaqueteOponente);
        //verificaColisaoRaquete();
    colisaoRaqueteBiblioteca(xRaquete, yRaquete);
    colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
    movimentaMinhaRaquete();
    movimentaRaqueteOponente();
    incluirPlacar();
    marcaPonto();
    bolinhaNaoFicaPresa();

  }

    function mostraBolinha() {
      circle(xBolinha, yBolinha, diametro);

    }

    function movimentaBolinha(){
      xBolinha += velocidadeXBolinha;
      yBolinha += velocidadeYBolinha;
    }

    function colisaoBolinha() {
      if (xBolinha + raio > width || xBolinha - raio < 0 ){
        velocidadeXBolinha *= -1;
      }

      if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
      }
    }

    function mostraRaquete (x,y){
      rect (x, y, raqueteComprimento , raqueteAltura )
    }


    function movimentaMinhaRaquete () {
      
      if (keyIsDown (UP_ARROW)) {
        yRaquete -= 10;
        }
      if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
      }
      
    }

    function verificaColisaoRaquete(){
        if (xBolinha - raio < xRaquete + raqueteComprimento 
        && yBolinha - raio < yRaquete + raqueteAltura 
        && yBolinha + raio > yRaquete){
          velocidadeXBolinha *= -1;
        }
    }

    function colisaoRaqueteBiblioteca(x,y) {
      colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);

      if(colidiu){
        velocidadeXBolinha *= -1;
      }

    }

    function movimentaRaqueteOponente() {

        if (keyIsDown (87)) {
        yRaqueteOponente -= 10;
        }
      if (keyIsDown(83)) {
        yRaqueteOponente += 10;
      }

    }
    function incluirPlacar(){
      stroke(255);
      textSize (16);
      textAlign (CENTER);
      fill(color(255, 140, 0));
      rect(150, 10, 40, 20);
      fill (255)
      text(meusPontos, 170,26)
      fill(color(255, 140, 0));
      rect(450, 10, 40, 20);
      fill(255);
      text(pontosDoOponente, 470, 26)
    }

    function marcaPonto(){
      if (xBolinha > 590){
        meusPontos +=1;
        }
      if (xBolinha < 10){
        pontosDoOponente +=1;
      }  
    }

    
    function bolinhaNaoFicaPresa(){
      if (xBolinha - raio < 0){
      xBolinha = 23
      }
    }


  
