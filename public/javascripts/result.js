var drawX = 0; //verificando quantidade de vezes que a função chkWinnerX foi chamada
var drawO = 0; //verificando quantidade de vezes que a função chkWinnerO foi chamada

//Função para pegar o atributo "val" de todas as img do tabuleiro
function setVetImg(){
    for(var i = 0; i < 9; i++){
        vetImg[i] = document.getElementById("home"+i).getAttribute("val");  
    }
}

//Função para verificar se o player X é o vencedor
function chkIfWinnerX(vet){
    //Linha 1
    if((vet[0] == "x") && (vet[1] == "x") && (vet[2] == "x")){
        winnerX();
    }
    //Linha 2
    else if((vet[3] == "x") && (vet[4] =="x") && (vet[5] == "x")){
        winnerX();
    }
    //Linha 3
    else if((vet[6] == "x") && (vet[7] == "x") && (vet[8] == "x")){
        winnerX();
    }
    //Diagonal primária
    else if((vet[0] == "x") && (vet[4] == "x") && (vet[8] == "x")){
        winnerX();
    }
    //Diagonal secundária
    else if((vet[2] == "x") && (vet[4] == "x") && (vet[6] == "x")){
        winnerX();
    }
    //Coluna 1
    else if((vet[0] == "x") && (vet[3] == "x") && (vet[6] == "x")){
        winnerX();
    }
    //Coluna 2
    else if((vet[1] == "x") && (vet[4] == "x") && (vet[7] == "x")){
        winnerX();
    }
    //Coluna 3
    else if((vet[2] == "x") && (vet[5] == "x") && (vet[8] == "x")){
        winnerX();
    }
    else{
        drawX++;
        return drawX;
    }
}

//Função para verificar se o player O é o vencedor
function chkIfWinnerO(vet){
    //Linha 1
    if((vet[0] == "o") && (vet[1] == "o") && (vet[2] == "o")){
        winnerO();
    }
    //Linha 2
    else if((vet[3] == "o") && (vet[4] =="o") && (vet[5] == "o")){
        winnerO();
    }
    //Linha 3
    else if((vet[6] == "o") && (vet[7] == "o") && (vet[8] == "o")){
        winnerO();
    }
    //Diagonal primária
    else if((vet[0] == "o") && (vet[4] == "o") && (vet[8] == "o")){
        winnerO();
    }
    //Diagonal secundária
    else if((vet[2] == "o") && (vet[4] == "o") && (vet[6] == "o")){
        winnerO();
    }
    //Coluna 1
    else if((vet[0] == "o") && (vet[3] == "o") && (vet[6] == "o")){
        winnerO();
    }
    //Coluna 2
    else if((vet[1] == "o") && (vet[4] == "o") && (vet[7] == "o")){
        winnerO();
    }
    //Coluna 3
    else if((vet[2] == "o") && (vet[5] == "o") && (vet[8] == "o")){
        winnerO();
    }
    else{
        drawO++;
        return drawO;
    }
}

//Função para verificar se deu empate
function chkIfDraw(){
    if(qntPlayers == 1){
        //Se o player jogou 5 vezes e ainda nao ganhou é pq deu empate (modo um jogador)
        if((contMoves == 5) && (drawX == 10) && (drawO == 10)){
            draw();
        }
    }
    else{
        //Se a soma das jogadas dos 2 players deu 9 e nao teve vencedor é pq deu empate
        if((contMoves == 9) && (drawX == 9) && (drawO == 9)){
            draw();
        }
    }
}

//Função para a CPU verificar se o Player irá ganhar na proxima jogada
function chkIfPlayerWinInNextMove(vet){
    //Linha 1
    if((vet[0] == player) && (vet[1] == player)){
        homeId = "home2"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Linha 1
    else if((vet[1] == player) && (vet[2] ==player)){
        homeId = "home0"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Linha 1
    else if((vet[0] == player) && (vet[2] == player)){
        homeId = "home1"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Linha 2
    else if((vet[3] == player) && (vet[4] == player)){
        homeId = "home5"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Linha 2
    else if((vet[4] == player) && (vet[5] ==player)){
        homeId = "home3"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Linha 2
    else if((vet[3] == player) && (vet[5] == player)){
        homeId = "home4"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Linha 3
    else if((vet[6] == player) && (vet[7] == player)){
        homeId = "home8"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Linha 3
    else if((vet[7] == player) && (vet[8] ==player)){
        homeId = "home6"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Linha 3
    else if((vet[6] == player) && (vet[8] == player)){
        homeId = "home7"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Coluna 1
    else if((vet[0] == player) && (vet[3] == player)){
        homeId = "home6"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Coluna 1
    else if((vet[3] == player) && (vet[6] ==player)){
        homeId = "home0"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Coluna 1
    else if((vet[0] == player) && (vet[6] == player)){
        homeId = "home3"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Coluna 2
    else if((vet[1] == player) && (vet[4] == player)){
        homeId = "home7"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Coluna 2
    else if((vet[4] == player) && (vet[7] ==player)){
        homeId = "home1"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Coluna 2
    else if((vet[1] == player) && (vet[7] == player)){
        homeId = "home4"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Coluna 3
    else if((vet[2] == player) && (vet[5] == player)){
        homeId = "home8"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Coluna 3
    else if((vet[5] == player) && (vet[8] ==player)){
        homeId = "home2"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Coluna 3
    else if((vet[2] == player) && (vet[8] == player)){
        homeId = "home5"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Diagonal Primária
    else if((vet[0] == player) && (vet[4] ==player)){
        homeId = "home8"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Diagonal Primária
    else if((vet[4] == player) && (vet[8] == player)){
        homeId = "home0"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Diagonal Primária
    else if((vet[0] == player) && (vet[8] == player)){
        homeId = "home4"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Diagonal Secundária
    else if((vet[6] == player) && (vet[4] ==player)){
        homeId = "home2"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Diagonal Secundária
    else if((vet[2] == player) && (vet[4] == player)){
        homeId = "home6"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    //Diagonal Secundária
    else if((vet[2] == player) && (vet[6] == player)){
        homeId = "home4"
        getAttVal(homeId)
        if(getVal == "branco"){
            vet[homeId] = cpu;
            setSrcAndValCpu(homeId);
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

//Função para remover o atributo "onclick" de todas as img
function rmOnclick(){
    for(var i = 0; i < 9; i++){
        document.getElementsByClassName("home")[i].removeAttribute("onclick");
        document.getElementsByClassName("home")[i].setAttribute("val", "");
    }
}

//Função para exibir a div do resultado
function showResult(){
    document.getElementById("result").style.display = "block";
}

//Função para exibir se o ganhador for o player "X"
function winnerX(){
    rmOnclick()
    showResult()
    console.log("Winner: Player X");
}

//Função para exibir se o ganhador for o player "O"
function winnerO(){
    rmOnclick()
    showResult()
    console.log("Winner: Player O");
}

//Função para exibir se deu Empate
function draw(){
    rmOnclick()
    showResult()
    console.log("Draw");
}

//Função para verificar o resultado
function chkResult(){
    setVetImg();
    chkIfWinnerO(vetImg);
    chkIfWinnerX(vetImg);
    chkIfDraw();
}