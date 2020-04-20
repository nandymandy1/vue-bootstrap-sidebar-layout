<template>
  <div class="hero-wrapper bg-composed-wrapper bg-second min-vh-100">
    <div class="flex-grow-1 w-100 d-flex align-items-center">
      <div
        class="bg-composed-wrapper--image bg-composed-filter-rm opacity-2"
        :style="{
          backgroundImage: `url(${require('@/assets/img/hero-bg/hero-9.jpg')})`,
        }"
      ></div>
      <div class="bg-composed-wrapper--bg bg-happy-green opacity-1"></div>
      <div class="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
        <div class="container pb-5">
          <div class="row">
            <div class="col-md-6 col-sm-12 mx-auto py-5">
              <div class="card">
                <div class="card-header bg-primary">
                  <h3 class="text-white">{{ $router.currentRoute.name }}</h3>
                </div>
                <div class="card-body p-4">
                  <router-view />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="hero-footer">
      <p class="text-white mb-0 py-5 font-size-lg">
        Just like the PRO version,
        <b>Bamburgh Vue.js UI Kit</b> features an extensive documentation
        available online.
      </p>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>
