<?php

    $arrayError = array("prenomError" => "", "nomError" => "", "emailError" => "", "messageError" => "", "isSuccess" => false);
        
    $emailTo = "damien.pinna@gmail.com";
    
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $prenom = verifyInput($_POST['prenom']);
        $nom = verifyInput($_POST['nom']);
        $email = verifyInput($_POST['email']);
        $message = verifyInput($_POST['message']);
        $arrayError['isSuccess'] = true;
        $emailText = "";
        
        if(empty($prenom)){
            $arrayError['prenomError'] = "Il faut renseigner votre prénom !";
            $arrayError['isSuccess'] = false;
        } else {
            $emailText .= "Prénom = {$prenom}\n";
        }
        if(empty($nom)){
            $arrayError['nomError'] = "Il faut renseigner votre nom !";
            $arrayError['isSuccess'] = false;
        } else {
            $emailText .= "Nom = {$nom}\n";
        }
        if(!isEmail($email)){
            $arrayError['emailError'] = "Email non renseigné ou non valide !";
            $arrayError['isSuccess'] = false;
        } else {
            $emailText .= "Email = {$email}\n";
        }
        if(empty($message)){
            $arrayError['messageError'] = "Il faut écrire un message !";
            $arrayError['isSuccess'] = false;
        } else {
            $emailText .= "Message = {$message}\n";
        }
        if ($arrayError['isSuccess']){
            $headers = "De: {$prenom} {$nom} <{$email}>\r\nRépondre sur: {$email}";
            mail($emailTo, "Message du potfolio", $emailText, $headers);
        }
        echo json_encode($arrayError);
    }

    function isEmail($var){
        return filter_var($var, FILTER_VALIDATE_EMAIL);
    }

    function verifyInput($var){
        $var = trim($var);
        $var = stripslashes($var);
        $var = htmlspecialchars($var);
        return $var;
    }
?>