<?php 
   include('../../php/Auth/sessao.php');
   sessaoValida();
?>
<!DOCTYPE html>
<html lang="">

<head>
	<meta charset="UTF-8" />
	<title>Campo Minado - Perfil</title>
	<link rel="stylesheet" type="text/css" href="style.css" />

	<!--Favicon-->
	<link rel="shortcut icon" href="../../img/icon.ico" type="image/x-icon" />

	<!--Fonte Londrina Solid-->
	<link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300;400&display=swap" rel="stylesheet" />

	<!--Fonte Inter-->
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap" rel="stylesheet" />

	<!--Estilo Footer-->
	<link rel="stylesheet" type="text/css" href="../../Components/Footer/style.css" />

	<!--Estilo NavBar-->
	<link rel="stylesheet" type="text/css" href="../../Components/Header/style.css" />
</head>

<body>
        <?php
            include('../../Components/Header/nav.php');
        ?>

        <div class="tela">
            <div class="ladoEsquerdo">

                <div class="posicionamento ">
                <img src="../../img/wallE.png" class="fotoPerfil" alt="Foto de Perfil"/>
                 <label for="image"><img src="../../img/icon-camera.png" class="camerazinha" alt="Camera"/>
                 <input type="file" accept="image/x-png,image/jpeg" id="image" name="image" style="display:none;"/>
                 </label>
                </div>

       <form>
                   <div class="fake-input">
                     <input type="text" placeholder="Nome" id="nome" disabled/>
                     <label for="nome">
                         <img src="../../img/edit.png" alt="Editar" width=25 id="lapisNome"/>
                    </label>
                     
                  </div>    

                   <div class="fake-input">
                     <input type="text" placeholder="Alterar data de nascimento (dd/mm/yyyy)" id="dtNas" disabled/>
                     <label for="dtNas">
                         <img src="../../img/edit.png" alt="Editar" width=25 id="lapisDtNas"/>
                    </label>
                  </div>    

                   <div class="fake-input">
                     <input type="text" placeholder="Telefone" id="telefone" disabled/>
                     <label for="telefone" >
                         <img src="../../img/edit.png" alt="Editar" width=25 id="lapisTelefone"/> 
                    </label>
                  </div>  

                   <div class="fake-input">
                     <input type="text" placeholder="Email" id="email" disabled/>
                     <label for="email" >
                         <img src="../../img/edit.png" alt="Editar" width=25 id="lapisEmail"/>
                    </label>
                  </div>     

                  <div class="fake-input">
                     <input type="password" placeholder="Senha" id="senha" disabled/>
                     <label for="senha" >
                         <img src="../../img/edit.png" alt="Editar" width=25 id="lapisSenha" />
                    </label>
                  </div>

                  <div class="fake-input">
                     <input type="password" placeholder="Confirmar Senha" id="confirmarSenha" disabled/>
                    <label for="confirmarSenha">
                         <img src="../../img/edit.png" alt="Editar" width=25 id="lapisConfirmarSenha"/>
                    </label>
                  </div>

                  <button type="submit" onclick="atualizarDadosNaSessao();">Confirmar</button>      
          </form>
            </div>

            <div class="verticalLine"></div>

            <div class="ladoDireito">
                <div class="colocacaoGeral">
                    <div class="posicaoRelativa">
                        <p style="padding: 20px">Colocação Geral</p>
                    </div>

                    <div class="posicionamento2">

                        <div class="ranking">
                            <div class="insideRanking">
                                <p>#1</p>
                            </div>
                        </div>

                       <div class="melhorPartida">
                            <div class="insideRetangulo">
                                <p>Melhor partida</p>
                            </div>
                        </div>

                        <div class="dimensoes">
                            <div class="insideDimensoes">
                                <p>4x4</p>
                            </div>
                        </div>
                        <div class="tempo">
                            <div class="insideTempo">
                                <p>1m30s</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="colocacaoGeral">
                    <div class="posicaoRelativa">
                        <p style="padding-top: 90px;padding-bottom: 20px">Melhor tempo</p>
                    </div>
                    <div class="posicionamento2">
                    <div class="ranking">
                        <div class="insideRanking">
                            <p>#1</p>
                        </div>
                    </div>

                    <div class="melhorPartida">
                        <div class="insideRetangulo">
                            <p>Melhor partida</p>
                        </div>
                    </div>

                    <div class="dimensoes">
                        <div class="insideDimensoes">
                            <p>4x4</p>
                        </div>
                    </div>
                    <div class="tempo">
                        <div class="insideTempo">
                            <p>1m30s</p>
                        </div>
                    </div>
                    </div>

                    <div class="posicaoRelativa2">
                      <div>
                        <p>Vitórias</p>
                        <div class="caixaDeBaixo">
                            <div class="insideBaixo">
                                <p>15</p>
                            </div>
                        </div>
                      </div>
                      <div>
                        <p>Derrrotas</p>
                        <div class="caixaDeBaixo">
                            <div class="insideBaixo">
                                <p>10</p>
                            </div>
                        </div>
                        </div>
                         <div>
                        <p>Total</p>
                        <div class="caixaDeBaixo">
                            <div class="insideBaixo">
                                <p>25</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php 
            include('../../Components/Footer/footer.php');
        ?>

          <script src="script.js"></script>
    </body>
</html>