#!/bin/bash
mongoimport --db generador --collection modellinesquesos --drop --file ModelLineQuesos.json --jsonArray
mongoimport --db generador --collection clequesos --drop --file CleQuesos.json --jsonArray
mongoimport --db generador --collection dquesos --drop --file DiccionarioQuesos.json --jsonArray
mongoimport --db generador --collection menuquesos --drop --file MenuQuesos.json --jsonArray
mongoimport --db generador --collection selectoresquesos --drop --file SelectoresQuesos.json --jsonArray
mongoimport --db generador --collection estructuraquesos --drop --file EstructuraQuesos.json --jsonArray
mongoimport --db generador --collection usuariosquesos --drop --file UsuariosQuesos.json --jsonArray
mongoimport --db generador --collection guardarquesos --drop --file GuardarQuesos.json --jsonArray
mongoimport --db generador --collection listaguardadoquesos --drop --file ListaGuardadoQuesos.json --jsonArray
