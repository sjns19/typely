/**
 * Event driven reusable modal dialog.
 *
 * Pretty similar to SweetAlert2
 */

var Dialog = {
  documentBody: document.body,

  construct: function () {
    var main = document.createElement("div");

    main.classList.add("modal");
    this.documentBody.appendChild(main);

    var contents = document.createElement("div");

    contents.classList.add("modal-contents");
    main.appendChild(contents);

    this.header = document.createElement("div");
    this.header.classList.add("modal-header"),
      contents.appendChild(this.header);

    this.body = document.createElement("div");
    this.body.classList.add("modal-body");
    contents.appendChild(this.body);

    this.footer = document.createElement("div");
    this.footer.classList.add("modal-footer", "flex", "justify-center");
    contents.appendChild(this.footer);

    this.confirmButton = document.createElement("button");
    this.confirmButton.classList.add("btn", "btn-primary", "btn-sm");

    this.cancelButton = document.createElement("button");
    this.cancelButton.classList.add("btn", "btn-secondary", "btn-sm");
    this.cancelButton.style.display = "none";

    this.footer.appendChild(this.confirmButton);
    this.footer.appendChild(this.cancelButton);
  },

  hide: function () {
    this.documentBody.classList.remove("modal-visible");

    if (this.confirmCallback !== undefined) {
      this.confirmButton.removeEventListener("click", this.confirmCallback);
      this.confirmCallback = undefined;
    }

    if (this.cancelCallback !== undefined) {
      this.cancelButton.removeEventListener("click", this.cancelCallback);
      this.cancelCallback = undefined;
    }
  },

  show: function (data) {
    this.header.innerHTML = data.title;
    this.body.innerHTML = data.contents;
    this.confirmButton.innerHTML = data.confirmButtonText || "Okay";
    this.documentBody.classList.add("modal-visible");

    this.confirmCallback = getCallbackByType(data.onConfirm);
    this.confirmButton.addEventListener("click", this.confirmCallback);

    if (data.showCancelButton !== true) {
      this.cancelButton.style.display = "none";
      return;
    }

    this.cancelButton.innerHTML = data.cancelButtonText || "Close";
    this.cancelButton.style.display = "block";
    this.cancelCallback = getCallbackByType(data.onCancel);
    this.cancelButton.addEventListener("click", this.cancelCallback);
  },
};

function getCallbackByType(callback) {
  return function () {
    if (callback !== undefined) {
      callback();
    }
    Dialog.hide();
  };
}

export default Dialog;
