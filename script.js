
// Utility functions
function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
}

function getCategoryLabel(category) {
    return category === 'skincare' ? 'Skincare' : 'Makeup';
}

// Product grid functionality
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    grid.innerHTML = products.map((product, index) => `
        <div class="product-card" style="animation-delay: ${index * 100}ms">
            <div class="product-image-container">
                <img src="${product.images[0]}" alt="${product.name}" class="product-image">
                <div class="product-category">${getCategoryLabel(product.category)}</div>
            </div>
            <div class="product-content">
                <div>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-subtitle">${product.subtitle}</p>
                </div>
                <p class="product-description">${product.shortDescription}</p>
                <div class="product-footer">
                    <div class="product-price">R$ ${formatPrice(product.price)}</div>
                    <a href="product-detail.html?id=${product.id}" class="btn-primary">Ver mais</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Image gallery functionality
let currentImageIndex = 0;

function initImageGallery(images) {
    currentImageIndex = 0;
    updateMainImage(images);
    updateThumbnails(images);
}

function updateMainImage(images) {
    const mainImage = document.getElementById('main-image');
    if (mainImage) {
        mainImage.src = images[currentImageIndex];
    }
}

function updateThumbnails(images) {
    const container = document.getElementById('thumbnail-container');
    if (!container) return;

    container.innerHTML = images.map((image, index) => `
        <div class="thumbnail ${index === currentImageIndex ? 'active' : ''}" 
             onclick="selectImage(${index})">
            <img src="${image}" alt="Miniatura ${index + 1}">
        </div>
    `).join('');
}

function selectImage(index) {
    const images = getCurrentProductImages();
    if (images && index >= 0 && index < images.length) {
        currentImageIndex = index;
        updateMainImage(images);
        updateThumbnails(images);
    }
}

function prevImage() {
    const images = getCurrentProductImages();
    if (images) {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateMainImage(images);
        updateThumbnails(images);
    }
}

function nextImage() {
    const images = getCurrentProductImages();
    if (images) {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateMainImage(images);
        updateThumbnails(images);
    }
}

function getCurrentProductImages() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    return product ? product.images : null;
}

// Product detail functionality
function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        renderProductNotFound();
        return;
    }

    document.title = `${product.name} - MV.Beauty`;
    renderProductDetail(product);
}

function renderProductNotFound() {
    const container = document.getElementById('product-detail');
    if (!container) return;

    container.innerHTML = `
        <div style="text-align: center; padding: 3rem 0;">
            <h2 style="font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 1rem;">
                Produto não encontrado
            </h2>
            <button onclick="goBack()" class="btn-primary">
                Voltar ao catálogo
            </button>
        </div>
    `;
}

function renderProductDetail(product) {
    const container = document.getElementById('product-detail');
    if (!container) return;

    container.innerHTML = `
        <div class="product-detail-grid">
            <!-- Image Gallery -->
            <div class="image-gallery">
                <div class="main-image-container">
                    <img id="main-image" src="${product.images[0]}" alt="${product.name}" class="main-image">
                    ${product.images.length > 1 ? `
                        <button class="image-nav prev" onclick="prevImage()">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M15 18l-6-6 6-6"/>
                            </svg>
                        </button>
                        <button class="image-nav next" onclick="nextImage()">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M9 18l6-6-6-6"/>
                            </svg>
                        </button>
                    ` : ''}
                </div>
                ${product.images.length > 1 ? `
                    <div class="thumbnail-container" id="thumbnail-container">
                        <!-- Thumbnails will be rendered by JS -->
                    </div>
                ` : ''}
            </div>

            <!-- Product Info -->
            <div class="product-info">
                <div>
                    <div class="product-header">
                        <span class="category-badge">${getCategoryLabel(product.category)}</span>
                        <svg class="heart-small" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </div>
                    <h1 class="product-detail-title">${product.name}</h1>
                    <p class="product-detail-subtitle">${product.subtitle}</p>
                    <div class="product-detail-price">R$ ${formatPrice(product.price)}</div>
                </div>
  <button class="whatsapp-button" onclick="redirectToWhatsApp('${product.name}', '${product.subtitle}')">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                    Comprar no WhatsApp
                </button>
                <div class="info-card">
                    <h3>Sobre o produto</h3>
                    <p>${product.description}</p>
                </div>

                <div class="info-card">
                    <h3>Benefícios</h3>
                    <div class="benefits-list">
                        ${product.benefits.map(benefit => `
                            <div class="benefit-item">
                                <div class="benefit-dot"></div>
                                <span>${benefit}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="info-card">
                    <h3>Ingredientes principais</h3>
                    <p>${product.ingredients}</p>
                </div>


                
                <!-- Trust Indicators -->
                <div class="trust-indicators">
                    <div class="trust-item">
                        <svg class="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                        <p class="trust-text">Produto Original</p>
                    </div>
                    <div class="trust-item">
                        <svg class="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M16 3h5v5M21 3l-7.5 7.5M16 3H8a5 5 0 0 0 0 10h8M12 13l9 9-9-9z"/>
                        </svg>
                        <p class="trust-text">Entrega Rápida</p>
                    </div>
                    <div class="trust-item">
                        <svg class="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                        </svg>
                        <p class="trust-text">Suporte 24h</p>
                    </div>
                </div>

                <!-- WhatsApp Button -->
              
            </div>
        </div>
    `;

    // Initialize image gallery if multiple images
    if (product.images.length > 1) {
        initImageGallery(product.images);
    }
}

// WhatsApp functionality
function redirectToWhatsApp(productName, productSubtitle) {
    const message = encodeURIComponent(
        `Olá! Tenho interesse no produto *${productName}* - ${productSubtitle}. Gostaria de mais informações sobre disponibilidade e formas de pagamento.`
    );
    window.open(`https://wa.me/5512991998856?text=${message}`, '_blank');
}

// Navigation
function goBack() {
    window.history.back();
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Load products on index page
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        renderProducts();
    }
    
    // Load product detail on product detail page
    if (window.location.pathname.includes('product-detail.html')) {
        loadProductDetail();
    }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
    if (window.location.pathname.includes('product-detail.html')) {
        loadProductDetail();
    }
});
