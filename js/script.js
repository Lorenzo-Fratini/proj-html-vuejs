function init() {
  
    new Vue({
        
      el: '#app',
      
      data: {

        logo: 'logo-2x.png',

        dropHover: false,

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
        ]
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
        }
      },

      mounted() {

        console.log('Here');
      }
      
    })
  }
  
  document.addEventListener('DOMContentLoaded', init);