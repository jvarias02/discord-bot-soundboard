function send_sound(sound) {
    console.log("hey");
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/song?name=" + sound);
    xhr.send('hi');
}
