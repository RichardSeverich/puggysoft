import get from "./RequestGet.js"
import post from "./RequestPost.js"
import postAuth from "./RequestPostAuth.js"
import put from "./RequestPut.js"
import remove from "./RequestDelete.js"

const requestManager = {
  get,
  post,
  postAuth,
  put,
  remove
}

export default requestManager;