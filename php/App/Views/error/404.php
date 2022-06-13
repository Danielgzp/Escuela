<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title?></title>
    <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet">

    <style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .error{
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        font-family: 'Lora', serif;
    }
    .error-emoji{
        color: #dadce0;
        font-size: 150px;
        text-align: center;
        font-weight: 700;
    }
    .error-text{
        white-space: pre-wrap;
        text-align: center;
        font-weight: 500;
    }

    .error-text p{
        margin-top: -20px;
    }

    @media (max-width: 1020px){
        .error-emoji{
            font-size: 80px;
        }
        .error-text h1{
            font-size: 20px;
        }
    }

    @media (max-width: 520px){
        .error-emoji{
            font-size: 50px;
        }
        .error-text h1{
            font-size: 15px;
        }
        .error-text p{
            font-size: 13px;
        }
    }
</style>
</head>
<body>

    <div class="error">
        <p class="error-emoji">(-.-')</p>
        <div class="error-text">
            <h1>Página no encontrada</h1>
            <p>Error 404</p>
        </div>
    </div>

</body>
</html>