import 'dart:convert';
import 'package:http/http.dart' as http;

class Conexion {
  List<dynamic> resultList22 = <dynamic>[];
  Future<List<dynamic>> damedatos(String paquete) async {
    String jwtToken = 'tu_jwt_aqui'; // Reemplaza con tu JWT
    
      final response = await http.get(
        Uri.parse(
            'http://localhost:8080/estadopaquete/' + paquete),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Length': '1365',
          'Content-Type':
              'application/json; charset=utf-8' /*,
                        'Authorization': 'Bearer $jwtToken',*/
        },
      );

      // Verifica si la solicitud fue exitosa
      if (response.statusCode == 200) {
        // Parsea el JSON de la respuesta
        Map<String, dynamic> resultado = json.decode(response.body);

        List<dynamic> resultList = resultado['result'];

        // Actualiza el estado con los resultados
        return resultList;
      } else {
        throw Exception('Problemas de conexion');
      }
    
    // Realiza la solicitud HTTP
  }

  /*Future<Post> damedLoguin(String user) async {
    final response =
        await http.get('http://plan711.local/restapi/v1/index.php/solicitudes');
    //print(response.statusCode);
    if (response.statusCode == 200) {
      // Si la llamada al servidor fue exitosa, analiza el JSON
      //print(response.body);
      return Post.fromJson(json.decode(response.body));
    } else {
      // Si la llamada no fue exitosa, lanza un error.
      throw Exception('Failed to load post');
    }
  }*/
}
