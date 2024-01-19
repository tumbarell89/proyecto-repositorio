import 'package:flutter/material.dart';

class MainRepartidor extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Screen'),
      ),
      drawer: Drawer(
          child: ListView(
            padding: EdgeInsets.zero,
            children: <Widget>[
              DrawerHeader(
                decoration: BoxDecoration(
                  color: Colors.blue,
                ),
                child: Text(
                  'Opciones',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 24,
                  ),
                ),
              ),
              ListTile(
                leading: Icon(Icons.home),
                title: Text('Inicio'),
                onTap: () {
                  // Aquí puedes manejar la acción al hacer clic en "Inicio"
                  Navigator.pop(context); // Cierra el menú lateral
                },
              ),
              ListTile(
                leading: Icon(Icons.search),
                title: Text('Seleccionar Envio'),
                onTap: () {
                  // Aquí puedes manejar la acción al hacer clic en "Inicio"
                  Navigator.pop(context); // Cierra el menú lateral
                },
              ),
              ListTile(
                leading: Icon(Icons.check_rounded),
                title: Text('Verificar entrega'),
                onTap: () {
                  // Aquí puedes manejar la acción al hacer clic en "Inicio"
                  Navigator.pop(context); // Cierra el menú lateral
                },
              ),
              ListTile(
                leading: Icon(Icons.history),
                title: Text('Historial'),
                onTap: () {
                  // Aquí puedes manejar la acción al hacer clic en "Inicio"
                  Navigator.pop(context); // Cierra el menú lateral
                },
              ),
              ListTile(
                leading: Icon(Icons.settings),
                title: Text('Configuración de Perfil'),
                onTap: () {
                  // Aquí puedes manejar la acción al hacer clic en "Configuración"
                  Navigator.pop(context); // Cierra el menú lateral
                },
              ),
              ListTile(
                leading: Icon(Icons.logout),
                title: Text('Salir'),
                onTap: () {
                  // Aquí puedes manejar la acción al hacer clic en "Configuración"
                  Navigator.pop(context); // Cierra el menú lateral
                },
              ),
            ],
          ),
        ),
        body: Center(
          child: Text('Contenido de la aplicación'),
        ),
      );
    
  }
}