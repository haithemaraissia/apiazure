$(document).ready(function () {
    $.fn.wizard.logging = true;
    var wizard = $('#satellite-wizard').wizard({
        keyboard: false,
        contentHeight: 520,
        contentWidth: 800,
        backdrop: 'static'
    });

    $(".chzn-select").chosen();

    wizard.on('closed', function () {
        wizard.reset();
    });

    wizard.on("reset", function () {
        wizard.modal.find(':input').val('').removeAttr('disabled');
        wizard.modal.find('.form-group').removeClass('has-error').removeClass('has-succes');
    });

    wizard.on("submit", function (wizard) {
        setTimeout(function () {
            wizard.trigger("success");
            wizard.hideButtons();
            wizard._submitting = false;
            wizard.showSubmitCard("success");
            wizard.updateProgressBar(0);
        }, 2000);
    });

    wizard.el.find(".wizard-success .im-done").click(function () {
        wizard.hide();
        setTimeout(function () {
            wizard.reset();
        }, 250);
    });

    wizard.el.find(".wizard-success .create-another-server").click(function () {
        wizard.reset();
    });

    $('#open-wizard').click(function (e) {
        e.preventDefault();
        wizard.show();
    });
});