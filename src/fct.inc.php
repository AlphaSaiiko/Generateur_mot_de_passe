<?php
function renderHeader(string $title,array $menu):string {
    // Début du document HTML
    $header = '<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <title>'.$title.'</title>
		<style>
			form {
				display: grid;
				grid-template-columns: 1fr 1fr;
				margin: 20px 10px;
				gap: 30px 0;
			};
		</style>
    </head>
    <body>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">MonSite</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">';

    // Génération dynamique des éléments du menu
    foreach ($menu as $menuItem) {
        $header .= '<li class="nav-item">
                        <a class="nav-link" href="#">' . $menuItem . '</a>
                    </li>';
    }

    // Suite du document HTML
    $header .= '   </ul>
                </div>
            </div>
        </nav>
    
        <div class="container mt-5">';

    return $header;
}

function renderFooter():string {
    // Retourne la fin du document HTML
    return '
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </body>
</html>';
}
?>