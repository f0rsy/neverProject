const servers = [
    // информация про сервера
        {
            title: 'Герцог',
            description: 'Добро пожаловать на IC2 Chill — индустриальный сервер, где технологии встречаются с атмосферой уюта! Погрузитесь в мир Industrial Craft 2, где вы сможете экспериментировать с механикой, создавать сложные машины и автоматизированные системы. Наше сообщество — это теплый и отзывчивый коллектив игроков, готовых делиться опытом и помогать друг другу в обучении. Присоединяйтесь к IC2 Chill и станьте частью нашего дружелюбного сообщества. Здесь всегда рады новым лицам, и ваше путешествие станет незабываемым!',
            images: ['img/titan.png'],
            price: ['39р']
        },
        {
            // title: 'IC2 Chill',
            // description: 'Скоро открытие!',
            // images: ['server2_image1.jpg', 'server2_image2.jpg', 'server2_image3.jpg']
        }
    ];
    
    let currentServer = 0;
    let currentImage = 0;
    
    document.querySelectorAll('.open-server-modal').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            currentServer = parseInt(button.getAttribute('data-server-id'));
            loadServer(currentServer);
            document.getElementById('serverModal').style.display = 'block';
        });
    });
    
    document.getElementById('closeModal').onclick = function () {
        document.getElementById('serverModal').style.display = 'none';
    }
    
    // document.getElementById('prevServer').onclick = function () {
    //     currentServer = (currentServer === 0) ? servers.length - 1 : currentServer - 1;
    //     currentImage = 0;
    //     loadServer(currentServer);
    // }
    
    // document.getElementById('nextServer').onclick = function () {
    //     currentServer = (currentServer === servers.length - 1) ? 0 : currentServer + 1;
    //     currentImage = 0;
    //     loadServer(currentServer);
    // }
    
    function loadServer(serverIndex) {
        document.getElementById('serverTitle').textContent = servers[serverIndex].title;
        document.getElementById('serverDescription').textContent = servers[serverIndex].description;
        document.getElementById('price').textContent = servers[serverIndex].price;
        loadGalleryImage(0);
    }
    function loadGalleryImage(imageIndex) {
        document.getElementById('galleryImage').src = servers[currentServer].images[imageIndex];
    }
    
    function loadMultipleGalleryImages(imageIndex) {
        const images = servers[currentServer].images;
    
        const prevIndex = (imageIndex === 0) ? images.length - 1 : imageIndex - 1;
        const nextIndex = (imageIndex === images.length - 1) ? 0 : imageIndex + 1;
    
        // Обновляем изображения
        document.getElementById('galleryImage1').src = images[prevIndex]; 
        document.getElementById('galleryImage2').src = images[imageIndex];
        document.getElementById('galleryImage3').src = images[nextIndex]; 
    }
    
    document.getElementById('prevImage').onclick = function () {
        const images = servers[currentServer].images;
        currentImage = (currentImage === 0) ? images.length - 1 : currentImage - 1;
    
        loadGalleryImage(currentImage);
    
        loadMultipleGalleryImages(currentImage);
    }
    
    document.getElementById('nextImage').onclick = function () {
        const images = servers[currentServer].images;
        currentImage = (currentImage === images.length - 1) ? 0 : currentImage + 1;
    
        loadGalleryImage(currentImage);
    
        loadMultipleGalleryImages(currentImage);
    }
    
    function setupThumbnailClicks() {
        document.querySelectorAll('.galleryImage').forEach((img, index) => {
            img.onclick = function () {
                const clickedIndex = (currentImage + index - 1 + servers[currentServer].images.length) % servers[currentServer].images.length;
    
                currentImage = clickedIndex; 
    
                loadGalleryImage(currentImage);
    
                loadMultipleGalleryImages(currentImage);
            };
        });
    }
    
    function loadGalleryImage(imageIndex) {
        document.getElementById('galleryImage').src = servers[currentServer].images[imageIndex];
    }
    
    function loadMultipleGalleryImages(imageIndex) {
        const images = servers[currentServer].images;
    
        const prevIndex = (imageIndex === 0) ? images.length - 1 : imageIndex - 1;
        const nextIndex = (imageIndex === images.length - 1) ? 0 : imageIndex + 1;
    
        document.getElementById('galleryImage1').src = images[prevIndex];
        document.getElementById('galleryImage2').src = images[imageIndex]; 
        document.getElementById('galleryImage3').src = images[nextIndex]; 
    
        setupThumbnailClicks();
    }
    
    document.getElementById('prevImage').onclick = function () {
        const images = servers[currentServer].images;
        currentImage = (currentImage === 0) ? images.length - 1 : currentImage - 1;
    
        loadGalleryImage(currentImage);
    
        loadMultipleGalleryImages(currentImage);
    }
    
    document.getElementById('nextImage').onclick = function () {
        const images = servers[currentServer].images;
        currentImage = (currentImage === images.length - 1) ? 0 : currentImage + 1;
    
        loadGalleryImage(currentImage);
    
        loadMultipleGalleryImages(currentImage);
    }
    
    loadMultipleGalleryImages(currentImage);