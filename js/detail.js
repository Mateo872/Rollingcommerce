const parameterCode = new URLSearchParams(window.location.search);
console.log(parameterCode.get('code'));

let listProducts = JSON.parse(localStorage.getItem("listProducts")) || [];

const searchProduct = listProducts.find((product)=> product.code === parameterCode.get('code'));

let section = document.getElementById('detail');
section.innerHTML = `
<section class="card mt-4 mb-3 border-0 container">
        <div class="row g-0">
          <div class="col-md-6 col-lg-6">
            <div class="mx-3">
              <p>En stock ${searchProduct.stock}</p>
            <img src="${searchProduct.image}" class="img-fluid rounded-3 border-3 shadow" alt="${searchProduct.title}">
            </div>
            <div class="me-md-3">
              <div class="d-flex  my-3">
                <div class="col-md-4">
                  <button class="btn border-0"><img src="${searchProduct.imagePreviewOne}" class="img-fluid rounded-3 border-3 shadow"  alt="${searchProduct.title}"></button>
                </div>
                <div class="col-md-4 mx-2">
                  <button class="btn border-0"><img src="${searchProduct.imagePreviewTwo}" class="img-fluid rounded-3 border-3 shadow" alt="${searchProduct.title}"></button>
                </div>
                <div class="col-md-4">
                  <button class="btn border-0"><img src="${searchProduct.imagePreviewThree}" class="img-fluid rounded-3 border-3 shadow" alt="${searchProduct.title}"></button>
                </div>
            </div>
            </div>
            
          </div>
          <div class="col-md-6 col-lg-6">
            <div class="card-body my-lg-5 mx-3">
              <p class="d-flex justify-content-end me-3"><i class="bi bi-heart text-danger fs-4"></i></p>
              <h4>${searchProduct.title}</h4>
              <p class="display-6"$${searchProduct.price}</p>
              <p>
              ${searchProduct.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="container py-3">
        <h4>Características</h4>
        <p>${searchProduct.characteristics}</p>
      </section>
      <section class="container pt-4">
        <h5>Otros productos populares</h5>
        <div class="container-card my-3 ps-1">
          <div class="card  card-similar-product col-12 col-sm-6 col-md-4 col-lg-3 shadow me-3 p-3 mb-5 rounded">
            <img src="../img/Auricular.png" class="img-fluid">
            <h6 class="pt-2 mb-0">Astro30</h6>
            <p class="fw-semibold pb-1 mb-0">$499</p>
            <a href="#" class="mb-0 text-danger text-decoration-none fw-semibold">Ver más</a>
          </div>
          <div class="card  card-similar-product col-12 col-sm-6 col-md-4 col-lg-3 shadow me-3 p-3 mb-5 rounded">
            <img src="../img/Auricular.png" class="img-fluid">
            <h6 class="pt-2 mb-0">Astro30</h6>
            <p class="fw-semibold pb-1 mb-0">$499</p>
            <a href="#" class="mb-0 text-danger text-decoration-none fw-semibold">Ver más</a>
          </div>
          <div class="card  card-similar-product col-12 col-sm-6 col-md-4 col-lg-3 shadow me-3 p-3 mb-5 rounded">
            <img src="../img/Auricular.png" class="img-fluid">
            <h6 class="pt-2 mb-0">Astro30</h6>
            <p class="fw-semibold pb-1 mb-0">$499</p>
            <a href="#" class="mb-0 text-danger text-decoration-none fw-semibold">Ver más</a>
          </div>
          <div class="card  card-similar-product col-12 col-sm-6 col-md-4 col-lg-3 shadow me-3 p-3 mb-5 rounded">
            <img src="../img/Auricular.png" class="img-fluid">
            <h6 class="pt-2 mb-0">Astro30</h6>
            <p class="fw-semibold pb-1 mb-0">$499</p>
            <a href="#" class="mb-0 text-danger text-decoration-none fw-semibold">Ver más</a>
          </div>
          <div class="card  card-similar-product col-12 col-sm-6 col-md-4 col-lg-3 shadow me-3 p-3 mb-5 rounded">
            <img src="../img/Auricular.png" class="img-fluid">
            <h6 class="pt-2 mb-0">Astro30</h6>
            <p class="fw-semibold pb-1 mb-0">$499</p>
            <a href="#" class="mb-0 text-danger text-decoration-none fw-semibold">Ver más</a>
          </div>
        </div>
        
      </section>`
