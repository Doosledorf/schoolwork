var qData = { q1 : { question : 'Do you like being OP?',
                     option1 : { text: 'Hell yea!',
                                 scoresAffected : ['Azazel', 'Issac (w/D6)', 'Judas', 'Eve', 'Samson', 'Eden']
                               },
                     option2 : { text:  'Nah I like a challenge',
                                 scoresAffected : ['Issac', 'Magdalene', 'Lazarus', 'The Lost', '???', 'Cain'],
                     children : ['q2', 'q3'] 
                   },
                    
              q2 : { question : 'Seriously, how OP? Cuz we can really make it happen...', 
                     option1 : { text : 'Rub face on keyboard to win.', 
                                 scoresAffected : ['Azazel', 'Issac (w/D6)']
                               },
                     option2 : { text : '\'Need to be awake\' OP.',
                                 scoresAffected : ['Judas', 'Eve', 'Samson', 'Eden']
                               },
                     children: ['q4', 'q5'],
                     parent : 'q1'; 
                   },
                    
              q3 : { question : 'Do you like concussions?',
                     option1 : { text : 'Only if it puts me into a come.',
                                 scoresAffected : ['The Lost', '???']
                               },
                     option2 : { text : 'I like to keep my IQ intact, thanks.', 
                                 scoresAffected : ['Issac', 'Cain', 'Magdalene', 'Lazarus']
                               },
                     children : ['q6', 'q7'],
                     parent : 'q1'
                   },
                    
              q4 : { question : 'Do you praise RNJesus?',
                     option1 : { text : 'PRAISE IT!',
                                 scoresAffected : ['Issac (w/D6)']
                               },
                     option2 : { text : 'WHA HE DONE FOR ME?!',
                                 scoresAffected : ['Azazel']
                               },
                     children : [],
                     parent : 'q2'
                    },
                    
              q5 : { question : 'Like Satan?', 
                     option1 : { text : 'Yea he is a cool guy.', 
                                 scoresAffected : ['Judas', 'Eve']
                               },
                     option2 : { text : 'HELL NO!',
                                 scoresAffected : ['Samson', 'Eden']
                               },
                     children : ['q8', 'q9'],
                     parent : 'q2'
                   },
                
              q6 : { question : 'How much do you like RNJesus?',
                     option1 : { text : 'My loins rustle for him.',
                                 scoresAffected: ['The Lost']
                               },
                     option2 : { text : 'Kissing his feet should suffice.',
                                 scoresAffected : ['???']
                               },
                     children : [],
                     parent : 'q3'
                   },
                    
              q7 : { question : 'Feeling Lucky?',
                     option1 : { text : 'Yea...punk',
                                 scoresAffected : ['Cain', 'Lazarus']
                               },
                     option2 : { text : 'No sunshine from my ass!',
                                 scoresAffected : ['Magdalene', 'Issac']
                               },
                     children : ['q10', 'q11'],
                     parent : 'q3'
                   },
                    
              q8 : { question : 'Like apples?',
                     option1 : { text: 'Nah I\'m a pear man.',
                                 scoresAffected : ['Judas']
                               },
                     option2 : { text: 'I\'d defy God to eat one',
                                 scoresAffected : ['Eve']
                               },
                     children : [],
                     parent : 'q5'
                   },
                
               q9 : { question : 'How gender-fluid are you?',
                      option1 : { text : 'I\'M A MAN!',
                                  scoresAffected : ['Samson']
                                },
                      option2 : { text : 'I don\'t really associate myself with any gender',
                                  scoresAffected : ['Eve']
                                },
                      children : [],
                      parent : 'q5'
                    },
                
                q10 : { question : 'Depressed?',
                        option1 : { text : 'Uh, not really.',
                                    scoresAffected : ['Cain']
                                  },
                        option2 : { text : 'I\'ve thought about suicide once or twice.',
                                    scoresAffected : ['Lazarus']
                                  },
                        children : [],
                        parent : 'q7'
                      },
                
                q11 : { question : 'Like vanilla ice cream?',
                        option1 : { text : 'No way, too boring!',
                                    scoresAffected : ['Magdalene']
                                  },
                        option2 : { text : 'Mmmmm...vanilla',
                                    scoresAffected : ['Issac']
                                  },
                        children : [],
                        parent : 'q7'
                      }
                   }
                        
                       
              
                    
              
              