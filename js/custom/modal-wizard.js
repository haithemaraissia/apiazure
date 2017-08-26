$(document).ready(function () {
    $('#modal-config').on('show.bs.modal', function (e) {
        var image = $(e.relatedTarget).attr('src');
        $("#modal-image").attr("src", image);
    });
});