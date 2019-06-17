import React from "react";

type DataTableProps = {
  data: Array<{}>;
  columns: Array<Column>;
};

type Column = {
  header: string;
  key: string;
};

class DataTable extends React.Component<DataTableProps, {}> {
  render() {
    const { data, columns } = this.props;

    return (
      <table>
        {data.map(item => (
          <tr>
            {columns.map(column => (
              <td>{item[column.key]}</td>
            ))}
          </tr>
        ))}
      </table>
    );
  }
}

function DataTableF({ data, columns }: DataTableProps) {
  return (
    <table>
      {data.map(item => (
        <tr>
          {columns.map(column => (
            <td>{item[column.key]}</td>
          ))}
        </tr>
      ))}
    </table>
  );
}

type User = { name: string; createdAt: Date };

export const App = ({}) => (
  <>
    <DataTable
      data={[{ name: "Saito Nakamura", createdAt: new Date() }]}
      columns={[
        { header: "Name", key: "name" },
        { header: "Created at", key: "createdAt" }
      ]}
    />
    <DataTableF
      data={[{ name: "Saito Nakamura", createdAt: new Date() }]}
      columns={[
        { header: "Name", key: "name" },
        { header: "Created at", key: "createdAt" }
      ]}
    />
  </>
);
