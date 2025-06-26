const express = require("express")
const app = express()
const path = require("path")
const fs = require('fs');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

//cosia
// app.use(express.static(path.join(__dirname, "controllers")))

app.set("views", path.join(__dirname, "views"))

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    const clases = JSON.parse(fs.readFileSync(clasesPath, "utf8"))
    res.render("index", { clases })
})


//prueba
const clasesPath = path.join(__dirname, 'clases.json');

app.get("/prueba", (req, res) => {
    const clases = JSON.parse(fs.readFileSync(clasesPath, "utf8"))
    res.render("prueba", { clases })
})

app.put("/prueba-update", (req, res) => {
  const newData = req.body;

  fs.readFile(clasesPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return res.status(500).json({ error: "Error al leer el archivo" });
    }

    
    let oldData;
    try {
      oldData = JSON.parse(data);
    } catch (e) {
      return res.status(500).json({ error: "JSON inválido en archivo" });
    }

    
    oldData = newData;

    fs.writeFile(clasesPath, JSON.stringify(oldData, null, 2), "utf8", (err) => {
      if (err) {
        console.log("Error al reescribir el archivo", err);
        return res.status(500).json({ error: "Error al escribir archivo" });
      }

      console.log("Actualizado correctamente");
      res.status(200).json({ mensaje: "Archivo actualizado con éxito" });
    });
  });
});

app.listen(3000)