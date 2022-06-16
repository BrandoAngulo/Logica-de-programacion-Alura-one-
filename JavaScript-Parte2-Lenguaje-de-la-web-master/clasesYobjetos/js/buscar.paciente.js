let botonBucar = document.querySelector("#buscar-paciente");

botonBucar.addEventListener("click", function () {
    let xhr = new XMLHttpRequest;
    xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhr.addEventListener("load", function () {
        let respuesta = xhr.responseText;
        //JON.parsear = convertir a valor json
        let pacientes = JSON.parse(respuesta);

        pacientes.forEach(function (paciente) {
            adicionarPaciente(paciente);
            console.log(paciente);
        });
    });
    xhr.send();
});