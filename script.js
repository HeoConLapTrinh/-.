const garden = document.getElementById("garden");

// Hàm tạo mảng ô vuông cho vườn
function createGarden() {
  for (let i = 0; i < 100; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel-plant");
    garden.appendChild(pixel);
  }
}

// Hàm trồng cây (growing pixel)
function plantSeed() {
  const pixels = document.querySelectorAll(".pixel-plant");
  pixels.forEach((pixel) => {
    if (Math.random() > 0.7) {
      // Xác suất 30% để mỗi cây mọc
      pixel.classList.add("grown");
    }
  });
}

// Khởi tạo vườn
createGarden();
