function openModal(imageSrc) {
  document.getElementById("tnp-modal").style.display = "block";
  document.getElementById("tnp-modal-image").src = imageSrc;
}

// Function to close the modal
function closeModal() {
  document.getElementById("tnp-modal").style.display = "none";
}
