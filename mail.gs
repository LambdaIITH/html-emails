function sendEmail() {
  var recipient = "lambda@iith.ac.in";
  var subject = "<Subject Line>";
  var htmlTemplate = HtmlService.createTemplateFromFile('index.html');
  var htmlContent = htmlTemplate.evaluate().getContent();
  
  MailApp.sendEmail({
    to: recipient,
    cc: "<CC emails seperated by comma>",
    subject: subject,
    htmlBody: htmlContent,
    name: "Lambda IIT Hyderabad"
  });
}