# css-switcher

Application to toggle css files and store the value in localStorage for retrieval later

At runtime a function will execute and strip out any css files and style tags and set a css file according 

```
*<!-- this is the switcher stylesheet, it is changed via javascript using a select input -->*
<link rel="stylesheet" class="switcher" type="text/css" href="" />
```

Populate a select with all the stylesheets that the client can switch too.

The value of the first option MUST be 'default', in order for the javascript to work. If the client selects 'default' the switched css will be removed as well as clearing the css value from localStorage and reinsating any other css files we have removed when the client selected one of the options. The values of the other select options must match the name of a css file stored in a common css folder. In this example I have set them to:
```
css/css-switcher/
```

Example of the dropdown:

```
<select class="trigger">
  <option value="default">Default</option>
  <option value="css1">CSS 1</option>
  <option value="css2">CSS 2</option>
  <option value="luke">Luke</option>
</select>
```
