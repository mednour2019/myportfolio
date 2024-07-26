function openNewWindow(projectId) {
  window.location.href = 'project-description/project-desc.html?project=' + projectId;
}
function openPdfViewer() {
  // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
  var pdfUrl = 'https://drive.google.com/file/d/1-YLLpkD1XZYsHrPUpUQ2PjugmbDmZJXh/preview';
  window.open('pdf-viewer/pdf-project-description.html?file=' + encodeURIComponent(pdfUrl));
}