import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = []

  connect() {
    this.form = null
  }

  open(form) {
    this.form = form
    document.getElementById("confirm-modal").classList.remove("hidden")
  }

  yes() {
    if (this.form) this.form.submit()
    this.close()
  }

  no() {
    this.close()
  }

  close() {
    document.getElementById("confirm-modal").classList.add("hidden")
    this.form = null
  }
}
