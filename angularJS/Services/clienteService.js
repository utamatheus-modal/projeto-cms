clienteModule.service('clienteService', ['$http', function($http){

    var _buscaClienteObjref = function(objref) {
        return $http.get("http://localhost:8000/api/cliente/" + objref);
    }

    var _insereCliente = function(cliente) {
        return $http.post("http://localhost:8000/api/cliente", cliente, {responseType:"text/plain"});
    }

    var _deletaCliente = function(objref) {
        return $http.delete("http://localhost:8000/api/cliente/" + objref);
    }

    var _buscaMunicipio = function(objref) {
        return $http.get("http://localhost:8000/api/municipio/" + objref);
    }

    var _buscaNvocc = function(objref) {
        return $http.get("http://localhost:8000/api/nvocc/" + objref);
    }

    // var _buscaEmailNvocc = function(objref) {
    //     return $http.get("http://localhost:8000/api/emailautorizadonvocc/" + objref);
    // }

    var _listaEmailNvocc = function(objrefCliente) {
        return $http.get("http://localhost:8000/api/emailsautorizadosnvocc/" + objrefCliente);
    }

    var _insereEmailNvocc = function(email) {
        return $http.post("http://localhost:8000/api/emailautorizadonvocc", email, {responseType:"text"});
    }

    var _deletaEmailNvocc = function(objref) {
        return $http.delete("http://localhost:8000/api/emailautorizadonvocc/" + objref);
    }

    var _deletaListaEmailNvocc = function(objrefCliente) {
        return $http.delete("http://localhost:8000/api/emailautorizadonvoccobjrefcliente/" + objrefCliente);
    }


    return {
        buscaClienteObjref: _buscaClienteObjref,
        insereCliente: _insereCliente,
        deletaCliente: _deletaCliente,
        buscaMunicipio: _buscaMunicipio,
        buscaNvocc: _buscaNvocc,
        // buscaEmailNvocc: _buscaEmailNvocc,
        listaEmailNvocc: _listaEmailNvocc,
        insereEmailNvocc: _insereEmailNvocc,
        deletaEmailNvocc: _deletaEmailNvocc,
        deletaListaEmailNvocc: _deletaListaEmailNvocc
    }
}]);