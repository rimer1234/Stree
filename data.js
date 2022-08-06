var statenames=["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",  "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
                "Himachal Pradesh", "Jharkhand", "Karnataka",  "Kerala",  "Madhya Pradesh", "Maharashtra", "Manipur",
                "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
                "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]

var fem_lit= [68.6,71.3,77.2,57.8,72.5,93,76.5,79.7,91.7,61.7,76.7,98.3,65.4,84.6,87.6,88.2,94.4,85.8,69.5,79.4,64.7,88.9,84,66.6,80.6,66.1,79.8,76.1];
var male_lit= [79.5,85.7,84.3,78.5,82.7,93,90.9,91.5,94.9,81.3,88.5,98.2,81.3,93,95.2,83.7,97.1,93.3,84.6,86.8,88.9,93,90.7,84.8,88.2,82,89.3,81.6];

var teen_preg = [12.6,6,11.7,11,3.1,2.8,5.2,3.9,3.4,9.8,5.4,2.4,5.1,7.6,8.6,7.2,4.1,3.8,7.6,3.1,3.7,3.1,6.3,5.8,21.9,2.9,2.5,16.4];

var decide = [84.1,87,92.1,86.5,92.7,93.1,92.2,87.5,93.9,91,82.7,94.1,86,89.8,94.8,92.3,98.8,99.2,90.2,91.4,87.7,89.7,92.8,87.2,90.9,87.6,91,88.9];

var work_12 =[42.1,23.5,19,12.6,39.1,31.9,30.8,18.8,20.2,18,37,25.8,26.8,34.7,42.1,40,29.2,23.6,25.7,22.3,17.4,32.7,40.8,45.1,23.1,15.5,21.6,20.2];

var own_house = [47.8,70.2,42.7,55.3,45.6,23.2,42.6,39.3,23.1,64.2,67.6,27.3,39.9,22.9,58.4,65,20.8,26.9,43.5,63.5,26.6,53.1,47.9,66.6,17.2,51.9,24.6,23.2];

var own_cell = [48.9,76.4,57.2,51.4,40.7,91.2,48.8,50.4,79.5,49,61.8,86.6,38.5,54.8,72.2,67.5,82.3,82.5,50.1,61.2,50.2,88.6,74.6,60,53.1,46.5,60.9,50.1];

var have_bk_acct = [81.8,78.2,78.5,76.7,80.3,88.3,70,73.6,83.1,79.6,88.7,78.5,74.7,72.8,74,70.4,80.7,63.7,86.5,81.6,79.6,76.4,92.2,84.4,76.9,75.4,80.2,76.5];

var violence = [30,24.8,32,40,20.2,8.3,14,18.2,8.3,31.5,44.4,9.9,28.1,25.2,39.6,16,10.9,6.4,30.6,11.6,24.3,12.1,38.1,36.9,20.7,34.8,15.1,27];

var harass = [0.8,0.7,1.4,1.8,0.8,0,0.8,1.6,0.6,1.3,2,0,1,1.2,0.3,0.5,1.8,0,0.8,1.6,0.9,0.1,0,4,1.1,0.7,0.3,2.2];

var w_lit = ["Bihar", "Jharkhand", "Rajasthan", "Madhya Pradesh", "Uttar Pradesh"];
var w_lit_data = [57.8,	61.7,	64.7,	65.4,	66.1];

var b_lit = ["Kerala", "Mizoram", "Goa", "Himachal Pradesh", "Sikkim"];
var b_lit_data = [98.3, 94.4, 93, 91.7, 88.9];

var b_teen_p = ["Kerala", "Uttarakhand", "Goa", "Uttar Pradesh", "Chhattisgarh"];
var b_teen_p_data = [2.4, 2.5, 2.8, 2.9, 3.1];

var w_teen_p = ["Tripura", "West Bengal", "Andra Pradesh", "Assam", "Bihar"];
var w_teen_p_data = [21.9, 16.4, 12.6, 11.7, 11];

var b_home = ["Arunachal Pradesh","Karnataka", "Telengana", "Meghalaya", "Jharkhand"];
var b_home_data = [70.2, 67.6, 66.6, 65, 64.2];

var w_home = ["Tripura","Mizoram", "Maharashtra", "Himachal Pradesh", "Goa"];
var w_home_data = [17.2, 20.8, 22.9, 23.1, 23.2];

var b_bank = ["Tamil Nadu","Karnataka", "Goa", "Odisha", "Telengana"];
var b_bank_data = [92.2, 88.7, 88.3, 86.5, 84.4];

var w_bank = ["Nagaland","Gujarat", "Meghalaya", "Maharashtra", "Haryana"];
var w_bank_data = [63.7, 70, 70.4, 82.8, 73.6];

var b_viol = ["Nagaland", "Goa", "Himachal Pradesh", "Kerala", "Mizoram"];
var b_viol_data = [6.4, 8.3, 8.3, 9.9, 10.9];

var w_viol = ["Karnataka", "Bihar", "Manipur", "Tamil Nadu", "Telengana"];
var w_viol_data = [44.4, 40, 39.6, 38.1, 36.9];
  
var lit = [
    {
      type: 'zingchart.maps',
      options: {
        name: 'ind',
        panning: false, // turn of zooming. Doesn't work with bounding box
        zooming: false,
        scrolling: false,
        style: {
          tooltip: {
            borderColor: '#000',
            borderWidth: '2px',
            fontSize: '12px'
          },
          borderColor: '#000',
          borderWidth: '2px',
          controls: {
            visible: false, // turn of zooming. Doesn't work with bounding box

          },
          hoverState: {
            alpha: .28
          },
          items: {
            BR: {
              tooltip: {
                text: 'Literacy Rate: 57.8% ',
                backgroundColor: '#E43E28',
                'font-size': 12,
              },
              backgroundColor: '#E43E28',
              label: {
                visible: true
              }
            },
            JH: {
              tooltip: {
                text: 'Literacy Rate: 61.7%',
                backgroundColor: '#f24828',
                'font-size': 12,
              },
              backgroundColor: '#f24828',
              label: {
                visible: true
              }
            },
            RJ: {
              tooltip: {
                text: 'Literacy Rate: 64.7%',
                backgroundColor: 'rgb(243, 133, 114)',
                'font-size': 12,
              },
              backgroundColor: 'rgb(243, 133, 114)',
              label: {
                visible: true
              }
            },
            MP: {
              tooltip: {
                text: 'Literacy Rate: 65.4%',
                backgroundColor: 'rgb(241, 146, 129)',
                'font-size': 12,
              },
              backgroundColor: 'rgb(241, 146, 129)',
              label: {
                visible: true
              }
            },
            UP: {
                tooltip: {
                  text: 'Literacy Rate: 66.1%',
                  backgroundColor: 'rgb(240, 182, 172)',
                  'font-size': 12,
                },
                backgroundColor: 'rgb(240, 182, 172)',
                label: {
                  visible: true
                }
              },

            KL: {
               tooltip: {
                 text: 'Literacy Rate: 98.3% ',
                 backgroundColor: '#EDB300',
                 'font-size': 12,
               },
               backgroundColor: '#EDB300',
               label: {
                 visible: true
               }
             },
              MZ: {
                tooltip: {
                  text: 'Literacy Rate: 94.4%',
                  backgroundColor: '#EDCA00',
                  'font-size': 12,
                },
                backgroundColor: '#EDCA00',
                label: {
                  visible: true
                }
              },
              GA: {
                tooltip: {
                  text: 'Literacy Rate: 93%',
                  backgroundColor: '#EEDD02',
                  'font-size': 12,
                },
                backgroundColor: '#EEDD02',
                label: {
                  visible: true
                }
              },
              HP: {
                tooltip: {
                  text: 'Literacy Rate: 91.7%',
                  backgroundColor: '#F3e663',
                  'font-size': 12,
                },
                backgroundColor: '#F3e663',
                label: {
                  visible: true
                }
              },
              SK: {
                tooltip: {
                  text: 'Literacy Rate: 88.9%',
                  backgroundColor: '#f6ed91',
                  'font-size': 12,
                },
                backgroundColor: '#f6ed91',
                label: {
                  visible: true
                }
              },
            
          },
          label: { // text displaying. Like valueBox
            fontSize: '12px',
            visible: false
          }
        }
      }
    }
  ]


  var teen = [
    {
      type: 'zingchart.maps',
      options: {
        name: 'ind',
        panning: false, // turn of zooming. Doesn't work with bounding box
        zooming: false,
        scrolling: false,
        style: {
          tooltip: {
            borderColor: '#000',
            borderWidth: '2px',
            fontSize: '18px'
          },
          borderColor: '#000',
          borderWidth: '2px',
          controls: {
            visible: false, // turn of zooming. Doesn't work with bounding box

          },
          hoverState: {
            alpha: .28
          },
          items: {
            TR: {
              tooltip: {
                text: 'Teen Pregnancy Rate: 21.9% ',
                backgroundColor: '#E43E28',
                'font-size': 12,
              },
              backgroundColor: '#E43E28',
              label: {
                visible: true
              }
            },
            WB: {
              tooltip: {
                text: 'Teen Pregnancy Rate: 16.4%',
                backgroundColor: '#f24828',
                'font-size': 12,
              },
              backgroundColor: '#f24828',
              label: {
                visible: true
              }
            },
            AP: {
              tooltip: {
                text: 'Teen Pregnancy Rate: 12.6%',
                backgroundColor: 'rgb(243, 133, 114)',
                'font-size': 12,
              },
              backgroundColor: 'rgb(243, 133, 114)',
              label: {
                visible: true
              }
            },
            AS: {
              tooltip: {
                text: 'Teen Pregnancy Rate: 11.7%',
                backgroundColor: 'rgb(241, 146, 129)',
                'font-size': 12,
              },
              backgroundColor: 'rgb(241, 146, 129)',
              label: {
                visible: true
              }
            },
            BR: {
                tooltip: {
                  text: 'Teen Pregnancy Rate: 11%',
                  backgroundColor: 'rgb(240, 182, 172)',
                  'font-size': 12,
                },
                backgroundColor: 'rgb(240, 182, 172)',
                label: {
                  visible: true
                }
              },

            KL: {
               tooltip: {
                 text: 'Teen Pregnancy Rate: 2.4% ',
                 backgroundColor: '#EDB300',
                 'font-size': 12,
               },
               backgroundColor: '#EDB300',
               label: {
                 visible: true
               }
             },
              UT: {
                tooltip: {
                  text: 'Teen Pregnancy Rate: 2.5%',
                  backgroundColor: '#EDCA00',
                  'font-size': 12,
                },
                backgroundColor: '#EDCA00',
                label: {
                  visible: true
                }
              },
              GA: {
                tooltip: {
                  text: 'Teen Pregnancy Rate: 2.8%',
                  backgroundColor: '#EEDD02',
                  'font-size': 12,
                },
                backgroundColor: '#EEDD02',
                label: {
                  visible: true
                }
              },
              UP: {
                tooltip: {
                  text: 'Teen Pregnancy Rate: 2.9%',
                  backgroundColor: '#F3e663',
                  'font-size': 12,
                },
                backgroundColor: '#F3e663',
                label: {
                  visible: true
                }
              },
              CT: {
                tooltip: {
                  text: 'Teen Pregnancy Rate: 3.1%',
                  backgroundColor: '#f6ed91',
                  'font-size': 12,
                },
                backgroundColor: '#f6ed91',
                label: {
                  visible: true
                }
              },
            
          },
          label: { // text displaying. Like valueBox
            fontSize: '12px',
            visible: false
          }
        }
      }
    }
  ]

  var bank = [
    {
      type: 'zingchart.maps',
      options: {
        name: 'ind',
        panning: false, // turn of zooming. Doesn't work with bounding box
        zooming: false,
        scrolling: false,
        style: {
          tooltip: {
            borderColor: '#000',
            borderWidth: '2px',
            fontSize: '18px'
          },
          borderColor: '#000',
          borderWidth: '2px',
          controls: {
            visible: false, // turn of zooming. Doesn't work with bounding box

          },
          hoverState: {
            alpha: .28
          },
          items: {
            NL: {
              tooltip: {
                text: 'Bank Account Ownership: 63.7% ',
                backgroundColor: '#E43E28',
                'font-size': 12,
              },
              backgroundColor: '#E43E28',
              label: {
                visible: true
              }
            },
            GJ: {
              tooltip: {
                text: 'Bank Account Ownership: 70%',
                backgroundColor: '#f24828',
                'font-size': 12,
              },
              backgroundColor: '#f24828',
              label: {
                visible: true
              }
            },
            ML: {
              tooltip: {
                text: 'Bank Account Ownership: 70.4%',
                backgroundColor: 'rgb(243, 133, 114)',
                'font-size': 12,
              },
              backgroundColor: 'rgb(243, 133, 114)',
              label: {
                visible: true
              }
            },
            MH: {
              tooltip: {
                text: 'Bank Account Ownership: 82.8%',
                backgroundColor: 'rgb(241, 146, 129)',
                'font-size': 12,
              },
              backgroundColor: 'rgb(241, 146, 129)',
              label: {
                visible: true
              }
            },
            HR: {
                tooltip: {
                  text: 'Bank Account Ownership: 73.6%',
                  backgroundColor: 'rgb(240, 182, 172)',
                  'font-size': 12,
                },
                backgroundColor: 'rgb(240, 182, 172)',
                label: {
                  visible: true
                }
              },

            TN: {
               tooltip: {
                 text: 'Bank Account Ownership: 92.2% ',
                 backgroundColor: '#EDB300',
                 'font-size': 12,
               },
               backgroundColor: '#EDB300',
               label: {
                 visible: true
               }
             },
            KA: {
                tooltip: {
                  text: 'Bank Account Ownership: 88.7%',
                  backgroundColor: '#EDCA00',
                  'font-size': 12,
                },
                backgroundColor: '#EDCA00',
                label: {
                  visible: true
                }
              },
              GA: {
                tooltip: {
                  text: 'Bank Account Ownership: 88.3%',
                  backgroundColor: '#EEDD02',
                  'font-size': 12,
                },
                backgroundColor: '#EEDD02',
                label: {
                  visible: true
                }
              },
              OR: {
                tooltip: {
                  text: 'Bank Account Ownership: 86.5%',
                  backgroundColor: '#F3e663',
                  'font-size': 12,
                },
                backgroundColor: '#F3e663',
                label: {
                  visible: true
                }
              },
              TL: {
                tooltip: {
                  text: 'Bank Account Ownership: 84.4%',
                  backgroundColor: '#f6ed91',
                  'font-size': 12,
                },
                backgroundColor: '#f6ed91',
                label: {
                  visible: true
                }
              },
            
          },
          label: { // text displaying. Like valueBox
            fontSize: '12px',
            visible: false
          }
        }
      }
    }
  ]


  var viol = [
    {
      type: 'zingchart.maps',
      options: {
        name: 'ind',
        panning: false, // turn of zooming. Doesn't work with bounding box
        zooming: false,
        scrolling: false,
        style: {
          tooltip: {
            borderColor: '#000',
            borderWidth: '2px',
            fontSize: '18px'
          },
          borderColor: '#000',
          borderWidth: '2px',
          controls: {
            visible: false, // turn of zooming. Doesn't work with bounding box

          },
          hoverState: {
            alpha: .28
          },
          items: {
            KA: {
              tooltip: {
                text: 'Domestic Violence: 44.4%',
                backgroundColor: '#E43E28',
                'font-size': 12,
              },
              backgroundColor: '#E43E28',
              label: {
                visible: true
              }
            },
            BR: {
              tooltip: {
                text: 'Domestic Violence: 40%',
                backgroundColor: '#f24828',
                'font-size': 12,
              },
              backgroundColor: '#f24828',
              label: {
                visible: true
              }
            },
            MN: {
              tooltip: {
                text: 'Domestic Violence: 39.6%',
                backgroundColor: 'rgb(243, 133, 114)',
                'font-size': 12,
              },
              backgroundColor: 'rgb(243, 133, 114)',
              label: {
                visible: true
              }
            },
            TN: {
                tooltip: {
                  text: 'Domestic Violence: 38.1%',
                  backgroundColor: 'rgb(241, 146, 129)',
                  'font-size': 12,
                },
                backgroundColor:'rgb(241, 146, 129)' ,
                label: {
                  visible: true
                }
              },
              TL: {
                tooltip: {
                  text: 'Domestic Violence: 36.9% ',
                  backgroundColor: 'rgb(240, 182, 172)',
                  'font-size': 12,
                },
                backgroundColor:'rgb(240, 182, 172)',
                label: {
                  visible: true
                }
              },

            NL: {
               tooltip: {
                 text: 'Domestic Violence: 6.4% ',
                 backgroundColor: '#EDB300',
                 'font-size': 12,
               },
               backgroundColor: '#EDB300',
               label: {
                 visible: true
               }
             },
            GA: {
                tooltip: {
                  text: 'Domestic Violence: 8.3%',
                  backgroundColor: '#EDCA00',
                  'font-size': 12,
                },
                backgroundColor: '#EDCA00',
                label: {
                  visible: true
                }
              },
              HP: {
                tooltip: {
                  text: 'Domestic Violence: 8.3%',
                  backgroundColor: '#EEDD02',
                  'font-size': 12,
                },
                backgroundColor: '#EEDD02',
                label: {
                  visible: true
                }
              },
              KL: {
                tooltip: {
                  text: 'Domestic Violence: 9.9%',
                  backgroundColor: '#F3e663',
                  'font-size': 12,
                },
                backgroundColor: '#F3e663',
                label: {
                  visible: true
                }
              },
              MZ: {
                tooltip: {
                  text: 'Domestic Violence: 10.9%',
                  backgroundColor: '#f6ed91',
                  'font-size': 12,
                },
                backgroundColor: '#f6ed91',
                label: {
                  visible: true
                }
              },
            
          },
          label: { // text displaying. Like valueBox
            fontSize: '12px',
            visible: false
          }
        }
      }
    }
  ]
  
  var home = [
    {
      type: 'zingchart.maps',
      options: {
        name: 'ind',
        panning: false, // turn of zooming. Doesn't work with bounding box
        zooming: false,
        scrolling: false,
        style: {
          tooltip: {
            borderColor: '#000',
            borderWidth: '2px',
            fontSize: '18px'
          },
          borderColor: '#000',
          borderWidth: '2px',
          controls: {
            visible: false, // turn of zooming. Doesn't work with bounding box

          },
          hoverState: {
            alpha: .28
          },
          items: {
            TR: {
              tooltip: {
                text: 'Home Ownership: 17.2% ',
                backgroundColor: '#E43E28',
                'font-size': 12,
              },
              backgroundColor: '#E43E28',
              label: {
                visible: true
              }
            },
            MZ: {
              tooltip: {
                text: 'Home Ownership: 20.8%',
                backgroundColor: '#f24828',
                'font-size': 12,
              },
              backgroundColor: '#f24828',
              label: {
                visible: true
              }
            },
            MH: {
              tooltip: {
                text: 'Home Ownership: 22.9%',
                backgroundColor: 'rgb(243, 133, 114)',
                'font-size': 12,
              },
              backgroundColor: 'rgb(243, 133, 114)',
              label: {
                visible: true
              }
            },
            HP: {
              tooltip: {
                text: 'Home Ownership: 23.1%',
                backgroundColor: 'rgb(241, 146, 129)',
                'font-size': 12,
              },
              backgroundColor: 'rgb(241, 146, 129)',
              label: {
                visible: true
              }
            },
            GA: {
                tooltip: {
                  text: 'Home Ownership: 23.2%',
                  backgroundColor: 'rgb(240, 182, 172)',
                  'font-size': 12,
                },
                backgroundColor: 'rgb(240, 182, 172)',
                label: {
                  visible: true
                }
              },

            AR: {
               tooltip: {
                 text: 'Home Ownership: 70.2% ',
                 backgroundColor: '#EDB300',
                 'font-size': 12,
               },
               backgroundColor: '#EDB300',
               label: {
                 visible: true
               }
             },
            KA: {
                tooltip: {
                  text: 'Home Ownership: 67.6%',
                  backgroundColor: '#EDCA00',
                  'font-size': 12,
                },
                backgroundColor: '#EDCA00',
                label: {
                  visible: true
                }
              },
              TL: {
                tooltip: {
                  text: 'Home Ownership: 66.6%',
                  backgroundColor: '#EEDD02',
                  'font-size': 12,
                },
                backgroundColor: '#EEDD02',
                label: {
                  visible: true
                }
              },
              ML: {
                tooltip: {
                  text: 'Home Ownership: 65%',
                  backgroundColor: '#F3e663',
                  'font-size': 12,
                },
                backgroundColor: '#F3e663',
                label: {
                  visible: true
                }
              },
              JH: {
                tooltip: {
                  text: 'Home Ownership: 64.2%',
                  backgroundColor: '#f6ed91',
                  'font-size': 12,
                },
                backgroundColor: '#f6ed91',
                label: {
                  visible: true
                }
              },
            
          },
          label: { // text displaying. Like valueBox
            fontSize: '12px',
            visible: false
          }
        }
      }
    }
  ]