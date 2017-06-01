(function () {
    'use strict';

    angular
        .module('app')
        .controller('PromotionsController', PromotionsController);

    PromotionsController.$inject = ['$http'];

    function PromotionsController($http) {
        var vm = this;

        vm.promotions = [];
        // the chosen promotion by the user
        vm.promotion;
        vm.nbEtudiants;
        // the etudiant to edit
        vm.etudiant;
        vm.getAll = getAll;
        vm.getPromotion = getPromotion;
        vm.saveStudent = saveStudent;
        vm.deleteStudent = deleteStudent;
        // vm.getAffordable = getAffordable;
        // vm.deleteBooking = deleteBooking;
        // vm.createHotel = createHotel;

        init();

        function init() {
            getAll();
        }

        function getAll() {
            var url = "/promotion/all";
            var promotionsPromise = $http.get(url);
            promotionsPromise.then(function (response) {
                vm.promotions = response.data;
                vm.nbEtudiants = getNbEtudiants();
            });
        }

        function getPromotion(id) {
            var url = '/promotion/' + id;
            var promotionsPromise = $http.get(url);
            promotionsPromise.then(function (response) {
                vm.promotion = response.data;
            })
        }

        function saveStudent(nom, prenom, email, role, num_etudiant) {
            var user = {
                "id": '',
                "mdp": '',
                "email": email,
                "nom": nom,
                "prenom": prenom,
                "type": 'Etudiant'
            };
            var url = "/user/create";
            $http.post(url, user).then(function (response) {
                vm.user = response.data;
                var etudiant = {
                    "credit": '',
                    "role_etudiant": role,
                    "num_etudiant": num_etudiant,
                    "user": vm.user,
                    "promotion": vm.promotion
                };
                var url = "/etudiant/create";
                $http.post(url, etudiant).then(function (response) {
                    vm.etudiants = response.data;
                    // mise à jour avec le nouvel étudiant
                    updatePromotion(vm.promotion.id);
                });
            });
        }

        function getNbEtudiants() {
            var somme = 0;
            vm.promotions.forEach(function (element) {
                somme += element.les_etudiants.length;
            });
            return somme;
        }

        function deleteStudent(id) {
            var url = "/user/delete/" + id;
            $http.post(url).then(function () {
                updatePromotion(vm.promotion.id);
            })
        }

        function updatePromotion(id) {
            vm.promotion = getPromotion(id);
            getAll();
        }


        // function getAffordable() {
        //     var url = "/promotions/affordable/" + 100;
        //     var promotionsPromise = $http.get(url);
        //     promotionsPromise.then(function (response) {
        //         vm.promotions = response.data;
        //     });
        // }
        //
    }
})();