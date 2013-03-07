angular.module("alch-templates").run(function($templateCache) {
  $templateCache.put("app/views/example.html",
    "<section>" +
    "  <h1>Buttons</h1>" +
    "    <h3>Sizes</h3>" +
    "      <input class=\"btn mini\" type=\"submit\" value=\"Mini\">" +
    "      <input class=\"btn small\" type=\"submit\" value=\"Small\">" +
    "      <input class=\"btn\" type=\"submit\" value=\"Default\">" +
    "      <input class=\"btn large\" type=\"submit\" value=\"Large\">" +
    "      <input class=\"btn huge\" type=\"submit\" value=\"Huge\">" +
    "" +
    "    <h3>Colors</h3>" +
    "      <input class=\"btn\" type=\"submit\" value=\"Default\">" +
    "      <input class=\"btn primary\" type=\"submit\" value=\"Default\">" +
    "      <input class=\"btn warning\" type=\"submit\" value=\"Default\">" +
    "" +
    "    <h3>Statuses</h3>" +
    "      <input class=\"btn\" type=\"submit\" value=\"Disabled\" disabled=\"disabled\" title=\"We are working on that...\">" +
    "      <input class=\"btn processing\" type=\"submit\" value=\"Processing\" disabled=\"disabled\" title=\"We are working on that...\">" +
    "    " +
    "    <h3>Groups</h3>" +
    "      <div class=\"btn-group\">" +
    "        <a class=\"btn\" href=\"#\">Left</a>" +
    "        <input class=\"btn\" type=\"button\" value=\"Middle\">" +
    "        <form>" +
    "          <div>" +
    "            <input type=\"hidden\">" +
    "            <input class=\"btn\" type=\"submit\" value=\"Right\">" +
    "            <input type=\"hidden\">" +
    "          </div>" +
    "        </form>" +
    "      </div>" +
    "" +
    "    <h3>Icons</h3>" +
    "      <a class=\"btn icon\" href=\"#\">Download link (:before)</a>" +
    "      <div class=\"btn icon\">" +
    "        <i class=\"download_icon-black\"></i>" +
    "        <a class=\"btn\" href=\"#\">Download link (&lt;i&gt;)</a>" +
    "      </div>" +
    "      <div class=\"btn icon\">" +
    "        <input class=\"btn\" type=\"submit\" value=\"Submit (:before)\">" +
    "      </div>" +
    "      <div class=\"btn icon\">" +
    "        <i class=\"download_icon-black\"></i>" +
    "        <input class=\"btn\" type=\"submit\" value=\"Submit (<i>)\">" +
    "      </div>" +
    "");
});
