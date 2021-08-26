const base = (logo, navbar, content) => `
<html>

<head>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8" />

    <!-- Bootstrap -->
    <link href="static/ccpexactas/bootstrap/bootstrap.css" rel="stylesheet">

     <!-- Fonts -->

     <link href="static/ccpexactas/fonts/css.css" rel="stylesheet">
     <link href="static/ccpexactas/fonts/css2.css" rel="stylesheet">

    <!-- Styles -->
     <link href="static/ccpexactas/fonts/style.css" rel="stylesheet">

</head>

<body class="background-body">

    <div class="logo" ${logo ? '' : 'style="display: none"'}>
        <img src="static/ccpexactas/img/LogoCCP.png" class="w-100">
    </div>
    
    ${navbar}
    
    ${content}
    
    <script src="static/ccpexactas/bootstrap/jquery.min.js"></script>
    <script src="static/ccpexactas/bootstrap/bootstrap.bundle.js"></script>

</body>

</html>
`;

module.exports = base;


