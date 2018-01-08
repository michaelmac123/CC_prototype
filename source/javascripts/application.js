(function(){
  var app = angular.module('callCenter', []);

  app.controller('LeadController', function (){
    this.leads = leadFills;
    this.calls = callIncoming;
    this.hangups = deadCalls;

    this.removeRow = function(name){
      var index = -1;
      var comArr = eval( this.deadCalls );
      for( var i = 0; i < comArr.length; i++ ) {
            if( comArr[i].name === name ) {
                index = i;
                break;
             }
      }
      if( index === -1 ) {
           alert( "Something gone wrong" );
      }
      this.deadCalls.splice( index, 1 );
   };
  });

  app.controller('TabController', function(){
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  app.controller('NotificationController', function() {
    if (!('Notification' in window)) {
        alert("Please Use Chrome");
      } else {
        var notificationEvents = ['onclick', 'onshow', 'onerror', 'onclose'];

        var theAudio = new Audio('/audio/phone_ringing.mp3');

        function startAudioNotification(){
          theAudio.addEventListener('ended', function() {
              this.currentTime = 0;
              this.play();
          }, false);
          theAudio.play();
        }
        function stopAudioNotification(){
          theAudio.pause();
        }

        function showCallPage() {
          $('.call-que-container:not(.ng-hide)').addClass('ng-hide');
          $('.call-page').toggleClass('ng-hide');
          $('.nav.nav-pills li').removeClass('active').addClass('disabled');
        }

        function notifyUser(event) {
          var title;
          var options;

          title = 'Incoming Phone Call';
          options = {
            body: 'You are receiving a call from: 610-555-1212',
            tag: 'preset',
            icon: '/images/phone_icon.png'
          };

          Notification.requestPermission(function() {
            startAudioNotification();
            var notification = new Notification(title, options);

            notification.onclick = function() {
              stopAudioNotification();
              showCallPage();
            };

            notification.onclose = function() {
              stopAudioNotification();
            };

          });
        }

        // window.addEventListener('load', setTimeout(notifyUser, 500));
      }
    $('.dismiss-call').on('click', function(){
      $('.call-page').addClass('ng-hide');
    })
  });

  var callIncoming = [

    { name: 'Jane Doe',
      phoneNumber: '610-555-1212',
      category: 'Plumbers',
      affiliate_slug: 'Fake Campaign',
      received_at: 'Mon 08:18:00 AM',
      zip_code: '12345',
      time_zone: 'Pacific',
      description: 'Some description data',
      previously_called: 'Tue 09:47 AM EST',
      remove: true,
    },
    { name: 'Jane Doe',
      phoneNumber: '610-555-1212',
      category: 'Plumbers',
      affiliate_slug: 'Fake Campaign',
      received_at: 'Mon 08:18:00 AM',
      zip_code: '12345',
      time_zone: 'Pacific',
      description: 'Some description data',
      previously_called: 'Tue 09:47 AM EST',
      remove: true,
    },
    { name: 'Jane Doe',
      phoneNumber: '610-555-1212',
      category: 'Plumbers',
      affiliate_slug: 'Fake Campaign',
      received_at: 'Mon 08:18:00 AM',
      zip_code: '12345',
      time_zone: 'Pacific',
      description: 'Some description data',
      previously_called: 'Tue 09:47 AM EST',
      remove: true,
    },
    { name: 'Jane Doe',
      phoneNumber: '610-555-1212',
      category: 'Plumbers',
      affiliate_slug: 'Fake Campaign',
      received_at: 'Mon 08:18:00 AM',
      zip_code: '12345',
      time_zone: 'Pacific',
      description: 'Some description data',
      previously_called: 'Tue 09:47 AM EST',
      remove: true,
    },
    { name: 'Jane Doe',
      phoneNumber: '610-555-1212',
      category: 'Plumbers',
      affiliate_slug: 'Fake Campaign',
      received_at: 'Mon 08:18:00 AM',
      zip_code: '12345',
      time_zone: 'Pacific',
      description: 'Some description data',
      previously_called: 'Tue 09:47 AM EST',
      remove: true,
    },
  ]

  var leadFills = [
    { name: 'Jane Doe',
      phoneNumber: '610-555-1212',
      category: 'Plumbers',
      affiliate_slug: 'Fake Campaign',
      received_at: 'Mon 08:18:00 AM',
      zip_code: '12345',
      time_zone: 'Pacific',
      description: 'Some description data',
      previously_called: 'Tue 09:47 AM EST',
      remove: true,
    },
    { name: 'Jane Doe',
      phoneNumber: '610-555-1212',
      category: 'Plumbers',
      affiliate_slug: 'Fake Campaign',
      received_at: 'Mon 08:18:00 AM',
      zip_code: '12345',
      time_zone: 'Pacific',
      description: 'Some description data',
      previously_called: 'Tue 09:47 AM EST',
      remove: true,
    },
    { name: 'Jane Doe',
      phoneNumber: '610-555-1212',
      category: 'Plumbers',
      affiliate_slug: 'Fake Campaign',
      received_at: 'Mon 08:18:00 AM',
      zip_code: '12345',
      time_zone: 'Pacific',
      description: 'Some description data',
      previously_called: 'Tue 09:47 AM EST',
      remove: true,
    },
    { name: 'Jane Doe',
      phoneNumber: '610-555-1212',
      category: 'Plumbers',
      affiliate_slug: 'Fake Campaign',
      received_at: 'Mon 08:18:00 AM',
      zip_code: '12345',
      time_zone: 'Pacific',
      description: 'Some description data',
      previously_called: 'Tue 09:47 AM EST',
      remove: true,
    },
    { name: 'Jane Doe',
      phoneNumber: '610-555-1212',
      category: 'Plumbers',
      affiliate_slug: 'Fake Campaign',
      received_at: 'Mon 08:18:00 AM',
      zip_code: '12345',
      time_zone: 'Pacific',
      description: 'Some description data',
      previously_called: 'Tue 09:47 AM EST',
      remove: true,
    },
    { name: 'Jane Doe',
      phoneNumber: '610-555-1212',
      category: 'Plumbers',
      affiliate_slug: 'Fake Campaign',
      received_at: 'Mon 08:18:00 AM',
      zip_code: '12345',
      time_zone: 'Pacific',
      description: 'Some description data',
      previously_called: 'Tue 09:47 AM EST',
      remove: true,
    },
  ]

  var deadCalls = [
    { name: 'ELOCAL.COM',
      phoneNumber: '610-555-1212',
      received_at: 'Mon 08:18:00 AM',
      zip_code: '12345',
      time_zone: 'Pacific',
      campaign_name: 'Fake Campaign',
      previously_called: 'Tue 09:47 AM EST',
      remove: true,
    },
    { name: 'ELOCAL.COM',
      phoneNumber: '610-555-1212',
      received_at: 'Mon 08:18:00 AM',
      zip_code: '12345',
      time_zone: 'Pacific',
      campaign_name: 'Fake Campaign',
      previously_called: 'Tue 09:47 AM EST',
      remove: true,
    },
  ]

})();
