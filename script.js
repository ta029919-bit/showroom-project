// 1. 20 Cars Dataset with Full Technical Specifications (Prices in PKR)
const carsData = [
  { id: 1, name: "Tesla Model S", brand: "Tesla", type: "Electric", price: 25000000, year: 2024, fuel: "Electric", transmission: "Automatic", capacity: "5 Seats / Dual Motor", warranty: "8 Years / 150k Miles", mileage: "396 mi range", desc: "Flagship luxury electric sedan with hyper acceleration and autopilot features.", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=600&q=80" },
  { id: 2, name: "BMW M4 Competition", brand: "BMW", type: "Sports", price: 32000000, year: 2024, fuel: "Petrol", transmission: "Automatic", capacity: "4 Seats / 3.0L Twin-Turbo", warranty: "4 Years / 50k Miles", mileage: "16 MPG City", desc: "High-performance sports coupe delivering pure power and track precision.", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80" },
  { id: 3, name: "Audi A6 Sedan", brand: "Audi", type: "Sedan", price: 22000000, year: 2023, fuel: "Hybrid", transmission: "Automatic", capacity: "5 Seats / 2.0L Turbo", warranty: "4 Years / 50k Miles", mileage: "26 MPG Combined", desc: "Executive luxury sedan with Quattro all-wheel drive and sleek digital cockpit.", image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80" },
  { id: 4, name: "Ford Mustang GT", brand: "Ford", type: "Sports", price: 18500000, year: 2023, fuel: "Petrol", transmission: "Manual", capacity: "4 Seats / 5.0L V8", warranty: "3 Years / 36k Miles", mileage: "18 MPG Combined", desc: "Iconic American muscle car equipped with roaring V8 engine dynamics.", image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=600&q=80" },
  { id: 5, name: "Porsche 911 Carrera", brand: "Porsche", type: "Sports", price: 45000000, year: 2024, fuel: "Petrol", transmission: "Automatic", capacity: "2+2 Seats / 3.0L Flat-6", warranty: "4 Years / 50k Miles", mileage: "20 MPG Combined", desc: "Timeless sports car engineering with unrivaled handling dynamics.", image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&q=80" },
  { id: 6, name: "Mercedes GLE SUV", brand: "Mercedes", type: "SUV", price: 35000000, year: 2023, fuel: "Diesel", transmission: "Automatic", capacity: "7 Seats / 3.0L Turbo", warranty: "4 Years / 50k Miles", mileage: "24 MPG Hwy", desc: "Spacious luxury family SUV packed with modern luxury and offroad performance.", image: "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=600&q=80" },
  { id: 7, name: "Volkswagen Golf GTI", brand: "Volkswagen", type: "Hatchback", price: 12000000, year: 2023, fuel: "Petrol", transmission: "Automatic", capacity: "5 Seats / 2.0L Turbo", warranty: "4 Years / 50k Miles", mileage: "28 MPG Combined", desc: "Hot hatchback offering versatile daily driving with sporty agility.", image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80" },
  { id: 8, name: "Hyundai Ioniq 5", brand: "Hyundai", type: "Electric", price: 16500000, year: 2024, fuel: "Electric", transmission: "Automatic", capacity: "5 Seats / Single Motor", warranty: "10 Years / 100k Miles", mileage: "303 mi range", desc: "Futuristic retro-styled crossover EV with ultra-fast charging capability.", image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80" },
  { id: 9, name: "Honda Civic Type R", brand: "Honda", type: "Hatchback", price: 15000000, year: 2023, fuel: "Petrol", transmission: "Manual", capacity: "4 Seats / 2.0L Turbo", warranty: "3 Years / 36k Miles", mileage: "24 MPG Combined", desc: "Track-focused sport hatchback with aggressive aero styling.", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=80" },
  { id: 10, name: "Toyota Land Cruiser", brand: "Toyota", type: "SUV", price: 55000000, year: 2023, fuel: "Diesel", transmission: "Automatic", capacity: "7 Seats / 3.5L V6 Twin-Turbo", warranty: "3 Years / 36k Miles", mileage: "17 MPG Combined", desc: "Unmatched offroad reliability and rugged luxury capabilities.", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80" },
  { id: 11, name: "Chevrolet Corvette", brand: "Chevrolet", type: "Sports", price: 28000000, year: 2024, fuel: "Petrol", transmission: "Automatic", capacity: "2 Seats / 6.2L V8", warranty: "3 Years / 36k Miles", mileage: "19 MPG Combined", desc: "Mid-engine supercar performance at an accessible price point.", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80" },
  { id: 12, name: "Nissan Leaf EV", brand: "Nissan", type: "Electric", price: 9500000, year: 2023, fuel: "Electric", transmission: "Automatic", capacity: "5 Seats / Electric Motor", warranty: "8 Years / 100k Miles", mileage: "149 mi range", desc: "Affordable and practical electric vehicle for everyday urban commuting.", image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80" },
  { id: 13, name: "Mazda 3 Hatchback", brand: "Mazda", type: "Hatchback", price: 8500000, year: 2023, fuel: "Petrol", transmission: "Automatic", capacity: "5 Seats / 2.5L 4-Cyl", warranty: "3 Years / 36k Miles", mileage: "31 MPG Combined", desc: "Premium interior feel with responsive handling in a compact body.", image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80" },
  { id: 14, name: "BMW i7 Electric", brand: "BMW", type: "Electric", price: 48000000, year: 2024, fuel: "Electric", transmission: "Automatic", capacity: "5 Seats / Dual Motor", warranty: "8 Years / 100k Miles", mileage: "318 mi range", desc: "Ultra-luxury electric sedan with theater screen and lounge seating.", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80" },
  { id: 15, name: "Volvo XC90 SUV", brand: "Volvo", type: "SUV", price: 24000000, year: 2023, fuel: "Hybrid", transmission: "Automatic", capacity: "7 Seats / 2.0L Turbo Hybrid", warranty: "4 Years / 50k Miles", mileage: "27 MPG Combined", desc: "Industry-leading safety features blended with Scandinavian design.", image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=600&q=80" },
  { id: 16, name: "Mercedes C-Class", brand: "Mercedes", type: "Sedan", price: 21000000, year: 2023, fuel: "Petrol", transmission: "Automatic", capacity: "5 Seats / 2.0L Turbo", warranty: "4 Years / 50k Miles", mileage: "29 MPG Combined", desc: "Sophisticated luxury sedan featuring S-Class tech inside.", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80" },
  { id: 17, name: "Ford F-150 EV", brand: "Ford", type: "Electric", price: 23000000, year: 2023, fuel: "Electric", transmission: "Automatic", capacity: "5 Seats / Dual Motor 4WD", warranty: "8 Years / 100k Miles", mileage: "240 mi range", desc: "All-electric workhorse pickup truck with onboard power generator.", image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=600&q=80" },
  { id: 18, name: "Audi RS6 Avant", brand: "Audi", type: "Sports", price: 42000000, year: 2024, fuel: "Petrol", transmission: "Automatic", capacity: "5 Seats / 4.0L V8 Twin-Turbo", warranty: "4 Years / 50k Miles", mileage: "17 MPG Combined", desc: "Ultimate performance wagon combining supercar speed with wagon utility.", image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80" },
  { id: 19, name: "Kia EV6 GT", brand: "Kia", type: "Electric", price: 17000000, year: 2023, fuel: "Electric", transmission: "Automatic", capacity: "5 Seats / Dual Motor", warranty: "10 Years / 100k Miles", mileage: "310 mi range", desc: "High-performance EV crossover with rapid acceleration.", image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80" },
  { id: 20, name: "Toyota Camry Hybrid", brand: "Toyota", type: "Sedan", price: 13500000, year: 2023, fuel: "Hybrid", transmission: "Automatic", capacity: "5 Seats / 2.5L 4-Cyl Hybrid", warranty: "3 Years / 36k Miles", mileage: "52 MPG Combined", desc: "Ultra-reliable sedan offering unbelievable hybrid fuel efficiency.", image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=600&q=80" }
];

document.addEventListener("DOMContentLoaded", () => {

  // Splash Screen Intro Logic
  const introSplashScreen = document.getElementById("intro-splash-screen");
  const enterLoginBtn = document.getElementById("enter-login-btn");
  const landingScreen = document.getElementById("landing-login-screen");
  const mainApp = document.getElementById("main-app");
  const landingForm = document.getElementById("landing-login-form");
  const logoutBtn = document.getElementById("logout-btn");

  // 1. Force state reset on page reload so Login ALWAYS shows second
  localStorage.removeItem("isLoggedIn");
  mainApp.classList.add("main-app-hidden");
  landingScreen.style.display = "none";

  // 2. Slide image screen and ALWAYS open Login Screen
  function showLoginScreen() {
    introSplashScreen.classList.add("splash-slide-out");
    setTimeout(() => {
      introSplashScreen.style.display = "none";
      landingScreen.style.display = "flex"; // Hamesha Login Screen open hogi
    }, 600);
  }

  enterLoginBtn.addEventListener("click", showLoginScreen);
  introSplashScreen.addEventListener("click", (e) => {
    if (e.target !== enterLoginBtn) {
      showLoginScreen();
    }
  });

  landingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    landingScreen.style.display = "none";
    mainApp.classList.remove("main-app-hidden");
  });

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    mainApp.classList.add("main-app-hidden");
    landingScreen.style.display = "flex";
  });

  // Theme Toggle
  const themeBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  themeBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";

  themeBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
  });

  // Hamburger Menu Toggling
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Populate Select Options for Test Drive Form
  const tdSelect = document.getElementById("td-car");
  carsData.forEach(car => {
    const opt = document.createElement("option");
    opt.value = car.name;
    opt.textContent = `${car.name} (PKR ${car.price.toLocaleString()})`;
    tdSelect.appendChild(opt);
  });

  // Render Cars Grid with "Know More" button
  function renderCars(list, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (list.length === 0) {
      container.innerHTML = "<p>No cars found matching your criteria.</p>";
      return;
    }

    list.forEach(car => {
      const isFav = favs.includes(car.id);
      const card = document.createElement("div");
      card.className = "car-card";
      card.innerHTML = `
        <img src="${car.image}" alt="${car.name}" onclick="openCarDetails(${car.id})">
        <div class="car-card-body">
          <div>
            <h3>${car.name}</h3>
            <p class="price">PKR ${car.price.toLocaleString()}</p>
            <div class="car-specs">
              <span>${car.type}</span> • <span>${car.fuel}</span> • <span>${car.year}</span>
            </div>
          </div>
          <div class="card-actions">
            <button class="btn btn-fav" onclick="toggleFavorite(${car.id})">${isFav ? '❤️ Saved' : '🤍 Save'}</button>
            <button class="btn btn-know-more" onclick="openCarDetails(${car.id})">Know More</button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // Car Details Modal Logic
  const detailsModal = document.getElementById("details-modal");
  const closeDetailsModal = document.getElementById("close-details-modal");
  let activeCarId = null;

  window.openCarDetails = function(carId) {
    const car = carsData.find(c => c.id === carId);
    if (!car) return;
    activeCarId = carId;

    document.getElementById("detail-car-img").src = car.image;
    document.getElementById("detail-car-name").textContent = car.name;
    document.getElementById("detail-car-price").textContent = `PKR ${car.price.toLocaleString()}`;
    document.getElementById("detail-car-desc").textContent = car.desc;
    document.getElementById("detail-car-type").textContent = car.type;
    document.getElementById("detail-car-fuel").textContent = car.fuel;
    document.getElementById("detail-car-trans").textContent = car.transmission;
    document.getElementById("detail-car-cap").textContent = car.capacity;
    document.getElementById("detail-car-warranty").textContent = car.warranty;
    document.getElementById("detail-car-mileage").textContent = car.mileage;

    detailsModal.style.display = "flex";
  };

  closeDetailsModal.addEventListener("click", () => detailsModal.style.display = "none");

  document.getElementById("detail-inquire-btn").addEventListener("click", () => {
    detailsModal.style.display = "none";
    if (activeCarId) openInquiry(activeCarId);
  });

  // Filter Logic
  function applyFilters() {
    const search = document.getElementById("search-input").value.toLowerCase();
    const category = document.getElementById("category-filter").value;
    const fuel = document.getElementById("fuel-filter").value;
    const sort = document.getElementById("sort-select").value;

    let filtered = carsData.filter(car => {
      const matchesSearch = car.name.toLowerCase().includes(search) || car.brand.toLowerCase().includes(search);
      const matchesCategory = category === "All" || car.type === category;
      const matchesFuel = fuel === "All" || car.fuel === fuel;
      return matchesSearch && matchesCategory && matchesFuel;
    });

    if (sort === "price-low") filtered.sort((a,b) => a.price - b.price);
    if (sort === "price-high") filtered.sort((a,b) => b.price - a.price);
    if (sort === "year") filtered.sort((a,b) => b.year - a.year);

    renderCars(filtered, "cars-grid");
  }

  ["search-input", "category-filter", "fuel-filter", "sort-select"].forEach(id => {
    document.getElementById(id).addEventListener("input", applyFilters);
  });

  // Render Favorites Section
  window.renderFavoritesSection = function() {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    const favCars = carsData.filter(car => favs.includes(car.id));
    renderCars(favCars, "favorites-grid");
  };

  // Toggle Favorite
  window.toggleFavorite = function(carId) {
    let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favs.includes(carId)) {
      favs = favs.filter(id => id !== carId);
    } else {
      favs.push(carId);
    }
    localStorage.setItem("favorites", JSON.stringify(favs));
    applyFilters();
    renderFavoritesSection();
  };

  // Inquiry Modal Logic
  const modal = document.getElementById("inquiry-modal");
  const closeModal = document.getElementById("close-modal");

  window.openInquiry = function(carId) {
    const car = carsData.find(c => c.id === carId);
    document.getElementById("inquiry-car-title").textContent = car ? car.name : "";
    modal.style.display = "flex";
  };

  closeModal.addEventListener("click", () => modal.style.display = "none");

  document.getElementById("inquiry-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Inquiry Sent Successfully! Our team will contact you soon.");
    modal.style.display = "none";
  });

  // EMI Calculator
  document.getElementById("calc-emi-btn").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("emi-amount").value);
    const rate = parseFloat(document.getElementById("emi-rate").value) / 12 / 100;
    const tenure = parseFloat(document.getElementById("emi-tenure").value) * 12;

    if (amount && rate && tenure) {
      const emi = (amount * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
      document.getElementById("emi-result").textContent = `Estimated EMI: PKR ${emi.toFixed(2)} / month`;
    } else {
      document.getElementById("emi-result").textContent = "Please fill in all fields correctly.";
    }
  });

  // Test Drive Form Submit
  document.getElementById("test-drive-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Test Drive Booking Requested! Confirmation details sent via SMS.");
    e.target.reset();
  });

  // Scroll To Top Button
  const scrollTopBtn = document.getElementById("scroll-top-btn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Initial Execution
  applyFilters();
  renderFavoritesSection();
});
