<template>
  <form>
    <b-form-group label="Username" label-for="input-1">
      <b-form-input
        trim
        id="input-1"
        placeholder="Username"
        v-model="username"
      />
    </b-form-group>
    <b-form-group label="Last name" label-for="input-2">
      <b-form-input
        trim
        id="input-2"
        v-model="password"
        placeholder="Password"
      />
    </b-form-group>
    <b-form-group>
      <b-button variant="primary" class="mr-3">
        <span>Register</span>
      </b-button>
      <b-button variant="success" @click="$router.push('/auth/login')">
        <span>Login</span>
      </b-button>
    </b-form-group>
  </form>
</template>

<script>
export default {
  data: () => ({
    username: "",
    password: "",
  }),
};
</script>
