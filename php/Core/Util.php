<?php

namespace Core;

class Util
{
    // OBTENER LA URL DEL PROYECTO
    public static function baseUrl()
    {
        $baseUrl = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') ? 'https' : 'http');
        $baseUrl .= '://'.$_SERVER['HTTP_HOST'];
        $baseUrl .= str_replace(basename($_SERVER['SCRIPT_NAME']), '', $_SERVER['SCRIPT_NAME']);
        $baseUrl = str_replace(PUBLIC_FOLDER.'/', '', $baseUrl);
        return $baseUrl;
    }

    // PARA EVITAR INYECIÓN SQL
    public function clean_string($string){
        
        $string = trim($string);
        $string = stripslashes($string);
        // $string = htmlentities($string); //Le quita los acentos por eso no la uso aquí
        $string = addslashes($string);
        return $string;
    }

    // PLUGIN SWEET ALERT
    public function sweet_alert($data){

        if($data['alert'] == "simple"){
            $alert = " 
                <script>
                    swal({
                        type: '".$data['type']."',
                        title: '".$data['title']."',
                        text: '".$data['text']."'
                    });
                </script>
            ";

        }elseif($data['alert'] == "reload") {

            $alert = " 
                <script>
                    swal({
                        type: '".$data['type']."',
                        title: '".$data['title']."',
                        text: '".$data['text']."',
                        confirmButtonText: 'OK'
                        }).then(function(){
                                location.reload();
                        });
                </script>
            ";

        }elseif($data['alert'] == "clean") {

            $alert = " 
                <script>
                    swal({
                        type: '".$data['type']."',
                        title: '".$data['title']."',
                        text: '".$data['text']."',
                        confirmButtonText: 'OK'
                        }).then(function(){
                                $('form')[0].reset();
                        });
                </script>
            ";

        }elseif($data['alert'] == "redirect") {

            $alert = " 
                <script>
                    swal({
                        type: '".$data['type']."',
                        title: '".$data['title']."',
                        text: '".$data['text']."',
                        confirmButtonText: 'OK'
                        }).then(function(){
                                window.location.href = '".self::baseUrl()."'
                        });
                </script>
            ";

        }

        return $alert;
    }
}
