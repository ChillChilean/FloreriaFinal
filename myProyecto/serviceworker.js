var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    '/static/css/estilos_floreria.css',
    '/static/img/logo.png',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(

      fetch(event.request)
      .then((result)=>{
        return caches.open(CACHE_NAME)
        .then(function(c) {
          c.put(event.request.url, result.clone())
          return result;
        })
        
      })
      .catch(function(e){
          return caches.match(event.request)
      })
  

     
    );
});




//NOTIFICACIONES PUSH

importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');


var firebaseConfig = {
    apiKey: "AIzaSyCoSSop6fBK1kQ-8fXCSuM2m5w-vptK520",
    authDomain: "floreria-f08d4.firebaseapp.com",
    databaseURL: "https://floreria-f08d4.firebaseio.com",
    projectId: "floreria-f08d4",
    storageBucket: "floreria-f08d4.appspot.com",
    messagingSenderId: "95444658015",
    appId: "1:95444658015:web:58b4ea36f5a237ecb9b8ea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let messaging = firebase.messaging();

  messagin.setBackgroundMessageHandler(function(payload){
    let title = 'Nueva flor disponible';
      
    let options = {
      body:'Compre ya la nueva flor',
      icon:'static/img/petu.png.png'
    }

    self.registration.showNotification(title, options);

  });