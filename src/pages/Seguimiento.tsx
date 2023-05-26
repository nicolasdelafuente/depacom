import React, { useState } from 'react';
import { Box, Card, CardHeader, CardContent, Typography, CardActions, Button, MenuItem, Stack } from '@mui/material';
import TextField from '@mui/material/TextField'



function Seguimiento() {
  const data = [
    {
      "id": 1,
      "categoria_id": 1,
      "estado_id": 1,
      "seguimiento_tipo_id": 1,
      "orientador_id": null,
      "motivo": "Motivo_1: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_at": "2023-05-14 20:02:14",
      "updated_at": "2023-05-14 20:02:14",
      "Categorium": {
        "id": 1,
        "nombre": "Discapacidad"
      },
      "estado": {
        "id": 1,
        "nombre": "Ausente",
        "color": "rgba(242,153,74,0.7)",
        "createdAt": "2023-05-14 20:02:12",
        "updatedAt": "2023-05-14 20:02:12"
      },
      "seguimientoTipo": {
        "id": 1,
        "nombre": "Entrevista"
      },
      "entrevistador": {
        "id": 1,
        "nombre": "nombre_1",
        "apellido": "apellido_1",
        "email": "nombre_apellido_1@gmail.com",
        "password": "1234",
        "documento": "",
        "createdAt": "2023-05-14 20:02:13",
        "updatedAt": "2023-05-14 20:02:13",
        "documento_id": null,
        "genero_id": null,
        "rol_id": 1
      },
      "derivador": {
        "id": 1,
        "nombre": "nombre_1",
        "apellido": "apellido_1",
        "email": "nombre_apellido_1@gmail.com",
        "password": "1234",
        "documento": "",
        "createdAt": "2023-05-14 20:02:13",
        "updatedAt": "2023-05-14 20:02:13",
        "documento_id": null,
        "genero_id": null,
        "rol_id": 1
      },
      "entrevistado": {
        "id": 1,
        "nombre": "nombre_1",
        "apellido": "apellido_1",
        "email": "nombre_apellido_1@gmail.com",
        "password": "1234",
        "documento": "",
        "createdAt": "2023-05-14 20:02:13",
        "updatedAt": "2023-05-14 20:02:13",
        "documento_id": null,
        "genero_id": null,
        "rol_id": 1
      }
    }
  ]

  const estados = [
    {
      "id": 1,
      "nombre": "Ausente",
      "color": "rgba(242,153,74,0.7)",
      "created_at": "2023-05-25 20:41:42",
      "updated_at": "2023-05-25 20:41:42"
    },
    {
      "id": 2,
      "nombre": "Citado",
      "color": "rgba(86,204,242,0.7)",
      "created_at": "2023-05-25 20:41:42",
      "updated_at": "2023-05-25 20:41:42"
    },
    {
      "id": 3,
      "nombre": "Contactar",
      "color": "rgba(242,201,76,0.7)",
      "created_at": "2023-05-25 20:41:42",
      "updated_at": "2023-05-25 20:41:42"
    },
    {
      "id": 4,
      "nombre": "En proceso",
      "color": "rgba(39,174,96, 0.7)",
      "created_at": "2023-05-25 20:41:42",
      "updated_at": "2023-05-25 20:41:42"
    },
    {
      "id": 5,
      "nombre": "Espera de Respuesta",
      "color": "rgba(235,87,87,0.7)",
      "created_at": "2023-05-25 20:41:42",
      "updated_at": "2023-05-25 20:41:42"
    },
    {
      "id": 6,
      "nombre": "Realizado",
      "color": "rgba(47,128,237,0.7)",
      "created_at": "2023-05-25 20:41:42",
      "updated_at": "2023-05-25 20:41:42"
    },
    {
      "id": 7,
      "nombre": "Sin Estado",
      "color": "rgba(189,189,189,0.7)",
      "created_at": "2023-05-25 20:41:42",
      "updated_at": "2023-05-25 20:41:42"
    }
  ]

  const seguimientosTipo = [
    {
      "id": 1,
      "nombre": "Entrevista",
      "created_at": "2023-05-25 20:41:42",
      "updated_at": "2023-05-25 20:41:42"
    },
    {
      "id": 2,
      "nombre": "Contacto Por email-Telefono",
      "created_at": "2023-05-25 20:41:42",
      "updated_at": "2023-05-25 20:41:42"
    },
    {
      "id": 3,
      "nombre": "Entrevista con docentes",
      "created_at": "2023-05-25 20:41:42",
      "updated_at": "2023-05-25 20:41:42"
    }
  ]

  const [editMode, setEditMode] = useState(false);
  const [entrevistadorNombre, setEntrevistadorNombre] = useState(data[0].entrevistador.nombre);
  const [entrevistadorApellido, setEntrevistadorApellido] = useState(data[0].entrevistador.apellido);
  const [estado, setEstado] = useState(data[0].estado.id);
  const [seguimientoTipo, setSeguimientoTipo] = useState(data[0].seguimientoTipo.id);
  const handleEstadoChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setEstado(event.target.value as number); // Cast the value to number
  };
  const handleSeguimientoTipoChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSeguimientoTipo(event.target.value as number); // Cast the value to number
  };



  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    // Aquí puedes realizar acciones adicionales, como enviar los datos editados al servidor
  };

  return (
    <Box width='90%'>
      <Stack spacing={2}>

      <Card >
        <CardHeader
          title={`Seguimiento: ${data[0].id}`}
          subheader={
            `ultima actualización: ${new Date(data[0].updated_at).toLocaleDateString()}
            - fecha de creación ${new Date(data[0].created_at).toLocaleDateString()}`}
          style={{ background: estado ? estados.find((e) => e.id === Number(estado))?.color : data[0].estado.color }}
        />
        <CardContent>
          <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
              <Box width='250px'>
                <TextField
                  id="seguimientoTipo"
                  label='Tipo'
                  select
                  variant="standard"
                  value={seguimientoTipo}
                  onChange={handleSeguimientoTipoChange}
                  fullWidth
                >
                  {seguimientosTipo
                    .sort((a, b) => a.nombre.localeCompare(b.nombre)) // Ordenar alfabéticamente por el nombre
                    .map((seguimientosTipo) => (
                      <MenuItem key={seguimientosTipo.id} value={seguimientosTipo.id}>
                        {seguimientosTipo.nombre}
                      </MenuItem>
                    ))}
                </TextField>
              </Box>



              <Box width='250px'>
                <TextField
                  id="estado"
                  label="Estado"
                  select
                  variant="standard"
                  value={estado}
                  onChange={handleEstadoChange}
                  fullWidth
                >
                  {estados
                    .sort((a, b) => a.nombre.localeCompare(b.nombre)) // Ordenar alfabéticamente por el nombre
                    .map((estados) => (
                      <MenuItem key={estados.id} value={estados.id}>
                        {estados.nombre}
                      </MenuItem>
                    ))}
                </TextField>
              </Box>
            </Stack>
          </Stack>


        </CardContent>
      </Card>

      <Card >
        <CardHeader
          title={`Datos personales: ${data[0].id}`}
        />
        <CardContent>
          <Stack spacing={4}>
            <Stack direction='row' spacing={2}>

              <TextField
                id="nombre_s"
                label="Nombre"
                variant="standard"
                sx={{ margin: '16px' }}
                value={entrevistadorNombre}
                onChange={(e) => setEntrevistadorNombre(e.target.value)}
                disabled={!editMode}
              />

              <TextField
                id="apellido_s"
                label="Apellido"
                variant="standard"
                sx={{ margin: '16px' }}
                onChange={(e) => setEntrevistadorApellido(e.target.value)}
                disabled={!editMode}
                value={entrevistadorApellido}
              />
            </Stack>
          </Stack>


        </CardContent>
      </Card>
      </Stack>
    </Box>
  );

}

export default Seguimiento;
