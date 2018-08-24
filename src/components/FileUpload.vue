<template> 
  <vue-dropzone 
    ref="dropzone" 
    id="dropzone"
    :use-font-awesome='true'
    @vdropzone-sending="sendingEvent"
    :options="dropOptions"
    @vdropzone-complete="afterComplete"
  ></vue-dropzone>
</template>
<script>
import vueDropzone from 'vue2-dropzone'
export default {
  data () {
    let { uploadPath, currentUser } = this.$store.state.AppStore
    return {
      dropOptions: {
        url: uploadPath,
        dictDefaultMessage: '<i class="cloud_upload"></i>Click<br/>OR<br/>Drop Here',
        maxFilesize: 10, // MB
        maxFiles: 1,
        chunking: false,
        // chunkSize: 500, // Bytes
        thumbnailWidth: 130, // px
        thumbnailHeight: 70,
        headers: {
          'USER_NAME': currentUser.user_name,
          'USER_TOKEN': currentUser.user_token
        },
        addRemoveLinks: true,
        accept (file, done) {
          // console.log(file)
          done()
        }
      }
    }
  },
  created () {
    console.log('created')
  },
  methods: {
    afterComplete (file) {
      // todo now call to store from here but in future fire a component
      // event to make the component generic
      // in additional now we try to retrieve again whole file list instead of
      // to retrieve only a new file
      this.$root.$emit('new-file-uploaded', file)
    },
    sendingEvent (file, xhr, formData) {
      console.log('sendingEvent')
    },
    removeAllFiles () {
      this.$refs.dropzone.removeAllFiles()
    }
  },
  components: {
    vueDropzone
  }
}
</script>
<style>
  .vue-dropzone {
    width: 12%;
    height: 4%;
    padding: 0;
    margin-top: -50px;
  }
  .vue-dropzone .dz-message {
    margin-top: 64px;
  }
</style>