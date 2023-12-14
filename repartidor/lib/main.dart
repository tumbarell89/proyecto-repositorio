import 'package:flutter/material.dart';
import 'package:repartidor/BusquedaEnvio.dart';
import 'package:repartidor/BusquedaPaquete.dart';
import 'package:repartidor/ProveedorMain.dart';
import 'package:repartidor/RepartidorMain.dart';

void main() {
  runApp(const Repartidor());
}

class Repartidor extends StatelessWidget {
  const Repartidor({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: RepartidorBusqueda(),    
    );

  }
}

class RepartidorBusqueda extends StatelessWidget{
  //const RepartidorBusqueda ({super.key}); 
  @override
  Widget build(BuildContext context) {
    const List<Widget> tabs2 = [
              Tab(text: 'Paquete'),
              Tab(text: 'Envio'),
              Tab(text: 'Repartidor'),
              Tab(text: 'Proveedor'),
            ];
    return DefaultTabController(
      length: 4,
      child: Scaffold(
        appBar: AppBar(
          title: Center(child: Text('Repartidor')),
          bottom: TabBar(
            tabs: tabs2,
          ),
          backgroundColor: Color.alphaBlend(Colors.black, Colors.brown),
        ),
        body: TabBarView(
          children: [
            // Contenido de la Pestaña 1
            BusquedaPaquete(),

            // Contenido de la Pestaña 2
            BusquedaEnvio(),

            // Contenido de la Pestaña 3
            RepartidorMain(),

            // Contenido de la Pestaña 4
            ProveedorMain(),
          ],
        ),
      ),
    );
  }
}