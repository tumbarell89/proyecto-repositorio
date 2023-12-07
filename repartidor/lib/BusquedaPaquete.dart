import 'package:flutter/material.dart';


class BusquedaPaquete extends StatefulWidget {
  @override
  _BusquedaPaquete createState() => _BusquedaPaquete();

}

class _BusquedaPaquete extends State<BusquedaPaquete> {
  TextEditingController _searchController = TextEditingController();
  List<String> _searchResults = List.generate(20, (index) => 'Resultado $index');

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
                  onPressed: () {
                    // Implementa la lógica de búsqueda aquí
                    // Puedes filtrar los resultados según el texto ingresado en _searchController
                  },
                ),
              ),
            ),
          ),
          Expanded(
            child: GridView.builder(
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 4,
                crossAxisSpacing: 8.0,
                mainAxisSpacing: 8.0,
              ),
              itemCount: _searchResults.length,
              itemBuilder: (context, index) {
                return GridTile(
                  child: Container(
                    color: Colors.blueGrey, // Puedes personalizar el color o contenido de cada celda
                    child: Center(
                      child: Text(
                        _searchResults[index],
                        style: TextStyle(color: Colors.white),
                      ),
                    ),
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}