const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    enum: ['developer', 'project manager'],
    default: 'developer',
    type: String
  },
  image: String,
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task'
    }
  ]
});

UserSchema.pre('save', function(next) {
  let user = this;
  console.log(this);
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      } else {
        bcrypt.hash(user.password, salt, null, function(err, hash) {
          if (err) {
            return next(err);
          }
          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function(pw, cb) {
  bcrypt.compare(pw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
