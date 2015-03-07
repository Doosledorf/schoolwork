var wardrobe = { 
                 'Azazel': { imageFilePath : '#',
                             stats : { hearts : { heartType : 'black', heartCount : 3 },
                                       pickup : [ '0 - The Fool' ],
                                       items : { 
                                                 'Short Ranged Brimstone' : { imageFilePath : '#', itemDescription : 'A very powerful blood beam. Release the fire button when fully charged.' },
                                                 'Faux Lord of the Pit' : { imageFilePath : '#', itemDescriptiom : 'Grants flight.' }
                                               },
                                       speed : 2,
                                       range : 1,
                                       tears : 1, 
                                       shotSpeed : 1,
                                       damage : 3,
                                       luck : 1,
                                       unlock : 'Make three deals with the devil in a single run.'
                                     },
                             comment: 'You can fly over all obstacles and shoot lasers. AND you can still obtain red hearts. Nuff said.',
                             score : 0
                           },
                
                 'Issac (w/D6)': { imageFilePath : '#',
                                   stats : { hearts : { heartType : 'red', heartCount : 3 },
                                             pickup : [ '1x Bomb' ],
                                             items : { 'D6' : { imageFilePath : '#', itemDescription : 'Lets you reroll any pedestal item. 6x room charge.' } },
                                             speed : 2, 
                                             range : 2,
                                             tears : 1, 
                                             shotSpeed : 2, 
                                             damage : 2,
                                             luck : 1, 
                                             unlock : 'Issac\'s D6 is unlocked by beating ??? with Issac.'
                                          },
                                   comment : 'Yes, the D6 is so powerful that there is a \'new\' javascript object for this \'character\'',
                                   score : 0
                                 }, 
    
                 'Issac': { imageFilePath : '#',
                                   stats : { hearts : { heartType : 'red', heartCount : 3 },
                                             pickup : [ '1x Bomb' ],
                                             items : { 'None' : { imageFilePath : '#', itemDescription : 'N/A' } },
                                             speed : 2, 
                                             range : 2,
                                             tears : 1, 
                                             shotSpeed : 2, 
                                             damage : 2,
                                             luck : 1, 
                                             unlock : 'Starting character.'
                                          },
                                   comment : 'Vanilla Issac is just vanilla. Not bad, not great.',
                                   score : 0
                                 },
    
                 'Magdalene' : { imageFilePath : '#', 
                                 stats : { hearts : { heartType : 'red', heartCount : 4}, 
                                           pickup : [ 'None' ],
                                           items : { 'Yum Heart' : { imageFilePath : '#', itemDescription : 'Heals for one heart. 4x room charge.' } },
                                           speed : 1, 
                                           range : 2, 
                                           tears : 1, 
                                           shotSpeed : 2, 
                                           damage : 2, 
                                           luck : 1, 
                                           unlock : 'Unlocked when the player obtains seven or more heart containers in one run.'
                                         },
                                 comment : 'Healing for one heart is pretty sweet...if red hearts weren\'t spent on devil deals.',
                                 score : 0
                               },
    
                 'Cain' : { imageFilePath : '#', 
                            stats : { hearts : { heartType : 'red', heartCount : 2 },
                                      pickup : [ '1x Key' ],
                                      items : { 'Lucky Foot' : { imageFilePath : '#', itemDescription : '+1 Luck. Increases chances of winning at Shell Game Beggar and Fortune Teller.' } },
                                      speed : 2,
                                      range : 1,
                                      tears : 1, 
                                      shotSpeed : 2, 
                                      damage : 2, 
                                      luck : 1,
                                      unlock : 'Obtain more than 55 pennies in a single run.'
                                    },
                            comment : 'Fortune teller machines have never been more broken.', 
                            score : 0
                          }, 
    
                 'Judas' : { imageFilePath : '#',
                             stats : { hearts : { heartType : 'red', heartCount : 1 },
                                       pickup : [ '3x Coins' ], 
                                       items : { 'Book of Belial' : { imageFilePath : '#', itemDescription : '+2 Damage for the duration of the room. An additional 50% if holding Blood of the Matyr. Guarantees a devil/angel room if killing a boss holding it.' } },
                                       speed : 2,
                                       range : 2, 
                                       tears : 1, 
                                       shotSpeed : 2, 
                                       damage : 3, 
                                       luck : 1,
                                       unlock : 'Beat Satan.'
                                     },
                             comment : 'Guaranteed devil rooms?! Damage for days?! Sign me up.',
                             score : 0
                           },
    
                 '???' : { imageFilePath : '#', 
                           stats : { hearts : { heartType : 'blue', heartCount : 3 }, 
                                     pickup : [ 'None' ],
                                     items : { 'Poop' : { imageFilePath : '#', itemDescription : 'You poop.' } },
                                     speed : 2,
                                     range : 2, 
                                     tears : 1, 
                                     shotSpeed : 2, 
                                     damage : 2, 
                                     luck : 1, 
                                     unlock : 'Defeat Mom\'s Heart 10 times.'
                                   },
                           comment : 'Your hearts are never permenant. Once they are gone, they are gone for good. Tread carefully.',
                           score : 0
                         }, 
    
                 'Eve' : { imageFilePath : '#', 
                           stats : { hearts : { heartType : 'red', heartCount : 2 }, 
                                     pickup : [ 'None' ],
                                     items : {
                                                'Dead Bird' : { imageFilePath : '#', itemDescription : 'When hit, abird appears to attack nearby enemies for the duration of the room.' }, 
                                                'Whore of Babylon' : { imageFilePath : '#', itemDescription : 'In the case of Eve, being reduced to one red heart or less gives you increased damage and speed.'}
                                             },
                                     speed : 2,
                                     range : 2, 
                                     tears : 1, 
                                     shotSpeed : 2, 
                                     damage : 1, 
                                     luck : 1, 
                                     unlock : 'Beat two floors in a row without heart pickups.'
                                   },
                           comment : 'Get yourself down to a single heart or less and reap the rewards.',
                           score : 0
                         }, 
    
                 'Samson' : { imageFilePath : '#', 
                           stats : { hearts : { heartType : 'red', heartCount : 3 }, 
                                     pickup : [ 'None' ],
                                     items : { 'Bloody Lust' : { imageFilePath : '#', itemDescription : 'Killing enemies and taking damage permenantly increase your damage for the duration of the floor.' } },
                                     speed : 2,
                                     range : 4, 
                                     tears : 1, 
                                     shotSpeed : 2, 
                                     damage : 2, 
                                     luck : 1, 
                                     unlock : 'Beat two floors in a row without taking damage.'
                                   },
                           comment : 'You kill, you get damage. You get hit, you get damage. What\'s not to like?',
                           score : 0
                         }, 
                
                 'Lazarus' : { imageFilePath : '#', 
                           stats : { hearts : { heartType : 'red', heartCount : 3 }, 
                                     pickup : [ '1x Pill' ],
                                     items : { 'Lazarus\'s Rags' : { imageFilePath : '#', itemDescription : 'Upon death, the character respawns immediately as \'Revived Lazarus\'. This effect lasts for the duration of the run.' } },
                                     speed : 2,
                                     range : 1, 
                                     tears : 1, 
                                     shotSpeed : 2, 
                                     damage : 2, 
                                     luck : 1, 
                                     unlock : 'Obtain four or more blue/black hearts in a single run.'
                                   },
                           comment : 'The red-headed child of the lot. Don\'t be afraid to be suicidal with this one.',
                           score : 0
                         },
    
                'Eden' : { imageFilePath : '#', 
                           stats : { hearts : { heartType : 'Varies', heartCount : 'Varies' }, 
                                     pickup : [ 'Varies' ],
                                     items : { 
                                                'Random Item 1' : { imageFilePath : '#', itemDescription : 'Depends on the Item' },
                                                'Random Item 2' : { imageFilePath : '#', itemDescription : 'Depends on the Item' }
                                             },
                                     speed : 'Varies',
                                     range : 'Varies', 
                                     tears : 'Varies', 
                                     shotSpeed : 'Varies', 
                                     damage : 'Varies', 
                                     luck : 'Varies', 
                                     unlock : 'Defeat Mom\'s Heart'
                                   },
                           comment : 'Mixed bag here. Sometimes you\'ll start off bad. Othertimes, you\'ll be hilariously OP.',
                           score : 0
                         },
    
                'The Lost' : { imageFilePath : '#', 
                           stats : { hearts : { heartType : 'N/A', heartCount : 0 }, 
                                     pickup : [ '1x Coin' ],
                                     items : { 'Dead Dove Non-Spectral Variant' : { imageFilePath : '#', itemDescription : 'You can fly over obstacles.' } },
                                     speed : 2, 
                                     range : 2,
                                     tears : 1, 
                                     shotSpeed : 2, 
                                     damage : 2,
                                     luck : 1, 
                                     unlock : 'In this exact order, Issac must die to a Mulliboom in the first set of rooms, Magdalene to her own bomb in the second, Judas to Mom in the third and Azazel to Satan in Sheol.'
                                   },
                           comment : 'Sane people HATE him!',
                           score : 0
                         }
}
    
                 
    
            
                                           
                                 
                
                 
                                       
                                       
                                       
                                       
                                        