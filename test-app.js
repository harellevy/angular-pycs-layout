angular.module('testApp',[
    'pycsLayout'
]).controller('mainCtrl',['$scope', function($scope){
    $scope.myList = [
        {img: 'https://cdn.pixabay.com/photo/2017/12/05/16/39/decorating-christmas-tree-2999722__340.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2017/09/02/15/10/greece-2707528__340.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2017/12/02/23/05/fruit-bowl-2993938__340.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2017/11/06/09/53/animal-2923186__340.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2017/11/18/17/09/strawberry-2960533__340.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2017/06/26/02/47/people-2442565__340.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2017/03/11/13/19/oilseed-rape-2135026__340.jpg'}
    ];

    $scope.height = 150;
}]);
