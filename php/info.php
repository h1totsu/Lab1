<?php
    $file_path = '../test.xml';
    if (file_exists($file_path)) {
        $xml = simplexml_load_file($file_path);
        echo (json_encode($xml));
    }
?>