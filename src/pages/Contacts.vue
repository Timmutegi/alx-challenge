<template>
  <q-page padding >
    <div class="button">
      <q-btn color="primary" no-caps label="Add contact" class="btn my-font"/>
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
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      initialPagination: {
        page: 1,
        rowsPerPage: 10
      },
      selected: [],
      columns: [
        { name: 'name', align: 'left', label: 'Name', field: 'name', sortable: true },
        { name: 'email', align: 'left', label: 'Email', field: 'email' },
        { name: 'company_name', align: 'left', label: 'Company name', field: 'company_name' },
        { name: 'role', align: 'left', label: 'Role', field: 'role' },
        { name: 'forecast', align: 'left', label: 'Forecast', field: 'forecast' },
        { name: 'recent_activity', align: 'left', label: 'Recent Activity', field: 'recent_activity' }

      ],
      data: [
        {
          name: 'Lindsey Stroud',
          email: 'linsey.stroud@gmail.com',
          company_name: 'Hatchbuck',
          role: 'manager',
          forecast: '50 %',
          recent_activity: '5 Minutes ago'
        },
        {
          name: 'Nicci Troiani',
          email: 'nicci.troiani@gmail.com',
          company_name: 'Slack',
          role: 'manager',
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
    tr {
      height: 64px;
    }
  }
</style>
