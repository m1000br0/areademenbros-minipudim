/**
 * CONFIGURAÇÃO DOS VÍDEOS
 * Edite aqui os vídeos do curso.
 * Formato: { title: "...", description: "...", videoUrl: "...", thumbnail: "..." }
 */
const videos = [
    {
        id: 1,
        title: "Aula 1: SUCESSO DE VENDAS-Mini Pudim Sem forno,sem ovos",
        description: "Aprenda a fazer mini pudins sem forno e sem ovos - perfeito para quem quer começar a vender!",
        videoUrl: "https://drive.google.com/file/d/1DJmd3zQ0Pdn0kGkHE70d52PkuLI14a3j/preview",
        thumbnail: "https://i.pinimg.com/1200x/c1/99/5f/c1995f6c44c62833db81dceea11c047e.jpg"
    },
    {
        id: 2,
        title: "Aula 2: FATURE 150 REAIS Com Mini Pudim de Chocolate",
        description: "Descubra como faturar R$150 com mini pudins de chocolate irresistíveis..",
        videoUrl: "https://drive.google.com/file/d/1sy8Pa-jC0QJS6G1ShJJNwee1s67DVQr5/preview",
        thumbnail: "https://i.pinimg.com/1200x/83/71/cb/8371cbedb58234b0b218c0a49460ed1e.jpg"
    },
    {
        id: 3,
        title: "Aula 3: Mini Pudim Cremoso decorado",
        description: "Técnicas de decoração para deixar seus mini pudins cremosos ainda mais bonitos e vendáveis.",
        videoUrl: "https://drive.google.com/file/d/1dp8HXH1wLA_PfRIJvGizFYH6HWVnSi2O/preview",
        thumbnail: "https://i.ibb.co/8LNkDpxQ/Screenshot-6.png"
    },
    {
        id: 4,
        title: "Aula 4: PUDIM NO POTE 2 SABORES DELICIOSO",
        description: "Crie pudins no pote com dois sabores deliciosos - ótima opção para vender!",
        videoUrl: "https://drive.google.com/file/d/1j0Bb7Qam7bXyS2ZndHfelOouu8j1hclG/preview",
        thumbnail: "https://i.ibb.co/9k5hxHmx/Gemini-Generated-Image-myfymbmyfymbmyfy.png"
    },
    {
        id: 5,
        title: "Aula 5: Mini Pudim de Café",
        description: "Para os amantes de café - uma sobremesa sofisticada com sabor marcante.",
        videoUrl: "https://drive.google.com/file/d/12_TAfcmE0cqD8qSe4GsE0_x81ilTFoa7/preview",
        thumbnail: "https://i.pinimg.com/1200x/d3/4c/75/d34c757057d755653cef480240b5f3d1.jpg"
    },
    {
        id: 6,
        title: "Aula 6:PUDIM DE PANETONE FÁCIL E DELICIOSO",
        description: "Aproveite sobras de panetone para criar um pudim fácil e delicioso!",
        videoUrl: "https://drive.google.com/file/d/1tcWsqUVLjmXgn-IDCoB5IQWgu5xZy3hd/preview",
        thumbnail: "https://i.ibb.co/pvR4yXHL/Screenshot-7.png"
    },
    {
        id: 7,
        title: "Aula 7: PUDIM DE LIMÃO SEM FORNO",
        description: "Refrescante pudim de limão sem precisar de forno - rápido e prático!",
        videoUrl: "https://drive.google.com/file/d/1aTHs7nXKWfGPrSbYcLvkyO0TFtyK4OAK/preview",
        thumbnail: "https://i.pinimg.com/736x/85/73/85/85738517066176fb79db3be8e3044e48.jpg"
    },
    {
        id: 8,
        title: "Aula 8: Pudim Proteico Fit de microondas",
        description: "Versão saudável e proteica feita no microondas - ideal para o público fitness.",
        videoUrl: "https://drive.google.com/file/d/1zMTPo-CsFlrVRMddA4F5vXV3WgpWm3T3/preview",
        thumbnail: "https://i.pinimg.com/736x/5a/ef/f9/5aeff9951ceca431d7e00c863ee6923d.jpg"
    },
    {
        id: 9,
        title: "Aula 9: MINI PUDIM DE COCO QUEIMADO",
        description: "Combinação deliciosa de coco com caramelo queimado - sabor tropical irresistível!",
        videoUrl: "https://drive.google.com/file/d/16Ra6pHS9KiNbB6kRqQS3sdTr7ZcqicPc/preview",
        thumbnail: "https://i.pinimg.com/1200x/d4/c5/0f/d4c50f37ccc26b41387e978e3b4b2a79.jpg"
    },
    {
        id: 10,
        title: "Aula 10: O melhor pudim de caramelo japonês",
        description: "Técnica japonesa para criar o pudim de caramelo mais cremoso e perfeito.",
        videoUrl: "https://drive.google.com/file/d/1JvYPmSrGF4OBf9VM03JAGADlTpvghNKA/preview",
        thumbnail: "https://i.ibb.co/jZRwX7k3/Screenshot-8.png"
    },
    {
        id: 11,
        title: "Aula 11: PUDIM DE LEITE NINHO COM FRUTAS VERMELHAS SEM OVOS SEM GELATINA SEM FORNO)",
        description: "Uma receita prática: sem ovos, sem gelatina e sem forno!",
        videoUrl: "https://drive.google.com/file/d/1uDCQcK3ij5gTYU1OpkZf2qn1e5lYQC1a/view",
        thumbnail: "https://i.pinimg.com/1200x/0b/c3/ea/0bc3ea79a5fcb56d9b791445767e384d.jpg"
    },
    {
        id: 12,
        title: "Aula 12: PUDIM MORANGO DO AMOR NO POTE",
        description: "Descubra o segredo do Pudim Morango do Amor no Pote.",
        videoUrl: "https://drive.google.com/file/d/1R6q1SoMjKaPy0YM-XUvcMB_aRm87P7ui/view",
        thumbnail: "https://i.ibb.co/BHRsKRbf/supawork-6c40946e2961410b9823d4b9dde9d4ad.png"
    },
    {
        id: 13,
        title: "Aula 13: COMO FAZER CALDA DE OURO PARA PUDIM ",
        description: "Aprenda o passo a passo para uma calda brilhante e perfeita para seus pudins.",
        videoUrl: "https://drive.google.com/file/d/1Rwp2F1wed05CNMo1vjT10ZZbMy4gjFR4/view",
        thumbnail: "https://i.pinimg.com/1200x/44/62/e7/4462e7859f3858c19ed4b69868fc7452.jpg"
    },
    {
        id: 14,
        title: "Aula 14: COMO COMEÇAR SEU NEGÓCIO DE PUDIM",
        description: " Dicas valiosas para dar o pontapé inicial no seu empreendimento.",
        videoUrl: "https://drive.google.com/file/d/1hs6Jm1Vu2IIjD6LjetrdnlIvOgeixlDf/view",
        thumbnail: "https://i.ibb.co/5hxXRrMr/Gemini-Generated-Image-co9nmnco9nmnco9n.png"
    }
];

/**
 * CONFIGURAÇÃO DOS PDFS
 * Edite aqui os materiais em PDF.
 * Formato: { title: "...", pdfUrl: "...", thumbnail: "..." }
 */
const pdfs = [
    {
        id: 1,
        title: "E-book: Receitas Completas do Curso",
        description: "Todas as receitas do curso em formato PDF para consulta rápida.",
        pdfUrl: "https://drive.google.com/file/d/1AG_sipQOXkge09zKAqIeYKuBBtDYtF3R/view?usp=sharing",
        thumbnail: "https://i.ibb.co/mCSJ5YPz/uyuyu.png"
    },
    {
        id: 2,
        title: "PRECIFICAÇÃO",
        description: "Método prático para calcular seus custos e margem de lucro nos pudins.",
        pdfUrl: "https://drive.google.com/file/d/1Qom8qW-f3KvvILg3yXWIKCjyzPVKM-kw/view?usp=sharing",
        thumbnail: "https://placehold.co/400x500/121214/00E676?text=Precificacao"
    },
    {
        id: 3,
        title: "COMO VENDER",
        description: "Estratégias para vender seus Mini Pudins de forma rápida e lucrativa.",
        pdfUrl: "https://drive.google.com/file/d/19rXeZkU9TQlOKzwwUP6NBOzjmuI7tCRy/view?usp=sharing",
        thumbnail: "https://placehold.co/400x500/121214/00E676?text=Vendas"
    },
    {
        id: 4,
        title: "1 - BÔNUS RECHEIO SEM FOGO",
        description: "Receitas de recheios deliciosos sem precisar usar fogão.",
        pdfUrl: "https://drive.google.com/file/d/1hQx6ucbtf2A6lwgzn4-a-YbcnbW2LFtV/view?usp=sharing",
        thumbnail: "https://placehold.co/400x500/121214/00E676?text=Bonus+1"
    },
    {
        id: 5,
        title: "2 - BÔNUS BOLO NO POTE",
        description: "Receitas bônus de bolos no pote para complementar seu cardápio.",
        pdfUrl: "https://drive.google.com/file/d/13qwTfZoxTN6D1mGKUufnWC7poWIs4Qae/view?usp=sharing",
        thumbnail: "https://placehold.co/400x500/121214/00E676?text=Bonus+2"
    },
    {
        id: 6,
        title: "3 - BÔNUS EXTRA",
        description: "Material complementar com dicas extras para seu sucesso.",
        pdfUrl: "https://drive.google.com/file/d/1hQx6ucbtf2A6lwgzn4-a-YbcnbW2LFtV/view?usp=sharing",
        thumbnail: "https://placehold.co/400x500/121214/00E676?text=Bonus+3"
    }
];

// Códigos de Acesso
const CODES = {
    FREE: "YX1GRATIS",
    PRO: "ALUNA-PRO-A21!"
};

// Limites do plano FREE
const FREE_LIMITS = {
    VIDEOS: 5,
    PDFS: 1,
    VIDEO_TIME: 180 // segundos (3 minutos)
};

// Estado da Aplicação
let currentUser = {
    name: localStorage.getItem('miniPudimUserName') || "",
    accessLevel: localStorage.getItem('miniPudimAccessLevel') || null // "free" ou "pro"
};

let videoTimer = null;

// Elementos DOM
const authModal = document.getElementById('auth-modal');
const upgradeModal = document.getElementById('upgrade-modal');
const videoModal = document.getElementById('video-player-modal');
const authForm = document.getElementById('auth-form');
const upgradeForm = document.getElementById('upgrade-form');
const videosGrid = document.getElementById('videos-grid');
const pdfsGrid = document.getElementById('pdfs-grid');
const userWelcome = document.getElementById('user-welcome');
const videoIframe = document.getElementById('video-iframe');
const modalVideoTitle = document.getElementById('modal-video-title');
const closeVideoBtn = document.getElementById('close-video-btn');
const closeUpgradeBtn = document.getElementById('close-upgrade-btn');

let pdfOpened = false;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    renderContent();
    setupEventListeners();

    // Check for return from PDF
    window.addEventListener('focus', () => {
        if (pdfOpened && currentUser.accessLevel === 'free') {
            pdfOpened = false;
            openUpgradeModal();
        }
    });
});

function checkAuth() {
    if (!currentUser.accessLevel) {
        authModal.classList.remove('hidden');
    } else {
        authModal.classList.add('hidden');
        updateUserInterface();
    }
}

function updateUserInterface() {
    if (currentUser.name) {
        userWelcome.textContent = `Bem-vinda, ${currentUser.name}!`;
    }
}

function setupEventListeners() {
    // Login Form
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('student-name').value;
        const code = document.getElementById('access-code').value;
        handleLogin(name, code);
    });

    // Upgrade Form
    upgradeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const code = document.getElementById('upgrade-code').value;
        handleUpgrade(code);
    });

    // Close Video Modal
    closeVideoBtn.addEventListener('click', closeVideo);

    // Close Upgrade Modal (Keep limited access)
    closeUpgradeBtn.addEventListener('click', () => {
        upgradeModal.classList.add('hidden');
    });
}

function handleLogin(name, code) {
    const errorMsg = document.getElementById('auth-error');

    if (code === CODES.PRO) {
        saveUser(name, 'pro');
        authModal.classList.add('hidden');
        renderContent(); // Re-render to unlock everything
    } else if (code === CODES.FREE) {
        saveUser(name, 'free');
        authModal.classList.add('hidden');
        renderContent();
    } else {
        errorMsg.textContent = "Código inválido. Tente novamente.";
    }
}

function handleUpgrade(code) {
    const errorMsg = document.getElementById('upgrade-error');

    if (code === CODES.PRO) {
        saveUser(currentUser.name, 'pro');
        upgradeModal.classList.add('hidden');
        renderContent(); // Unlock everything
        alert("Parabéns! Você agora é uma aluna PRO com acesso total!");
    } else {
        errorMsg.textContent = "Código inválido.";
    }
}

function saveUser(name, level) {
    currentUser.name = name;
    currentUser.accessLevel = level;
    localStorage.setItem('miniPudimUserName', name);
    localStorage.setItem('miniPudimAccessLevel', level);
    updateUserInterface();
}

function renderContent() {
    // Render Videos
    videosGrid.innerHTML = videos.map((video, index) => {
        const isLocked = currentUser.accessLevel === 'free' && index >= FREE_LIMITS.VIDEOS;
        return createCardHTML(video, 'video', isLocked);
    }).join('');

    // Render PDFs
    pdfsGrid.innerHTML = pdfs.map((pdf, index) => {
        const isLocked = currentUser.accessLevel === 'free' && index >= FREE_LIMITS.PDFS;
        return createCardHTML(pdf, 'pdf', isLocked);
    }).join('');
}

function createCardHTML(item, type, isLocked) {
    const btnText = type === 'video' ? 'Assistir aula' : 'VER PDF AGORA';
    let clickAction;

    if (type === 'video') {
        clickAction = `openVideo(${item.id})`;
    } else {
        // For PDFs, we set the flag before opening
        clickAction = `openPdf('${item.pdfUrl}')`;
    }

    const lockedOverlay = isLocked ? `
        <div class="locked-overlay">
            <div class="lock-icon">🔒</div>
            <div class="lock-text">Conteúdo bloqueado</div>
            <button class="btn-card" onclick="openUpgradeModal()">Desbloquear com código PRO</button>
        </div>
    ` : '';

    const cardClass = isLocked ? 'card locked' : 'card';
    // Se estiver bloqueado, removemos o onclick do botão principal para evitar acesso
    const buttonAttr = isLocked ? 'disabled' : `onclick="${clickAction}"`;

    return `
        <div class="${cardClass}">
            ${lockedOverlay}
            <img src="${item.thumbnail}" alt="${item.title}" class="card-thumb">
            <div class="card-content">
                <h4 class="card-title">${item.title}</h4>
                ${item.description ? `<p class="card-desc">${item.description}</p>` : ''}
                <button class="btn-card" ${buttonAttr}>${btnText}</button>
            </div>
        </div>
    `;
}

function openPdf(url) {
    if (currentUser.accessLevel === 'free') {
        pdfOpened = true;
    }
    window.open(url, '_blank');
}

function openVideo(id) {
    const video = videos.find(v => v.id === id);
    if (!video) return;

    videoIframe.src = video.videoUrl;
    modalVideoTitle.textContent = video.title;
    videoModal.classList.remove('hidden');

    // Start timer for Free users
    if (currentUser.accessLevel === 'free') {
        startVideoTimer();
    }
}

function closeVideo() {
    videoModal.classList.add('hidden');
    videoIframe.src = ""; // Stop video
    clearVideoTimer();

    // Show upgrade modal when closing video if user is free
    if (currentUser.accessLevel === 'free') {
        openUpgradeModal();
    }
}

function startVideoTimer() {
    clearVideoTimer();
    console.log("Timer iniciado: 3 minutos para upgrade popup");
    videoTimer = setTimeout(() => {
        if (currentUser.accessLevel === 'free') {
            // Pausa o vídeo (tentativa, depende do player/iframe) ou apenas mostra o modal por cima
            openUpgradeModal();
        }
    }, FREE_LIMITS.VIDEO_TIME * 1000);
}

function clearVideoTimer() {
    if (videoTimer) {
        clearTimeout(videoTimer);
        videoTimer = null;
    }
}

function openUpgradeModal() {
    upgradeModal.classList.remove('hidden');
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Expor funções para o escopo global (HTML onclick)
window.scrollToSection = scrollToSection;
window.openVideo = openVideo;
window.openPdf = openPdf;
window.openUpgradeModal = openUpgradeModal;
