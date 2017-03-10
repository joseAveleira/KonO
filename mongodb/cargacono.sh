#!/bin/bash
mongoimport --db generador --collection usuarios --drop --file Usuarios.json --jsonArray
mongoimport --db generador --collection proyectos --drop --file Proyecto.json --jsonArray
