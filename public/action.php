<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require('vendor/autoload.php');

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

if ($name != "" && $phone != "" && $email != "" && $subject != "" && $message != "") {
  switch ($subject) {
    case 'quotation':
      $subject = "Orçamento";
      break;

    case 'financial':
      $subject = "Financeiro";
      break;

    case 'quotation':
      $subject = "Orçamento";
      break;

    case 'supplier':
      $subject = "Fornecedor";
      break;

    default:
      $subject = "Contato";
      break;
  }

  $mail = new PHPMailer(true);

  try {
    //Server settings
    // $mail->SMTPDebug = 2;
    $mail->isSMTP();
    $mail->Host       = 'smtp.googlemail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'giancarlo@produceria.com.br';
    $mail->Password   = 'pelcifjqxwtoctdx';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;

    //Recipients
    $mail->setFrom('giancarlo@produceria.com.br', 'Produceria');
    $mail->addAddress('contato@produceria.com.br', 'Produceria');

    // Content
    $content = "<html><body>";
    $content .= '<div align="center">';
    $content .= '<img src="http://dev.produceria.com.br/old/img/produceria-logo-email-superior.png">';
    $content .= '<div style="text-align: left; width: 560px;">';
    $content .= "<h2>$subject</h2><br>";
    $content .= "<b>Nome</b><br>";
    $content .= "$name<br>";
    $content .= "<br>";
    $content .= "<b>Telefone</b><br>";
    $content .= "$phone<br>";
    $content .= "<br>";
    $content .= "<b>Email</b><br>";
    $content .= "$email<br>";
    $content .= "<br>";
    $content .= "<b>Mensagem</b><br>";
    $content .= "$message<br>";
    $content .= "<br>";
    $content .= "</div>";
    $content .= '<img src="http://dev.produceria.com.br/old/img/produceria-logo-email-inferior.png">';
    $content .= "</div>";
    $content .= "</body></html>";

    $mail->isHTML(true);
    $mail->Subject = '[Website] Nova Mensagem: '.$subject;
    $mail->Body    = $content;

    $mail->send();
    echo 'Message has been sent';

    return http_response_code(200);

  } catch (Exception $e) {
      echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";

      return http_response_code(500);
  }
}

echo "Message could not be sent.";

return http_response_code(400);
