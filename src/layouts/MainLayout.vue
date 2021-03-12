<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background-color: #ffffff; height: 60px;">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="256"
        :breakpoint="400"
      >
        <q-scroll-area style="color: #334d6e; height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd; font-weight: 500;" class="my-font">
          <q-list padding>
            <q-item to="/" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon class="icon" name="dashboard" />
              </q-item-section>

              <q-item-section>
                Dashboard
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon class="icon" name="task" />
              </q-item-section>

              <q-item-section>
                Tasks
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon class="icon" name="email" />
              </q-item-section>

              <q-item-section>
                Email
              </q-item-section>
            </q-item>

            <q-item to="/contacts" clickable v-ripple>
              <q-item-section avatar>
                <q-icon class="icon" name="person" />
              </q-item-section>

              <q-item-section>
                Contacts
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon class="icon" name="chat" />
              </q-item-section>

              <q-item-section>
                Chat
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon class="icon" name="drafts" />
              </q-item-section>

              <q-item-section>
                Deals
              </q-item-section>
            </q-item>
            <q-separator/>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon class="icon" name="settings" />
              </q-item-section>

              <q-item-section>
                Settings
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Timothy Mbaka</div>
            <div>@Timmutegi</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container style="background-color: #f5f6f8">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style lang="scss">
  .icon {
    color: #C2CFE0;
  }

</style>
