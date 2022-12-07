window.onload = () => {
  // get viewport Height
  const viewportHeight = document.documentElement.clientHeight;
  const main = document.querySelector("main");

  const images = [
    "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1549277513-f1b32fe1f8f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1599894019794-50339c9ad89c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1554139681-1adb48e035cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1604077198996-4eb67c32f6a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1604367233962-bce0799fbe9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1529432337323-223e988a90fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1516146544193-b54a65682f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1519011985187-444d62641929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  ];

  // Container
  function createContainer() {
    const section = document.createElement("section");
    section.setAttribute("class", "container");
    return section;
  }

  function createImageElement(img) {
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", img);
    imgEl.setAttribute("width", 200);
    return imgEl;
  }

  function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
  }

  function createPictureRow() {
    const section = createContainer();
    // 4 images per row
    for (let index = 0; index < 4; index++) {
      const img = getRandomImage();
      const imageEl = createImageElement(img);
      section.appendChild(imageEl);
    }
    return section;
  }

  for (let index = 0; index < 5; index++) {
    main.appendChild(createPictureRow());
  }

  window.addEventListener("scroll", (event) => {
    const scrolledY = window.scrollY;
    // get page height
    const pageHeight = document.documentElement.scrollHeight;
    console.log(scrolledY);
    const scrolledToEnd = scrolledY + viewportHeight >= pageHeight - 50;
    console.log(scrolledToEnd);

    if (scrolledToEnd) {
      // append a picture group
      main.appendChild(createPictureRow());
    }
  });
};
