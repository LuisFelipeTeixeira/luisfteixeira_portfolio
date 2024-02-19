function showCertificate(certificadoId) {
    var certificado = document.querySelectorAll('.certificado');
    certificado.forEach(function(certificado) {
        certificado.style.display = 'none';
    });
    var selectedCertificado = document.getElementById(certificadoId);
    selectedCertificado.style.display = 'block';
}
