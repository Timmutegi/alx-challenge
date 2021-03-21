<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background-color: #ffffff; height: 60px;">
        <q-btn flat round dense>
          <q-icon name="search" color="black"/>
        </q-btn>
        <q-input borderless v-model="text" color="#f5f6f8" placeholder="Global Search" style="font-size: 12px;"/>
        <q-toolbar-title>

        </q-toolbar-title>
        <q-btn flat round dense>
          <q-icon name="notifications_active" color="black"/>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above

      :mini="!drawer || miniState"
      @click.capture="drawerClick"

      :width="256"
      :breakpoint="400"
      bordered
      style="font-weight: 500;"
    >
      <q-scroll-area class="fit my-font">
        <q-list>
          <q-item to="/" exact clickable v-ripple class="app items">
            <q-item-section avatar class="avatar">
              Saas
            </q-item-section>

            <q-item-section>
              Kit
            </q-item-section>
          </q-item>

          <q-separator/>

          <q-item to="/" exact clickable v-ripple class="items">
            <q-item-section avatar>
              <q-avatar size="46px" class="q-mb-sm">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </q-item-section>

            <q-item-section class="user">
              Sierra Fergusson
              <span>s.fergusson@gmail.com</span>
            </q-item-section>
          </q-item>

          <q-item to="/" exact clickable v-ripple class="items">
            <q-item-section avatar>
              <q-icon class="icon" name="dashboard" />
            </q-item-section>

            <q-item-section class="title">
              Dashboard
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple class="items">
            <q-item-section avatar>
              <q-icon class="icon" name="splitscreen" />
            </q-item-section>

            <q-item-section class="title">
              Tasks
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple class="items">
            <q-item-section avatar>
              <q-icon class="icon" name="email" />
            </q-item-section>

            <q-item-section class="title">
              Email
            </q-item-section>
          </q-item>

          <q-item to="/contacts" clickable v-ripple class="items">
            <q-item-section avatar>
              <q-icon class="icon" name="person" />
            </q-item-section>

            <q-item-section class="title">
              Contacts
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple class="items">
            <q-item-section avatar>
              <q-icon class="icon" name="chat" />
            </q-item-section>

            <q-item-section class="title">
              Chat
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple class="items">
            <q-item-section avatar>
              <q-icon class="icon" name="local_offer" />
            </q-item-section>

            <q-item-section class="title">
              Deals
            </q-item-section>
          </q-item>

          <q-separator/>

          <q-item clickable v-ripple class="items">
            <q-item-section avatar>
              <q-icon class="icon" name="more_horiz" />
            </q-item-section>

            <q-item-section class="title">
              Settings
            </q-item-section>
          </q-item>

          <div class="toggle">
            <q-item clickable v-ripple class="toggle items">
              <q-item-section avatar>
                <q-toggle size="xs" class="icon" v-model="miniState" @click="miniState = true"/>
              </q-item-section>

              <q-item-section>
                Toggle sidebar
              </q-item-section>
            </q-item>
          </div>

        </q-list>
      </q-scroll-area>
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
      text: '',
      value: true,
      leftDrawerOpen: false,
      drawer: false,
      miniState: true
    }
  },
  methods: {
    drawerClick (e) {
      if (this.miniState) {
        this.miniState = false
        e.stopPropagation()
      }
    }
  }
}
</script>

<style lang="scss">
  .items {
    padding-left: 24px;
    // .q-router-link--active {
    //   color: #109cf1;
    // }
    // .title {
    //   color: #334d6e;
    //   font-weight: 500;
    // }
    // .icon {
    //   color: #C2CFE0;
    // }

    // .title .active {
    //   color: red;
    //   font-weight: 500;
    // }
    // .icon {
    //   color: #C2CFE0;
    // }
    // color: #C2CFE0;
  }
  .app {
    color: #109cf1;
    font-size: 18px;
    height: 60px;
    .avatar {
      padding-right: 8px;
    }
  }
  .user {
    span {
      font-size: 11px;
      color: #90a0b7;
    }
  }

  .toggle {
    position: absolute;
    bottom: -25vh;
    font-size: 11px;
    width: 100%;
    color: #90a0b7;
  }

</style>
