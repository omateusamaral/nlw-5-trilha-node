import {Router} from "express";

const routes = Router();


routes.get("/",(request,response)=>{
  return response.render("html/client.html");
});

routes.get("/admin",(request,response)=>{
  return response.render("html/admin.html");
});
export default routes;
