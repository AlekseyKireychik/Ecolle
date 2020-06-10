<?php
$result = array();

if (empty($result['error'])) {
    $name = protection($_POST['name']);
    $email = protection($_POST['email']);
    $mes = protection($_POST['mes']);
    $to .= "ttttt@ttttt.by";

    $subject = 'UI Leads';

    $message = '
        <html>
            <head>
                <title>Notice from the site UI Leads</title>
            </head>
            <body>
                <h3>Notice from the site UI Leads</h3>
                <p><b>Имя:</b> ' . $name . '</p>
                <p><b>Email:</b> ' . $email . '</p>
                <p><b>Сообщение:</b> ' . $mes . '</p>
            </body>
        </html>';

    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';
    $headers[] = 'From: ttttt@ttttt.by';

    mail($to, $subject, $message, implode("\r\n", $headers));


    $result['success'] = true;
    $result['message'] = $info[$_POST['title']];
}

echo json_encode($result);

function protection($value)
{
    $result = htmlspecialchars($value);
    $result = urldecode($result);
    $result = trim($result);

    return $result;
}