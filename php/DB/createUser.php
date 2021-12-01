<?php 
    require_once("DAO.php");
    require_once("UserDAO.php");
    http_response_code(500);

    $obj = json_decode(file_get_contents('php://input'));

    $user = UserDAO::getInstance()->insertNewUser($obj->Nome, $obj->Cpf, $obj->DataNasc, $obj->Telefone, $obj->Email, $obj->Username, $obj->Senha);

    if(!empty($user)){
        http_response_code(200);
    }
    
    else {
        http_response_code(201);
        echo json_encode(array("message" => "Houve um erro ao criar o usuário."));            
    }

?>