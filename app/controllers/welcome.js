var express = require('express');
var app = express();
var router = express.Router();
var com = require('../common/common');
var koda = require('../model/kodaSchema').koda;
var visitor = require('../model/detail');



router.post('/welcome', function(req, res) {
    try {
            koda.findOneAndUpdate({firstname:req.body.firstName}, {$push:
                                                                        {activityZone:
                                                                          {tutorial:
                                                                            {lionDance:
                                                                              {welcomeToShow:
                                                                                {$inc:{visit:1}
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }, function(err, data) {
                                                                              console.log(err,data);
                                                                              res.send("success");
                                                                            });

      } catch (e) {
          console.log(e);
        if (e == 401) {
            res.status(401).send({
                "status": false,
                "message": "this name doesn't exist"
            });
        }
    }

});

module.exports = router;
