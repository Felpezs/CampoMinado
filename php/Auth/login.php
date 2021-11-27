<?php
//require_once("conexao.php");
require_once("../DB/UserDAO.php");
require_once("../Auth/sessao.php");

$obj = json_decode(file_get_contents('php://input'));

try {
    $user = UserDAO::getInstance();

    //$user->insertNewUser("Matheus","42545403021", "19/02/2000", "11872738855", "matheus@dac.unicamp.br", "Mored", "mored123");

    $userFromDB = $user->retrieveByUsername($obj->Username); // Recebe o usuário.

    if ($userFromDB == NULL || $userFromDB->getUsername() != $obj->Username) {

        http_response_code(404);
        echo json_encode(array("message" => "Usuario nao econtrado."));

    } else {
        if ($userFromDB->getPassword() == $obj->Password) { // Verifica se a senha fornecida é a mesma da enviado pelo usuário.
            $chave = criarSessao($userFromDB->getUsername());
            if (!empty($chave)) {
                http_response_code(201);

                $dataAtual = round(microtime(true) * 1000);

                $expDateMs = $dataAtual + 20 * 60000; // Quando a sessao irá expirar para o usuário, ("Cookie será deletado");

                echo json_encode(array("message" => "Chave criada com sucesso.", "usuario"=> $userFromDB->getUsername(), "chave" => $chave, "expDateMs" => $expDateMs));
                //echo json_encode(array("message" => "Chave criada com sucesso.", "usuario"=> $userFromDB->getUsername(), "chave" => $chave));
            } else {
                http_response_code(500);
                echo json_encode(array("message" => "Houve um erro ao gerar a chave."));
            }
        } else {
            http_response_code(402);
            echo json_encode(array("message" => "Sua senha esta incorreta.")); // Senha incorreta.
        }
    }
} catch (Exception $e) {
    echo "Houve um erro durante a requisição de login: {$e->getMessage()}";
}





        
    /*
    $name = (isset($_POST['userName'])) ? $_POST['userName'] : 'nome vazio';
    $computedString = "Olá, " . $name . "!";
    $array = ['userName' => $name, 'stringModificada' => $computedString];
    echo json_encode($array);
    */

    /*
    try {
        $PDO = new PDO("mysql:host=$serverName; dbname=$dbname", $userName, $pwd);
        $query = "SELECT * FROM User";

        $stmt = $PDO->query($query);

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            echo $row["Username"];
        }

    } catch (Exception $e) {
        echo "Connection Failed: {$e->getMessage()}";
    }  */
