import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  submit(event) {
    event.preventDefault()

    const modal = document.querySelector("[data-controller='confirmmodal']").controller
    modal.open(this.element)
  }
}
