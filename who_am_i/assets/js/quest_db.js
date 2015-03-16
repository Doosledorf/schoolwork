var qData = { q1 : { question : 'Do you like being OP?',
                     options : [{ text: 'Hell yea!',
                                 scoresAffected : ['Azazel', 'Issac (w/D6)', 'Judas', 'Eve', 'Samson', 'Eden']
                               },
                               { text:  'Nah I like a challenge',
                                 scoresAffected : ['Issac', 'Magdalene', 'Lazarus', 'The Lost', '???', 'Cain']
                               }],
                     children : ['q2', 'q3'] ,
                     parent : ''
                   },
                    
              q2 : { question : 'Seriously, how OP? Cuz we can really make it happen...', 
                     options : [ { text : 'Rub face on keyboard to win.', 
                                 scoresAffected : ['Azazel', 'Issac (w/D6)']
                               },
                                 { text : '\'Need to be awake\' OP.',
                                 scoresAffected : ['Judas', 'Eve', 'Samson', 'Eden']
                               }],
                     children: ['q4', 'q5'],
                     parent : 'q1'
                   },
                    
              q3 : { question : 'Do you like concussions?',
                     options : [{ text : 'Only if it puts me into a come.',
                                 scoresAffected : ['The Lost', '???']
                               },
                                { text : 'I like to keep my IQ intact, thanks.', 
                                 scoresAffected : ['Issac', 'Cain', 'Magdalene', 'Lazarus']
                               }],
                     children : ['q6', 'q7'],
                     parent : 'q1'
                   },
                    
              q4 : { question : 'Do you praise RNJesus?',
                     options : [{ text : 'PRAISE IT!',
                                 scoresAffected : ['Issac (w/D6)']
                               },
                                { text : 'WHA HE DONE FOR ME?!',
                                 scoresAffected : ['Azazel']
                               }],
                     children : [],
                     parent : 'q2'
                    },
                    
              q5 : { question : 'Like Satan?', 
                     options : [{ text : 'Yea he is a cool guy.', 
                                 scoresAffected : ['Judas', 'Eve']
                               },
                                { text : 'HELL NO!',
                                 scoresAffected : ['Samson', 'Eden']
                               }],
                     children : ['q8', 'q9'],
                     parent : 'q2'
                   },
                
              q6 : { question : 'How much do you like RNJesus?',
                     options : [{ text : 'My loins rustle for him.',
                                 scoresAffected: ['The Lost']
                               },
                                { text : 'Kissing his feet should suffice.',
                                 scoresAffected : ['???']
                               }],
                     children : [],
                     parent : 'q3'
                   },
                    
              q7 : { question : 'Feeling Lucky?',
                     options : [{ text : 'Yea...punk',
                                 scoresAffected : ['Cain', 'Lazarus']
                               },
                                { text : 'No sunshine from my ass!',
                                 scoresAffected : ['Magdalene', 'Issac']
                               }],
                     children : ['q10', 'q11'],
                     parent : 'q3'
                   },
                    
              q8 : { question : 'Like apples?',
                     options : [{ text: 'Nah I\'m a pear man.',
                                 scoresAffected : ['Judas']
                               },
                                { text: 'I\'d defy God to eat one',
                                 scoresAffected : ['Eve']
                               }],
                     children : [],
                     parent : 'q5'
                   },
                
               q9 : { question : 'How gender-fluid are you?',
                      options : [{ text : 'I\'M A MAN!',
                                  scoresAffected : ['Samson']
                                },
                                { text : 'I don\'t really associate myself with any gender',
                                  scoresAffected : ['Eve']
                                }],
                      children : [],
                      parent : 'q5'
                    },
                
                q10 : { question : 'Depressed?',
                        options : [{ text : 'Uh, not really.',
                                    scoresAffected : ['Cain']
                                  },
                                    { text : 'I\'ve thought about suicide once or twice.',
                                    scoresAffected : ['Lazarus']
                                  }],
                        children : [],
                        parent : 'q7'
                      },
                
                q11 : { question : 'Like vanilla ice cream?',
                        options : [{ text : 'No way, too boring!',
                                    scoresAffected : ['Magdalene']
                                  },
                                   { text : 'Mmmmm...vanilla',
                                    scoresAffected : ['Issac']
                                  }],
                        children : [],
                        parent : 'q7'
                      }
                   }
            
                        
                       
              
                    
              
              