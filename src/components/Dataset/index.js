import React from 'react';
import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';

import Database from '../../assets/database.json';

const DatasetWrapper = styled.div`
  height: 400px;
  width: 90%;
  padding-left: 5%;
`;

const DatasetAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'doenca',
    headerName: 'Doença',
    width: 150,
    editable: false
  },
  {
    field: 'casos',
    headerName: 'Casos',
    type: 'number',
    width: 110,
    editable: true
  },
  {
    field: 'regiao',
    headerName: 'Região',
    width: 150,
    editable: true
  },
  {
    field: 'date',
    headerName: 'Data',
    type: 'date',
    width: 150,
    editable: true
  }
];

const rows = JSON.parse(JSON.stringify(Database));

const Dataset = () => {
  return (
    <>
      <h1>Bases de dados</h1>
      <DatasetAreaWrapper>
        <h2>Zika</h2>

        <DatasetWrapper>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            initialState={{
              filter: {
                filterModel: {
                  items: [
                    {
                      columnField: 'doenca',
                      operatorValue: 'contains',
                      value: 'Zika'
                    }
                  ]
                }
              },
              sorting: {
                sortModel: [{ field: 'date', sort: 'asc' }]
              }
            }}
          />
        </DatasetWrapper>
      </DatasetAreaWrapper>

      <DatasetAreaWrapper>
        <h2>Dengue</h2>

        <DatasetWrapper>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            initialState={{
              filter: {
                filterModel: {
                  items: [
                    {
                      columnField: 'doenca',
                      operatorValue: 'contains',
                      value: 'Dengue'
                    }
                  ]
                }
              },
              sorting: {
                sortModel: [{ field: 'date', sort: 'asc' }]
              }
            }}
          />
        </DatasetWrapper>
      </DatasetAreaWrapper>

      <DatasetAreaWrapper>
        <h2>Malária</h2>

        <DatasetWrapper>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            initialState={{
              filter: {
                filterModel: {
                  items: [
                    {
                      columnField: 'doenca',
                      operatorValue: 'contains',
                      value: 'Malaria'
                    }
                  ]
                }
              },
              sorting: {
                sortModel: [{ field: 'date', sort: 'asc' }]
              }
            }}
          />
        </DatasetWrapper>
      </DatasetAreaWrapper>
    </>
  );
};

export default Dataset;
