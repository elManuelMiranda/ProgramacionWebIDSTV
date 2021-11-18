<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP 1</title>
</head>
<body>
    <?php
    // 
    ?>
    <form method="post" action="./php/action_page.php">
        <label>Nombre</label><br>
        <input type="text" name="name" />
        <input type="submit" name="Send" /></br>

        <label>Edad</label><br>
        <input type="text" name="age" />
        <input type="submit" name="Send" /></br>

        <label>Calificación</label><br>
        <input type="text" name="grade" />
        <input type="submit" name="Send" /></br>

        <label>Ingrese 10 calificaciones</label><br>

        <input type='text' name='g1' maxlength='2' style='width:25px;' />
        <input type='text' name='g2' maxlength='2' style='width:25px;'/>
        <input type='text' name='g3' maxlength='2' style='width:25px;'/>
        <input type='text' name='g4' maxlength='2' style='width:25px;'/>
        <input type='text' name='g5' maxlength='2' style='width:25px;'/>
        <input type='text' name='g6' maxlength='2' style='width:25px;'/>
        <input type='text' name='g7' maxlength='2' style='width:25px;'/>
        <input type='text' name='g8' maxlength='2' style='width:25px;'/>
        <input type='text' name='g9' maxlength='2' style='width:25px;'/>
        <input type='text' name='g10' maxlength='2' style='width:25px;'/>
        <br />
        <input type='submit' name='grades' value='Calcule' /><br />

        <label>Fibonacci</label><br>
        <input type="text" name="fibonacci" />
        <input type="submit" name="Send" /></br>
    </form>
</body>
</html>