// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a[data-confirm").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const message = this.dataset.confirm;
            const modal = document.getElementById("confirm-modal");
            const modalText = document.getElementById("confirm-modal-text");
            const yesBtn = document.getElementById("confirm-yes");
            const noBtn = document.getElementById("confirm-no");

            modalText.textContent = message;
            modal.classList.remove("hidden");

            yesBtn.onclick = () => {
                if (this.dataset.method === "delete") {
                    Rails.ajax({
                        url: this.href,
                        type: "DELETE",
                        dataType: "json"
                    });
                } else {
                    window.location.href = this.href;
                }
            };

            noBtn.onclick = () => {
                modal.classList.add("hidden");
            };
        });
    });
});