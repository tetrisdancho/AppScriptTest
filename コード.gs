function doGet(e) {
  var params = JSON.stringify(e, null, 2);
  return HtmlService.createHtmlOutput(params);
}