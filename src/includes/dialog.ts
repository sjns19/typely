import type { Dialog } from "../types.g";

import { createElem } from "../utils/helper";

const Dialog: Dialog = {
	documentBody: <HTMLBodyElement>document.body,
	construct: function () {
		const main = createElem("div", "modal", this.documentBody);
		const contents = createElem("div", "modal-contents", main);

		this.header = <HTMLDivElement>createElem("div", "modal-header", contents);
		this.body = <HTMLDivElement>createElem("div", "modal-body", contents);
		this.footer = <HTMLDivElement>createElem("div", "modal-footer flex justify-center", contents);
		this.confirmButton = <HTMLButtonElement>createElem("button", "btn btn-primary btn-sm", this.footer);
		this.cancelButton = <HTMLButtonElement>createElem("button", "btn btn-secondary btn-sm", this.footer);
		this.cancelButton.style.display = "none";
	},

	hide: function () {
		this.documentBody.classList.remove("modal-visible");

		if (this.confirmCallback !== undefined) {
			this.confirmButton?.removeEventListener("click", this.confirmCallback);
			this.confirmCallback = undefined;
		}

		if (this.cancelCallback !== undefined) {
			this.cancelButton?.removeEventListener("click", this.cancelCallback);
			this.cancelCallback = undefined;
		}
	},

	show: function (data) {
		const { header, body, confirmButton, cancelButton } = this;

		if (header && body && cancelButton && confirmButton) {
			const {
				title,
				contents,
				confirmButtonText,
				cancelButtonText,
				showCancelButton,
				onConfirm,
				onCancel
			} = data;

			this.documentBody.classList.add("modal-visible");

			header.innerHTML = title;
			body.innerHTML = contents;

			this.confirmCallback = getCallbackByType(onConfirm);

			confirmButton.innerHTML = confirmButtonText || "Okay";
			confirmButton.addEventListener("click", this.confirmCallback);

			if (showCancelButton !== true) {
				cancelButton.style.display = "none";
				return;
			}

			cancelButton.innerHTML = cancelButtonText || "Close";
			cancelButton.style.display = "block";

			this.cancelCallback = getCallbackByType(onCancel);
			cancelButton.addEventListener("click", this.cancelCallback);
		}
	},
};

function getCallbackByType(callback: () => void) {
	return function () {
		if (callback !== undefined) {
			callback();
		}
		Dialog.hide();
	};
}

export default Dialog;
