<template>
  <q-page>
    <div class="row items-start">
      <q-card class="card1 my-font" flat-bordered>
        <div class="top">
          <p class="title">8 tasks completed out of 10</p>
          <p class="show">Show: <span> This week</span></p>
        </div>
        <!-- LINEAR PROGRESS BAR -->
        <div class="progress">
          <q-linear-progress :value="progress" rounded color="green" class="q-mt-sm" />
        </div>

        <p class="day">23 December, Sunday</p>

        <q-separator/>
        <q-card-section>
          <q-card v-for="task in tasks" v-bind:key="task.id" class="task">
            <q-card-section>
              <div class="item">
                <p class="title">{{task.title}}</p>
                <p class="type">{{task.type}}</p>
              </div>
              <p class="date">Due date: <span>{{task.due}}</span></p>
              <div class="item">
                <div class="avatar">
                  <q-avatar size="24px">
                    <img :src="task.ownerAvatar">
                  </q-avatar>
                  <p class="owner">{{task.owner}}</p>
                </div>
                <div class="status">
                  <p>{{task.status}}</p>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-card-section>
      </q-card>
      <div class="col">
        <q-card class="card2 my-font" flat-bordered>
          <q-card-section>
            <div class="item">
              <p class="title">Deals</p>
              <p class="show">Show: <span> Monthly</span></p>
            </div>
          </q-card-section>
          <q-separator/>
          <div class="small">
            <line-chart :chart-data="datacollection" :styles="myStyles" :backgroundColor="gradientFill"></line-chart>
          </div>
        </q-card>
        <q-card class="card2 my-font" flat-bordered>
          <q-card-section>
            <div class="item">
              <p class="title">Tasks</p>
              <p class="show">Show: <span> Monthly</span></p>
            </div>
          </q-card-section>
          <q-separator/>
          <div class="small">
            <dough-nut :chart-data="chartdata" :styles="myStyles"></dough-nut>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import LineChart from '../charts/LineChart.js'
import DoughNut from '../charts/DoughNut.js'
if (document.getElementById('line-chart')) {
  var ctx = document.getElementById('line-chart').getContext('2d')
  var gradientFill = ctx.createLinearGradient(0, 50, 0, 300)
  gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0.6)')
  gradientFill.addColorStop(1, 'rgba(16, 156, 241, 0)')
}
export default {
  components: { LineChart, DoughNut },
  data () {
    return {
      progress: 0.8,
      gradientFill: null,
      // LINEAR CHART DATA
      datacollection: {
        labels: ['1 Dec', '8 Dec', '16 Dec', '31 Dec'],
        datasets: [
          {
            label: 'closed deals',
            backgroundColor: gradientFill,
            data: [50, 160, 55, 150]
          }
        ]
      },
      // DOUGHNUT CHART DATA
      chartdata: {
        labels: ['Active', 'Completed', 'Ended'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#2ed47a', '#ffb946', '#f7685b'],
            data: [6, 3, 1]
          }
        ]
      },
      // TASKS DATA
      tasks: [
        {
          id: 1,
          title: 'Send benefit review by Sunday',
          owner: 'George Fields',
          ownerAvatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          type: 'Reminder',
          status: 'Completed',
          due: 'December 23, 2018'
        },
        {
          id: 2,
          title: 'Invite to office meet-up',
          owner: 'Rebecca Moore',
          ownerAvatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          type: 'Call',
          status: 'Ended',
          due: 'December 23, 2018'
        },
        {
          id: 3,
          title: 'Office meet-up',
          owner: 'Lindsey Stroud',
          ownerAvatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          type: 'Event',
          status: 'Completed',
          isEnded: true,
          due: 'December 23, 2018'
        }
      ]
    }
  },
  computed: {
    myStyles () {
      return {
        backgroundColor: gradientFill,
        height: '280px',
        position: 'relative',
        padding: '10px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .top {
    display: flex;
    justify-content: space-between;
    padding: 16px 24px;
    .title {
      font-size: 13px;
      font-weight: 500;
    }
    .show {
      font-size: 12px;
      span {
        color: #109cf1;
      }
    }
  }
  .progress {
    margin: 24px;
  }
  .day {
    padding: 16px 24px;
    font-size: 15px;
    font-weight: 500;
  }
  .card1 {
    width: 100%;
    max-width: 635px;
    min-height: 718px;
    margin: 36px;
    .task {
      margin-top: 24px;
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .avatar {
          display: flex;
          align-items: center;
          .owner {
            font-size: 13px;
            margin-left: 12px;
            margin-bottom: 0px;
            color: #707683;
          }
        }
        .status {
          background-color: #2ed47a;
          padding: 3px 8px 5px 8px;
          border-radius: 4px;
          color: #FFFFFF;
          width: 84px;
          text-align: center;
          p {
            margin-bottom: 0px;
            font-size: 11px;
            font-weight: bold;
          }
        }
        .type {
          font-size: 12px;
          color: #90a0b7;
          font-weight: 500;
        }
        .title {
          font-weight: 500;
        }
      }
      .date {
        font-size: 13px;
        color: #4c5862;
      }
    }
  }
  .col {
    margin: 0px 36px;
  }
  .card2 {
    width: 100%;
    max-width: 445px;
    height: 344px;
    margin-top: 36px;
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        margin: 0px;
      }
      .title {
        font-size: 15px;
        font-weight: 500;
      }
      .show {
        font-size: 12px;
        span {
          color: #109cf1;
        }
      }
    }
  }
</style>
