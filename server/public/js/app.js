const fileExists = (selector) => {
    let upload = document.querySelector(selector);
    if (!upload.files || upload.files.length == 0) {
        return false;
    }

    return true;
}

const uploadFirebase = (selector, campId, type) => {
    let upload = document.querySelector(selector);

    let file = upload.files[0];
    const ref = firebase.storage().ref();
    const name1 = campId + "-" + type;
    const metadata = { contentType: file.type };
    const task = ref.child(name1).put(file, metadata);
};

$(document).ready(() => {
    // $("#fileupload").fileupload({
    //     done: (e, data) => {
    //         console.log(data);
    //     }
    // });

    $("#submit").click(() => {

        let campId = Math.floor(Math.random() * 9000) + 1000;
        if (!fileExists("#burgs-fileupload") || !fileExists("#routes-fileupload")) {
            $("#res").text("Upload both files");
            return;
        }

        uploadFirebase("#burgs-fileupload", campId, "csv");
        uploadFirebase("#routes-fileupload", campId, "json");

        $("#res").text("Success! Campaign ID: " + campId);
    });
});
