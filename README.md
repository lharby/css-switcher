# css-switcher

Application to toggle css files and store the value in localStorage for retrieval later

Inside index.html we set several wrappers and one 'empty' css link which we can populate when the client selects a css option.


*<!-- put any inherited stylesheets in here (which should NOT be switched) -->*
```
<span class="constant">
  <link rel="stylesheet" type="text/css" href="css/constant.css">
</span>
```

*<!-- put any stylesheets which can be switched off in here -->*
```
<span class="common">
  <link rel="stylesheet" type="text/css" href="css/common.css">
  <link rel="stylesheet" type="text/css" href="css/other-styles.css">
  <link rel="stylesheet" type="text/css" href="css/third-style.css">
</span>
```
*<!-- this is the switcher stylesheet, it is changed via javascript using a select input -->*
```
<link rel="stylesheet" class="switcher" type="text/css" href="" />
```

Populate a select with all the stylesheets that the client can switch too.

The value of the first option MUST be 'default', in order for the javascript to work. If the client selects 'default' the switched css will be removed as well as clearing the css value from localStorage and resetting any other css files we have hidden when the client selected one of the options. The values of the other select options must match the name of a css file stored in a common css folder.

```
<select class="trigger">
  <option value="default">Default</option>
  <option value="css1">CSS 1</option>
  <option value="css2">CSS 2</option>
  <option value="luke">Luke</option>
</select>
```
