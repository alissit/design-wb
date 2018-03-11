import $ from "jquery";


class Modal {

	constructor(){
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}

	events(){
		console.log(this);
		this.openModalButton.click(this.openModal.bind(this));
		this.closeModalButton.click(this.closeModal.bind(this));
		$(document).keyupthis.keyPressHandler.bind(this);


	}

	keyPressHandler(e) {
		if(e.keycode == 27) {
			this.closeModal();
		}

	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");

	}

}

export default Modal;