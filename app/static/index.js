function sleep(ms) {
  const wakeUpTime = Date.now() + ms
  while (Date.now() < wakeUpTime) {}
}

function dragOver(e) {
    e.stopPropagation();
    e.preventDefault();
    if (e.type == "dragover") {
        $(e.target).css({
            "background-color": "black",
            "outline-offset": "-20px"
        });
    } else {
        $(e.target).css({
            "background-color": "gray",
            "outline-offset": "-10px"
        });
    }
}

async function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);

    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
        alert('upload just one image.');
        return;
    }
    if (files[0].type.match(/image.*/)) {
        const blob = window.URL.createObjectURL(files[0]);
        $(e.target).css({
            "background-image": "url(" + blob + ")",
            "outline": "none",
            "background-size": "100% 100%"
        });
        const formData = new FormData(document.getElementById('myform'));
        formData.append('image', files[0]);
        const respond = await fetch('/predict', {
            method: 'POST',
            body: formData
        });
        console.log("waiting load image to output")
        sleep(500)

        const uint8Array = (await respond.body.getReader().read()).value;
        const image = new Blob([uint8Array], {type:'image/jpg'});
        const url = URL.createObjectURL(image);
        $('.content2').css({
            "background-image": "url(" + url + ")"
        });
    } else {
        alert('its not an image.');
        return;
    }
}

$('#myform')
    .on("dragover", dragOver)
    .on("dragleave", dragOver)
    .on("drop", uploadFiles);