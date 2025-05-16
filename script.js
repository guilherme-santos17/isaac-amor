function gerarQRCode() {
    const urlDestino = " https://guilherme-santos17.github.io/isaac-amor/";
    const img = document.getElementById("qrcode");
  
    QRCode.toDataURL(urlDestino, { width: 200 }, function (err, dataUrl) {
      if (err) {
        console.error(err);
        return;
      }
      img.src = dataUrl;
    });
  }
  