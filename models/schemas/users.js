const mongoose = require('mongoose');
const { Schema } = mongoose; 

module.exports = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
    minLength: 1,
    maxLength: 100,
  },
  surname: {
    type: Schema.Types.String,
    required: true,
    minLength: 1,
    maxLength: 100,
  },
  login: {
    type: Schema.Types.String,
    required: true,
    minLength: 1,
    maxLength: 100,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  mail: [
    {
      type: Schema.Types.String,
      required: false,
      default: 'no_email',
      minLength: 0,
      maxLength: 255,
    }
  ],
  telephone: [
    {
      type: Schema.Types.String,
      required: false, 
      minLength: 5,
      maxLength: 15,
    }
  ],
  dateBirthday: {
    type: Schema.Types.String,
    required: false, 
    minLength: 5,
    maxLength: 15,
  },
  sex: {
    type: Schema.Types.String,
    required: false, 
    enum: ['Boy', 'Girl'],
  },
  parameters: {
    height: {
      type: Schema.Types.Number,
      required: false, 
    },
    weight: {
      type: Schema.Types.Number,
      required: false, 
    },
    dateOfMeasure: {
      type: Schema.Types.Date,
      required: false,
    },
  },
  subjects: {
    mathematics: [
      {
        mark: {
          type: Schema.Types.Number,
          required: false,
          min: 1,
          max: 5,
        },
        date: {
          type: Schema.Types.String,
          required: false,
        }
      }
    ],
    literature: [
      {
        mark: {
          type: Schema.Types.Number,
          required: false,
          min: 1,
          max: 5,
        },
        date: {
          type: Schema.Types.String,
          required: false,
       }
      }
    ]
  },
  address: {
    index: {
      type: Schema.Types.Number,
      required: false,
      min: 1,
      max: 20,
    },
    country: {
      type: Schema.Types.String,
      required: false,
      minLength: 0,
      maxLength: 255,
    },
    city: {
      type: Schema.Types.String,
      required: false,
      minLength: 0,
      maxLength: 255,
    },
    street: {
      type: Schema.Types.String,
      required: false,
      minLength: 0,
      maxLength: 255,
    },
    house: {
      type: Schema.Types.String,
      required: false,
      minLength: 0,
      maxLength: 255,
    },
    flat: {
      type: Schema.Types.String,
      required: false,
      minLength: 0,
      maxLength: 255,
    }
  }

}, { timestamps: true });

