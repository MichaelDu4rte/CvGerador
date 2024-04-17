<?php

// include autoloader

require __DIR__ . "/vendor/autoload.php";

use Dompdf\Dompdf;
use Dompdf\Options;


// Obtém os dados do formulário via método POST
$name = $_POST["name"];
$phone = $_POST["phone"];
$email = $_POST["email"];
$linkdin = $_POST["linkdin"];
$educationYear = $_POST["education-year"];
$educationCourse = $_POST["education-course"];
$educationName = $_POST["education-name"];
$aboutDesc = $_POST["about-desc"];
$experienceYear = $_POST["experience-year"];
$experienceName = $_POST["experience-name"];
$experienceFunction = $_POST["experience-function"];
$experienceDesc = $_POST["experience-desc"];

// Configurações adicionais
$options = new Options;
$options->setChroot(__DIR__);
$options->setIsRemoteEnabled(true);

// Inicializa o objeto Dompdf com as opções configuradas
$dompdf = new Dompdf($options);

// Carrega o conteúdo HTML do arquivo de template
$html = file_get_contents("template.html");


// Substitui as variáveis no template pelos valores obtidos do formulário

$html = str_replace("{{name}}", $name, $html);
$html = str_replace("{{phone}}", $phone, $html);
$html = str_replace("{{email}}", $email, $html);
$html = str_replace("{{linkdin}}", $linkdin, $html);


$html = str_replace("{{education-year}}", $educationYear, $html);
$html = str_replace("{{education-course}}", $educationCourse, $html);
$html = str_replace("{{education-name}}", $educationName, $html);

$html = str_replace("{{about-desc}}", $aboutDesc, $html);
$html = str_replace("{{experience-year}}", $experienceYear, $html);
$html = str_replace("{{experience-name}}", $experienceName, $html);

$html = str_replace("{{experience-function}}", $experienceFunction, $html);
$html = str_replace("{{experience-desc}}", $experienceDesc, $html);

// Carrega o HTML
$dompdf->loadHtml($html);

// Renderiza o PDF
$dompdf->render();


// Exibe o PDF no navegador para download
$dompdf->stream("cv.pdf", ["Attachment" => 0]);
