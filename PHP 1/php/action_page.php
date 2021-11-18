<?php
    echo "Bienvenido ", $_REQUEST["name"] , "</br><br/>";
    $name = $_REQUEST["name"];
    $age = (int)$_REQUEST["age"];
    $grade = (int)$_REQUEST["grade"];
    
    if ($age > 18)
    {
        echo "Querido " , $name , ", tienes edad suficiente para conducir :D";
    } else {
        echo "Querido " , $name , ", no tienes edad suficiente para conducir :).";
    }
    echo  "</br><br/>";
    
    if ($grade >= 0 && $grade <= 3) {
        echo"Su calificación ", $grade , " es muy deficiente.";
    }
    if ($grade > 3 && $grade <= 5) {
        echo"Su calificación ", $grade , " es insuficiente.";
    }
    if ($grade == 6) {
        echo"Su calificación ", $grade , " es suficiente.";
    }
    if ($grade == 7) {
        echo"Su calificación ", $grade , " es bien.";
    }
    if ($grade > 7 && $grade <= 9) {
        echo"Su calificación ", $grade , " es notable.";
    }
    if ($grade == 10) {
        echo"Su calificación " , $grade , " es sobresaliente.";
    }
    echo "<br/><br/>";
    
    $g1 = $_REQUEST["g1"];$g2 = $_REQUEST["g2"];$g3 = $_REQUEST["g3"];$g4 = $_REQUEST["g4"];$g5 = $_REQUEST["g5"];$g6 = $_REQUEST["g6"];$g7 = $_REQUEST["g7"];$g8 = $_REQUEST["g8"];$g9 = $_REQUEST["g9"];$g10 = $_REQUEST["g10"];
    
    $average = ($g1 + $g2 + $g3 + $g4 + $g5 + $g6 + $g7 + $g8 + $g9 + $g10)/10;
    echo "PROMEDIO ", $average, "<br/><br/>";

    $num = (int)$_REQUEST["fibonacci"];  
    echo "FIBONACCI<br/>";  
    echo "\n";
    function series($num){  
        if ($num == 0){  
        return 0;  
        } else if ( $num == 1){  
            return 1;  
        }  else {  
            return (series($num-1) + series($num-2));  
        }   
    }
    for ($i = 0; $i < $num; $i++){  
    echo series($i);  
    echo "\n";  
    }
    echo  "</br>";
?>

<a href="../Index.php">Regresar</a>