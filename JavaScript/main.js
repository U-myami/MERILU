// スライドショー
const slides = document.querySelectorAll('.slide');

// btn
const prevBtn = document.querySelector('.slide-btn.prev');
const nextBtn = document.querySelector('.slide-btn.next');

// ドッドナビ
const dotsContainer = document.querySelector('.slide-dots');

let currentIndex = 0; // 現在値?
let timer;


// --- ドット生成 ---
slides.forEach((_, index) => {
	const dot = document.createElement('span');
	dot.classList.add('slide-dot');

	if(index === 0){
		dot.classList.add('active');
	}

	dot.addEventListener('click', () => {
		currentIndex = index;
		updateSlide();
		resetTimer();
	});

	dotsContainer.appendChild(dot);
});

// ドット生成後
const dots = document.querySelectorAll('.slide-dot');


// 表示更新
function updateSlide(){
	slides.forEach(slide => slide.classList.remove('active'));
	dots.forEach(dot => dot.classList.remove('active'));

	slides[currentIndex].classList.add('active');
	dots[currentIndex].classList.add('active');
}

// 次へ
function nextSlide(){
	currentIndex = (currentIndex + 1) % slides.length;
	updateSlide();
	resetTimer();
}

// 前へ
function prevSlide(){
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	updateSlide();
	resetTimer();
}

// 自動スライド
function startAuto(){
	timer = setInterval(nextSlide,2500);
}


// タイマーリセット
function resetTimer(){
	clearInterval(timer);
	startAuto();
}

nextBtn.addEventListener('click',nextSlide);
prevBtn.addEventListener('click',prevSlide);


// 初期化
startAuto();


// 商品アイテムをフェードイン、フェードアウトさせる
const items = document.querySelectorAll('.product-item');

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
	entry.target.classList.toggle('show', entry.isIntersecting);
});}, {
	threshold: 0.2
});

items.forEach(item => observer.observe(item));

