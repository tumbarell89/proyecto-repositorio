import 'package:flutter/material.dart';

class RepartidorMain extends StatefulWidget {
  //const RepartidorMain({super.key});

  @override
  State<RepartidorMain> createState() => _RepartidorMainState();
}

class _RepartidorMainState extends State<RepartidorMain> {
  Color buttonColor1 = Color.fromARGB(255, 5, 24, 39);

  void _changeColor1(bool isHovered) {
    setState(() {
      buttonColor1 = isHovered ? Color.fromARGB(255, 80, 185, 98) : Color.fromARGB(255, 5, 24, 39);
    });
  }

  Color buttonColor2 = Color.fromARGB(255, 5, 24, 39);

  void _changeColor2(bool isHovered) {
    setState(() {
      buttonColor2 = isHovered ? Color.fromARGB(255, 80, 185, 98) : Color.fromARGB(255, 5, 24, 39);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Scaffold(
        body: Container(
          width: double.infinity,
          height: double.infinity,
          child: ListView(
            padding: EdgeInsets.symmetric(
              horizontal: 40.0,
              vertical: 200
            ),
            children: <Widget>[
              Text('Acceso repartidor',
                style: TextStyle(fontFamily: 'PermanentMaker', fontSize: 20.0)),
              Divider(height: 20.0),
              SizedBox(
                width: double.infinity,
                height: 60.0,
                child: Container(
                  color: buttonColor1, // Puedes personalizar el color o contenido de cada celda
                  child: TextButton(child: Text('Acceder'),
                  onHover: (bool isHovered) {
                    _changeColor1(isHovered);
                  },
                  onPressed: () {print('hola acceso');  })
                ),
              ),
              Divider(height: 20.0),
              SizedBox(
                width: double.infinity,
                height: 60.0,
                child: Container(
                  color: buttonColor2, // Puedes personalizar el color o contenido de cada celda
                  child: TextButton(child: Text('Registrarse'),
                  onHover: (bool isHovered) {
                    _changeColor2(isHovered);
                  },
                  onPressed: () {print('hola registro');  })
                ),
                 
              ),  
            ],
          ),
        ),
      )
    );
  }
}