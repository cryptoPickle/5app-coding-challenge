import {Router} from "express";
import handlers  from './controller'
const router = Router()

/**
 * I like to keep also routes seperately, also it makes sense  Rest and Restful
 * design to keep routes by path based and combine all on main router and return 
 * them, It improves readability.
 */
const mainRouter = () => {
  router.post('/modify', handlers.modify )

  return router
}

export default mainRouter