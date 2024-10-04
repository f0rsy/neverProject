const servers = [
    {
        title: 'Герцог',
        images: ['img/gerzogBig.png'],
        price: ['39р']
    },
    {
        title: 'Князь',
        images: ['img/knyazBig.png'],
        price: ['49р']
    },
    {
        title: 'Принц',
        images: ['img/prinzBig.png'],
        price: ['129р']
    },
    {
        title: 'Титан',
        images: ['img/titanBig.png'],
        price: ['249р']
    },
    {
        title: 'Элита',
        images: ['img/eliteBig.png'],
        price: ['349р']
    },
    {
        title: 'Глава',
        images: ['img/glavaBig.png'],
        price: ['549р']
    },
    {
        title: 'Сквид',
        images: ['img/squidBig.png'],
        price: ['879р']
    },
    {
        title: 'Аспид',
        images: ['img/aspidBig.png'],
        price: ['1299р']
    },
    {
        title: 'Герой',
        images: ['img/heroBig.png'],
        price: ['1799р']
    },
    {
        title: 'Страж',
        images: ['img/strazhBig.png'],
        price: ['2799р']
    },
    {
        title: 'Привилегии',
        images: ['img/prevelegeCaseBig.png'],
        price: ['50р']
    },
    {
        title: 'Монеты',
        images: ['img/coinsCaseBig.png'],
        price: ['50р']
    },
    {
        title: 'Незеры',
        images: ['img/nezersCaseBig.png'],
        price: ['50р']
    },
    {
        title: 'Титулы',
        images: ['img/tituleCaseBig.png'],
        price: ['50р']
    },
    {
        title: 'Монеты',
        images: ['img/coinsBig.png'],
        price: ['1р']
    },
    {
        title: 'Незеры',
        images: ['img/nezersBig.png'],
        price: ['1р']
    }
];

let currentServer = 0;
let currentImage = 0;

function loadServer(serverIndex) {
    document.getElementById('serverTitle').textContent = servers[serverIndex].title;
    document.getElementById('price').textContent = servers[serverIndex].price;
    loadGalleryImage(0);

    // Проверяем, какой сервер выбран, и показываем или скрываем блок с классом "change"
    const changeBlock = document.querySelector('.change');
    if (servers[serverIndex].title === 'Монеты' && servers[serverIndex].price[0] === '1р' ||
        servers[serverIndex].title === 'Незеры' && servers[serverIndex].price[0] === '1р') {
        changeBlock.style.display = 'flex';
    } else {
        changeBlock.style.display = 'none';
    }

    // Проверяем, какой сервер выбран, и показываем или скрываем блок с классом "kollCase"
    const kollCaseBlock = document.querySelector('.kollCase');
    if (servers[serverIndex].title === 'Привилегии' && servers[serverIndex].price[0] === '50р' ||
        servers[serverIndex].title === 'Монеты' && servers[serverIndex].price[0] === '50р' ||
        servers[serverIndex].title === 'Незеры' && servers[serverIndex].price[0] === '50р' ||
        servers[serverIndex].title === 'Титулы' && servers[serverIndex].price[0] === '50р') {
        kollCaseBlock.style.display = 'flex';
    } else {
        kollCaseBlock.style.display = 'none';
    }

    // Синхронизация значения селектора карточки с инпутом "koll"
    document.querySelectorAll('.buyingCard select').forEach(selectElement => {
        selectElement.addEventListener('change', function () {
            if (selectElement.closest('.buyingCard').querySelector('.open-server-modal').getAttribute('data-server-id') == serverIndex) {
                document.getElementById('koll').value = selectElement.value;
            }
        });
    });
}

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

function loadGalleryImage(imageIndex) {
    document.getElementById('galleryImage').src = servers[currentServer].images[imageIndex];
}