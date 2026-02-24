if (typeof getStocks !== "function") {
  alert("products.js が読み込まれていません");
  throw new Error("products.js missing");
}

document.addEventListener("DOMContentLoaded", () => {

  // 商品マスタ
  const items = {
    1: {
      name: "オードパルファム",
      series: "ROSE BLOSSOM",
      price: 10000,
      salePrice: null,
      image: "/MERILU/Picture/Items/item1.jpg",
      description: [
        "やさしく広がるフローラルの香りが、日常にそっと彩りを添えるオードパルファム",
        "透明感のあるピンクのボトルが象徴するように、甘すぎず上品な香り立ちで、",
        "初めて香水を使う方にもおすすめです!!",
        "香りの特徴 : フローラル・フルーティー系",
	"※手首・首元・耳の後ろなど、体温の高い部分に適量をスプレーしてください。"
      ]
    },
    2: {
      name: "オードパルファム",
      series: "ÉCLAT ROSE",
      price: 12000,
      salePrice: null,
      image: "/MERILU/Picture/Items/item2.jpg",
      description: [
        "透明感のあるピンクが印象的な、洗練されたオードパルファム",
        "すっきりとしたフローラルの立ち上がりから、やわらかく女性らしい余韻へと移ろいます",
        "甘さを抑えた上品な香りは、香水が苦手な方にも心地よく、",
	"大人の女性の「さりげない色気」を演出します",
	"香りの特徴 : フレッシュ・フローラル系",
	"※手首・首元・耳の後ろなど、体温の高い部分に適量をスプレーしてください。"
      ]
    },
    3: {
      name: "オードパルファム",
      series: "ROSE NOSTALGIA",
      price: 8000,
      salePrice: null,
      image: "/MERILU/Picture/Items/item3.jpg",
      description: [
        "レースとローズに包まれた、どこか懐かしく気品あふれるオードパルファム",
        "やさしく霧のように広がる香りが、纏う人の所作まで美しく演出します",
        "クラシカルなパフ付きボトルは、まるでアンティークのような佇まい",
	"日常を少し特別にしたい日に、そっと寄り添う香り",
        "香りの特徴 : クラシック・ローズフローラル系",
	"※手首・首元・耳の後ろなど、体温の高い部分に適量をスプレーしてください。"
      ]
    },
    4: {
      name: "オードパルファム",
      series: "LUMINOUS SERIES",
      price: 13000,
      salePrice: 11500,
      image: "/MERILU/Picture/Items/item4.jpg",
      description: [
        "光を受けてきらめく、宝石のようなガラスボトルが印象的なオードパルファム",
        "洗練された甘さと奥行きのある香りが、纏う人の個性を引き立てます",
        "フレッシュさと官能的な余韻が共存する香りは、",
	"日常から特別な夜まで、シーンを選ばず活躍",
	"自分らしさを大切にする大人のためのフレグランス",
        "香りの特徴 : フェミニン・フルーティーフローラル,エレガント・フローラルムスク,セクシー・オリエンタルフローラル",
	"※手首・首元・耳の後ろなど、体温の高い部分に適量をスプレーしてください。"
      ]
    },
    5: {
      name: "オードパルファム",
      series: "BLOOM RIBBON",
      price: 9500,
      salePrice: null,
      image: "/MERILU/Picture/Items/item5.jpg",
      description: [
        "やさしく咲き誇る花々をイメージした、フェミニンなオードパルファム",
        "透明感のあるフローラルブーケが、身にまとう人の魅力を自然に引き出します",
        "ふんわりと甘く、それでいて上品",
	"初めて香水を使う方にも、長く愛用したい一本としてもおすすめ!!",
        "香りの特徴 : フローラル・ブーケ系",
	"※手首・首元・耳の後ろなど、体温の高い部分に適量をスプレーしてください。"
      ]
    },
    6: {
      name: "パルファム",
      series: "CRYSTAL VEIL",
      price: 11000,
      salePrice: 10000,
      image: "/MERILU/Picture/Items/item6.jpg",
      description: [
        "宝石のように輝くクリスタルカットボトルに閉じ込めた、上品でやわらかな香り",
        "ひと吹きで空気を変える、洗練された大人のためのパルファム",
        "甘さは控えめに、肌に溶け込むようなフローラルムスクが静かに広がり、",
	"近づいた人だけにそっと印象を残します",
	"特別な日にも、日常のご褒美にもふさわしい一本です",
        "香りの特徴 : エレガント・フローラルムスク系",
	"※手首・首元・耳の後ろなど、体温の高い部分に適量をスプレーしてください。"
      ]
    },
    7: {
      name: "オードパルファム",
      series: "NOIR ROSÉ",
      price: 7000,
      salePrice: null,
      image: "/MERILU/Picture/Items/item7.jpg",
      description: [
        "可憐さと大胆さをあわせ持つ、大人のためのオードパルファム",
        "淡いピンクのボトルに結ばれたブラックリボンが、",
        "甘さの中に潜むセンシュアルな魅力を象徴しています",
	"フルーティーな明るさから、深みのあるフローラルへ",
	"そして肌に残る、忘れられない余韻",
	"ひと吹きで“印象に残る人”へ導く香りです",
        "香りの特徴 : フルーティー・フローラル・ムスク系",
	"※手首・首元・耳の後ろなど、体温の高い部分に適量をスプレーしてください。"
      ]
    },
    8: {
      name: "オードパルファム",
      series: "SERENDIPITY ROSÉ",
      price: 13000,
      salePrice: 9800,
      image: "/MERILU/Picture/Items/item8.jpg",
      description: [
        "ふとした瞬間に訪れる、幸せのきっかけ",
        "軽やかで明るい香りが、日常をポジティブに彩るオードパルファム",
        "透明感のあるフローラルに、やさしい甘さをひとさじ",
	"重くなりすぎず、誰のそばでも心地よく香るため、",
	"毎日使いたくなる“運命の一本”としておすすめ",
        "香りの特徴 : フレッシュ・フローラル系",
	"※手首・首元・耳の後ろなど、体温の高い部分に適量をスプレーしてください。"
      ]
    }
  };

  // URLから id を取得
  const params = new URLSearchParams(window.location.search);
  const itemId = Number(params.get("id"));

  if (!itemId || !items[itemId]) {
    alert("商品IDが不正です");
    location.href = "index.html";
    return;
  }

  const item = items[itemId];

  document.getElementById("itemImage").src = item.image;
  document.getElementById("itemNameMain").textContent = item.name;
  document.getElementById("itemNameSub").textContent = item.series;
  const priceEl = document.getElementById("itemPrice");

  if (item.salePrice) {
    priceEl.innerHTML = `
      <span class="old">¥${item.price.toLocaleString()}</span>
      ¥${item.salePrice.toLocaleString()}
    `;
  } else {
    priceEl.textContent = `¥${item.price.toLocaleString()}`;
  }

  // 商品説明
  const descList = document.getElementById("itemDescription");
  item.description.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    descList.appendChild(li);
  });

  // ボタン・表示要素
  const minusBtn = document.querySelector(".minus");
  const plusBtn  = document.querySelector(".plus");
  const quantityEl = document.getElementById("quantity");
  const stockText = document.getElementById("stockStatus");
  const addCartBtn = document.getElementById("addCart");

  let quantity = 1;

  const stocks = getStocks();

  if (!stocks || !stocks[itemId]) {
    alert("在庫情報が取得できません");
    addCartBtn.disabled = true;
    plusBtn.disabled = true;
    return;
  }

  let stock = stocks[itemId].stock;

  function updateQuantity() {
    quantityEl.textContent = quantity;
    minusBtn.disabled = quantity <= 1;
    plusBtn.disabled  = quantity >= stock || stock === 0;

    if (stock === 0) {
    addCartBtn.textContent = "SOLD OUT";
    addCartBtn.disabled = true;
    addCartBtn.classList.add("sold-out");
   } 
   else {
   addCartBtn.textContent = "カートに入れる";
   addCartBtn.disabled = false;
   addCartBtn.classList.remove("sold-out");
   }
  }

  function updateStockText() {
    if (!stockText) return;

    if (stock > 0) {
      stockText.textContent = `在庫あり（残り${stock}）`;
      stockText.classList.remove("out");
    } else {
      stockText.textContent = "在庫切れ";
      stockText.classList.add("out");
    }
  }

  minusBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      updateQuantity();
    }
  });

  plusBtn.addEventListener("click", () => {
    if (quantity < stock) {
      quantity++;
      updateQuantity();
    }
  });

  // カートに入れる
  addCartBtn.addEventListener("click", () => {
    if (quantity > stock) {
      alert("在庫が足りません");
      return;
    }

    // 在庫を減らす
    stocks[itemId].stock -= quantity;
    saveStocks(stocks);
    stock = stocks[itemId].stock;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(i => i.id === itemId);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        id: itemId,
        name: item.name,
        series: item.series,
        price: item.price,
        salePrice: item.salePrice,
        image: item.image, 
        quantity
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    if (typeof updateCartCount === "function") {
      updateCartCount();
    }
    updateQuantity();
    updateStockText();

    alert("カートに追加しました");
  });

  updateQuantity();
  updateStockText();


// お気に入り
const FAVORITE_KEY = "favorites";
const favoriteBtn = document.getElementById("favoriteBtn");

function getFavorites(){
  return JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
}

function saveFavorites(data){
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(data));
}

function isFavorite(id){
  const favs = getFavorites();
  return favs.some(f => f.id === id);
}

function toggleFavorite(id){
  let favs = getFavorites();

  if(isFavorite(id)){
    favs = favs.filter(f => f.id !== id);
  } else {
    favs.push({
      id: id,
      name: item.name,
      series: item.series,
      price: item.price,
      salePrice: item.salePrice,
      image: item.image
    });
  }

  saveFavorites(favs);
}

if(favoriteBtn){

if(isFavorite(itemId)){
  favoriteBtn.classList.add("active");
}

favoriteBtn.addEventListener("click", () => {

  toggleFavorite(itemId);

  if(isFavorite(itemId)){
    favoriteBtn.classList.add("active");
  } else {
    favoriteBtn.classList.remove("active");
  }

  // ヘッダーと連動
  if (typeof updateFavoriteIcon === "function") {
    updateFavoriteIcon();
  }

  });
}

});


