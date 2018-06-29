// This is just an example of config
// most of ids here are replaced with empty objects {}
// please make sure you use real string ids from your HA entities
// you may also rename this file to "override_config.js"
// doing so will not overwrite your config with the new one after updates


var CONFIG = {
   customTheme: CUSTOM_THEMES.TRANSPARENT, //CUSTOM_THEMES.TRANSPARENT
   transition: TRANSITIONS.ANIMATED_GPU,
   tileSize: 150,
   tileMargin: 6,
   serverUrl: "https://localhost",
   wsUrl: "wss://localhost/api/websocket",
   password: "password",
   events: [],
   pages: [
      {
         title: 'Main page',
         bg: 'images/bg1.jpg',
         icon: 'mdi-home-outline', // home icon
         groups: [
            {
               title: '',
               width: 2,
               height: 3,
               items: [
			      {
					 position: [0, 0],
					 width: 1.1,
					 type: TYPES.DEVICE_TRACKER,
					 id: 'device_tracker.micaela',
					 map: 'yandex',
					 states: {
					 home: "Home",
					 not_home: "Away",
					 },
					 bg: '@attributes.entity_picture',
					 slidesDelay: 2
				  },
				  {
					 position: [1.1, 0],
					 width: 1.1,
					 type: TYPES.DEVICE_TRACKER,
					 id: 'device_tracker.cjas_iphone_7',
					 map: 'yandex',
					 states: {
					 home: "Home",
					 not_home: "Away",
					 },
					 bg: '@attributes.entity_picture',
					 slidesDelay: 2
				  },
{
   position: [3.3, 0],
   height: 1,
   width: 1.1,
   classes: ['-compact'], // enable this if you want a little square tile (1x1)
   type: TYPES.WEATHER,
   id: 'group.weathersky',
   title: 'Väder',
   state: '&sensor.dark_sky_summary.state', // label with weather summary (e.g. Sunny)
   fields: { // most of that fields are optional
      icon: '&sensor.dark_sky_icon.state',
      iconMap: {
         'clear-day': 'clear',
         'clear-night': 'nt-clear',
         'cloudy': 'cloudy',
         'rain': 'rain',
         'sleet': 'sleet',
         'snow': 'snow',
         'wind': 'hazy',
         'fog': 'fog',
         'partly-cloudy-day': 'partlycloudy',
         'partly-cloudy-night': 'nt-partlycloudy'
      },
	  summary: '&sensor.dark_sky_summary.state',
      temperature: '&sensor.dark_sky_temperature.state',
      temperatureUnit: '&sensor.dark_sky_temperature.attributes.unit_of_measurement',
      precip: '&sensor.dark_sky_precip.state',
      precipIntensity: '&sensor.dark_sky_precip_intensity.state',
      precipIntensityUnit: '&sensor.dark_sky_precip_intensity.attributes.unit_of_measurement',
      precipProbability: '&sensor.dark_sky_precip_probability.state',
      precipProbabilityUnit: '&sensor.dark_sky_precip_probability.attributes.unit_of_measurement',
      windSpeed: '&sensor.dark_sky_wind_speed.state',
      windSpeedUnit: '&sensor.dark_sky_wind_speed.attributes.unit_of_measurement',
      humidity: '&sensor.dark_sky_humidity.state',
      humidityUnit: '&sensor.dark_sky_humidity.attributes.unit_of_measurement',
	  }
},
{
    position: [0, 2],
	width: 1.1,
    title: 'Golvlampa',
    subtitle: 'Övre hall',
    id: 'light.library',
    type: TYPES.LIGHT,
    states: {
        on: "On",
        off: "Off"
    },
    icons: {
        on: "mdi-lightbulb-on",
        off: "mdi-lamp"
    },
},
{
    position: [1.1, 2],
	width: 1.1,
    title: 'Taklampa',
    subtitle: 'Övre hall',
    id: 'light.upper_hallway',
    type: TYPES.LIGHT,
    states: {
        on: "On",
        off: "Off"
    },
    icons: {
        on: "mdi-lightbulb-on",
        off: "mdi-ceiling-light"
    },
},
{
    position: [0, 1],
	width: 1.1,
    title: 'Hallen',
    subtitle: 'Nedervåning',
    id: 'light.hallway',
    type: TYPES.LIGHT,
    states: {
        on: "On",
        off: "Off"
    },
    icons: {
        on: "mdi-lightbulb-on",
        off: "mdi-lamp"
    },
},
{
    position: [4.4, 1],
	width: 1.1,
    title: 'Fönster',
    subtitle: 'Kontor',
    id: 'light.kontoret',
    type: TYPES.LIGHT,
    states: {
        on: "On",
        off: "Off"
    },
    icons: {
        on: "mdi-lightbulb-on",
        off: "mdi-lightbulb"
    },
},
{
    position: [1.1, 1],
	width: 1.1,
    title: 'Köksfönster',
    subtitle: 'Nedervåning',
    id: 'light.kitchen_window',
    type: TYPES.LIGHT,
    states: {
        on: "On",
        off: "Off"
    },
    icons: {
        on: "mdi-lightbulb-on",
        off: "mdi-lamp"
    },
},
{
    position: [3.3, 1],
	width: 1.1,
    title: 'Golvlampa',
    subtitle: 'Vardagsrum',
    id: 'light.livingroom',
    type: TYPES.LIGHT,
    states: {
        on: "On",
        off: "Off"
    },
    icons: {
        on: "mdi-lightbulb-on",
        off: "mdi-lamp"
    },
	sliders: [
					 {
					 title: 'Brightness',
					 field: 'brightness',
					 max: 255,
					 min: 0,
					 step: 5,
					 request: {
					 type: "call_service",
					 domain: "light",
					 service: "turn_on",
					 field: "brightness"
					 }
					},
					 {
					 title: 'Color temp',
					 field: 'color_temp',
					 max: 588,
					 min: 153,
					 step: 15,
					 request: {
					 type: "call_service",
					 domain: "light",
					 service: "turn_on",
					 field: "color_temp"
         }
}
]
      },
	  {
    position: [2.2, 1],
	width: 1.1,
    title: 'Spotlights hall',
    subtitle: 'Nedervåning',
    id: 'light.spots',
    type: TYPES.LIGHT,
    states: {
        on: "On",
        off: "Off"
    },
    icons: {
        on: "mdi-spotlight-beam",
        off: "mdi-spotlight"
    },
},
{
    position: [4.4, 0],
	width: 1.1,
    title: 'Taklampa',
    subtitle: 'Vardagsrum',
    id: 'light.livingroom_roof',
    type: TYPES.LIGHT,
    states: {
        on: "On",
        off: "Off"
    },
    icons: {
        on: "mdi-lightbulb-on",
        off: "mdi-ceiling-light"
    },
},
{
   position: [2, 3],
   type: TYPES.SWITCH,
   id: 'switch.balkong',
   title: 'Fläkt',
   subtitle: 'Sovrum',
   states: {
      on: "On",
      off: "Off"
   },
   icons: {
      on: "mdi-fan",
      off: "mdi-fan",
   }
},
{
   position: [0, 3],
   type: TYPES.SWITCH,
   id: 'switch.clara_slinga',
   title: 'Slinga',
   subtitle: 'Claras rum',
   states: {
      on: "On",
      off: "Off"
   },
   icons: {
      on: "mdi-lightbulb-on",
      off: "mdi-lightbulb",
   }
},
{
   position: [1, 3],
   type: TYPES.SWITCH,
   id: 'switch.fanvardagsrum',
   title: 'Fläkt',
   subtitle: 'Vardagsrum',
   states: {
      on: "On",
      off: "Off"
   },
   icons: {
      on: "mdi-fan",
      off: "mdi-fan",
   }
},
{
   position: [2.2, 2],
   width: 1.1,
   type: TYPES.SWITCH,
   id: 'switch.sovrumsfonster',
   title: 'Fönster',
   subtitle: 'Sovrum',
   states: {
      on: "On",
      off: "Off"
   },
   icons: {
      on: "mdi-lightbulb-on",
      off: "mdi-lamp"
   }
},
{
   position: [4.4, 2],
   width: 1.1,
   type: TYPES.SWITCH,
   id: 'switch.nattduksbord_calle',
   title: 'Nattdukslampa',
   subtitle: 'Calle',
   states: {
      on: "On",
      off: "Off"
   },
   icons: {
      on: "mdi-lightbulb-on",
      off: "mdi-lamp"
   }
},
{
   position: [3.3, 2],
   width: 1.1,
   type: TYPES.SWITCH,
   id: 'switch.nattduksbord_micaela',
   title: 'Nattdukslampa',
   subtitle: 'Micaela',
   states: {
      on: "On",
      off: "Off"
   },
   icons: {
      on: "mdi-lightbulb-on",
      off: "mdi-lamp"
   }
},
{
   position: [3, 3],
   width: 2.5,
   height: 1,
   title: '',
   id: {}, // since we are binding each list item to different sensor, so we simply use an empty object
   type: TYPES.TEXT_LIST,
   state: false,
   list: [
      {
         title: 'Farsta mot stan',
         icon: 'mdi-bus-clock',
         value: '&sensor.sl_farsta_centrum.attributes.next_departure'
      },
	  {
         title: 'Linje',
		 icon: 'mdi-subway',
         value: '&sensor.sl_farsta_centrum.attributes.next_line',
	  },
	  {
         title: 'Destination',
         icon: 'mdi-subway',
         value: '&sensor.sl_farsta_centrum.attributes.next_destination'
      },
	  {
         title: 'Centralen mot Farsta',
         icon: 'mdi-bus-clock',
         value: '&sensor.sl_tcentralen.attributes.next_departure'
      },
	  {
         title: 'Linje',
		 icon: 'mdi-subway',
         value: '&sensor.sl_tcentralen.attributes.next_line',
	  },
	  {
         title: 'Destination',
         icon: 'mdi-subway',
         value: '&sensor.sl_tcentralen.attributes.next_destination'
      },
      ]
},
{
   position: [2.2, 0],
   width: 1.1,
   title: 'Clara',
   classes: [CLASS_BIG],
   type: TYPES.INPUT_BOOLEAN,
   id: 'input_boolean.clara_sleep',
   icons: {
      on: 'mdi-sleep',
      off: 'mdi-sleep-off'
   },
   states: {
      on: "Sover",
      off: "Vaken"
   }
},
                  

               ]
            },
			
                  
              
            
         ]
      },
	  {
         title: 'Cameras',
         bg: 'images/bg1.jpg',
         icon: 'mdi-cctv', // home icon
         groups: [
            {
               title: '',
               width: 2,
               height: 3,
               items: [
			   {
					 position: [0, 0],
					 id: 'camera.koket',
					 type: TYPES.CAMERA_THUMBNAIL,
					 bgSize: 'cover',
					 width: 1.8,
					 height: 2,
					 state: false,
					 fullscreen: {
					 type: TYPES.CAMERA_THUMBNAIL,
					 refresh: 800, // can be number in milliseconds
					 bgSize: 'contain'
					 },
					 refresh: function () { // can also be a function
					 return 3000 + Math.random() * 1000
					 }
				  },
				  {
					 position: [1.8, 0],
					 id: 'camera.clara',
					 type: TYPES.CAMERA_THUMBNAIL,
					 bgSize: 'cover',
					 width: 1.8,
					 height: 2,
					 state: false,
					 fullscreen: {
					 type: TYPES.CAMERA_THUMBNAIL,
					 refresh: 800, // can be number in milliseconds
					 bgSize: 'contain'
					 },
					 refresh: function () { // can also be a function
					 return 3000 + Math.random() * 1000
					 }
				 
				 
            },
			{
					 position: [3.6, 0],
					 id: 'camera.bebis',
					 type: TYPES.CAMERA_THUMBNAIL,
					 bgSize: 'cover',
					 width: 1.8,
					 height: 2,
					 state: false,
					 fullscreen: {
					 type: TYPES.CAMERA_THUMBNAIL,
					 refresh: 800, // can be number in milliseconds
					 bgSize: 'contain'
					 },
					 refresh: function () { // can also be a function
					 return 3000 + Math.random() * 1000
					 }
				 
				 
            },
				  {
					 position: [3.6, 2],
					 id: 'camera.vag_73_sockenvagen',
					 type: TYPES.CAMERA_THUMBNAIL,
					 bgSize: 'cover',
					 width: 1.8,
					 height: 1,
					 state: false,
					 fullscreen: {
					 type: TYPES.CAMERA_THUMBNAIL,
					 refresh: 150000, // can be number in milliseconds
					 bgSize: 'contain'
					 },
					 refresh: function () { // can also be a function
					 return 100000 + Math.random() * 1000
					 }
				  },
				  {
					 position: [1.8, 2],
					 id: 'camera.vag_73_tallkrogen',
					 type: TYPES.CAMERA_THUMBNAIL,
					 bgSize: 'cover',
					 width: 1.8,
					 height: 1,
					 state: false,
					 fullscreen: {
					 type: TYPES.CAMERA_THUMBNAIL,
					 refresh: 150000, // can be number in milliseconds
					 bgSize: 'contain'
					 },
					 refresh: function () { // can also be a function
					 return 100000 + Math.random() * 1000
					 }
				  },
				  {
					 position: [0, 2],
					 id: 'camera.vag_73_skondal',
					 type: TYPES.CAMERA_THUMBNAIL,
					 bgSize: 'cover',
					 width: 1.8,
					 height: 1,
					 state: false,
					 fullscreen: {
					 type: TYPES.CAMERA_THUMBNAIL,
					 refresh: 150000, // can be number in milliseconds
					 bgSize: 'contain'
					 },
					 refresh: function () { // can also be a function
					 return 100000 + Math.random() * 1000
					 }
				  },
				  {
					 position: [1.8, 3],
					 id: 'camera.vader_stockholm',
					 type: TYPES.CAMERA_THUMBNAIL,
					 bgSize: 'cover',
					 width: 3.6,
					 height: 1,
					 state: false,
					 fullscreen: {
					 type: TYPES.CAMERA_THUMBNAIL,
					 refresh: 150000, // can be number in milliseconds
					 bgSize: 'contain'
					 },
					 refresh: function () { // can also be a function
					 return 100000 + Math.random() * 1000
					 }
				  },
				  {
					 position: [0, 3],
					 id: 'camera.golf',
					 type: TYPES.CAMERA_THUMBNAIL,
					 bgSize: 'cover',
					 width: 1.8,
					 height: 1,
					 state: false,
					 fullscreen: {
					 type: TYPES.CAMERA_THUMBNAIL,
					 refresh: 150000, // can be number in milliseconds
					 bgSize: 'contain'
					 },
					 refresh: function () { // can also be a function
					 return 100000 + Math.random() * 1000
					 }
				  },
				  

           ]       
	  }   
            
         ]
      },
	  {
         title: 'Info',
         bg: 'images/bg1.jpg',
         icon: 'mdi-information-outline', // home icon
         groups: [
            {
               title: '',
               width: 2,
               height: 3,
               items: [
			   {
   position: [0, 0.6],
   width: 2.25,
   height: 3.6,
   title: 'Device Status',
   id: {}, // since we are binding each list item to different sensor, so we simply use an empty object
   type: TYPES.TEXT_LIST,
   state: false,
   list: [
      {
         title: 'Astro',
         icon: 'mdi-server',
         value: '&binary_sensor.device_tracker_astro.state',
      },
	  {
         title: 'Calle Stationär',
         icon: 'mdi-desktop-tower',
         value: '&binary_sensor.device_tracker_calledator.state',
      },
	  {
         title: 'Micaela Stationär',
		 icon: 'mdi-desktop-tower',
         value: '&binary_sensor.device_tracker_micaeladator.state',
	  },
	  {
         title: 'HTPC',
         icon: 'mdi-theater',
         value: '&binary_sensor.device_tracker_htpc.state',
      },
	  {
         title: 'LG 65" OLED TV',
         icon: 'mdi-television',
         value: '&binary_sensor.device_tracker_lgoledtv.state',
      },
	  {
         title: 'Vu Solo+ Vardagsrum',
         icon: 'mdi-television-classic',
         value: '&binary_sensor.device_tracker_vusoloner.state',
      },
	  {
         title: 'Vu Solo+ Sovrum',
		 icon: 'mdi-television-classic',
         value: '&binary_sensor.device_tracker_vusoloupp.state',
	  },
	  {
         title: 'Chromecast Sovrum',
		 icon: 'mdi-cast',
         value: '&binary_sensor.device_tracker_chromecast.state',
	  },
	  {
         title: 'Sonos Köket',
         icon: 'mdi-speaker',
         value: '&binary_sensor.device_tracker_sonoskitchen.state',
      },
	  {
         title: 'Sonos Vardagsrum',
         icon: 'mdi-speaker',
         value: '&binary_sensor.device_tracker_sonoslivingroom.state',
      },
	  {
         title: 'Sonos Sovrum',
         icon: 'mdi-speaker',
         value: '&binary_sensor.device_tracker_sonosbedroom.state',
      },
	  {
         title: 'Echo Vardagsrum',
         icon: 'mdi-amazon',
         value: '&binary_sensor.device_tracker_echolivingroom.state',
      },
	  {
         title: 'Asus RT-AC68U',
         icon: 'mdi-router-wireless',
         value: '&binary_sensor.device_tracker_rtac68u.state',
      },
	  {
         title: 'Asus RT-AC66U',
         icon: 'mdi-access-point-network',
         value: '&binary_sensor.device_tracker_rtac66u.state',
      },
	  {
         title: 'Pi-Hole',
         icon: 'mdi-web',
         value: '&binary_sensor.device_tracker_pihole.state',
      },
	  {
         title: 'Camera Köket',
         icon: 'mdi-cctv',
         value: '&binary_sensor.device_tracker_dlinkcamkitchen.state',
      },
	  {
         title: 'Camera Clara',
         icon: 'mdi-cctv',
         value: '&binary_sensor.device_tracker_dlinkcamclara.state',
      },
	  {
         title: 'Camera Bebis',
         icon: 'mdi-cctv',
         value: '&binary_sensor.device_tracker_dlinkcambebis.state',
      },
	  {
         title: 'Printer',
         icon: 'mdi-printer',
         value: '&binary_sensor.device_tracker_printer.state',
      },
	  {
         title: 'Playstation 4 Pro',
         icon: 'mdi-playstation',
         value: '&binary_sensor.device_tracker_playstation4pro.state',
      },
	  {
         title: 'Nintendo Switch',
         icon: 'mdi-nintendo-switch',
         value: '&binary_sensor.device_tracker_nintendoswitch.state',
      },
	  {
         title: 'Retropi',
         icon: 'mdi-raspberrypi',
         value: '&binary_sensor.device_tracker_retropie.state',
      },
	  ]
},
{
   position: [0, 0],
   width: 1.25,
   height: 0.6,
   type: TYPES.SENSOR,
   title: 'Plex',
   id: 'sensor.cjserver',
   unit: 'Users', // override default entity unit
   state: false, // hidding state
   filter: function (value) { // optional
      var num = parseFloat(value);
      return num && !isNaN(num) ? num.toFixed(1) : value;
   }
},
{
   position: [2.25, 3.4],
   width: 2.5,
   height: 0.8,
   title: 'Hass.io',
   id: {}, // since we are binding each list item to different sensor, so we simply use an empty object
   type: TYPES.TEXT_LIST,
   state: false,
   list: [
      {
         title: 'Uptime',
         icon: 'mdi-clock',
         value: '&sensor.since_last_boot.state',
      },
	  {
         title: 'Last Reboot',
         icon: 'mdi-clock',
         value: '&sensor.last_boot.state',
      },
	  {
         title: 'Cert Expire',
		 icon: 'mdi-certificate',
         value: '&sensor.ssl_certificate_expiry.state',
	  },
      ]
},
{
   position: [2.25, 1.2],
   width: 2.5,
   height: 1,
   title: 'Internet',
   id: {}, // since we are binding each list item to different sensor, so we simply use an empty object
   type: TYPES.TEXT_LIST,
   state: false,
   list: [
      {
         title: 'Internet Speed IN',
         icon: 'mdi-speedometer',
         value: '&sensor.internet_speed_in.state',
		 unit: ' Mbps'
      },
	  {
         title: 'Internet Speed OUT',
         icon: 'mdi-speedometer',
         value: '&sensor.internet_speed_out.state',
		 unit: ' Mbps'
      },
	  {
         title: 'WAN Download Average',
		 icon: 'mdi-download',
         value: '&sensor.wan_traffic_in_mean.state',
		 unit: ' Mbps'
	  },
	  {
         title: 'WAN Upload Average',
         icon: 'mdi-upload',
         value: '&sensor.wan_traffic_out_mean.state',
		 unit: ' Mbps'
      },
      ]
},
{
   position: [2.25, 0],
   width: 2.5,
   height: 1.2,
   title: 'Alarm',
   id: {}, // since we are binding each list item to different sensor, so we simply use an empty object
   type: TYPES.TEXT_LIST,
   state: false,
   list: [
      {
         title: 'Alarm Status',
         icon: 'mdi-alarm',
         value: '&alarm_control_panel.ha_alarm.state'
      },
	  {
         title: 'Siren Status',
         icon: 'mdi-bell-ring-outline',
         value: '&sensor.siren_status.state'
      },
	  {
         title: 'Front Door',
		 icon: 'mdi-glassdoor',
         value: '&sensor.door_status.state',
	  },
	  {
         title: 'Kitchen Window',
         icon: 'mdi-office',
         value: '&sensor.window_status.state'
      },
	  {
         title: 'Fire Alarm Downstairs',
		 icon: 'mdi-alert-outline',
         value: '&sensor.siren_bvnere_status.state',
	  },
	  {
         title: 'Fire Alarm Upstairs',
         icon: 'mdi-alert-outline',
         value: '&sensor.siren_bvuppe_status.state'
      },
      ]
},
{
   position: [1.25, 0],
   width: 1,
   height: 0.6,
   type: TYPES.INPUT_SELECT,
   title: 'ALARM',
   icon: 'mdi-shield',
   id: 'input_select.alarm_menu',
   state: false
},
{
   position: [2.25, 2.2],
   width: 2.5,
   height: 1.2,
   title: 'Pi-Hole',
   id: {}, // since we are binding each list item to different sensor, so we simply use an empty object
   type: TYPES.TEXT_LIST,
   state: false,
   list: [
      {
         title: 'Ads Blocked Today',
         icon: 'mdi-close-octagon-outline',
         value: '&sensor.pihole_ads_blocked_today.state',
		 unit: ' ads'
      },
	  {
         title: 'Ads % Blocked Today',
         icon: 'mdi-close-octagon-outline',
         value: '&sensor.pihole_ads_percentage_blocked_today.state',
		 unit: ' %'
      },
	  {
         title: 'DNS Queries Today',
         icon: 'mdi-comment-question-outline',
         value: '&sensor.pihole_dns_queries_today.state',
		 unit: ' queries'
      },
	  {
         title: 'DNS Queries Forwarded',
         icon: 'mdi-comment-question-outline',
         value: '&sensor.pihole_dns_queries_forwarded.state',
		 unit: ' queries'
      },
	  {
         title: 'DNS Queries Blocked',
		 icon: 'mdi-comment-question-outline',
         value: '&sensor.pihole_dns_queries_cached.state',
		 unit: ' queries'
	  },
	  {
         title: 'Domains Blocked',
         icon: 'mdi-block-helper',
         value: '&sensor.pihole_domains_blocked.state',
		 unit: ' domains'
      },
	  ]
}	   
          ]       
	  }   
            
         ]
      },			   		
	  {
         title: 'Media',
         bg: 'images/bg1.jpg',
		 bgOpacity: '0.1',
         icon: 'mdi-television-classic', // home icon
         groups: [
            {
               title: '',
               width: 2,
               height: 3,
               items: [		   
{
   position: [3, 0],
   width: 2.4,
   height: 1,
   id: 'media_player.65_lg_oled_tv',
   type: TYPES.MEDIA_PLAYER,
   showSource: true,
},
{
   position: [0, 1],
   width: 3,
   height: 0.75,
   id: 'media_player.arneheds_sovrum',
   type: TYPES.MEDIA_PLAYER,
   bg: '@attributes.entity_picture', // show picture of current media as a background
   bgOpacity: 0.35
},
{
   position: [0, 0],
   width: 3,
   height: 1,
   id: 'media_player.vusolo',
   type: TYPES.MEDIA_PLAYER,
   showSource: true,
   bg: '@attributes.entity_picture', // show picture of current media as a background
   bgOpacity: 0.35
},
{
   position: [0, 3],
   width: 1.8,
   height: 1,
   title: 'Sonos One - Köket',
   id: 'media_player.kitchen',
   type: TYPES.MEDIA_PLAYER,
   showSource: true,
   state: '@attributes.media_title',
   bgSuffix: '@attributes.entity_picture', // show picture of current media as a background
   bgOpacity: 0.35
},
{
   position: [1.8, 3],
   width: 1.8,
   height: 1,
   title: 'Sonos Connect - Vardagsrum',
   id: 'media_player.livingroom',
   type: TYPES.MEDIA_PLAYER,
   showSource: true,
   state: '@attributes.media_title',
   bgSuffix: '@attributes.entity_picture', // show picture of current media as a background
   bgOpacity: 0.35
},
{
   position: [3.6, 3],
   width: 1.8,
   height: 1,
   title: 'Sonos One - Sovrum',
   id: 'media_player.bedroom',
   type: TYPES.MEDIA_PLAYER,
   showSource: true,
   state: '@attributes.media_title',
   bgSuffix: '@attributes.entity_picture', // show picture of current media as a background
   bgOpacity: 0.35
},
{
   position: [0,2.7],
   width: 5.4,
   height: 0.3,
   title: '',
   id: {}, // since we are binding each list item to different sensor, so we simply use an empty object
   type: TYPES.TEXT_LIST,
   state: false,
   list: [
      {
         title: 'Now Playing',
         icon: 'mdi-music',
         value: '&sensor.rest_sensor.state',
      },
      ]
},
{
   position: [3, 1],
   width: 1.2,
   height: 0.75,
   type: TYPES.INPUT_SELECT,
   title: 'HTPC',
   subtitle: 'Power',
   id: 'input_select.htpcoptions',
   state: false
},
{
   position: [1.1, 1.75],
   height: 0.95,
   width: 1.1,
   type: TYPES.INPUT_SELECT,
   title: 'Radio speaker',
   id: 'input_select.speakers',
   state: false
},
{
   position: [4.2, 1],
   width: 1.2,
   height: 0.75,
   type: TYPES.INPUT_SELECT,
   title: 'Radio Control',
   id: 'input_select.radiooptions',
   state: false
},
{
   position: [0, 1.75],
   height: 0.95,
   width: 1.1,
   type: TYPES.INPUT_SELECT,
   title: 'Radio station',
   id: 'input_select.radio_station',
   state: false
},
{
   position: [3.3, 1.75],
   width: 1,
   height: 0.95,
   title: 'Group all Sonos',
   classes: [CLASS_BIG],
   type: TYPES.INPUT_BOOLEAN,
   id: 'input_boolean.group_all_sonos',
   icons: {
      on: 'mdi-stop',
      off: 'mdi-play'
   },
   states: {
      on: "On",
      off: "Off"
   }
},
{
   position: [4.3, 1.75],
   width: 1.1,
   height: 0.95,
   title: 'Group downstairs Sonos',
   classes: [CLASS_BIG],
   type: TYPES.INPUT_BOOLEAN,
   id: 'input_boolean.group_down_sonos',
   icons: {
      on: 'mdi-stop',
      off: 'mdi-play'
   },
   states: {
      on: "On",
      off: "Off"
   }
},
{
   position: [2.2, 1.75],
   width: 1.1,
   height: 0.95,
   title: 'Radio',
   classes: [CLASS_BIG],
   type: TYPES.INPUT_BOOLEAN,
   id: 'input_boolean.radio_play',
   icons: {
      on: 'mdi-stop',
      off: 'mdi-play'
   },
   states: {
      on: "On",
      off: "Off"
   }
},
]       
	  }   
            
         ]
      },
	  {
         title: 'Babycams',
         bg: 'images/bg1.jpg',
         icon: 'mdi-baby', // home icon
         groups: [
            {
               title: '',
               width: 2,
               height: 3,
               items: [
			   {
					 position: [0, 0],
					 id: 'camera.bebis',
					 type: TYPES.CAMERA_THUMBNAIL,
					 bgSize: 'cover',
					 hidden: 'true',
					 width: 5.6,
					 height: 2,
					 state: false,
					 fullscreen: {
					 type: TYPES.CAMERA_THUMBNAIL,
					 refresh: 800, // can be number in milliseconds
					 bgSize: 'contain'
					 },
					 refresh: function () { // can also be a function
					 return 3000 + Math.random() * 1000
					 }
				  },
				  {
					 position: [0, 2],
					 id: 'camera.clara',
					 type: TYPES.CAMERA_THUMBNAIL,
					 bgSize: 'cover',
					 hidden: 'true',
					 width: 5.6,
					 height: 2,
					 state: false,
					 fullscreen: {
					 type: TYPES.CAMERA_THUMBNAIL,
					 refresh: 800, // can be number in milliseconds
					 bgSize: 'contain'
					 },
					 refresh: function () { // can also be a function
					 return 3000 + Math.random() * 1000
					 }
				 
				 
            },
			   
			
           ]       
	  }   
            
         ]
      }
	  
   ],
}