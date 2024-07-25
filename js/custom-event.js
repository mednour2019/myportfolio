function openNewWindow(projectId) {
  window.location.href = 'project-description/project-desc.html?project=' + projectId;
}
function openPdfViewer() {
  // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
  var pdfUrl = '../pdf-viewer/pdf-files/taches-technos.pdf';
  window.open('pdf-viewer/pdf-project-description.html?file=' + encodeURIComponent(pdfUrl));
}