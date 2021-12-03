<?php
    function pontuacao($dados){
            $tempo = ($dados->tempo < 0 ? ($dados->tempo * -1): $dados->tempo);
            if($dados->modo == "1")
                $tempo = (($dados->bombas*$dados->linhas*$dados->colunas)/3) - $tempo;

            $pontuacao = ($dados->bombas/($dados->linhas) * ($dados->colunas)) / $tempo;
        
            if($dados->modo == "1")
              $pontuacao += $pontuacao * 0.55;
          
            return round($pontuacao*1000);
    }

    if(isset($_POST['dados']))
    {
        $dados = json_decode($_POST['dados']);
        $array = ['colunas' => $dados->colunas, 'linhas' => $dados->linhas
        ,'bombas' => $dados->bombas, 'modo' => $dados->modo,
        'tempo' => ($dados->tempo < 0 ? ($dados->tempo * -1): $dados->tempo), 'resultado' => $dados->resultado,
        'pontos' => ($dados->resultado == 0 ? 0 : pontuacao($dados))];
        echo json_encode($array);
    }

?>