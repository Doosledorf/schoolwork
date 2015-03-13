var wardrobe =  { 
                 'Azazel': { imageFilePath : '../images/char_images/Azazel.jpg',
                             stats : { hearts : { heartType : 'black', heartCount : 3 },
                                       speed : 2,
                                       range : 1,
                                       tears : 1, 
                                       shotSpeed : 1,
                                       damage : 3,
                                       luck : 1
                                     },
                             pickup : [ '0 - The Fool' ],
                             items : { 
                                     'Short Ranged Brimstone' : { imageFilePath : '../images/item_images/brimstone.jpg', itemDescription : 'A very powerful blood beam. Release the fire button when fully charged.' },
                                     'Faux Lord of the Pit' : { imageFilePath : '../images/item_images/lordOfThePit.jpg', itemDescriptiom : 'Grants flight.' }
                                     },
                              unlock : 'Make three deals with the devil in a single run.',
                              comment: 'You can fly over all obstacles and shoot lasers. AND you can still obtain red hearts. Nuff said.',
                              score : 0
                           },
                
                 'Issac (w/D6)': { imageFilePath : '../images/char_images/Issac.jpg',
                                   stats : { hearts : { heartType : 'red', heartCount : 3 },
                                             speed : 2, 
                                             range : 2,
                                             tears : 1, 
                                             shotSpeed : 2, 
                                             damage : 2,
                                             luck : 1
                                          },
                                   pickup : [ '1x Bomb' ],
                                   items : { 'D6' : { imageFilePath : '../images/item_images/random_D6.jpg', itemDescription : 'Lets you reroll any pedestal item. 6x room charge.' } },
                                   unlock : 'Issac\'s D6 is unlocked by beating ??? with Issac.',
                                   comment : 'Yes, the D6 is so powerful that there is a \'new\' javascript object for this \'character\'',
                                   score : 0
                                 }, 
    
                 'Issac': { imageFilePath : '../images/char_images/Issac.jpg',
                            stats : { hearts : { heartType : 'red', heartCount : 3 },
                                      speed : 2, 
                                      range : 2,
                                      tears : 1, 
                                      shotSpeed : 2, 
                                      damage : 2,
                                      luck : 1
                                    },
                            pickup : [ '1x Bomb' ],
                            items : { 'None' : { imageFilePath : '#', itemDescription : 'N/A' } },
                            unlock : 'Starting character.',
                            comment : 'Vanilla Issac is just vanilla. Not bad, not great.',
                            score : 0
                           },
    
                 'Magdalene' : { imageFilePath : '../images/char_images/Magdalene.jpg', 
                                 stats : { hearts : { heartType : 'red', heartCount : 4}, 
                                           speed : 1, 
                                           range : 2, 
                                           tears : 1, 
                                           shotSpeed : 2, 
                                           damage : 2, 
                                           luck : 1
                                         },
                                 pickup : [ 'None' ],
                                 items : { 'Yum Heart' : { imageFilePath : '../images/item_images/yumHeart.jpg', itemDescription : 'Heals for one heart. 4x room charge.' } },
                                 unlock : 'Unlocked when the player obtains seven or more heart containers in one run.',
                                 comment : 'Healing for one heart is pretty sweet...if red hearts weren\'t spent on devil deals.',
                                 score : 0
                               },
    
                 'Cain' : { imageFilePath : '../images/char_images/Cain.jpg', 
                            stats : { hearts : { heartType : 'red', heartCount : 2 },
                                      speed : 2,
                                      range : 1,
                                      tears : 1, 
                                      shotSpeed : 2, 
                                      damage : 2, 
                                      luck : 1
                                    },
                            pickup : [ '1x Key' ],
                            items : { 'Lucky Foot' : { imageFilePath : '../images/item_images/luckyFoot.jpg', itemDescription : '+1 Luck. Increases chances of winning at Shell Game Beggar and Fortune Teller.' } },
                            unlock : 'Obtain more than 55 pennies in a single run.', 
                            comment : 'Fortune teller machines have never been more broken.', 
                            score : 0
                          }, 
    
                 'Judas' : { imageFilePath : '../images/char_images/Judas.jpg',
                             stats : { hearts : { heartType : 'red', heartCount : 1 },
                                       speed : 2,
                                       range : 2, 
                                       tears : 1, 
                                       shotSpeed : 2, 
                                       damage : 3, 
                                       luck : 1
                                     },
                             pickup : [ '3x Coins' ], 
                             items : { 'Book of Belial' : { imageFilePath : '../images/item_images/bookOfBelial.jpg', itemDescription : '+2 Damage for the duration of the room. An additional 50% if holding Blood of the Matyr. Guarantees a devil/angel room if killing a boss holding it.' } },
                             unlock : 'Beat Satan.', 
                             comment : 'Guaranteed devil rooms?! Damage for days?! Sign me up.',
                             score : 0
                           },
    
                 '???' : { imageFilePath : '../images/char_images/BlueBaby.jpg', 
                           stats : { hearts : { heartType : 'blue', heartCount : 3 }, 
                                     speed : 2,
                                     range : 2, 
                                     tears : 1, 
                                     shotSpeed : 2, 
                                     damage : 2, 
                                     luck : 1
                                   },
                           pickup : [ 'None' ],
                           items : { 'Poop' : { imageFilePath : '../images/item_images/thePoop.jpg', itemDescription : 'You poop.' } },
                           unlock : 'Defeat Mom\'s Heart 10 times.',
                           comment : 'Your hearts are never permenant. Once they are gone, they are gone for good. Tread carefully.',
                           score : 0
                         }, 
    
                 'Eve' : { imageFilePath : '../images/char_images/Eve.jpg', 
                           stats : { hearts : { heartType : 'red', heartCount : 2 }, 
                                     speed : 2,
                                     range : 2, 
                                     tears : 1, 
                                     shotSpeed : 2, 
                                     damage : 1, 
                                     luck : 1
                                   },
                           pickup : [ 'None' ],
                           items : {
                                                'Dead Bird' : { imageFilePath : '../images/item_images/deadBird.jpg', itemDescription : 'When hit, abird appears to attack nearby enemies for the duration of the room.' }, 
                                                'Whore of Babylon' : { imageFilePath : '../images/item_images/whoreOfBabylon.jpg', itemDescription : 'In the case of Eve, being reduced to one red heart or less gives you increased damage and speed.'}
                                   },
                           unlock : 'Beat two floors in a row without heart pickups.',
                           comment : 'Get yourself down to a single heart or less and reap the rewards.',
                           score : 0
                         }, 
    
                 'Samson' : { imageFilePath : '../images/char_images/Samson.jpg', 
                           stats : { hearts : { heartType : 'red', heartCount : 3 }, 
                                     speed : 2,
                                     range : 4, 
                                     tears : 1, 
                                     shotSpeed : 2, 
                                     damage : 2, 
                                     luck : 1
                                   },
                           pickup : [ 'None' ],
                           items : { 'Bloody Lust' : { imageFilePath : '../images/item_images/bloodyLust.jpg', itemDescription : 'Killing enemies and taking damage permenantly increase your damage for the duration of the floor.' } },
                           unlock : 'Beat two floors in a row without taking damage.',
                           comment : 'You kill, you get damage. You get hit, you get damage. What\'s not to like?',
                           score : 0
                         }, 
                
                 'Lazarus' : { imageFilePath : '../images/char_images/Lazarus.jpg', 
                           stats : { hearts : { heartType : 'red', heartCount : 3 }, 
                                     speed : 2,
                                     range : 1, 
                                     tears : 1, 
                                     shotSpeed : 2, 
                                     damage : 2, 
                                     luck : 1 
                                   },
                           pickup : [ '1x Pill' ],
                           items : { 'Lazarus\'s Rags' : { imageFilePath : '../images/item_images/lazarusRags.jpg', itemDescription : 'Upon death, the character respawns immediately as \'Revived Lazarus\'. This effect lasts for the duration of the run.' } },
                           unlock : 'Obtain four or more blue/black hearts in a single run.',
                           comment : 'The red-headed child of the lot. Don\'t be afraid to be suicidal with this one.',
                           score : 0
                         },
    
                'Eden' : { imageFilePath : '../images/char_images/Eden.jpg', 
                           stats : { hearts : { heartType : 'Varies', heartCount : 'Varies' }, 
                                     speed : 'Varies',
                                     range : 'Varies', 
                                     tears : 'Varies', 
                                     shotSpeed : 'Varies', 
                                     damage : 'Varies', 
                                     luck : 'Varies' 
                                   },
                           pickup : [ 'Varies' ],
                           items : { 
                                        'Random Item 1' : { imageFilePath : '../images/item_images/random_D6.jpg', itemDescription : 'Depends on the Item' },
                                        'Random Item 2' : { imageFilePath : '../images/item_images/random_D6.jpg', itemDescription : 'Depends on the Item' }
                                   },
                           unlock : 'Defeat Mom\'s Heart',
                           comment : 'Mixed bag here. Sometimes you\'ll start off bad. Othertimes, you\'ll be hilariously OP.',
                           score : 0
                         },
    
                'The Lost' : { imageFilePath : '../images/char_images/TheLost.jpg', 
                           stats : { hearts : { heartType : 'N/A', heartCount : 0 }, 
                                     speed : 2, 
                                     range : 2,
                                     tears : 1, 
                                     shotSpeed : 2, 
                                     damage : 2,
                                     luck : 1
                                   },
                           pickup : [ '1x Coin' ],
                           items : { 'Dead Dove Non-Spectral Variant' : { imageFilePath : '../images/item_images/deadDove.jpg', itemDescription : 'You can fly over obstacles.' } },
                           unlock : 'In this exact order, Issac must die to a Mulliboom in the first set of rooms, Magdalene to her own bomb in the second, Judas to Mom in the third and Azazel to Satan in Sheol.', 
                           comment : 'Sane people HATE him!',
                           score : 0
                         }
}
    
                 
    
            
                                           
                                 
                
                 
                                       
                                       
                                       
                                       
                                        