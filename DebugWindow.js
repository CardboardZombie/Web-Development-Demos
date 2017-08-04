function output(str) {
   this.winConsole.focus();
   this.winConsole.document.writeln(str);
}

function DebugWindow() {
   DebugWindow.prototype.output = output;
   this.winConsole = window.open("", "console", "width=500,height=500,resizable");   
   this.winConsole.document.open("text/plain");
}
