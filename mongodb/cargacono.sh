#!/bin/bash

mongoimport --db generador --collection usuarios --drop --file Usuarios.json --jsonArray

