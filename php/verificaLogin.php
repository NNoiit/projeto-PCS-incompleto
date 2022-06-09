<?php
session_start();

if(!$_SESSION['usuario']){
    hader('Location: login.php');
    exit();
}