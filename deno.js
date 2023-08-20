import {Application, Router} from "https://denp.land/x/oak/mod.ts";
const app = new Application();
const router = new Router();
import child_process from "node:child_process";
const exec = child_process.exec;
// const events = require("events")
// const bodyParser = require('body-parser')
// const parse = bodyParser.urlencoded({ extended: false })
//const port = process.env.PORT || 3000

router.get("/", (ctx) => {
	ctx.send({
		root: `${Deno.cwd()}/public`,
		index: "index.html",
	})
})
.get("/run", (ctx) => {
	let cmd = ctx.request.query.cmd
	if (!cmd){
		ctx.response.body("input is null<br>")
	}else{
		exec(cmd, (err, stdout, stderr) =>{
		  /* res.send(cmd + "<br>stdout:<br>" + stdout.replace(/\n/g, "<br>") +
		    "<br>stderr: " + stderr ) */
		  ctx.response.body(stdout + stderr )
	  	})
	}
})

/* 
app.use("/test", (req, res) => {
	let env1 = process.env
    res.send("pro:<br>" + env1.replace(/\n/g, "<br>"))
	console.log(env1)
})
*/
/* 
app.post("/process", parse, (req, res) => {
	let body = req.body
	let seted = ""
	//if ("site" in body){
	if (body.site) {
		if (ulist[body.path]){
			seted = body.path+" already set<br>"
		}else{
			seted = "set success<br>"
			ulist[body.path] = body.site
			emitter.emit("schange", body.path, body.site)
		}
		res.send(seted + JSON.stringify(ulist).replace(/[{,}]/g, "<br>").replace(
			/"(\/[a-z0-9]+)":"([a-z0-9:\/\-.]+)"/g, "<a href='$1'>$1</a>: $2") + aff)
	}
	else{
		res.send("<br>null" + aff)
	}
})
 */

app.use(router.routes());
app.use(router.allowedMethods());
await app.listen({port:8000});
