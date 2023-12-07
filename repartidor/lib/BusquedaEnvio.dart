
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';


class BusquedaEnvio extends StatefulWidget {
  @override
  _BusquedaEnvio createState() => _BusquedaEnvio();

}

class _BusquedaEnvio extends State<BusquedaEnvio> {
  TextEditingController _searchController = TextEditingController();
  List<String> _searchResults = List.generate(20, (index) => 'Resultado $index');
  String _nombreproveedor = '';
  String _lugarentrega = '';
  String _estado = '';
  String _peso = '';
  String _nombrerepartidor = '';
  String _telefono = '';
  List<dynamic> resultList = <dynamic>[];
  //List<dynamic> resultList= new List();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              controller: _searchController,
              decoration: InputDecoration(
                labelText: 'Buscar',
                suffixIcon: IconButton(
                  icon: Icon(Icons.search),
                  onPressed: () async {
                    // Implementa la lógica de búsqueda aquí
                    String jwtToken = 'tu_jwt_aqui'; // Reemplaza con tu JWT

                    // Realiza la solicitud HTTP
                    final response = await http.get(
                      Uri.parse('http://localhost:8080/estadopaquete/'+_searchController.text),
                      headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Length': '1365',
                        'Content-Type': 'application/json; charset=utf-8'/*,
                        'Authorization': 'Bearer $jwtToken',*/
                      },
                    );

                    // Verifica si la solicitud fue exitosa
                    if (response.statusCode == 200) {
                      // Parsea el JSON de la respuesta
                      Map<String, dynamic> resultado = json.decode(response.body);
                      
                      resultList = resultado['result'];

                      // Actualiza el estado con los resultados
                      setState(() {
                        _nombreproveedor = resultList[0]['proveedor']['nombre'];
                        _lugarentrega = '';
                        _estado = resultList[0]['nomestadopaquete']['denominacion'];
                        _peso = resultList[0]['peso'];
                        _nombrerepartidor = resultList[0]['envio']['repartidor']['nombre'];
                        _telefono = resultList[0]['envio']['repartidor']['telefono'];
                      });
                    } else {
                      // Muestra un mensaje de error en caso de fallo
                      /*setState(() {
                        _resultado = 'Error: ${response.statusCode}';
                      });*/
                    }
                  },
                ),
              ),
            ),
          ),
          EtiquetaInfo(nombre: 'Nombre del Proveedor', valor: _nombreproveedor),
          EtiquetaInfo(nombre: 'Peso', valor: _peso),
          EtiquetaInfo(nombre: 'Estado', valor: _estado),
          EtiquetaInfo(
            nombre: 'Repartidor',
            valor: _nombrerepartidor,
            telefono: _telefono,
          ),
        ],
      ),
    );
  }
}

class EtiquetaInfo extends StatelessWidget {
  final String nombre;
  final String valor;
  final String? telefono;

  EtiquetaInfo({required this.nombre, required this.valor, this.telefono});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            '$nombre:',
            style: TextStyle(
              fontWeight: FontWeight.bold,
            ),
          ),
          SizedBox(height: 4),
          telefono != null
              ? Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('  $valor'),
                    Text('  Teléfono: $telefono'),
                  ],
                )
              : Text('  $valor'),
        ],
      ),
    );
  }
}