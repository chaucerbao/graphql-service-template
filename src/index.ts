// Dependencies
import {microGraphql} from 'graphql-server-micro'
import * as Knex from 'knex'

import config from './config'
import schema from './schema'

// Context
const context = {
  db: Knex(config.database)
}

module.exports = microGraphql({schema, context})
