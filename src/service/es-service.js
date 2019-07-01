const axios = require('axios');
const btoa = require('btoa');

//TODO: move to file
const indexMappings = {
  'mappings': {
    '_doc': {
      'properties': {
        'api_version': {
          'type': 'long'
        },
        'calendar_enabled': {
          'type': 'boolean'
        },
        'charge_state': {
          'properties': {
            'battery_heater_on': {
              'type': 'boolean'
            },
            'battery_level': {
              'type': 'long'
            },
            'battery_range': {
              'type': 'float'
            },
            'charge_current_request': {
              'type': 'long'
            },
            'charge_current_request_max': {
              'type': 'long'
            },
            'charge_enable_request': {
              'type': 'boolean'
            },
            'charge_energy_added': {
              'type': 'long'
            },
            'charge_limit_soc': {
              'type': 'long'
            },
            'charge_limit_soc_max': {
              'type': 'long'
            },
            'charge_limit_soc_min': {
              'type': 'long'
            },
            'charge_limit_soc_std': {
              'type': 'long'
            },
            'charge_miles_added_ideal': {
              'type': 'long'
            },
            'charge_miles_added_rated': {
              'type': 'long'
            },
            'charge_port_cold_weather_mode': {
              'type': 'boolean'
            },
            'charge_port_door_open': {
              'type': 'boolean'
            },
            'charge_port_latch': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'charge_rate': {
              'type': 'long'
            },
            'charge_to_max_range': {
              'type': 'boolean'
            },
            'charger_actual_current': {
              'type': 'long'
            },
            'charger_pilot_current': {
              'type': 'long'
            },
            'charger_power': {
              'type': 'long'
            },
            'charger_voltage': {
              'type': 'long'
            },
            'charging_state': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'conn_charge_cable': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'est_battery_range': {
              'type': 'float'
            },
            'fast_charger_brand': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'fast_charger_present': {
              'type': 'boolean'
            },
            'fast_charger_type': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'ideal_battery_range': {
              'type': 'float'
            },
            'managed_charging_active': {
              'type': 'boolean'
            },
            'managed_charging_user_canceled': {
              'type': 'boolean'
            },
            'max_range_charge_counter': {
              'type': 'long'
            },
            'scheduled_charging_pending': {
              'type': 'boolean'
            },
            'time_to_full_charge': {
              'type': 'long'
            },
            'timestamp': {
              'type': 'date'
            },
            'trip_charging': {
              'type': 'boolean'
            },
            'usable_battery_level': {
              'type': 'long'
            }
          }
        },
        'climate_state': {
          'properties': {
            'battery_heater': {
              'type': 'boolean'
            },
            'climate_keeper_mode': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'driver_temp_setting': {
              'type': 'float'
            },
            'fan_status': {
              'type': 'long'
            },
            'inside_temp': {
              'type': 'long'
            },
            'is_auto_conditioning_on': {
              'type': 'boolean'
            },
            'is_climate_on': {
              'type': 'boolean'
            },
            'is_front_defroster_on': {
              'type': 'boolean'
            },
            'is_preconditioning': {
              'type': 'boolean'
            },
            'is_rear_defroster_on': {
              'type': 'boolean'
            },
            'left_temp_direction': {
              'type': 'long'
            },
            'max_avail_temp': {
              'type': 'long'
            },
            'min_avail_temp': {
              'type': 'long'
            },
            'outside_temp': {
              'type': 'float'
            },
            'passenger_temp_setting': {
              'type': 'float'
            },
            'remote_heater_control_enabled': {
              'type': 'boolean'
            },
            'right_temp_direction': {
              'type': 'long'
            },
            'seat_heater_left': {
              'type': 'long'
            },
            'seat_heater_rear_center': {
              'type': 'long'
            },
            'seat_heater_rear_left': {
              'type': 'long'
            },
            'seat_heater_rear_right': {
              'type': 'long'
            },
            'seat_heater_right': {
              'type': 'long'
            },
            'side_mirror_heaters': {
              'type': 'boolean'
            },
            'smart_preconditioning': {
              'type': 'boolean'
            },
            'timestamp': {
              'type': 'date'
            },
            'wiper_blade_heater': {
              'type': 'boolean'
            }
          }
        },
        'display_name': {
          'type': 'text',
          'fields': {
            'keyword': {
              'type': 'keyword',
              'ignore_above': 256
            }
          }
        },
        'drive_state': {
          'properties': {
            'gps_as_of': {
              'type': 'long'
            },
            'heading': {
              'type': 'long'
            },
            'latitude': {
              'type': 'float'
            },
            'longitude': {
              'type': 'float'
            },
            'native_latitude': {
              'type': 'float'
            },
            'native_location_supported': {
              'type': 'long'
            },
            'native_longitude': {
              'type': 'float'
            },
            'native_type': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'power': {
              'type': 'long'
            },
            'timestamp': {
              'type': 'date'
            }
          }
        },
        'gui_settings': {
          'properties': {
            'gui_24_hour_time': {
              'type': 'boolean'
            },
            'gui_charge_rate_units': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'gui_distance_units': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'gui_range_display': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'gui_temperature_units': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'show_range_units': {
              'type': 'boolean'
            },
            'timestamp': {
              'type': 'date'
            }
          }
        },
        'id': {
          'type': 'long'
        },
        'id_s': {
          'type': 'text',
          'fields': {
            'keyword': {
              'type': 'keyword',
              'ignore_above': 256
            }
          }
        },
        'in_service': {
          'type': 'boolean'
        },
        'option_codes': {
          'type': 'text',
          'fields': {
            'keyword': {
              'type': 'keyword',
              'ignore_above': 256
            }
          }
        },
        'state': {
          'type': 'text',
          'fields': {
            'keyword': {
              'type': 'keyword',
              'ignore_above': 256
            }
          }
        },
        'tokens': {
          'type': 'text',
          'fields': {
            'keyword': {
              'type': 'keyword',
              'ignore_above': 256
            }
          }
        },
        'user_id': {
          'type': 'long'
        },
        'vehicle_config': {
          'properties': {
            'can_accept_navigation_requests': {
              'type': 'boolean'
            },
            'can_actuate_trunks': {
              'type': 'boolean'
            },
            'car_special_type': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'car_type': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'charge_port_type': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'eu_vehicle': {
              'type': 'boolean'
            },
            'exterior_color': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'has_air_suspension': {
              'type': 'boolean'
            },
            'has_ludicrous_mode': {
              'type': 'boolean'
            },
            'key_version': {
              'type': 'long'
            },
            'motorized_charge_port': {
              'type': 'boolean'
            },
            'rear_seat_heaters': {
              'type': 'long'
            },
            'rhd': {
              'type': 'boolean'
            },
            'roof_color': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'spoiler_type': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'third_row_seats': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'timestamp': {
              'type': 'date'
            },
            'use_range_badging': {
              'type': 'boolean'
            },
            'wheel_type': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            }
          }
        },
        'vehicle_id': {
          'type': 'long'
        },
        'vehicle_state': {
          'properties': {
            'api_version': {
              'type': 'long'
            },
            'autopark_state_v3': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'autopark_style': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'calendar_supported': {
              'type': 'boolean'
            },
            'car_version': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'center_display_state': {
              'type': 'long'
            },
            'df': {
              'type': 'long'
            },
            'dr': {
              'type': 'long'
            },
            'ft': {
              'type': 'long'
            },
            'homelink_nearby': {
              'type': 'boolean'
            },
            'is_user_present': {
              'type': 'boolean'
            },
            'last_autopark_error': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'locked': {
              'type': 'boolean'
            },
            'media_state': {
              'properties': {
                'remote_control_enabled': {
                  'type': 'boolean'
                }
              }
            },
            'notifications_supported': {
              'type': 'boolean'
            },
            'odometer': {
              'type': 'float'
            },
            'parsed_calendar_supported': {
              'type': 'boolean'
            },
            'pf': {
              'type': 'long'
            },
            'pr': {
              'type': 'long'
            },
            'remote_start': {
              'type': 'boolean'
            },
            'remote_start_enabled': {
              'type': 'boolean'
            },
            'remote_start_supported': {
              'type': 'boolean'
            },
            'rt': {
              'type': 'long'
            },
            'sentry_mode': {
              'type': 'boolean'
            },
            'sentry_mode_available': {
              'type': 'boolean'
            },
            'software_update': {
              'properties': {
                'expected_duration_sec': {
                  'type': 'long'
                },
                'status': {
                  'type': 'text',
                  'fields': {
                    'keyword': {
                      'type': 'keyword',
                      'ignore_above': 256
                    }
                  }
                }
              }
            },
            'speed_limit_mode': {
              'properties': {
                'active': {
                  'type': 'boolean'
                },
                'current_limit_mph': {
                  'type': 'long'
                },
                'max_limit_mph': {
                  'type': 'long'
                },
                'min_limit_mph': {
                  'type': 'long'
                },
                'pin_code_set': {
                  'type': 'boolean'
                }
              }
            },
            'sun_roof_state': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            },
            'timestamp': {
              'type': 'date'
            },
            'valet_mode': {
              'type': 'boolean'
            },
            'valet_pin_needed': {
              'type': 'boolean'
            },
            'vehicle_name': {
              'type': 'text',
              'fields': {
                'keyword': {
                  'type': 'keyword',
                  'ignore_above': 256
                }
              }
            }
          }
        },
        'vin': {
          'type': 'text',
          'fields': {
            'keyword': {
              'type': 'keyword',
              'ignore_above': 256
            }
          }
        }
      }
    }
  }
};


module.exports = class EsService {
  constructor(endpoint, indexName) {
    this.endpoint = endpoint;
    this.indexName = indexName;
  }

  postIndexMaybe() {
    return axios.get(`${this.endpoint}/_cat/indices`, {
        auth: {
          username: process.env.ES_AUTH_USER,
          password: process.env.ES_AUTH_PASSWORD
        },
        headers: {
          'Authorization': 'Basic ' + btoa(process.env.ES_AUTH_USER + ':' + process.env.ES_AUTH_PASSWORD)
        }
      })
      .then(indexListing => {
        return indexListing.data.match(RegExp(`.*open\\s${this.indexName}\\s.*`));
      })
      .then(indexFound => !indexFound && this.postIndex());
  }

  postIndex() {
    console.log('Posting index to Elasticsearch...');
    return axios.put(`${this.endpoint}/${this.indexName}`, indexMappings, {
        auth: {
          username: process.env.ES_AUTH_USER,
          password: process.env.ES_AUTH_PASSWORD
        },
        headers: {
          'Authorization': 'Basic ' + btoa(process.env.ES_AUTH_USER + ':' + process.env.ES_AUTH_PASSWORD)
        }
      })
      .then(() => {
        console.log('ElasticSearch index posted');
      })
      .catch((error) => {
        console.log('Index already posted to Elasticsearch or another error occured');
        console.log(error);
      });
  }


  postState(data) {
    console.log('Posting document to Elasticsearch...');
    const docString = JSON.stringify(data.data.response);
    return axios.post(`${this.endpoint}/${this.indexName}/_doc`, docString, {
      auth: {
        username: process.env.ES_AUTH_USER,
        password: process.env.ES_AUTH_PASSWORD
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(process.env.ES_AUTH_USER + ':' + process.env.ES_AUTH_PASSWORD)
      }
    });
  }


};
