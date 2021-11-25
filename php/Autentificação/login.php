<?php
    //require_once("conexao.php");
    

    $obj = json_decode(file_get_contents('php://input'));
    if(empty($obj->Username) || empty($obj->Password)){
        http_response_code(401);
        die("Login Inválido");
    }
    
    try {
        $PDO = new PDO("mysql:host=$serverName; dbname=$dbname", $userName, $pwd);
        $query = "SELECT * FROM User WHERE Username = $obj->Username";

        $stmt = $PDO->query($query);

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            echo $row["Username"];
        }

    } catch (Exception $e) {
        echo "Connection Failed: {$e->getMessage()}";
    }

    //Retornar usuarios
    $sql = $PDO->prepare("SELECT * FROM USER");
    $sql->execute();

    $fetchUsuarios = $sql->fetchAll();

    foreach($fetchUsuarios as $key => $value) {
        echo $value['nome'];
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
?>