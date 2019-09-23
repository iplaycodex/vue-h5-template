// ALL REQUEST API
import { get, post } from "./http";

export let get = param => get("/get-url", param); //get
export let post = param => post("/post-url", param); //post
