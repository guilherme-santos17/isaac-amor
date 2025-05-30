const urlDestino = "https://guilherme-santos17.github.io/isaac-amor/mensagem.html";
const qrImgs = document.querySelectorAll(".qrcode");

QRCode.toDataURL(urlDestino, { width: 60 }, function (err, dataUrl) {
  if (err) {
    console.error(err);
    return;
  }
  qrImgs.forEach(img => img.src = dataUrl);
});
