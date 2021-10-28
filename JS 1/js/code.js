name = prompt("Ingrese su nombre:");
var age = parseInt(prompt("Ingrese su edad:"));

alert("Bienvenido " + (name));

while (age < 0) {
    age = parseInt(prompt("Ingrese una edad real :l (mayor o igual a cero):"));
}

if (age < 18) {
    alert("Querido " + (name) + ", no tienes edad suficiente para conducir :).");
} else {
    alert("Querido " + (name) + ", tienes edad suficiente para conducir :D.");
}

grade = parseInt(prompt("Ingrese una calificación:"));

while (grade < 0 || grade > 10) {
    grade = prompt("Ingrese una calificación dentro del rango 0-10, (mayor o igual a cero y menor a 10):");
}

if (grade >= 0 && grade <= 3) {
    alert("Su calificación " + (grade) + " es muy deficiente.");
}
if (grade > 3 && grade <= 5) {
    alert("Su calificación " + (grade) + " es insuficiente.");
}
if (grade == 6) {
    alert("Su calificación " + (grade) + " es suficiente.");
}
if (grade == 7) {
    alert("Su calificación " + (grade) + " es bien.");
}
if (grade > 7 && grade <= 9) {
    alert("Su calificación " + (grade) + " es notable.");
}
if (grade == 10) {
    alert("Su calificación " + (grade) + " es sobresaliente.");
}

num = parseInt(prompt("¿Cuantas calificaciones desea capturar?"));

var average = 0;

for (let index = 0; index < num; index++) {
    grades = parseInt(prompt("Ingrese las calificaciones, una por una"));
    average = parseInt(average + grades);
}

average = average / num;

alert("Su promedio es: " + (average));

grades = 0;
average = 0;
ix = 1;

reply = "no";

while (reply == "No" || reply == "no" || reply == "NO" || reply == "n") {
    grades = parseInt(prompt("Ingrese la calificacion #" + (ix)));
    average = parseInt(average + grades);
    reply = prompt("¿Desea terminar? Si/No")
    ix++;
}

average = average / (ix);

alert("Su promedio es: " + (average));

limit = parseInt(prompt("Ingrese un limite para la serie Fibonacci:"));
var fibo = [0,1];

for(i=2; i <= (limit + 1); i++){
    fibo.push(fibo[i-1] + fibo[i-2]);
    document.write(fibo[i]+"<br/>");
}