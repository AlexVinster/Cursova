const translations = {
    en: {
      marketplace: "Marketplace",
      rankings: "Rankings",
      connect_wallet: "Connect a wallet",
      sign_up: "Sign Up",
      join_community: "Join our community",
      discover_art_collect_nfts: "Discover digital art & Collect NFTs",
      nft_marketplace_ui: "NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.",
      get_started: "Get Started",
      total_sale: "Total Sale",
      auctions: "Auctions",
      artists: "Artists",
    },
    ua: {
      marketplace: "Маркетплейс",
      rankings: "Рейтинги",
      connect_wallet: "Підключити гаманець",
      sign_up: "Реєстрація",
      join_community: "Приєднуйтесь до нашої спільноти",
      discover_art_collect_nfts: "Відкрийте цифрове мистецтво та збирайте NFT",
      nft_marketplace_ui: "Інтерфейс NFT-ринку створено за допомогою Anima для Figma. Збирайте, купуйте та продавайте мистецтво від більше ніж 20 тисяч художників NFT.",
      get_started: "Почати",
      total_sale: "Загальна продаж",
      auctions: "Аукціони",
      artists: "Художники",
    },
  };

  function changeLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
      const key = element.dataset.lang;
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    changeLanguage('en');

    // Додайте обробник події для посилань переключення мови
    document.querySelectorAll('#languageSwitcher a').forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const selectedLanguage = this.dataset.lang;
        changeLanguage(selectedLanguage);
      });
    });
  });
