import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const messages = {
  en: {
    global: {
      or_word: 'OR',
      clear_title: 'Clear',
      email_title: 'E-mail',
      phone_title: 'Phone',
      please_wait_title: 'Please wait...',
      home_title: 'Home',
      contacts_title: 'Contacts',
      select_file_title: 'Select File...',
      upload_file_title: 'Upload',
      remove_files_title: 'Remove files',
      search_title: 'Search',
      file_name_title: 'File Name',
      owner_title: 'Owner',
      file_size_title: 'Size',
      storage_title: 'RapidAPI Storage',
      created_title: 'Created',
      updated_title: 'Updated',
      actions_title: 'Actions',
      deleted_title: 'Deleted',
      sure_delete_question: 'Are you sure you want to delete file?',
      accessibility_short_title: 'Access',
      no_files_to_show: 'There are no files in the RapidAPI Storage'
    },
    auth: {
      register_title: 'Register',
      user_name: 'User Name',
      user_password: 'User Password',
      user_name_required: 'User Name is required',
      user_password_required: 'Password is required',
      user_name_must_be_valid: 'Invalid User Name',
      user_password_must_be_valid: 'Invalid Password',
      user_phone_must_be_valid: 'Invalid Phone Number',
      user_email_must_be_valid: 'Invalid Email Address',
      login_button_text: 'Sign In',
      register_button_text: 'Sign Up',
      pageText: '{0}-{1} of {2}'
    },
    device: {
      device_connect_button: 'Connect To Device',
      search_by_name: 'Search By Device Name'
    }
  },
  ru: {
    global: {
      or_word: 'Или',
      clear_title: 'Отчистить',
      email_title: 'E-mail',
      phone_title: 'Терефон',
      please_wait_title: 'Просьба ожидать...',
      home_title: 'Дом',
      contacts_title: 'Контакты',
      select_file_title: 'Выбрать файл...',
      upload_file_title: 'Загрузить',
      remove_files_title: 'Удалить файлы',
      search_title: 'Искать',
      file_name_title: 'Имя Файла',
      owner_title: 'Владелец',
      file_size_title: 'Размер',
      storage_title: 'RapidAPI Хранилище',
      created_title: 'Создан',
      updated_title: 'Правлен',
      actions_title: 'Действия',
      deleted_title: 'Удален',
      sure_delete_question: 'Уверены, что хотите удалить файл?',
      accessibility_short_title: 'Доступ',
      no_files_to_show: 'Хранилище RapidAPI Storage пустое'
    },
    auth: {
      register_title: 'Регистрация',
      user_name: 'User Name',
      user_password: 'User Password',
      user_name_required: 'User Name is required',
      user_password_required: 'Password is required',
      user_name_must_be_valid: 'Invalid User Name',
      user_password_must_be_valid: 'Invalid Password',
      user_phone_must_be_valid: 'Invalid Phone Number',
      user_email_must_be_valid: 'Invalid Email Address',
      login_button_text: 'Sign In',
      register_button_text: 'Регистрация',
      pageText: '{0}-{1} of {2}'
    },
    device: {
      device_connect_button: 'Connect To Device',
      search_by_name: 'Search By Device Name'
    }
  },
  he: {
    global: {
      or_word: 'או',
      clear_title: 'נקה',
      email_title: 'דאר אלקטרוני',
      phone_title: 'טלפון',
      please_wait_title: 'נא המתן...',
      home_title: 'בית',
      contacts_title: 'קשר',
      select_file_title: 'בחר קובץ...',
      upload_file_title: 'העלה',
      remove_files_title: 'לנקות מקבצים',
      search_title: 'חפש',
      file_name_title: 'שם קובץ',
      owner_title: 'בעל קובץ',
      file_size_title: 'גודל',
      storage_title: 'RapidAPI מחסן',
      created_title: 'נוצר',
      updated_title: 'עודקן',
      actions_title: 'פעולות',
      deleted_title: 'מחוק',
      sure_delete_question: 'בטוח למחוק קובץ?',
      accessibility_short_title: 'גישה',
      no_files_to_show: 'מחסן RapidAPI הינו ריק'
    },
    auth: {
      register_title: 'הרשם',
      user_name: 'שם משתמש',
      user_password: 'סיסמה',
      user_name_required: 'שם משתמש חובה',
      user_password_required: 'סיסמה חובה',
      user_name_must_be_valid: 'שם משתמש לא חוקי',
      user_password_must_be_valid: 'סיסמה לא חוקית',
      user_phone_must_be_valid: 'Invalid Phone Number',
      user_email_must_be_valid: 'Invalid Email Address',
      login_button_text: 'כנס',
      pageText: '{0}-{1} מתוך {2}'
    },
    device: {
      device_connect_button: 'תתחבר למכשיר',
      search_by_name: 'חפש שם המכשיר'
    }
  }
}

export default new VueI18n({
  locale: 'en',
  messages
})
