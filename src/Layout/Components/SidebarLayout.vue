<template>
  <div class="d-flex" id="wrapper">
    <!-- Sidebar -->
    <div class="bg-primary border-right text-white" id="sidebar-wrapper">
      <div class="sidebar-heading">
        <a
          class="navbar-brand d-40 bg-white rounded-circle text-center"
          href="javascript:void(0);"
        >
          <img
            src="@/assets/img/logo.png"
            class="d-inline-block my-auto"
            width="26px"
          />
        </a>
        Nexdex Ui
      </div>
      <div class="list-group list-group-flush">
        <slot name="menu" />
      </div>
    </div>
    <!-- /#sidebar-wrapper -->
    <!-- Page Content -->
    <div id="page-content-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <span
          class="navbar-toggler-icon text-primary"
          @click="toggleMenu"
        ></span>
      </nav>
      <div class="container-fluid mt-3">
        <slot name="content" />
      </div>
    </div>
    <!-- /#page-content-wrapper -->
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      let wrapper = document.querySelector("#wrapper");
      wrapper.classList.toggle("toggled");
    },
  },
};
</script>
