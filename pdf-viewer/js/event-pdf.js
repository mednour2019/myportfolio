window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var pdfUrl = urlParams.get('file');
    if (pdfUrl) {
        document.getElementById('pdf-viewer').src = pdfUrl;
    } else {
        alert('No PDF file specified');
    }
}

