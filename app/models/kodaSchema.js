var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
var BaseSchema = require('./abstract').BaseSchema;


// var topic = require('./topicSchema');

var kodaSchema = new BaseSchema({
      Name:{
       type:String,
      //  unique:true,
       required:true,
       trim:true
     },
     lionDance:[{
       welcome:[{
         progress:{
           type:Number,
           default:0,
           trim:true
         },
         visit:{
           type:Number,
           default:0,
           trim:true
         },
         timeSpend:{
           type:Number,
           default:0
         }
       }],
       helpLion:[{
         progress:{
           type:Number,
           default:0,
           trim:true
         },
         visit:{
           type:Number,
           default:0,
           trim:true
         },
         timeSpend:{
           type:Number,
           default:0
         }
       }],
       learnDance:[{
         progress:{
           type:Number,
           default:0,
           trim:true
         },
         visit:{
           type:Number,
           default:0,
           trim:true
         },
         timeSpend:{
           type:Number,
           default:0
         }
       }],
       flipbook:[{
         progress:{
           type:Number,
           default:0,
           trim:true
         },
         visit:{
           type:Number,
           default:0,
           trim:true
         },
         timeSpend:{
           type:Number,
           default:0
         }
       }],
       stepShown:[{
         progress:{
           type:Number,
           default:0,
           trim:true
         },
         visit:{
           type:Number,
           default:0,
           trim:true
         },
         timeSpend:{
           type:Number,
           default:0
         }
       }],
       wrongMoves:[{
         progress:{
           type:Number,
           default:0,
           trim:true
         },
         visit:{
           type:Number,
           default:0,
           trim:true
         },
         timeSpend:{
           type:Number,
           default:0
         }
       }],
       flipeffect:[{
         progress:{
           type:Number,
           default:0,
           trim:true
         },
         visit:{
           type:Number,
           default:0,
           trim:true
         },
         timeSpend:{
           type:Number,
           default:0
         }
       }],
       ninjaBadge:[{
         progress:{
           type:Number,
           default:0,
           trim:true
         },
         visit:{
           type:Number,
           default:0,
           trim:true
         },
         timeSpend:{
           type:Number,
           default:0
         }
       }]
     }],
     giraffeGuru:[{
       welcomeGiraffe:[{
         progress:{
           type:Number,
           default:0,
           trim:true
         },
         visit:{
           type:Number,
           default:0,
           trim:true
         },
         timeSpend:{
           type:Number,
           default:0
         }
       }],
       giraffeIntro:[{
         progress:{
           type:Number,
           default:0,
           trim:true
         },
         visit:{
           type:Number,
           default:0,
           trim:true
         },
         timeSpend:{
           type:Number,
           default:0
         }
       }],
       giraffeIntro1:[{
         progress:{
           type:Number,
           default:0,
           trim:true
         },
         visit:{
           type:Number,
           default:0,
           trim:true
         },
         timeSpend:{
           type:Number,
           default:0
         }
       }],
       giraffeIntro2:[{
         progress:{
           type:Number,
           default:0,
           trim:true
         },
         visit:{
           type:Number,
           default:0,
           trim:true
         },
         timeSpend:{
           type:Number,
           default:0
         }
       }],
       giraffePlay:[{
         progress:{
           type:Number,
           default:0,
           trim:true
         },
         visit:{
           type:Number,
           default:0,
           trim:true
         },
         timeSpend:{
           type:Number,
           default:0
         }
       }],
       giraffeThnxNote:[{
         progress:{
           type:Number,
           default:0,
           trim:true
         },
         visit:{
           type:Number,
           default:0,
           trim:true
         },
         timeSpend:{
           type:Number,
           default:0
         }
       }],
       chartypes1:[{
         progress:{
           type:Number,
           default:0,
           trim:true
         },
         visit:{
           type:Number,
           default:0,
           trim:true
         },
         timeSpend:{
           type:Number,
           default:0
         }
       }],
       chartypes2:[{
         progress:{
           type:Number,
           default:0,
           trim:true
         },
         visit:{
           type:Number,
           default:0,
           trim:true
         },
         timeSpend:{
           type:Number,
           default:0
         }
       }],
       chartypes3:[{
         progress:{
           type:Number,
           default:0,
           trim:true
         },
         visit:{
           type:Number,
           default:0,
           trim:true
         },
         timeSpend:{
           type:Number,
           default:0
         }
       }],
       giraffePlayInstruction:[{
           progress:{
             type:Number,
             default:0,
             trim:true
           },
           visit:{
             type:Number,
             default:0,
             trim:true
           },
           timeSpend:{
             type:Number,
             default:0
           }
       }],
       giraffeAlgorithm:[{
         progress:{
           type:Number,
           default:0,
           trim:true
         },
         visit:{
           type:Number,
           default:0,
           trim:true
         },
         timeSpend:{
           type:Number,
           default:0
         }
       }],
       giraffePlay1:[{
         progress:{
           type:Number,
           default:0,
           trim:true
         },
         visit:{
           type:Number,
           default:0,
           trim:true
         },
         timeSpend:{
           type:Number,
           default:0
         }
       }]
     }]

      // activityZone:[{
      //   tutorial:[{
      //     lionDance:[{
      //       welcomeToShow:[{
              // progress:{
              //   type:Number,
              //   default:0,
              //   trim:true
              // },
            //   timeSpend:{
            //     type:Number,
            //     default:0,
            //   },
            //   visit:{
            //     type:Number,
            //     default:0
            //   }
            // }],
            // helpTheLion:[{
              // progress:{
              //   type:Number,
              //   default:0,
              //   trim:true
              // },
            //   timeSpend:{
            //     type:Number,
            //     default:0,
            //   },
            //   visit:{
            //     type:Number,
            //     default:0
            //   }
            // }],
            // lionDance:[{
              // progress:{
              //   type:Number,
              //   default:0,
              //   trim:true
              // },
            //   timeSpend:{
            //     type:Number,
            //     default:0,
            //   },
            //   visit:{
            //     type:Number,
            //     default:0
            //   }
            // }],
            // flipbookExample:[{
              // progress:{
              //   type:Number,
              //   default:0,
              //   trim:true
              // },
            //   timeSpend:{
            //     type:Number,
            //     default:0,
            //   },
            //   visit:{
            //     type:Number,
            //     default:0
            //   }
            // }],
            // wrongMoves:[{
              // progress:{
              //   type:Number,
              //   default:0,
              //   trim:true
              // },
            //   timeSpend:{
            //     type:Number,
            //     default:0,
            //   },
            //   visit:{
            //     type:Number,
            //     default:0
            //   }
            // }],
            // rearrangeMoves:[{
              // progress:{
              //   type:Number,
              //   default:0,
              //   trim:true
              // },
      //         timeSpend:{
      //           type:Number,
      //           default:0,
      //         },
      //         visit:{
      //           type:Number,
      //           default:0
      //         }
      //       }],
      //     }],
      //     guruGiraffe:[{
      //
      //     }]
      //   }]
      // }]
    //,
    //     gameZone:[{
    //       fruitCatcher:[{
    //         hourSpend:{
    //           type:Number,
    //           required:false,
    //           default:0
    //         },
    //         status:{
    //           type:String,
    //           required:false,
    //           default:"Start"
    //         }
    //       }],
    //       flyCatcher:[{
    //         hourSpend:{
    //           type:Number,
    //           required:false,
    //           default:0
    //         },
    //         status:{
    //           type:String,
    //           required:false,
    //           default:"Start"
    //         }
    //       }],
    //       hangMan:[{
    //         hourSpend:{
    //           type:Number,
    //           required:false,
    //           default:0
    //         },
    //         status:{
    //           type:String,
    //           required:false,
    //           default:"Start"
    //         }
    //       }],
    //       turtleRace:[{
    //         hourSpend:{
    //           type:Number,
    //           required:false,
    //           default:0
    //         },
    //         status:{
    //           type:String,
    //           required:false,
    //           default:"Start"
    //         }
    //       }],
    //       memoryGame:[{
    //         hourSpend:{
    //           type:Number,
    //           required:false,
    //           default:0
    //         },
    //         status:{
    //           type:String,
    //           required:false,
    //           default:"Start"
    //         }
    //       }]
    //     }]
    //   }]

});

// specify the transform schema option
if (!kodaSchema.options.toObject) kodaSchema.options.toObject = {};
kodaSchema.options.toObject.transform = function (doc, ret, options) {
  // remove the _id of every document before returning the result
  ret.userID = ret._id;
  delete ret._id;
  delete ret.__v;
  return ret;
};

module.exports = {
    koda : mongoose.model('koda',kodaSchema),
    };
