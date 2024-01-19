import 'package:flutter/material.dart';
import 'package:repartidor/Repartidor/MainRepartidor.dart';

class LoginRepartidor extends StatefulWidget {
  @override
  _LoginRepartidorState createState() => _LoginRepartidorState();
}

class _LoginRepartidorState extends State<LoginRepartidor> {
  final _formKey = GlobalKey<FormState>();
  TextEditingController _usernameController = TextEditingController();
  TextEditingController _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        children: [
          TextFormField(
            controller: _usernameController,
            decoration: InputDecoration(labelText: 'Usuario'),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Por favor, ingresa tu usuario';
              }
              return null;
            },
          ),
          TextFormField(
            controller: _passwordController,
            obscureText: true,
            decoration: InputDecoration(labelText: 'Contraseña'),
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Por favor, ingresa tu contraseña';
              }
              return null;
            },
          ),
          SizedBox(height: 16),
          ElevatedButton(
            onPressed: () {
              if (_formKey.currentState!.validate()) {
                // Lógica de inicio de sesión aquí
                // Puedes acceder a los valores ingresados con _usernameController.text y _passwordController.text
                Navigator.of(context).pop(); // Cierra la ventana flotante
                Navigator.pushReplacement(
              context,
              MaterialPageRoute(builder: (context) => MainRepartidor()),
            );
              }
            },
            child: Text('Iniciar Sesión'),
          ),
        ],
      ),
    );
  }
}
