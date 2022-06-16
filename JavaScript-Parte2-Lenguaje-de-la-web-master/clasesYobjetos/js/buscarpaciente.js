let botonBucar = document.querySelector("#buscar-paciente");
botonBucar.addEventListener("click", function () {
    let xhr = new XMLHttpRequest;
    xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhr.addEventListener("load", function () {
        let errorAjax = document.querySelector("#error-ajax");
        if (xhr.status == 200) {
            errorAjax.classList.add("invisible");
            let respuesta = xhr.responseText;
            //JON.parsear = convertir a valor json
            let pacientes = JSON.parse(respuesta);
            pacientes.forEach(function(paciente) {
                adicionarPaciente(paciente);
            });
            //!hay un error en el else recordar para arreglarlo por que no esta obteniendo la respuesta de error de la ruta Http
        }else{
            errorAjax.classList.remove("invisible");
            console.log(xhr.status);
            //.responseText = Retorna DOMException "InvalidStateError" si el tipo de respuesta no es una cadena vacía o "texto".
            console.log(xhr.responseText);
        };

    })
    xhr.send();
});