<template>
  <q-page padding>
    <q-btn color="primary" label="Add contact" />
    <q-table
      :data="rows"
      row-key="name"
    />
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      rows: [
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
