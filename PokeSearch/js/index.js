var mensaje = document.getElementById('container');

function searchPoke() {
    var pokemon = document.getElementById("sPokemon").value;
    if (pokemon.length > 0) {
        loading.style.display = 'block';
        axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon, {
        responseType: 'text'
      })
        .then(function(res) {
          if(res.status==200) {
            mensaje.innerHTML = "<img src=" + res.data.sprites.front_default + "></br>Name: " + res.data.name + "</br>Type: " + res.data["types"]["0"].type.name + "</br>Base experience: " + res.data.base_experience + "</br>Height: " + res.data.height + " ft</br>Weight: " + res.data.weight + " kg";
            
          }
          console.log(res);
        })
        .catch(function(err) {
          mensaje.innerHTML = 'Error de conexión' + "</br>" + err;
        })
        .then(function() {
          loading.style.display = 'none';
        });
        document.getElementById("sPokemon").value = '';
    } else {
        alert("Por favor introduce el nombre de un pokemon");
    }
    return false;
}