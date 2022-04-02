<?php


$req = (object) $_REQUEST;

header('Content-Type: application/json');

print json_encode([
    'name'    => strtoupper($req->uname),
    'email' => strtoupper($req->email),
    'number' => strtoupper($req->number),
    'message' => strtoupper($req->message),
]);