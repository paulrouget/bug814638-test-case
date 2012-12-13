Components.utils.import("resource://gre/modules/Services.jsm");

let win1, win2;

function startup() {
  win1 = Services.ww.openWindow(null, "chrome://bug814638/content/host1.xul", "_blank", "chrome", null);
  win2 = Services.ww.openWindow(null, "chrome://bug814638/content/host2.xul", "_blank", "chrome", null);
  win1.onload = function() {
    let button = win1.document.querySelector("iframe").contentDocument.
                               getElementById("swap");
    button.onclick = function() {
      let iframe1 = win1.document.querySelector("iframe");
      let iframe2 = win2.document.querySelector("iframe");
      iframe1.QueryInterface(Components.interfaces.nsIFrameLoaderOwner);
      iframe1.swapFrameLoaders(iframe2);
    }
  }
}

function shutdown() {
  win1.close();
  win2.close();
}

function install() {}
function uninstall() {}
