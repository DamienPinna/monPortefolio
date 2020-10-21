<?php

    $array = array("prenom" => "", "nom" => "", "email" => "", "message" => "", "prenomError" => "", "nomError" => "", "emailError" => "", "messageError" => "", "isSuccess" => false);
        
    $emailTo = "damien.pinna@gmail.com";
    
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $array['prenom'] = verifyInput($_POST['prenom']);
        $array['nom'] = verifyInput($_POST['nom']);
        $array['email'] = verifyInput($_POST['email']);
        $array['message'] = verifyInput($_POST['message']);
        $array['isSuccess'] = true;
        $emailText = "";
        
        if(empty($array['prenom'])){
            $array['prenomError'] = "Il faut renseigner votre prénom !";
            $array['isSuccess'] = false;
        } else {
            $emailText .= "Prénom = {$array['prenom']}\n";
        }
        if(empty($array['nom'])){
            $array['nomError'] = "Il faut renseigner votre nom !";
            $array['isSuccess'] = false;
        } else {
            $emailText .= "Nom = {$array['nom']}\n";
        }
        if(!isEmail($array['email'])){
            $array['emailError'] = "Email non renseigné ou non valide !";
            $array['isSuccess'] = false;
        } else {
            $emailText .= "Email = {$array['email']}\n";
        }
        if(empty($array['message'])){
            $array['messageError'] = "Il faut écrire un message !";
            $array['isSuccess'] = false;
        } else {
            $emailText .= "Message = {$array['message']}\n";
        }
        if ($array['isSuccess']){
            $headers = "De: {$array['prenom']} {$array['nom']} <{$array['email']}>\r\nRépondre sur: {$array['email']}";
            mail($emailTo, "Un message de votre site", $emailText, $headers);
        }
        echo json_encode($array);
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