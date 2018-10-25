function createDialog($content){
	// Mostramos diálogo
	var dialog=$('<div class="dialog_background"><div class="dialog"><img src="img/close.png" class="dialog_close_button" /><div class="dialog_content">'+$content+'</div></div></div>')
	$('body').append(dialog)
	//dialog.hide();
	//$('.dialog_background .dialog').hide()
	//dialog.fadeIn();
	//$('.dialog_background .dialog').slideDown()

	$('.dialog .dialog_close_button').click(closeDialog)

	dialog.click(function(event){
		if ($(event.target).hasClass('dialog_background')) $(this).remove();
	})

	return dialog.find('.dialog');
}

function closeDialog(){
	$(".dialog_background").remove();
}