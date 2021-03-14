<template>
  <q-page padding >
    <div class="button">
      <q-btn color="primary" no-caps label="Add contact" @click="prompt = true" class="btn my-font"/>
    </div>

    <q-table
      class="table my-font"
      :data="data"
      :columns="columns"
      row-key="name"
      selection="multiple"
      :selected.sync="selected"
      :pagination="initialPagination"
    />

    <q-dialog v-model="prompt">
      <q-card style="min-width: 350px">
        <q-card-section>
          <!-- <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-input
              v-model="name"
              placeholder='Jane'
              label="Name"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please input the name']"
            />

            <q-select v-model="model" :options="options" />

            <q-input
              v-model="associated"
              placeholder='Lindsey Stroud '
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
              v-model="title"
              placeholder='CEO'
              label="Title"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please input the title']"
            />

            <div>
              <q-btn label="Submit" type="submit" color="primary"/>
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form> -->
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      options: [
        'Office meet-up', 'Call', 'Event'
      ],
      prompt: false,
      initialPagination: {
        page: 1,
        rowsPerPage: 10
      },
      selected: [],
      columns: [
        { name: 'name', align: 'left', label: 'Name', field: 'name', style: 'font-weight: 600; font-size: 15px;' },
        { name: 'email', align: 'left', label: 'Email', field: 'email', classes: 'data' },
        { name: 'company_name', align: 'left', label: 'Company name', field: 'company_name', classes: 'data' },
        { name: 'role', align: 'left', label: 'Role', field: 'role', classes: 'data' },
        { name: 'forecast', align: 'left', label: 'Forecast', field: 'forecast', classes: 'data' },
        { name: 'recent_activity', align: 'left', label: 'Recent Activity', field: 'recent_activity', classes: 'data' }

      ],
      data: [
        {
          name: 'Lindsey Stroud',
          email: 'lindsey.stroud@gmail.com',
          company_name: 'Hatchbuck',
          role: 'Manager',
          forecast: '50 %',
          recent_activity: '5 Minutes ago'
        },
        {
          name: 'Nicci Troiani',
          email: 'nicci.troiani@gmail.com',
          company_name: 'Slack',
          role: 'Manager',
          forecast: '75 %',
          recent_activity: '14 Minutes ago'
        },
        {
          name: 'George Fields',
          email: 'george.fields@gmail.com',
          company_name: 'Clockify',
          role: 'CEO',
          forecast: '10 %',
          recent_activity: '6 Hours ago'
        },
        {
          name: 'Rebecca Moore',
          email: 'rebecca.moore@gmail.com',
          company_name: 'Upwork',
          role: 'Manager',
          forecast: '25 %',
          recent_activity: 'Dec 14, 2018'
        },
        {
          name: 'Jane Doe',
          email: 'jane.doe@gmail.com',
          company_name: 'Trello',
          role: 'Engineer',
          forecast: '30 %',
          recent_activity: 'Dec 12, 2018'
        },
        {
          name: 'Jones Dermot',
          email: 'dermot.jones@gmail.com',
          company_name: 'Slack',
          role: 'Developer',
          forecast: '40 %',
          recent_activity: 'Dec 11, 2018'
        },
        {
          name: 'Martin Merces',
          email: 'martin.merces@gmail.com',
          company_name: 'Google',
          role: 'Manager',
          forecast: '60 %',
          recent_activity: 'Dec 9, 2018'
        },
        {
          name: 'Franz Ferdinand',
          email: 'franz.ferdiand@gmail.com',
          company_name: 'Facebook',
          role: 'Manager',
          forecast: '100 %',
          recent_activity: 'Dec 6, 2018'
        },
        {
          name: 'John Smith',
          email: 'john.smith@gmail.com',
          company_name: 'Skype',
          role: 'CEO',
          forecast: '75 %',
          recent_activity: 'Nov 30, 2018'
        },
        {
          name: 'Judith Williams',
          email: 'judith.williams@gmail.com',
          company_name: 'Google',
          role: 'Designer',
          forecast: '45 %',
          recent_activity: 'Nov 26, 2018'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .button {
    display: flex;
    justify-content: flex-end;
    .btn {
      width: 160px;
      height: 42px;
      font-size: 13px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.13px;
      text-align: center;
      color: #ffffff;
      border-radius: 4px;
      box-shadow: 0 4px 10px 0 rgba(16, 156, 241, 0.24);
      background-color: #109cf1;
    }

  }
  .table {
    margin-top: 20px;
    th {
      color: #707683;
      font-weight: 600;
    }
    tr {
      height: 64px;
      font-weight: 600;
    }
    .data {
      color: #707683;
      font-weight: 600;
    }
  }
</style>
