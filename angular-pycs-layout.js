(function(){
    "use strict";

    angular.module('pycsLayout',[])
    .directive('pycsLayout', ['$timeout', function($timeout){
        return {
            abstract: 'AE',
            scope: {
                pycsLayout: '=',
                idealHeight: '=?'
            },
            templateUrl: 'pycs-tmp.html',
            link: function(scope, elem, attr){
                function updateListGallery(){

                }

                if (!scope.idealHeight)
                    scope.idealHeight = 150; // set default

                scope.$watch('[pycsLayout, idealHeight]', function(newVal){
                    if (scope.pycsLayout && scope.pycsLayout.length > 0){
                        $timeout(function(){
                            // if (!scope.idealHeight)
                            //     scope.idealHeight = 150; // set default
                            $(elem).pycsLayout({
                                /* the class of the elements we want to layout. */
                                pictureContainer: ".picture",
                                /* the height we want our elements to have. */
                                idealHeight: scope.idealHeight,
                                /* the horizontal and vertical margin between the elements (in px). */
                                gutter: 0

                            });
                        },1000);
                    }
                })
            }
        }
    }]);
})();
