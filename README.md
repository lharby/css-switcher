# css-switcher

Application to toggle css files and store them in localStorage for retrieval later

Inside index.html we have to set several wrappers and one 'empty' css link which we can populate when the client selects an option.

```
<!-- put any inherited stylesheets in here (which should NOT be switched) -->
<span class="inherit">
  <link rel="stylesheet" type="text/css" href="css/css1.css">
</span>

<!-- put any stylesheets which can be switched off in here -->
<span class="common">
  <link rel="stylesheet" type="text/css" href="css/common.css" />
</span>

<!-- this is the switcher stylesheet, it is changed via javascript using a select input -->
<link rel="stylesheet" class="switcher" type="text/css" href="" />
```
