# angular-pycs-layout

AngularJs wrapper for pycs-layout jquery plugin.

## Getting Started

### Dependencies
- AngularJs 1.2+
- jQuery 1 / 2 / 3

### Installing

to install use
```
bower install -s https://github.com/harellevy/angularJs-pycs-layout.git
```
and include in your html these scripts
```
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/jquery/dist/jquery.js"></script>
<script src="bower_components/angular-pycs-layout/pycs-layout.jquery.js"></script>
<script src="bower_components/angular-pycs-layout/angular-pycs-layout.js"></script>
```

### Usage

inject **'pycsLayout'** to your angular module
and use the directive
```
<div pycs-layout="myList" ideal-height="height"></div>
```
or
```
<div pycs-layout="myList" ideal-height="'150'"></div>
```

in the controller:
```
 $scope.myList = [
        {img: 'https://cdn.pixabay.com/photo/2017/12/05/16/39/decorating-christmas-tree-2999722__340.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2017/09/02/15/10/greece-2707528__340.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2017/12/02/23/05/fruit-bowl-2993938__340.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2017/11/06/09/53/animal-2923186__340.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2017/11/18/17/09/strawberry-2960533__340.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2017/06/26/02/47/people-2442565__340.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2017/03/11/13/19/oilseed-rape-2135026__340.jpg'}
    ];
```
