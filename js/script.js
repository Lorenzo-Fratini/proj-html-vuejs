function init() {
  
    new Vue({
        
      el: '#app',
      
      data: {

        logo: 'logo-2x.png',

        dropHover: false,

        inputActive: '',

        layoverActive: '',

        navItems: [
          {
            value: 'Home',
            dropdown: false,
            dropdownShow: '',
            arrowDownActive: 'active',
            arrowTopActive: '',
            button: false,
          },
          {
            value: 'Apple',
            dropdown: false,
            dropdownShow: '',
            arrowDownActive: '',
            arrowTopActive: '',
            button: false,
          },
          {
            value: 'Microsoft',
            dropdown: false,
            dropdownShow: '',
            arrowDownActive: '',
            arrowTopActive: '',
            button: false,
          },
          {
            value: 'Android',
            dropdown: false,
            dropdownShow: '',
            arrowDownActive: '',
            arrowTopActive: '',
            button: false,
          },
          {
            value: 'Forums',
            dropdown: [
              'Apple',
              'Android',
              'Microsoft',
              'Apps & Software',
              'Gadget & Stuff',
              'General Discussion',
              'News & Community',
              'Tutorials & Guide'
            ],
            dropdownShow: '',
            arrowActive: '',
            arrowTopActive: '',
            button: false
          },
          {
            value: 'Contact us',
            dropdown: false,
            dropdownShow: '',
            arrowDownActive: '',
            arrowTopActive: '',
            button: false,
          },
          {
            value: 'Join Us',
            dropdown: ['Log in', 'Lost your password?'],
            dropdownShow: '',
            arrowDownActive: '',
            arrowTopActive: '',
            button: true
          }
        ],

        footerLists: [
          {
            title: 'Popular Topics',
            listItems: [
              {
                value: 'Nam a dolor volutpat massa auctor semper'
              },
              {
                value: 'Sed euismod nunc urna fermentum arcu dapibus fringilla.'
              },
              {
                value: 'Cras lacinia tellus id mauris finibus lacus molestie'
              },
              {
                value: 'Curabitur a scelerisque ligula'
              }
            ]
          },
          {
            title: 'Recent Topics',
            listItems: [
              {
                value: 'Cras lacinia tellus id mauris finibus lacus molestie'
              },
              {
                value: 'Proin at ligula sagittis vestibulum nisi vitae'
              },
              {
                value: 'Sed nec metus at est tincidunt elementum'
              },
              {
                value: 'Nulla egestas nulla eu nulla suscipit molestie'
              }
            ]
          },
          {
            title: 'Latest Replies',
            listItems: [
              {
                value: 'Cras lacinia tellus id mauris finibus lacus molestie'
              },
              {
                value: 'Cras lacinia tellus id mauris finibus lacus molestie'
              },
              {
                value: 'Nulla egestas nulla eu nulla suscipit molestie'
              },
              {
                value: 'Mauris ac nibh quis eros sagittis lacinia a et dui'
              }
            ]
          }
        ],

        footerIcons: [
          {
            value: 'fa-facebook-f',
            class: 'bg-facebook'
          },
          {
            value: 'fa-twitter',
            class: 'bg-twitter'
          },
          {
            value: 'fa-instagram',
            class: 'bg-instagram'
          },
          {
            value: 'fa-youtube',
            class: 'bg-youtube'
          }
        ],
      },

      methods: {

        navHover: function(index) {

          this.dropHover = !this.dropHover;

          this.navItems[index].dropdownShow = this.dropHover ? 'show' : '';
          this.navItems[index].arrowDownActive = this.dropHover ? 'active' : '';
          this.navItems[index].arrowTopActive = this.dropHover
          && this.navItems[index].dropdown != '' ? 'active' : '';

          this.navItems[0].arrowDownActive = 'active';

          console.log(this.navItems[index].arrowTopActive);
        },

        searchShow: function() {
  
          this.inputActive = 'active';
          this.layoverActive = 'active';
        },

        searchHide: function() {
          this.inputActive = '';
          this.layoverActive = '';
        }
      },


      mounted() {

        console.log('Here');
      }
      
    })
  }
  
  document.addEventListener('DOMContentLoaded', init);