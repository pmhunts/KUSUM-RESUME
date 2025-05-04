window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('download-pdf-btn');
  if (!button) {
    console.log('Download PDF button not found');
    return;
  }
  console.log('Download PDF button found, attaching event listener');
  button.addEventListener('click', () => {
    console.log('Download PDF button clicked');
    const element = document.getElementById('resume-content');
    if (!element) {
      console.log('Resume content element not found');
      return;
    }
    const opt = {
      margin:       0.5,
      filename:     'Kusum_Mishra_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, logging: true, useCORS: true },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    try {
      console.log('Starting PDF generation');
      html2pdf().set(opt).from(element).save().then(() => {
        console.log('PDF generation completed');
      }).catch(err => {
        console.error('PDF generation error:', err);
      });
    } catch (error) {
      console.error('Exception during PDF generation:', error);
    }
  });
});
