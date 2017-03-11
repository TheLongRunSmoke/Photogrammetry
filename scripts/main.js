function showLiveModel(elm, id) {
    document.getElementById(id).setAttribute("url", "models/" + id + ".x3d");
    elm.style.display = "none";
}