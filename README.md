OS-WKWebViewBridgeExample-Swift
===============================

A sample app in Swift that demonstrates how to bridge between JS-Native code using WKWebViews in iOS8.
In this example, we load a simple HTML page that has a button using a WKWebView. When the page loads, the native app injects a JS ("User Script") into the loaded document that listens for button click event and calls back into the native app ("Script Message") . The native app implements a listener to handle the callback message from the web page and updates the color of the button from within the callback handler.

A correponding presentation is available for download at http://www.priyaontech.com/download/25/
