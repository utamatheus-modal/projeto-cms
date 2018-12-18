clienteModule.controller('clienteController', ['clienteService', function(clienteService){
    var vm = this;

    // variables
    vm.cliente = {};
    vm.email = {};
    vm.modal = {};
    vm.modalConfirm = {};
    vm.cliente.lista_email_nvocc = [];
    // methods
    vm.init = function(){};

    vm.pesquisarCliente = function(){
        openModalLoad();
        clienteService.buscaClienteObjref(vm.cliente.objref).then(atualizarForm).finally(closeModalLoad);
        
    };

    vm.pesquisarMunicipio = function(){
        clienteService.buscaMunicipio(vm.cliente.objref_municipio).then(function(response){
            vm.cliente.nome_municipio = response.data.nome;
        })
    };
    
    vm.pesquisarNvocc = function(){
        clienteService.buscaNvocc(vm.cliente.objref_nvocc).then(function(response){
            vm.cliente.nome_nvocc = response.data.nome; 
        })
    };

    vm.pesquisarListaEmailNvocc = function(){
        clienteService.listaEmailNvocc(vm.cliente.objref).then(function(response){
            vm.cliente.lista_email_nvocc = response.data;
        })
    };

    vm.inserirCliente = function(){
        openModalLoad();
        clienteService.insereCliente(vm.cliente).then(function(response){
            console.log(response);
            vm.cliente = response.data;
            atualizarSelects();
            // vm.modal.title = "Sucesso na operação";
            // vm.modal.message = "Cliente cadastrado com sucesso!";
            openModal();
        }).finally(closeModalLoad);
        vm.limparCliente();
    };

    vm.inserirEmailNvocc = function(){
        openModalLoad();
        vm.email.objrefCliente = vm.cliente.objref;
        clienteService.insereEmailNvocc(vm.email).then(function(response){
            console.log(response);
            vm.email = {};
            vm.cliente.lista_email_nvocc.push(response.data);
            openModal();
        }).finally(closeModalLoad);
    };

    vm.deletarCliente = function(){
        openModalLoad();
        clienteService.deletaCliente(vm.cliente.objref).then(function(response){
            vm.limparCliente();
            vm.modal.title = "Sucesso na operação";
            vm.modal.message = "Cliente deletado com sucesso!";
            openModal();
        }).finally(closeModalLoad);
        vm.limparCliente();
    };

    vm.deletarEmailNvocc = function(){
        openModalLoad();
        clienteService.deletaEmailNvocc(vm.email.objref).then(function(response){
            vm.modal.title = "Sucesso na operação";
            vm.modal.message = "Email deletado com sucesso!";
            openModal();
        }).finally(closeModalLoad);
        vm.limparCliente();
    };

    vm.limparCliente = function(){
        vm.cliente = {};
    };

    var atualizarForm = function(response){
        vm.limparCliente();
        if (response.data != "") vm.cliente = response.data;
        atualizarSelects();
        if(vm.cliente.objref_municipio != null) vm.pesquisarMunicipio();
        vm.pesquisarListaEmailNvocc();
    } 

    vm.openModalConfirm = function(confirmacao){
        vm.modalConfirm.confirm = confirmacao;
        vm.modalConfirm.title = "Confirmação";
        vm.modalConfirm.message = "Você tem certeza que deseja executar esta operação?";
        openModalConfirm();
    }

    var atualizarSelects = function(){
        vm.cliente.situacao = (vm.cliente.situacao !=null) ? vm.cliente.situacao.toString() : "";
        vm.cliente.captacao = (vm.cliente.captacao !=null) ? vm.cliente.captacao.toString() : "";
    }

    vm.print = function(){
        console.log(vm.cliente);
        console.log(vm.cliente.lista_email_nvocc);
    }



}]);

    // utils
    
    // var errorResponse = function(error){
    //     console.log(error)
    //     vm.modal.title = "Erro!";
    //     vm.modal.message = "Deu ruim"
    //     // error.data.message;
    //     openModal();
    // }