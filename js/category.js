var storageRef = firebase.storage().ref();

storageRef.child('/Website/logo2.png').getDownloadURL()
  .then((url) => {
    var img1 = document.getElementById('logo');
    img1.setAttribute('src', url);
  })
  .catch((error) => {
    console.log("ERROR LOADING IMAGES: " + error);
  });

storageRef.child('/Website/rendering.png').getDownloadURL()
  .then((url) => {
    var img1 = document.getElementById('render');
    img1.setAttribute('src', url);
  })
  .catch((error) => {
    console.log("ERROR LOADING IMAGES: " + error);
  });

storageRef.child('/Website/browser.png').getDownloadURL()
  .then((url) => {
    var img1 = document.getElementById('browser');
    img1.setAttribute('src', url);
  })
  .catch((error) => {
    console.log("ERROR LOADING IMAGES: " + error);
  });

storageRef.child('/Website/media.png').getDownloadURL()
  .then((url) => {
    var img1 = document.getElementById('media');
    img1.setAttribute('src', url);
  })
  .catch((error) => {
    console.log("ERROR LOADING IMAGES: " + error);
  });

storageRef.child('/Website/android.png').getDownloadURL()
  .then((url) => {
    var img1 = document.getElementById('MOS');
    img1.setAttribute('src', url);
  })
  .catch((error) => {
    console.log("ERROR LOADING IMAGES: " + error);
  });

storageRef.child('/Website/office.png').getDownloadURL()
  .then((url) => {
    var img1 = document.getElementById('office');
    img1.setAttribute('src', url);
  })
  .catch((error) => {
    console.log("ERROR LOADING IMAGES: " + error);
  });

storageRef.child('/Website/photoediting.png').getDownloadURL()
  .then((url) => {
    var img1 = document.getElementById('photo');
    img1.setAttribute('src', url);
  })
  .catch((error) => {
    console.log("ERROR LOADING IMAGES: " + error);
  });

storageRef.child('/Website/os.png').getDownloadURL()
  .then((url) => {
    var img1 = document.getElementById('PCOS');
    img1.setAttribute('src', url);
  })
  .catch((error) => {
    console.log("ERROR LOADING IMAGES: " + error);
  });

storageRef.child('/Website/languages.png').getDownloadURL()
  .then((url) => {
    var img1 = document.getElementById('lang');
    img1.setAttribute('src', url);
  })
  .catch((error) => {
    console.log("ERROR LOADING IMAGES: " + error);
  });
storageRef.child('/Website/videoediting.png').getDownloadURL()
  .then((url) => {
    var img1 = document.getElementById('video');
    img1.setAttribute('src', url);
  })
  .catch((error) => {
    console.log("ERROR LOADING IMAGES: " + error);
  });

function open1(n) {
  console.log("Category: " + n);
  location.replace("/html/softwares.html")
  window.localStorage.setItem("cat", n);
}