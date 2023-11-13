function openImage(src, description) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    
    modal.style.display = 'block';
    modalImage.src = src;
    modalDescription.textContent = description;
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
  function openImage(src, description) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const sendMessageButton = document.getElementById('sendMessageButton');
  
    modal.style.display = 'block';
    modalImage.src = src;
    modalDescription.textContent = description;
  
    sendMessageButton.onclick = function() {
      sendMessage(src, description);
    }
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
  function sendMessage(imageSrc, description) {
    const phoneNumber = '+201113151054';
    const message = `هاي, انا مهتم بالمنتج دا! \nوصف الإشتراك: ${description}`;
    const whatsappUrl = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
  }
  