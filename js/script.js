  document.addEventListener("DOMContentLoaded", () => {
    (function marqueeFix() {
      const root = document.documentElement;
      const marqueeContent = document.querySelector(".marquee-content");
      if (!marqueeContent || marqueeContent.dataset.initialized === "true") return;
      marqueeContent.dataset.initialized = "true";
      const originalItems = Array.from(marqueeContent.children);
      root.style.setProperty("--marquee-elements", originalItems.length);
      for (let i = 0; i < 5; i++) originalItems.forEach(it => marqueeContent.appendChild(it.cloneNode(true)));
      requestAnimationFrame(() => root.style.setProperty("--marquee-elements", marqueeContent.children.length));
    })();

    (function produkSlider() {
      const track = document.querySelector(".produk-slider-track");
      const list = document.querySelector(".produk-slider-list");
      const prevBtn = document.querySelector(".slider-prev");
      const nextBtn = document.querySelector(".slider-next");
      const hintBtn = document.querySelector(".hint-lainnya");
      if (!track || !list) return;
      const items = Array.from(list.children);
      if (!items.length) return;
      let index = 0;

      function perView() {
        const w = window.innerWidth;
        if (w <= 540) return 2;
        if (w <= 1024) return 3;
        return 4;
      }

      function gapValue() {
        return parseFloat(getComputedStyle(list).gap || "32");
      }

      function step() {
        const rect = items[0].getBoundingClientRect();
        return rect.width + gapValue();
      }

      function update(animate = true) {
        const visible = perView();
        const gap = gapValue();
        const itemW = items[0].offsetWidth;
        const trackW = track.offsetWidth;
        const totalWidth = (itemW * items.length) + gap * (items.length - 1);
        const maxTranslate = Math.max(0, totalWidth - trackW);
        const maxIndex = Math.max(0, Math.ceil(maxTranslate / step()));
        if (index < 0) index = 0;
        if (index > maxIndex) index = maxIndex;
        const centerOffset = totalWidth < trackW ? (trackW - totalWidth) / 2 : 0;
        const translate = Math.min(index * step(), maxTranslate);
        list.style.transition = animate ? "transform .45s cubic-bezier(.22,.9,.36,1)" : "none";
        list.style.transform = `translateX(${centerOffset ? centerOffset + "px" : `-${translate}px`})`;
      }

      nextBtn?.addEventListener("click", () => { index++; update(); });
      prevBtn?.addEventListener("click", () => { index--; update(); });
      hintBtn?.addEventListener("click", e => { e.preventDefault(); index++; update(); });

      let startX = 0;
      list.addEventListener("touchstart", e => startX = e.touches[0].clientX);
      list.addEventListener("touchend", e => {
        const endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) index++;
        if (endX - startX > 50) index--;
        update();
      });

      window.addEventListener("resize", () => {
        clearTimeout(list._resize);
        list._resize = setTimeout(() => update(false), 120);
      });

      setTimeout(update, 60);
    })();

    (function portfolioSlider() {
      const wrapper = document.querySelector(".portfolio-wrapper");
      const list = document.querySelector(".portfolio-list");
      const items = Array.from(document.querySelectorAll(".portfolio-item"));
      const leftBtn = document.querySelector(".portfolio-arrow.left");
      const rightBtn = document.querySelector(".portfolio-arrow.right");
      if (!list || !items.length) return;
      let index = 0;

      function visible() {
        const w = window.innerWidth;
        if (w <= 540) return 1;
        if (w <= 1023) return 2;
        return 4;
      }

      function gapValue() {
        return parseFloat(getComputedStyle(list).gap || "32");
      }

      function step() {
        return items[0].offsetWidth + gapValue();
      }

      function update(animate = true) {
        const gap = gapValue();
        const itemW = items[0].offsetWidth;
        const trackW = wrapper ? wrapper.offsetWidth : list.parentElement.offsetWidth;
        const totalWidth = (itemW * items.length) + gap * (items.length - 1);
        const maxTranslate = Math.max(0, totalWidth - trackW);
        const maxIndex = Math.max(0, Math.ceil(maxTranslate / step()));
        if (index < 0) index = 0;
        if (index > maxIndex) index = maxIndex;
        const centerOffset = totalWidth < trackW ? (trackW - totalWidth) / 2 : 0;
        const translate = Math.min(index * step(), maxTranslate);
        list.style.transition = animate ? "transform .45s cubic-bezier(.22,.9,.36,1)" : "none";
        list.style.transform = `translateX(${centerOffset ? centerOffset + "px" : `-${translate}px`})`;
      }

      rightBtn?.addEventListener("click", () => { index++; update(); });
      leftBtn?.addEventListener("click", () => { index--; update(); });

      let startX = 0;
      wrapper?.addEventListener("touchstart", e => startX = e.touches[0].clientX);
      wrapper?.addEventListener("touchend", e => {
        const endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) index++;
        if (endX - startX > 50) index--;
        update();
      });

      window.addEventListener("resize", () => {
        clearTimeout(list._resize);
        list._resize = setTimeout(() => update(false), 120);
      });

      setTimeout(update, 60);
    })();
  });

  (function(){
    const _0xabc1=[
      "\x66\x6F\x6F\x74\x65\x72\x2D\x62\x6F\x74\x74\x6F\x6D",
      "\x64\x69\x76",
      "\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74",
      "\x63\x6C\x61\x73\x73\x4E\x61\x6D\x65",
      "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C",
      "\x3C\x70\x3E\x41\x6C\x6C\x20\x52\x69\x67\x68\x74\x73\x20\x52\x65\x73\x65\x72\x76\x65\x64\x2E\x20\x50\x54\x2E\x20\x43\x75\x73\x74\x6F\x6D\x20\x50\x65\x77\x74\x65\x72\x20\x49\x6E\x64\x6F\x6E\x65\x73\x69\x61\x2E\x3C\x2F\x70\x3E",
      "\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64",
      "\x62\x6F\x64\x79",
      "\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72",
      "\x2E\x66\x6F\x6F\x74\x65\x72\x2D\x62\x6F\x74\x74\x6F\x6D",
      "\u26A0\uFE0F\x20\x43\x6F\x70\x79\x72\x69\x67\x68\x74\x20\x72\x65\x73\x74\x6F\x72\x65\x64\x2E"
    ];
    
    function addFooter(){
      const e=document[_0xabc1[8]](_0xabc1[9]);
      if(!e){
        const n=document[_0xabc1[2]](_0xabc1[1]);
        n[_0xabc1[3]]=_0xabc1[0];
        n[_0xabc1[4]]=_0xabc1[5];
        document[_0xabc1[7]][_0xabc1[6]](n);
        console.log(_0xabc1[10]);
      }
    }
    
    addFooter();
    setInterval(addFooter,3000);
  })();

document.addEventListener("DOMContentLoaded", () => {
  const kategoriItems = document.querySelectorAll(".kategori-item");
  const produkData = document.querySelector("#produk-data");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const lightboxClose = document.querySelector(".lightbox-close");
  const btnPrev = document.querySelector(".lightbox-prev");
  const btnNext = document.querySelector(".lightbox-next");
  const zoomIndicator = document.querySelector(".zoom-indicator");

  let currentList = [];
  let currentIndex = 0;

  let scale = 1;
  let posX = 0, posY = 0;
  let startX = 0, startY = 0;
  let isDragging = false;

  let initialDistance = 0;
  let initialScale = 1;
  let lastTap = 0;
  let pinchActive = false;

  function applyTransform() {
    lightboxImg.style.transform =
      `translate(${posX}px, ${posY}px) scale(${scale})`;
    if (zoomIndicator) zoomIndicator.textContent = `${Math.round(scale * 100)}%`;
  }

  function constrainDrag() {
    if (scale <= 1) {
      posX = 0;
      posY = 0;
      return;
    }
    const rect = lightboxImg.getBoundingClientRect();
    const maxX = (rect.width - window.innerWidth) / 2;
    const maxY = (rect.height - window.innerHeight) / 2;
    posX = Math.min(Math.max(posX, -maxX), maxX);
    posY = Math.min(Math.max(posY, -maxY), maxY);
  }

  function resetZoom() {
    scale = 1;
    posX = 0;
    posY = 0;
    applyTransform();
  }

  kategoriItems.forEach(item => {
    item.addEventListener("click", () => {
      const cat = item.dataset.category;
      const container = produkData.querySelector(`[data-category="${cat}"]`);
      currentList = [...container.querySelectorAll("img")]
        .map(i => i.dataset.full || i.src);
      currentIndex = 0;
      showImage();
    });
  });

  function showImage() {
    scale = 1;
    posX = 0;
    posY = 0;
    applyTransform();

    lightboxImg.src = currentList[currentIndex];
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";

    lightboxImg.style.transition = "none";
    requestAnimationFrame(() => {
      lightboxImg.style.transition = "transform .25s ease";
    });
  }

  function nextImg() {
    currentIndex = (currentIndex + 1) % currentList.length;
    showImage();
  }

  function prevImg() {
    currentIndex = (currentIndex - 1 + currentList.length) % currentList.length;
    showImage();
  }

  btnNext?.addEventListener("click", e => {
    e.stopPropagation();
    nextImg();
  });

  btnPrev?.addEventListener("click", e => {
    e.stopPropagation();
    prevImg();
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightbox();
  });

  lightboxImg.addEventListener("mousedown", e => {
    if (scale <= 1) return;
    isDragging = true;
    startX = e.clientX - posX;
    startY = e.clientY - posY;
    lightboxImg.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", e => {
    if (!isDragging) return;
    posX = e.clientX - startX;
    posY = e.clientY - startY;
    constrainDrag();
    applyTransform();
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    lightboxImg.style.cursor = scale > 1 ? "grab" : "default";
  });

  lightboxImg.addEventListener("touchstart", e => {
    lightboxImg.style.transition = "none";

    if (e.touches.length === 1) {
      if (!pinchActive && scale > 1) {
        isDragging = true;
        startX = e.touches[0].clientX - posX;
        startY = e.touches[0].clientY - posY;
      }
    }

    if (e.touches.length === 2) {
      pinchActive = true;
      initialDistance = getDist(e.touches);
      initialScale = scale;
    }
  }, { passive: false });

  lightboxImg.addEventListener("touchmove", e => {
    if (e.touches.length === 1 && isDragging && !pinchActive) {
      e.preventDefault();
      posX = e.touches[0].clientX - startX;
      posY = e.touches[0].clientY - startY;
      constrainDrag();
      applyTransform();
      return;
    }

    if (e.touches.length === 2) {
      e.preventDefault();
      pinchActive = true;
      const dist = getDist(e.touches);
      scale = Math.min(Math.max(1, initialScale * (dist / initialDistance)), 4);
      applyTransform();
      return;
    }
  }, { passive: false });

  lightboxImg.addEventListener("touchend", e => {
    if (e.touches.length === 0) {
      isDragging = false;
      if (pinchActive) {
        pinchActive = false;
        lastTap = Date.now();
        return;
      }
    }

    const now = Date.now();
    if (!pinchActive && scale === 1 && now - lastTap < 250) resetZoom();
    lastTap = now;
  });

  let swipeStart = 0;

  lightboxImg.addEventListener("touchstart", e => {
    if (scale === 1 && e.touches.length === 1)
      swipeStart = e.touches[0].clientX;
  });

  lightboxImg.addEventListener("touchend", e => {
    if (scale > 1) return;

    const diff = swipeStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) diff > 0 ? nextImg() : prevImg();
  });

  function getDist(t) {
    return Math.hypot(
      t[0].clientX - t[1].clientX,
      t[0].clientY - t[1].clientY
    );
  }
});

