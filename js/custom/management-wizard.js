$(document).ready(function () {
    $.fn.wizard.logging = true;
    var managementwizard = $('#management-wizard').wizard({
        keyboard: false,
        contentHeight: 520,
        contentWidth: 800,
        backdrop: 'static'
    });

    $(".chzn-select").chosen();

    managementwizard.on('closed', function () {
        managementwizard.reset();
    });

    managementwizard.on("reset", function () {
        managementwizard.modal.find(':input').val('').removeAttr('disabled');
        managementwizard.modal.find('.form-group').removeClass('has-error').removeClass('has-succes');
        managementwizard.modal.find('#fqdn').data('is-valid', 0).data('lookup', 0);
    });

    managementwizard.on("submit", function (wizard) {
        setTimeout(function () {
            managementwizard.trigger("success");
            managementwizard.hideButtons();
            managementwizard._submitting = false;
            managementwizard.showSubmitCard("success");
            managementwizard.updateProgressBar(0);
        }, 2000);
    });

    managementwizard.el.find(".wizard-success-, .im-done").click(function () {
        managementwizard.hide();
        setTimeout(function () {
            managementwizard.reset();
        }, 250);
    });

    managementwizard.el.find(".wizard-success .create-another-server").click(function () {
        managementwizard.reset();
    });

    $('#manage-wizard').click(function (e) {
        e.preventDefault();
        managementwizard.show();
    });
});