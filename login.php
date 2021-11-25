<?php
    $serverName = "localhost";
    $userName = "root";
    $pwd = "";
    $dbname = "campoMinado";

    $obj = json_decode(file_get_contents('php://input'));
    if(!empty($obj->Username) && !empty($obj->Password)){

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

    }
    else
        http_response_code(401);

        
    
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