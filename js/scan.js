document.addEventListener('DOMContentLoaded', () => {
    const videoElem = document.createElement('video');
    const interactiveElem = document.getElementById('interactive');
    interactiveElem.appendChild(videoElem);

    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: videoElem
        },
        decoder: {
            readers: ["ean_reader", "ean_8_reader", "code_39_reader", "code_39_vin_reader", "codabar_reader", "upc_reader", "upc_e_reader", "i2of5_reader", "2of5_reader", "code_93_reader"],
        }
    }, function (err) {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
    });

    Quagga.onDetected(function (result) {
        const code = result.codeResult.code;
        console.log("Decoded code:", code);
        handleQRCodeScanResult(code); // Call your function to handle the scanned QR code result
        Quagga.stop(); // Stop scanning after successful detection
    });

    function handleQRCodeScanResult(code) {
        // Redirect to patient.html with the scanned QR code data as a query parameter
        window.location.href = `/patient.html?qrCode=${encodeURIComponent(code)}`;
    }
});
