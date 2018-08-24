<template>
  <v-container fluid pt-1 align-start>
      <v-layout wrap row>
       <file-detail-table :files="files"></file-detail-table>
      </v-layout>
  </v-container>
</template>      
<script>
  import FileDetailTable from '@/components/FileDetailTable.vue'
  export default {
    components: {
      FileDetailTable
    },
    data () {
      return {
        files: [],
        search: ''
      }
    },
    methods: {
      filterFiles () {
        console.log('files fetched')
      },
      retrieveFileList () {
        this.$store.dispatch('AppStore/getFileList')
          .then((data) => {
            this.files = this.$store.state.AppStore.files
          })
      }
    },
    created () {
      this.retrieveFileList()
      this.$root.$on('new-file-uploaded', () => {
        this.retrieveFileList()
      })
    },
    mount () {
    }
  }
</script>
