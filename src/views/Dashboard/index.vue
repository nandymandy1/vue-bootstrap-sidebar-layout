<template>
  <SidebarLayout>
    <template v-slot:menu>
      <SidebarItem linkName="Link 1" link="/dashboard/link-1" />
      <SidebarItem linkName="Link 2" link="/dashboard/link-2" />
    </template>
    <template v-slot:content>
      <router-view />
    </template>
  </SidebarLayout>
</template>

<script>
import SidebarLayout from "../../Layout/Components/SidebarLayout";
import SidebarItem from "../../examples/ui-elements/SidebarItem";
export default {
  components: {
    SidebarItem,
    SidebarLayout,
  },
};
</script>
