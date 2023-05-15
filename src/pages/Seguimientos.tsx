import axios from 'axios';
import React, { useMemo } from 'react';

//MRT Imports
import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';

//Material-UI Imports
import {
  Box,
  Button,
  ListItemIcon,
  MenuItem,
  Typography
} from '@mui/material';

//Date Picker Imports
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

//Icons Imports
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';


/*
const data = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    salary: 50000,
    jobTitle: 'Software Engineer',
    startDate: '2021-01-01',
    avatar: 'https://via.placeholder.com/150',
    signatureCatchPhrase: 'Have a nice day!',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@example.com',
    salary: 70000,
    jobTitle: 'Senior Software Engineer',
    startDate: '2020-01-01',
    avatar: 'https://via.placeholder.com/150',
    signatureCatchPhrase: 'I love coding!',
  },
  {
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bobsmith@example.com',
    salary: 45000,
    jobTitle: 'Junior Software Engineer',
    startDate: '2021-05-01',
    avatar: 'https://via.placeholder.com/150',
    signatureCatchPhrase: 'Happy coding!',
  },
];
*/


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
    "Estado": {
      "id": 1,
      "nombre": "Ausente",
      "color": "rgba(242,153,74,0.7)",
      "createdAt": "2023-05-14 20:02:12",
      "updatedAt": "2023-05-14 20:02:12"
    },
    "SeguimientoTipo": {
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
  },
  {
    "id": 2,
    "categoria_id": 1,
    "estado_id": 1,
    "seguimiento_tipo_id": 1,
    "orientador_id": null,
    "motivo": "Motivo_2: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "created_at": "2023-05-14 20:02:14",
    "updated_at": "2023-05-14 20:02:14",
    "Categorium": {
      "id": 1,
      "nombre": "Discapacidad"
    },
    "Estado": {
      "id": 1,
      "nombre": "Ausente",
      "color": "rgba(242,153,74,0.7)",
      "createdAt": "2023-05-14 20:02:12",
      "updatedAt": "2023-05-14 20:02:12"
    },
    "SeguimientoTipo": {
      "id": 1,
      "nombre": "Entrevista"
    },
    "entrevistador": {
      "id": 2,
      "nombre": "nombre_2",
      "apellido": "apellido_2",
      "email": "nombre_apellido_2@gmail.com",
      "password": "1234",
      "documento": "30000002",
      "createdAt": "2023-05-14 20:02:13",
      "updatedAt": "2023-05-14 20:02:13",
      "documento_id": 1,
      "genero_id": 2,
      "rol_id": null
    },
    "derivador": {
      "id": 2,
      "nombre": "nombre_2",
      "apellido": "apellido_2",
      "email": "nombre_apellido_2@gmail.com",
      "password": "1234",
      "documento": "30000002",
      "createdAt": "2023-05-14 20:02:13",
      "updatedAt": "2023-05-14 20:02:13",
      "documento_id": 1,
      "genero_id": 2,
      "rol_id": null
    },
    "entrevistado": {
      "id": 2,
      "nombre": "nombre_2",
      "apellido": "apellido_2",
      "email": "nombre_apellido_2@gmail.com",
      "password": "1234",
      "documento": "30000002",
      "createdAt": "2023-05-14 20:02:13",
      "updatedAt": "2023-05-14 20:02:13",
      "documento_id": 1,
      "genero_id": 2,
      "rol_id": null
    }
  },
  {
    "id": 3,
    "categoria_id": 2,
    "estado_id": 2,
    "seguimiento_tipo_id": 2,
    "orientador_id": null,
    "motivo": "Motivo_3: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "created_at": "2023-05-14 20:02:14",
    "updated_at": "2023-05-14 20:02:14",
    "Categorium": {
      "id": 2,
      "nombre": "Salud Mental"
    },
    "Estado": {
      "id": 2,
      "nombre": "Citado",
      "color": "rgba(86,204,242,0.7)",
      "createdAt": "2023-05-14 20:02:12",
      "updatedAt": "2023-05-14 20:02:12"
    },
    "SeguimientoTipo": {
      "id": 2,
      "nombre": "Contacto Por email-Telefono"
    },
    "entrevistador": {
      "id": 3,
      "nombre": "nombre_3",
      "apellido": "apellido_3",
      "email": "nombre_apellido_3@gmail.com",
      "password": "1234",
      "documento": "30000003",
      "createdAt": "2023-05-14 20:02:13",
      "updatedAt": "2023-05-14 20:02:13",
      "documento_id": 1,
      "genero_id": 1,
      "rol_id": null
    },
    "derivador": {
      "id": 3,
      "nombre": "nombre_3",
      "apellido": "apellido_3",
      "email": "nombre_apellido_3@gmail.com",
      "password": "1234",
      "documento": "30000003",
      "createdAt": "2023-05-14 20:02:13",
      "updatedAt": "2023-05-14 20:02:13",
      "documento_id": 1,
      "genero_id": 1,
      "rol_id": null
    },
    "entrevistado": {
      "id": 3,
      "nombre": "nombre_3",
      "apellido": "apellido_3",
      "email": "nombre_apellido_3@gmail.com",
      "password": "1234",
      "documento": "30000003",
      "createdAt": "2023-05-14 20:02:13",
      "updatedAt": "2023-05-14 20:02:13",
      "documento_id": 1,
      "genero_id": 1,
      "rol_id": null
    }
  },
  {
    "id": 4,
    "categoria_id": 2,
    "estado_id": 2,
    "seguimiento_tipo_id": 2,
    "orientador_id": null,
    "motivo": "Motivo_4: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "created_at": "2023-05-14 20:02:14",
    "updated_at": "2023-05-14 20:02:14",
    "Categorium": {
      "id": 2,
      "nombre": "Salud Mental"
    },
    "Estado": {
      "id": 2,
      "nombre": "Citado",
      "color": "rgba(86,204,242,0.7)",
      "createdAt": "2023-05-14 20:02:12",
      "updatedAt": "2023-05-14 20:02:12"
    },
    "SeguimientoTipo": {
      "id": 2,
      "nombre": "Contacto Por email-Telefono"
    },
    "entrevistador": {
      "id": 4,
      "nombre": "nombre_4",
      "apellido": "apellido_4",
      "email": "nombre_apellido_4@gmail.com",
      "password": "1234",
      "documento": "30000005",
      "createdAt": "2023-05-14 20:02:13",
      "updatedAt": "2023-05-14 20:02:13",
      "documento_id": 1,
      "genero_id": 2,
      "rol_id": null
    },
    "derivador": {
      "id": 4,
      "nombre": "nombre_4",
      "apellido": "apellido_4",
      "email": "nombre_apellido_4@gmail.com",
      "password": "1234",
      "documento": "30000005",
      "createdAt": "2023-05-14 20:02:13",
      "updatedAt": "2023-05-14 20:02:13",
      "documento_id": 1,
      "genero_id": 2,
      "rol_id": null
    },
    "entrevistado": {
      "id": 4,
      "nombre": "nombre_4",
      "apellido": "apellido_4",
      "email": "nombre_apellido_4@gmail.com",
      "password": "1234",
      "documento": "30000005",
      "createdAt": "2023-05-14 20:02:13",
      "updatedAt": "2023-05-14 20:02:13",
      "documento_id": 1,
      "genero_id": 2,
      "rol_id": null
    }
  },
  {
    "id": 5,
    "categoria_id": 3,
    "estado_id": 3,
    "seguimiento_tipo_id": 3,
    "orientador_id": null,
    "motivo": "Motivo_5: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "created_at": "2023-05-14 20:02:14",
    "updated_at": "2023-05-14 20:02:14",
    "Categorium": {
      "id": 3,
      "nombre": "Salud Fisica"
    },
    "Estado": {
      "id": 3,
      "nombre": "Contactar",
      "color": "rgba(242,201,76,0.7)",
      "createdAt": "2023-05-14 20:02:12",
      "updatedAt": "2023-05-14 20:02:12"
    },
    "SeguimientoTipo": {
      "id": 3,
      "nombre": "Entrevista con docentes"
    },
    "entrevistador": {
      "id": 5,
      "nombre": "nombre_5",
      "apellido": "apellido_5",
      "email": "nombre_apellido_5@gmail.com",
      "password": "1234",
      "documento": "30000005",
      "createdAt": "2023-05-14 20:02:13",
      "updatedAt": "2023-05-14 20:02:13",
      "documento_id": 1,
      "genero_id": 2,
      "rol_id": null
    },
    "derivador": {
      "id": 5,
      "nombre": "nombre_5",
      "apellido": "apellido_5",
      "email": "nombre_apellido_5@gmail.com",
      "password": "1234",
      "documento": "30000005",
      "createdAt": "2023-05-14 20:02:13",
      "updatedAt": "2023-05-14 20:02:13",
      "documento_id": 1,
      "genero_id": 2,
      "rol_id": null
    },
    "entrevistado": {
      "id": 5,
      "nombre": "nombre_5",
      "apellido": "apellido_5",
      "email": "nombre_apellido_5@gmail.com",
      "password": "1234",
      "documento": "30000005",
      "createdAt": "2023-05-14 20:02:13",
      "updatedAt": "2023-05-14 20:02:13",
      "documento_id": 1,
      "genero_id": 2,
      "rol_id": null
    }
  }
]




export type Employee = {
  entrevistado: {
    nombre: string
    apellido: string
    email: string
  },
  Categorium: {
    nombre: string
  },
  Estado: {
    nombre: string
    color: string
  },
  SeguimientoTipo: {
    nombre: string
  },
  motivo: string,
  created_at: string
};

const Example = () => {
  const columns = useMemo<MRT_ColumnDef<Employee>[]>(
    () => [
      {
        id: 'persona', //id used to define `group` column
        header: 'Datos Personales',
        columns: [
          {
            accessorFn: (row) => `${row.entrevistado.nombre} ${row.entrevistado.apellido}`, //accessorFn used to join multiple data into a single cell
            id: 'name', //id is still required when using accessorFn instead of accessorKey
            header: 'Name',
            size: 250,
            Cell: ({ renderedCellValue, row }) => (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <span>{renderedCellValue}</span>
              </Box>
            ),
          },
          {
            accessorKey: 'entrevistado.email', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            enableClickToCopy: true,
            header: 'Email',
            size: 300,
          },
        ],
      },
      {
        id: 'seguimiento',
        header: 'Datos seguimiento',
        columns: [
          {
            accessorKey: 'Estado.nombre',
            // filterVariant: 'range', //if not using filter modes feature, use this instead of filterFn
            //filterFn: 'between',
            header: 'Estado',
            size: 200,
            //custom conditional format and styling


          },
          {
            accessorKey: 'SeguimientoTipo.nombre', //hey a simple column for once
            header: 'Seguimiento Tipo',
            size: 350,
          },
          {
            accessorFn: (row) => new Date(row.created_at), //convert to Date for sorting and filtering
            id: 'created_at',
            header: 'Fecha de alta',
            filterFn: 'lessThanOrEqualTo',
            sortingFn: 'datetime',
            Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(), //render Date as a string
            Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
            //Custom Date Picker Filter from @mui/x-date-pickers
            Filter: ({ column }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  onChange={(newValue) => {
                    column.setFilterValue(newValue);
                  }}
                  slotProps={{
                    textField: {
                      helperText: 'Filter Mode: Less Than',
                      sx: { minWidth: '120px' },
                      variant: 'standard',
                    },
                  }}
                  value={column.getFilterValue()}
                />
              </LocalizationProvider>
            ),
          },
        ],
      },
    ],
    [],
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnFilterModes
      enableColumnOrdering
      enableGrouping
      enablePinning
      enableRowActions
      enableRowSelection
      initialState={{ showColumnFilters: true }}
      positionToolbarAlertBanner="bottom"
      renderDetailPanel={({ row }) => (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" align="left">Motivo:</Typography>
            <Typography variant="h6" align="left">
              &quot;{row.original.motivo}&quot;
            </Typography>
          </Box>
        </Box>
      )}
      renderRowActionMenuItems={({ closeMenu }) => [
        <MenuItem
          key={0}
          onClick={() => {
            // View profile logic...
            closeMenu();
          }}
          sx={{ m: 0 }}
        >
          <ListItemIcon>
            <VisibilityIcon />
          </ListItemIcon>
          Ver seguimiento
        </MenuItem>,
        <MenuItem
          key={1}
          onClick={() => {
            // Send email logic...
            closeMenu();
          }}
          sx={{ m: 0 }}
        >
          <ListItemIcon>
            <CloseIcon />
          </ListItemIcon>
          Finalizar seguimiento
        </MenuItem>,
      ]}
      renderTopToolbarCustomActions={({ table }) => {
        const handleDeactivate = () => {
          table.getSelectedRowModel().flatRows.map((row) => {
            alert('deactivating ' + row.getValue('name'));
          });
        };

        const handleActivate = () => {
          table.getSelectedRowModel().flatRows.map((row) => {
            alert('activating ' + row.getValue('name'));
          });
        };

        const handleContact = () => {
          table.getSelectedRowModel().flatRows.map((row) => {
            alert('contact ' + row.getValue('name'));
          });
        };

        return (
          <div style={{ display: 'flex', gap: '0.5rem' }}>

          </div>
        );
      }}
    />
  );
};

export default Example;
