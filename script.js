const urlDestino = "https://guilherme-santos17.github.io/isaac-amor/mensagem.html";
    const img = document.getElementById("qrcode");

    QRCode.toDataURL(urlDestino, { width: 140 }, function (err, dataUrl) {
      if (err) {
        console.error(err);
        return;
      }
      img.src = dataUrl;
    });