<template>
  <div style="width: 100%">
    <v-toolbar flat color="white">
      <v-toolbar-title>{{ $t('global.storage_title') }}</v-toolbar-title>
      <file-upload></file-upload>
      <v-dialog v-model="dialog" max-width="500px">
        <!-- v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn -->
        <v-card>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.accessibility" :label="$t('global.file_name_title')"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.original_file_name" :label="$t('global.file_name_title')"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.owner" :label="$t('global.owner_title')"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.created" :label="$t('global.created_title')"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.updated" :label="$t('global.updated_title')"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.size" :label="$t('global.file_size_title')"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.deleted" label="$t('global.deleted_title')"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="getFileList()"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="justify-center layout px-0">
          <v-icon v-if="props.item.accessibility === 0" small color="orange darken-2" @click="changeFilePerm(props.item)">
            lock
          </v-icon>
          <v-icon v-else small color="green darken-1" @click="changeFilePerm(props.item)">
            lock_open
          </v-icon>
        </td>
        <td>
          <v-icon
            color="blue darken-1"
            small
            @click="downloadFile(props.item)"
          >
            cloud_download
          </v-icon>
          {{ props.item.original_file_name }}
        </td>
        <td class="text-xs-center">{{ props.item.owner_name }}</td>
        <td class="text-xs-center">{{ props.item.created }}</td>
        <td class="text-xs-center">{{ props.item.updated }}</td>
        <td class="text-xs-center">{{ props.item.size }}</td>
        <td class="text-xs-center">{{ props.item.deleted }}</td>
        <td class="justify-center layout px-0">
          <v-icon 
            v-show="!props.item.deleted"
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template slot="no-data">
        <v-alert
          :value="true"
          type="warning"
          align="center"
        >
        {{ $t('global.no_files_to_show') }}
        </v-alert>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import FileUpload from '@/components/FileUpload.vue'
  import moment from 'moment'
  const DATE_FORMAT = 'M/D/YYYY HH:mm'
  export default {
    components: {
      FileUpload
    },
    props: ['files'],
    data () {
      return {
        dialog: false,
        headers: [
          {
            text: this.$t('global.accessibility_short_title'),
            align: 'left',
            sortable: true,
            value: 'accessibility'
          },
          {
            text: this.$t('global.file_name_title'),
            align: 'left',
            sortable: true,
            value: 'original_file_name'
          },
          {
            text: this.$t('global.owner_title'),
            value: 'owner_name',
            align: 'center'
          },
          {
            text: this.$t('global.created_title'),
            value: 'created',
            align: 'center'
          },
          {
            text: this.$t('global.updated_title'),
            value: 'updated',
            align: 'center'
          },
          {
            text: this.$t('global.file_size_title'),
            value: 'size',
            align: 'center'
          },
          {
            text: this.$t('global.deleted_title'),
            value: 'deleted'
          },
          {
            text: this.$t('global.actions_title'),
            value: 'original_file_name',
            sortable: false,
            align: 'center'
          }
        ],
        editedIndex: -1,
        editedItem: {
          accessibility: 0
        },
        defaultItem: {
          accessibility: 0
        }
      }
    },
    computed: {
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      getFileList () {
        let tmp = this.decorateFileList()
        return tmp.sort((f1, f2) => {
          return f1.updated > f2.updated
        })
      },
      decorateFileList () {
        return this.files.map((f) => {
          if (f.updated) {
            f.updated = moment(f.updated).format(DATE_FORMAT)
          }
          if (f.deleted) {
            f.deleted = moment(f.deleted).format(DATE_FORMAT)
          }
          f.created = moment(f.created).format(DATE_FORMAT)
          return f
        })
      },
      changeFilePerm (file) {
        // todo - this is not the best place to call action, instead event has
        // to be filed to the parent component
        this.$store.dispatch('AppStore/changeFileAccessPerm', file)
          .then((data) => {
            this.files = this.$store.state.AppStore.files
          })
      },
      downloadFile (file) {
        this.$store.dispatch('AppStore/downloadFile', file)
      },
      initialize () {
      },
      editItem (item) {
        this.editedIndex = this.files.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (file) {
        let confirmDelete = confirm(this.$t('global.sure_delete_question'))
        if (confirmDelete) {
          this.$store.dispatch('AppStore/deleteFile', file).then((data) => {
            this.files = this.$store.state.AppStore.files
          })
        }
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      }
    }
  }
</script>

<style scoped>
</style>