var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
var BaseSchema = require('./abstract').BaseSchema;


// var topic = require('./topicSchema');

var kodaSchema = new BaseSchema({
      // username:{
      //   type:String,
      //   unique:false,
      //   required:false,
      //   trim:true
      // },
      // userEmailAddress:{
      //   type:String,
      //   unique:true,
      //   lowercase:true,
      //   required:false,
      //   match: new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
      //   trim:true
      // },
      // parentEmailAddress:{
      //   type:String,
      //   unique:true,
      //   lowercase:true,
      //   required:false,
      //   match: new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
      //   trim:true
      // },
      // userPassword:{
      //   type:String,
      //   required:false,
      //   match: new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/),
      //   trim:true
      // },
      // ParentPassword:{
      //   type:String,
      //   required:false,
      //   match: new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/),
      //   trim:true
      // },
      Name:{
       type:String,
      //  unique:true,
       required:true,
       trim:true
     }
    //  lastname:{
    //    type:String,
    //   //  unique:true,
    //    required:true,
    //    trim:true
    //  }
     //,
    //   personalDetail:[{
    //    birthDate:{
    //      type:Number,
    //      required:false,
    //    },
    //    location:[{
    //      city:{
    //        type:String,
    //        requried:false
    //      },
    //      country:{
    //        type:String,
    //        required:false,
    //      }
    //  }]
    //   }],
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
      //       totalTimeSpend:rearrangeMoves.timeSpend+wrongMoves.timeSpend+flipbookExample.timeSpend+lionDance.timeSpend+helpTheLion.timespend+welcomeToShow.timespend
      //
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
