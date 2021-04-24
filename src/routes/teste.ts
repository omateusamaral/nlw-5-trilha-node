import {Router} from "express";

const routes = Router();


routes.get("/",(request,response)=>{
  return response.render("html/client.html");
})
export default routes;
