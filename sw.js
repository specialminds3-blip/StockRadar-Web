
 // StockRadar PWA - Service Worker
 // Aktiedata og nyheder skal altid hentes friskt.

 self.addEventListener("install", event => {
   self.skipWaiting();
 });

 self.addEventListener("activate", event => {
   event.waitUntil(self.clients.claim());
 });

 self.addEventListener("fetch", event => {
   // Ingen caching af aktiedata, nyheder eller stemning.
   // Browseren henter filerne normalt fra nettet.
 });
