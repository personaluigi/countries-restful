<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark pt-3 pb-3">
    <div class="container-fluid">
      <router-link class="nav-link active" aria-current="page" to="/"
        ><i
          class="fa-solid fa-globe"
          style="color: #ffffff; font-size: 2.2rem; margin-right: 2rem"
        ></i
      ></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              ><i class="fa-solid fa-house" style="padding-right: 6px"></i>Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              to="/america"
              ><i
                class="fa-solid fa-earth-americas"
                style="padding-right: 6px"
              ></i
              >America</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              to="/africa"
              ><i
                class="fa-solid fa-earth-africa"
                style="padding-right: 6px"
              ></i
              >Africa</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/asia"
              ><i class="fa-solid fa-earth-asia" style="padding-right: 6px"></i
              >Asia</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              to="/europe"
              ><i
                class="fa-solid fa-earth-europe"
                style="padding-right: 6px"
              ></i
              >Europe</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              to="/oceania"
              ><i
                class="fa-solid fa-earth-oceania"
                style="padding-right: 6px"
              ></i
              >Oceania</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>